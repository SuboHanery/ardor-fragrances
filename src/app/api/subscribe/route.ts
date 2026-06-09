import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Generate a test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"ARDOR Fragrances" <welcome@ardorfragrances.com>',
      to: email,
      subject: "Welcome to the Club! Here's your 10% Off Coupon 🎁",
      text: "Thank you for joining ARDOR. Use code WELCOME10 at checkout for 10% off your first order.",
      html: `
        <div style="font-family: sans-serif; max-w-md; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; background-color: #1a1a1a; color: #f5f3f0; text-align: center;">
          <h1 style="font-family: serif; letter-spacing: 0.1em; color: #d4a574;">ARDOR</h1>
          <h2>Welcome to the Club</h2>
          <p>Thank you for subscribing! As promised, here is your 10% off coupon code for your first luxury fragrance purchase:</p>
          <div style="background-color: #d4a574; color: #1a1a1a; padding: 15px; font-size: 24px; font-weight: bold; letter-spacing: 0.15em; margin: 20px 0;">
            WELCOME10
          </div>
          <p>Engineer your fragrance. Elevate your climate.</p>
        </div>
      `,
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      previewUrl 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
