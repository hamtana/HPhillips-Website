import nodemailer from "nodemailer";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import validator from "validator";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "15 m"),
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const allowedOrigins = [
  "https://www.phillipsmusictech.co.nz", // custom domain with www
  "https://phillipsmusictech.co.nz", // custom domain without www
  "http://localhost:5173", // local dev
  /^https:\/\/hp-.*\.vercel\.app$/.test(origin), // ✅ matches all your preview URLs
];

export default async function handler(req, res) {
  // CORS
  const origin = req.headers.origin;
  if (!allowedOrigins.includes(origin)) {
    return res.status(403).json({ message: "Forbidden" });
  }

  // Method check
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  // Rate limiting
  const ip = req.headers["x-forwarded-for"] ?? "anonymous";
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return res
      .status(429)
      .json({ message: "Too many requests, try again later" });
  }

  const { name, email, message } = req.body;

  // Field presence check
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing Fields" });
  }

  // Input validation
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }
  if (name.length > 100 || message.length > 2000) {
    return res.status(400).json({ message: "Input too long" });
  }

  // Sanitize name to prevent header injection
  const safeName = name.replace(/[\r\n]/g, " ").trim();

  try {
    await transporter.sendMail({
      from: `"${safeName}" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `Contact form message from ${safeName}`,
      text: `Message:\n${message}\n\nFrom: ${safeName} <${email}>`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ message: "Failed to send email" });
  }
}
