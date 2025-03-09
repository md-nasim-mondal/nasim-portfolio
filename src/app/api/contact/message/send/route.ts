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

    console.log("Email User:", process.env.NEXT_AUTH_GMAIL_USER);
    console.log("Email Pass:", process.env.NEXT_AUTH_GMAIL_PASS ? "Exists" : "Not Found");

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // SSL Port (587 for TLS)
      secure: true, // True for 465, false for 587
      auth: {
        user: process.env.NEXT_AUTH_GMAIL_USER as string, // তোমার ইমেইল (Gmail, Outlook etc.)
        pass: process.env.NEXT_AUTH_GMAIL_PASS as string, // তোমার ইমেইলের অ্যাপ পাসওয়ার্ড
      },
    });

    // **Sender's Email Template**
    const senderTemplate = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank You for Reaching Out</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f7f6;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 30px;
          }
          .header {
            background: linear-gradient(to right, #4e73df, #1cc88a);
            padding: 20px;
            border-radius: 10px 10px 0 0;
            text-align: center;
            color: white;
          }
          .content {
            padding: 20px;
            color: #333;
            font-size: 16px;
          }
          .footer {
            background: linear-gradient(to right, #4e73df, #1cc88a);
            padding: 10px;
            text-align: left;
            color: #ffffff;
            font-size: 14px;
            border-radius: 0 0 10px 10px;
          }
          .footer a {
            color: #ffffff;
            text-decoration: none;
            font-weight: bold;
          }
          .footer p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You, ${name}!</h2>
          </div>
          <div class="content">
            <p>We have successfully received your message and will get back to you soon.</p>
            <p>Here’s the message you sent:</p>
            <div style="background-color: #f3f3f3; padding: 15px; border-left: 4px solid #1cc88a; margin-top: 15px;">
              ${message}
            </div>
            <p>We’ll contact you shortly. In the meantime, feel free to explore our portfolio or reach us via:</p>
            <p><strong>Email:</strong> <a href="mailto:mdnasimmondal622@gmail.com">mdnasimmondal622@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+88016206676">Call Now: +880 16206676</a></p>
          </div>
          <div class="footer">
            <p>Md. Nasim Mondal | MERN Stack Developer</p>
            <p>Email: <a href="mailto:mdnasimmondal622@gmail.com">mdnasimmondal622@gmail.com</a></p>
            <p>Portfolio: <a href="https://your-portfolio-link.com">View Portfolio</a></p>
            <p>Phone: <a href="tel:+88016206676">+880 16206676</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/md-nasim-mondal" target="_blank">View LinkedIn</a></p>
          </div>
        </div>
      </body>
    </html>`;

    // **Receiver's Email Template**
    const receiverTemplate = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Inquiry Notification</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f7f6;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 30px;
          }
          .header {
            background: linear-gradient(to right, #4e73df, #1cc88a);
            padding: 20px;
            border-radius: 10px 10px 0 0;
            text-align: center;
            color: white;
          }
          .content {
            padding: 20px;
            color: #333;
            font-size: 16px;
          }
          .message-box {
            background-color: #f3f3f3;
            padding: 15px;
            border-left: 5px solid #4e73df;
            margin-top: 15px;
          }
          .footer {
            background: linear-gradient(to right, #4e73df, #1cc88a);
            padding: 10px;
            text-align: left;
            color: #ffffff;
            font-size: 14px;
            border-radius: 0 0 10px 10px;
          }
          .footer a {
            color: #ffffff;
            text-decoration: none;
            font-weight: bold;
          }
          .footer p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Inquiry Received</h2>
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div class="message-box">${message}</div>
          </div>
          <div class="footer">
            <p>Md. Nasim Mondal | MERN Stack Developer</p>
            <p>Email: <a href="mailto:mdnasimmondal622@gmail.com">mdnasimmondal622@gmail.com</a></p>
            <p>Portfolio: <a href="https://your-portfolio-link.com">View Portfolio</a></p>
            <p>Phone: <a href="tel:+88016206676">+880 16206676</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/md-nasim-mondal" target="_blank">View LinkedIn</a></p>
          </div>
        </div>
      </body>
    </html>`;

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
