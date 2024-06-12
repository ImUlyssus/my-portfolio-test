import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  const mailOptions = {
    from: fromEmail,
    to: [fromEmail, toEmail],
    subject: subject,
    html: `
      <h1>${subject} from ${email}</h1>
      <p>This is from your portfolio website!</p>
      <p>New message submitted:</p>
      <p>${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
