import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, phone, email, service, date, message } = await req.json();

    console.log('Received form data:', { name, phone, email, service, date, message });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    try {
        console.log('Sending email to the business...');

        // Business Email Template
        await transporter.sendMail({
            from: `"DT-Hamilton" <${process.env.FROM_EMAIL}>`,
            to: process.env.BUSINESS_EMAIL,
            subject: `New Service Request from ${name}`,
            html: `
                <h2>New Service Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Preferred Date:</strong> ${date || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <blockquote style="border-left: 4px solid #ddd; padding-left: 10px; color: #555;">
                    ${message || 'No additional message provided.'}
                </blockquote>
                <hr />
                <p>This message was sent from your website’s contact form.</p>
            `,
        });

        console.log('Business email sent.');

        console.log('Sending confirmation email to the client...');

        // Client Confirmation Email Template
        await transporter.sendMail({
            from: `"DT-Hamilton" <${process.env.FROM_EMAIL}>`,
            to: email,
            subject: 'Your Service Request has been Received',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2>Hi ${name},</h2>
                    <p>Thank you for reaching out to <strong>DT-Hamilton Mechanical</strong>. We’ve successfully received your request for:</p>
                    <ul>
                        <li><strong>Service:</strong> ${service}</li>
                        <li><strong>Preferred Date:</strong> ${date || 'Not specified'}</li>
                    </ul>
                    <p>One of our team members will get back to you shortly to confirm the details and provide further assistance.</p>
                    <p>If you have any questions in the meantime, feel free to email. <strong>service@dt-hamilton.ca</strong> or call (613)-293-5790</p>
                    <p>Best regards,</p>
                    <p><strong>The DT-Hamilton Mechanical Team</strong></p>
                    <hr />
                    <small>This email was sent automatically, please do not reply directly.</small>
                </div>
            `,
        });

        console.log('Client email sent.');

        return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send emails.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
