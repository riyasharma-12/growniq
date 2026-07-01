import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, mobile, service, pincode } = await request.json();

    // Validation
    if (!name || !mobile) {
      return Response.json(
        { error: 'Name and mobile number are required' },
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

    // Service label mapping
    const serviceLabels = {
      'book-a-gardener': 'Book a Gardner',
      'monthly-plant-care': 'Monthly Plant Care',
      'lawn-maintenance': 'Lawn Maintenance',
      'terrace-garden-maintenance': 'Terrace Garden Maintenance',
      'new-home-plant-setup': 'New Home Plant Setup',
      'garden-heavy-work': 'Garden Heavy Work',
      'workspace-plant-care': 'Workspace Plant Care',
      'plant-repotting': 'Plant Repotting',
    };

    const serviceName = serviceLabels[service] || service || 'Not specified';

    // Send notification email to the Growniq team
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.NOTIFY_TO || 'contact@growniq.in',
      subject: `🌱 New Quote Request — ${serviceName}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 520px; margin: 0 auto; background: #f9faf7; border-radius: 16px; overflow: hidden; border: 1px solid #e0e8dc;">
          <div style="background: #164925; padding: 28px 32px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">🌱 New Quote Request</h2>
            <p style="color: #ffffff99; margin: 8px 0 0; font-size: 13px;">A customer is requesting a service quote</p>
          </div>
          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 10px 0; color: #164925; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #e8efe4;">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Mobile</td>
                <td style="padding: 10px 0; color: #164925; font-size: 15px; font-weight: 600;">
                  <a href="tel:${mobile}" style="color: #164925; text-decoration: none;">${mobile}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #e8efe4;">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Service</td>
                <td style="padding: 10px 0; color: #164925; font-size: 15px; font-weight: 600;">${serviceName}</td>
              </tr>
              <tr style="border-top: 1px solid #e8efe4;">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Pincode</td>
                <td style="padding: 10px 0; color: #164925; font-size: 15px; font-weight: 600;">${pincode || 'Not provided'}</td>
              </tr>
            </table>
            <p style="color: #999; font-size: 12px; margin: 20px 0 0; padding-top: 16px; border-top: 1px solid #e8efe4;">
              Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true, message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('SMTP Error:', error);
    return Response.json(
      { error: 'Failed to send request. Please try again.' },
      { status: 500 }
    );
  }
}
