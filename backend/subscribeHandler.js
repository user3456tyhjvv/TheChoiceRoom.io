import nodemailer from 'nodemailer';

const subscribeHandler = async (req, res) => {
  const { email, name, phone } = req.body;

  if (!email || !name || !phone) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASSWORD, // Your Gmail App Password
      },
    });

    // Email content for the subscriber
    const subscriberMailOptions = {
      from: `"Our Team" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Our Community!',
      text: `Hi ${name},\n\nThank you for registering with us! We're thrilled to have you on board.\n\nYour Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nBest regards,\nThe Team`,
      html: `
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
      `,
    };

    // Email content for you (admin notification)
    const adminMailOptions = {
      from: `"Subscription Alert" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL, // Your email to receive notifications
      subject: 'New Subscriber Alert',
      text: `You have a new subscriber!\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nBest regards,\nSubscription System`,
      html: `
        <h1>New Subscriber Alert</h1>
        <p>You have a new subscriber!</p>
        <p><strong>Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>
        <p>Best regards,</p>
        <p>Subscription System</p>
      `,
    };

    // Send emails
    await transporter.sendMail(subscriberMailOptions); // Send to the subscriber
    await transporter.sendMail(adminMailOptions); // Send to you (admin)

    return res.status(200).json({ message: 'Subscription successful! Emails sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'An error occurred while sending the emails. Please try again later.' });
  }
};

export default subscribeHandler;
