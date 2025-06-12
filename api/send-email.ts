import nodemailer from 'nodemailer';

export default async function handler(
  req: any,
  res: any
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  if(!name || !email ||  message){
    return req.status(400).json({message: 'Missing Fields'});
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
  });

    try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Contact form message from ${name}`,
      text: message,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send email' });
  }

}