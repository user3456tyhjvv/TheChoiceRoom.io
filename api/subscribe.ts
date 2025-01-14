import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


dotenv.config();

const subscribeHandler = async (req: Request, res: Response) => {
  const { email, name, phone } = req.body;

  if (!email || !name || !phone) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Configure the transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASSWORD, // Your Gmail App Password
      },
    });

    // Email content
    const htmlContent = `
      <h1>Welcome to Our Community, ${name}!</h1>
      <p>Thank you for registering with us. We're thrilled to have you on board!</p>
      <p><strong>Your Details:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>
      <p>If you have any questions, feel free to reach out to us.</p>
      <p>Best regards,</p>
      <p>The Team</p>
    `;

    // Email options
    const mailOptions = {
      from: `"Our Team" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Our Community!',
      text: `Hi ${name},\n\nThank you for registering with us! We're thrilled to have you on board.\n\nYour Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nIf you have any questions, feel free to reach out to us.\n\nBest regards,\nThe Team`,
      html: htmlContent, // Use the HTML content for rich email formatting
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Subscription successful! Welcome email sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'An error occurred while sending the email. Please try again later.' });
  }
};

export default subscribeHandler;
