import nodemailer from 'nodemailer';
import Cors from 'cors';

// Initialize CORS
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: 'https://thechoiceroomio-production.up.railway.app/', // Allows all origins
});

// Helper function to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run CORS middleware
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    const { email, name, phone } = req.body;

    // Validate input fields
    if (!email || !name || !phone) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // Use 465 if you set `secure: true`
      secure: false, // Set to true only if using port 465
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
      },
  });
  
    

    // Email to user: Welcome email with HTML styling
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to the Choice Program!',
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f9; padding: 20px;">
            <h1 style="color: #5cb85c; text-align: center;">Welcome to the Choice Program, ${name}!</h1>
            <p style="font-size: 18px; text-align: center;">We're excited to have you join us. You've successfully registered for our program, and we're looking forward to helping you grow!</p>
            <div style="text-align: center; margin-top: 20px;">
              <p><strong>Contact Info:</strong></p>
              <p style="font-size: 16px; color: #555;">Name: ${name}</p>
              <p style="font-size: 16px; color: #555;">Email: ${email}</p>
              <p style="font-size: 16px; color: #555;">Phone: ${phone}</p>
            </div>
            <p style="font-size: 16px; color: #555; text-align: center;">Feel free to reach out if you have any questions or need assistance.</p>
            <p style="font-size: 16px; color: #555; text-align: center;">Best regards,<br>Your Choice Program Team</p>
          </body>
        </html>
      `,
    };

    // Email to admin: New subscription received with HTML styling
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'your-email@example.com', // Your email to receive the notification
      subject: 'New Subscription',
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f9; padding: 20px;">
            <h2 style="color: #d9534f;">New Subscription Received</h2>
            <p style="font-size: 18px;">A new user has registered for the Choice Program.</p>
            <div style="margin-top: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
            </div>
            <p style="font-size: 16px; color: #555;">You can contact them directly if needed.Congratulations sir</p>
            <p style="font-size: 16px; color: #555;">Best regards,<br>Your Choice Program Team</p>
          </body>
        </html>
      `,
    };

    try {
      // Send email to user (welcome email)
      await transporter.sendMail(userMailOptions);

      // Send email to admin (notification of new subscription)
      await transporter.sendMail(adminMailOptions);

      console.log('Emails sent successfully');
      return res.status(200).json({ message: 'Subscription successful. Thank you!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to process subscription. Please try again.' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed!' });
  }
}
