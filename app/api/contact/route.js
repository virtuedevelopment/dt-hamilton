import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, phone, email, service, date, message } = await req.json();

    console.log('Received form data:', { name, phone, email, service, date, message });

    // Configure the Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER, // Gmail address
            pass: process.env.GMAIL_PASS, // Gmail App Password
        },
    });

    try {
        console.log('Sending email to the business...');

        // Send email to the business
        await transporter.sendMail({
            from: `"DT-Hamilton" <${process.env.FROM_EMAIL}>`, // From your business email
            to: process.env.BUSINESS_EMAIL, // Business email recipient
            subject: `New Service Request from ${name}`,
            text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Service: ${service}
        Preferred Date: ${date || 'Not specified'}
        Message: ${message}
      `,
        });
        console.log('Business email sent.');

        console.log('Sending confirmation email to the client...');

        // Send confirmation email to the client
        await transporter.sendMail({
            from: `"DT-Hamilton" <${process.env.FROM_EMAIL}>`, // From your business email
            to: email, // Client's email
            subject: 'Your Service Request has been received',
            text: `Hi ${name},\n\nThank you for reaching out! We've received your request for ${service}. We will get back to you soon.\n\nBest regards,\nThe Business Team`,
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
