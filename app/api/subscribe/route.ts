import { NextResponse } from 'next/server';
import Brevo from '@getbrevo/brevo';

const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

export async function POST(req: Request) {
    try {
        const { email, name, phone } = await req.json();

        if (!email || !name || !phone) {
            return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
        }

        // Styled email template
        const userEmailContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background: #f9f9f9;">
                <h2 style="color: #2b7cd9; text-align: center;">Welcome, ${name}!</h2>
                <p style="text-align: center;">Thank you for registering for our exclusive community.</p>
                <div style="padding: 15px; background: #fff; border-radius: 8px;">
                    <p><strong>Your Registration Details:</strong></p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                </div>
                <p style="text-align: center; margin-top: 20px;">
                    <a href="https://your-website.com" style="padding: 10px 20px; background: #2b7cd9; color: white; text-decoration: none; border-radius: 5px;">Visit Our Website</a>
                </p>
                <p style="font-size: 12px; text-align: center; color: #888;">If you didn't sign up, please ignore this email.</p>
            </div>
        `;

        // Styled admin notification email
        const adminEmailContent = `
            <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4; border: 1px solid #ddd; border-radius: 10px; max-width: 500px; margin: auto;">
                <h3 style="color: #d9534f;">New Registration Alert 🚀</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p style="font-size: 12px; color: #777;">Check your database for more details.</p>
            </div>
        `;

        // Send email to the user
        await apiInstance.sendTransacEmail({
            sender: { email: 'your-email@example.com', name: 'Your Brand' }, // Change this
            to: [{ email }],
            subject: '🎉 Welcome to Our Community!',
            htmlContent: userEmailContent,
        });

        // Send admin notification email
        await apiInstance.sendTransacEmail({
            sender: { email: 'your-email@example.com', name: 'Your Brand' }, // Change this
            to: [{ email: 'your-notification-email@example.com' }], // Change this to your admin email
            subject: '🚀 New Registration Alert!',
            htmlContent: adminEmailContent,
        });

        return NextResponse.json({ message: 'Subscription successful! Email sent.' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
