// import nodemailer from 'nodemailer';

// export async function POST(req, res) {
//   if (req.method === 'POST') {
//     const { post,data } = req.body;

//     // Create a transporter using SMTP settings
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST, // Your SMTP server address
//       port: process.env.SMTP_PORT, // Port (use 465 for SSL or 587 for TLS)
//       secure: true, // true for 465, false for other ports
//       auth: {
//         user: process.env.SMTP_USER, // Your email address
//         pass: process.env.SMTP_PASS, // Your email password
//       },
//     });

//     try {
//       // Send the email
//       const info = await transporter.sendMail({
//         from: '"Your Name" <your-email@yourdomain.com>', // Sender address
//         to: 'recipient@example.com', // List of recipients (can be dynamic)
//         subject: 'New Message from Contact Form', // Subject line
//         html: `<h2>Form data for the post of ${post}</h2>
//                <p><strong>First Name:</strong> ${data.firstname}</p>
//                <p><strong>Last Name:</strong> ${data.lastname}</p>
//                <p><strong>Email:</strong> ${data.email}</p>
//                <p><strong>Headline:</strong> ${data.headline}</p>
//                <p><strong>Phone Number:</strong> ${data.phone}</p>
//                <p><strong>Address:</strong> ${data.address}</p>
//                <p><strong>Photo:</strong> ${data.file?.name || 'No file uploaded'}</p>
//                <p><strong>Summary:</strong> ${data.summary}</p>
//                <p><strong>Resume:</strong> ${data.file?.name || 'No file uploaded'}</p>
//                <p><strong>Cover Letter:</strong> ${data.coverletter}</p>`
//       });

//       console.log('Message sent: %s', info.messageId);

//       // Respond to the client
//       res.status(200).json({ message: 'Email sent successfully!' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ message: 'Failed to send email.' });
//     }
//   } else {
//     // Handle any other HTTP method
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   const { post,data } = await req.json();

//   // Set up the Nodemailer transporter with your SMTP settings
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: process.env.SMTP_USER, // Your SMTP user (email)
//       pass: process.env.SMTP_PASS, // Your SMTP password
//     },
//   });

//   try {
//     // Send the email
//     const info = await transporter.sendMail({
//       from: '"Your Name" <your-email@yourdomain.com>', // Sender email
//       to: 'recipient@example.com', // The recipient's email
//       subject: 'New Contact Form Submission', // Email subject
//       html: `<h2>Form data for the post of ${post}</h2>
//                <p><strong>First Name:</strong> ${data.firstname}</p>
//                <p><strong>Last Name:</strong> ${data.lastname}</p>
//                <p><strong>Email:</strong> ${data.email}</p>
//                <p><strong>Headline:</strong> ${data.headline}</p>
//                <p><strong>Phone Number:</strong> ${data.phone}</p>
//                <p><strong>Address:</strong> ${data.address}</p>
//                <p><strong>Photo:</strong> ${data.file?.name || 'No file uploaded'}</p>
//                <p><strong>Summary:</strong> ${data.summary}</p>
//                <p><strong>Resume:</strong> ${data.file?.name || 'No file uploaded'}</p>
//                <p><strong>Cover Letter:</strong> ${data.coverletter}</p>`
//     });

//     console.log('Email sent: %s', info.messageId);
//     return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Parse the request body as JSON
    const { post, data } = await req.json();

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
      to: 'recipient@example.com', // The recipient's email
      subject: 'New Contact Form Submission', // Email subject
      html: `<h2>Form data for the post of ${post}</h2>
               <p><strong>First Name:</strong> ${data.firstname}</p>
               <p><strong>Last Name:</strong> ${data.lastname}</p>
               <p><strong>Email:</strong> ${data.email}</p>
               <p><strong>Headline:</strong> ${data.headline}</p>
               <p><strong>Phone Number:</strong> ${data.phone}</p>
               <p><strong>Address:</strong> ${data.address}</p>
               <p><strong>Photo:</strong> ${data.photo?.name || 'No file uploaded'}</p>
               <p><strong>Summary:</strong> ${data.summary}</p>
               <p><strong>Resume:</strong> ${data.resume?.name || 'No file uploaded'}</p>
               <p><strong>Cover Letter:</strong> ${data.coverletter}</p>`
    });

    console.log('Email sent: %s', info.messageId);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
