import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1) Send notification email to the Growniq team
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.NOTIFY_TO || 'contact@growniq.in',
      subject: '🌱 New App Notification Request',
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 520px; margin: 0 auto; background: #f9faf7; border-radius: 16px; overflow: hidden; border: 1px solid #e0e8dc;">
          <div style="background: #164925; padding: 28px 32px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">🌱 New Notification Signup</h2>
          </div>
          <div style="padding: 28px 32px;">
            <p style="color: #333; font-size: 15px; margin: 0 0 8px;">A new user wants to be notified when the Growniq app launches:</p>
            <div style="background: #ffffff; border: 1px solid #d4e3cc; border-radius: 10px; padding: 16px 20px; margin: 16px 0;">
              <p style="color: #164925; font-size: 16px; font-weight: 600; margin: 0;">📧 ${email}</p>
            </div>
            <p style="color: #666; font-size: 13px; margin: 16px 0 0;">Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
    });

    // 2) Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: '🌿 Welcome to Growniq — We\'ll notify you!',
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 520px; margin: 0 auto; background: #f9faf7; border-radius: 16px; overflow: hidden; border: 1px solid #e0e8dc;">
          <div style="background: #164925; padding: 28px 32px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 22px;">🌱 Growniq</h2>
            <p style="color: #ffffff99; margin: 8px 0 0; font-size: 13px;">Your Complete Green Solution</p>
          </div>
          <div style="padding: 32px; text-align: center;">
            <h3 style="color: #164925; font-size: 20px; margin: 0 0 12px;">Thank You! 🎉</h3>
            <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0 0 24px;">
              You're now on the list! We'll notify you as soon as the Growniq app is ready to sprout.
            </p>
            <div style="background: #e8f5e9; border-radius: 10px; padding: 16px; margin: 0 0 24px;">
              <p style="color: #164925; font-size: 13px; margin: 0;">
                🌿 Expert gardening services<br/>
                🤖 AI-powered plant care<br/>
                🛒 Digital nursery store
              </p>
            </div>
            <p style="color: #999; font-size: 12px; margin: 0;">
              Need help? Reach us at <a href="mailto:contact@growniq.in" style="color: #164925;">contact@growniq.in</a>
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true, message: 'Notification email sent' });
  } catch (error) {
    console.error('SMTP Error:', error);
    return Response.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
