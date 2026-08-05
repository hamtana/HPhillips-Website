import { Resend } from "resend";
import validator from "validator";

const requests = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const max = 10;

  const entry = requests.get(ip) || { count: 0, start: now };

  if (now - entry.start > windowMs) {
    entry.count = 1;
    entry.start = now;
  } else {
    entry.count += 1;
  }

  requests.set(ip, entry);
  return entry.count <= max;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const fromAddress =
  process.env.RESEND_FROM_EMAIL ||
  "Phillips Music and Tech <hamish@phillipsmusictech.co.nz>";
const toAddress =
  process.env.CONTACT_TO_EMAIL || "hamish@phillipsmusictech.co.nz";

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailTemplate({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
    <div style="margin:0;padding:0;background:#eef5fb;font-family:Arial,Helvetica,sans-serif;color:#152232;">
      <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
        New contact form message from ${safeName}.
      </div>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#eef5fb;padding:32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;background:#ffffff;border:1px solid #cfe2f3;border-radius:20px;overflow:hidden;box-shadow:0 18px 50px rgba(18,44,72,0.12);">
              <tr>
                <td style="background:linear-gradient(135deg,#0d2a44 0%,#1f5f8b 55%,#2e9bc7 100%);padding:28px 32px;">
                  <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#bcecff;font-weight:bold;">Phillips Music and Tech</div>
                  <div style="margin-top:8px;font-size:26px;line-height:1.2;font-weight:bold;color:#ffffff;">New contact form message</div>
                  <div style="margin-top:8px;font-size:15px;line-height:1.6;color:#d6f6ff;">A visitor has submitted the contact form on the website.</div>
                </td>
              </tr>
              <tr>
                <td style="padding:32px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:24px;">
                    <tr>
                      <td style="padding:0 0 14px 0;font-size:14px;line-height:1.6;color:#516070;"><strong style="color:#152232;">Name:</strong> ${safeName}</td>
                    </tr>
                    <tr>
                      <td style="padding:0 0 14px 0;font-size:14px;line-height:1.6;color:#516070;"><strong style="color:#152232;">Reply-to:</strong> <a href="mailto:${safeEmail}" style="color:#1d6fb8;text-decoration:none;">${safeEmail}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:0;font-size:14px;line-height:1.6;color:#516070;"><strong style="color:#152232;">Subject:</strong> Contact form enquiry</td>
                    </tr>
                  </table>

                  <div style="margin:0 0 10px 0;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#7c95ab;font-weight:bold;">Message</div>
                  <div style="background:#f4f9fd;border:1px solid #d9e7f2;border-radius:16px;padding:20px;font-size:15px;line-height:1.7;color:#213447;white-space:normal;">${safeMessage}</div>

                  <div style="margin-top:24px;padding-top:18px;border-top:1px solid #e1ebf4;font-size:12px;line-height:1.7;color:#708499;">
                    Sent from the Phillips Music and Tech contact form.
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const ip = req.headers["x-forwarded-for"] ?? "anonymous";
  if (!rateLimit(ip)) {
    return res
      .status(429)
      .json({ message: "Too many requests, try again later" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing Fields" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  if (name.length > 100 || message.length > 2000) {
    return res.status(400).json({ message: "Input too long" });
  }

  const safeName = name.replace(/[\r\n]/g, " ").trim();

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ message: "Email service is not configured" });
  }

  try {
    const html = buildEmailTemplate({ name: safeName, email, message });

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `New contact form message from ${safeName}`,
      html,
      text: `Message:\n${message}\n\nFrom: ${safeName} <${email}>`,
    });

    if (error) {
      throw error;
    }

    res.status(200).json({ message: "Thanks, your message has been sent." });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({
      message:
        "I couldn’t send your message right now. Please try again shortly or email hamish@phillipsmusictech.co.nz.",
    });
  }
}
