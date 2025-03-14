import { getOwnerTemplate, getThankYouTemplate } from "@/utils/emailTemplates";
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

    // **MessageSender's Email Template**
    const thankYouEmail = getThankYouTemplate(name, message);

    // **owner's Email Template**
    const ownerEmail = getOwnerTemplate(name, email, subject, message);

    // Send Email to Owner (You)
    await transporter.sendMail({
      from: process.env.NEXT_AUTH_GMAIL_USER as string,
      to: process.env.NEXT_AUTH_GMAIL_USER as string, // Your Email
      subject: `New Inquiry: ${subject}`,
      html: ownerEmail,
    });

    // Send Confirmation Email to Message Sender
    await transporter.sendMail({
      from: process.env.NEXT_AUTH_GMAIL_USER as string,
      to: email,
      subject: "Thank You for Reaching Out!",
      html: thankYouEmail,
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
