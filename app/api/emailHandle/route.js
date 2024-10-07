import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData(); // Instead of parsing JSON
    const post = formData.get("post");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const headline = formData.get("headline");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const photo = formData.get("photo");
    const summary = formData.get("summary");
    const resume = formData.get("resume");
    const coverletter = formData.get("coverletter");
    console.log(formData);
    const photoBuffer = photo ? await photo.arrayBuffer() : null;
    // Set up the Nodemailer transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your SMTP user (email)
        pass: process.env.SMTP_PASS, // Your SMTP password
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: '"Your Name" <your-email@yourdomain.com>', // Sender email
      to: "recipient@example.com", // The recipient's email
      subject: "New Contact Form Submission", // Email subject
      html: `<h2>Form data for the post of ${post}</h2>
               <p><strong>First Name:</strong> ${firstname}</p>
               <p><strong>Last Name:</strong> ${lastname}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Headline:</strong> ${headline}</p>
               <p><strong>Phone Number:</strong> ${phone}</p>
               <p><strong>Address:</strong> ${address}</p>
               <p><strong>Photo:</strong> ${
                 photo?.name || "No file uploaded"
               }</p>
               <p><strong>Summary:</strong> ${summary}</p>
               <p><strong>Resume:</strong> ${
                 resume?.name || "No file uploaded"
               }</p>
               <p><strong>Cover Letter:</strong> ${coverletter}</p>`,
      attachments: [
        {
          filename: photo?.name || "photo.jpg", // Default filename
          content: Buffer.from(photoBuffer), // Convert ArrayBuffer to Buffer
        },
      ],
    });

    console.log("Email sent: %s", info.messageId);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
