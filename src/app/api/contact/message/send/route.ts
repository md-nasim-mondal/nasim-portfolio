import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { senderName: name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // SSL Port (587 for TLS)
      secure: true, // True for 465, false for 587
      auth: {
        user: process.env.NEXT_AUTH_GMAIL_USER as string, // Your email (Gmail, Outlook, etc.)
        pass: process.env.NEXT_AUTH_GMAIL_PASS as string, // Your email's app password
      },
    });

    // **Sender's Email Template**
    const senderTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Reaching Out</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f7f6;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); padding: 30px;">
            <div style="background: linear-gradient(to right, #4e73df, #1cc88a); padding: 20px; border-radius: 10px 10px 0 0; text-align: center; color: white;">
                <h2>Thank You, ${name}!</h2>
            </div>
            <div style="padding: 20px; color: #1cc88a; font-size: 16px;">
                <p style="color: #000000;">We have successfully received your message and will get back to you soon.</p>
                <p style="color: #000000;">Here’s the message you sent:</p>
                <div style="background-color: #f3f3f3; padding: 15px; border-left: 4px solid #1cc88a; margin-top: 15px;">
                    ${message}
                </div>
                <p style="color: #000000;">We’ll contact you shortly. In the meantime, feel free to explore our portfolio or reach us via:</p>
                <p style="color: #000000;"><strong>Email:</strong> <a href="mailto:mdnasimmondal622@gmail.com" style="color: #1cc88a; text-decoration: none;">mdnasimmondal622@gmail.com</a></p>
                <p style="color: #000000;"><strong>Phone:</strong> <a href="https://wa.me/88016206676" style="color: #1cc88a; text-decoration: none;">Message on WhatsApp</a></p>
            </div>
            <div style="background: linear-gradient(to right, #4e73df, #1cc88a); padding: 10px; text-align: left; color: #ffffff; font-size: 14px; border-radius: 0 0 10px 10px;">
                <p>Md. Nasim Mondal | MERN Stack Developer</p>
                <p>Email: <a href="mailto:mdnasimmondal622@gmail.com" style="color: #ffffff; text-decoration: none; font-weight: bold;">mdnasimmondal622@gmail.com</a></p>
                <p>Portfolio: <a href="https://your-portfolio-link.com" style="color: #ffffff; text-decoration: none; font-weight: bold;">View Portfolio</a></p>
                <p>Phone: <a href="tel:+88016206676" style="color: #ffffff; text-decoration: none; font-weight: bold;">+880 16206676</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/md-nasim-mondal" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold;">View LinkedIn</a></p>
            </div>
        </div>
    </body>
    </html>
    `;

    // **Receiver's Email Template**
    const receiverTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Inquiry Notification</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f7f6;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); padding: 30px;">
            <div style="background: linear-gradient(to right, #4e73df, #1cc88a); padding: 20px; border-radius: 10px 10px 0 0; text-align: center; color: white;">
                <h2>New Inquiry Received</h2>
            </div>
            <div style="padding: 20px; color: #1cc88a; font-size: 16px;">
                <p><strong>Name:</strong> <span style="color: #000000;">${name}</span></p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #000000; text-decoration: none;">${email}</a></p>
                <p><strong>Subject:</strong> <span style="color: #000000;">${subject}</span></p>
                <p><strong>Message:</strong></p>
                <div style="background-color: #f3f3f3; padding: 15px; border-left: 5px solid #4e73df; margin-top: 15px;">
                    <span style="color: #000000;">${message}</span>
                </div>
            </div>
            <div style="background: linear-gradient(to right, #4e73df, #1cc88a); padding: 10px; text-align: left; color: #ffffff; font-size: 14px; border-radius: 0 0 10px 10px;">
                <p>Md. Nasim Mondal | MERN Stack Developer</p>
                <p>Email: <a href="mailto:mdnasimmondal622@gmail.com" style="color: #ffffff; text-decoration: none; font-weight: bold;">mdnasimmondal622@gmail.com</a></p>
                <p>Portfolio: <a href="https://your-portfolio-link.com" style="color: #ffffff; text-decoration: none; font-weight: bold;">View Portfolio</a></p>
                <p>Phone: <a href="tel:+88016206676" style="color: #ffffff; text-decoration: none; font-weight: bold;">+880 16206676</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/md-nasim-mondal" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold;">View LinkedIn</a></p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Send Email to Receiver (You)
    await transporter.sendMail({
      from: process.env.NEXT_AUTH_GMAIL_USER as string,
      to: process.env.NEXT_AUTH_GMAIL_USER as string, // Your Email
      subject: `New Inquiry: ${subject}`,
      html: receiverTemplate,
    });

    // Send Confirmation Email to Sender
    await transporter.sendMail({
      from: process.env.NEXT_AUTH_GMAIL_USER as string,
      to: email,
      subject: "Thank You for Reaching Out!",
      html: senderTemplate,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
