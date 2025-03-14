export const getThankYouTemplate = (name: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Reaching Out</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f7f6;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); padding: 30px;">
        <div style="background: linear-gradient(to right, #4e73df, #1cc88a); padding: 20px; border-radius: 10px 10px 0 0; text-align: center; color: white;">
            <h2>Thank You, ${name}!</h2>
        </div>
        <div style="padding: 20px; font-size: 16px;">
            <p>We have successfully received your message and will get back to you soon.</p>
            <p><strong>Your Message:</strong></p>
            <div style="background-color: #f3f3f3; padding: 15px; border-left: 4px solid #1cc88a;">
                ${message}
            </div>
        </div>
    </div>
</body>
</html>
`;


  // <div style="font-size: 18px; font-weight: bold;">Md. Nasim Mondal</div>
    // <div style="font-size: 16px; font-weight: normal; opacity: 0.9;">MERN Stack Developer</div>

export const getOwnerTemplate = (
  name: string,
  email: string,
  subject: string,
  message: string
) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Inquiry Notification</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f7f6;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); padding: 30px;">
        <div style="background: linear-gradient(to right, #4e73df, #1cc88a); padding: 20px; border-radius: 10px 10px 0 0; text-align: center; color: white;">
            <h2>New Inquiry Received</h2>
        </div>
        <div style="padding: 20px; font-size: 16px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #000000;">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f3f3f3; padding: 15px; border-left: 5px solid #4e73df;">
                ${message}
            </div>
        </div>
    </div>
</body>
</html>
`;
