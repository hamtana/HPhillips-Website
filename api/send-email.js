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
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `Contact form message from ${safeName}`,
      text: `Message:\n${message}\n\nFrom: ${safeName} <${email}>`,
    });

    if (error) {
      throw error;
    }

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ message: "Failed to send email" });
  }
}
