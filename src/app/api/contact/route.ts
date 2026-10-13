import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const record = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        serviceType: serviceType || null,
        message,
      },
    });

    // Email notification (best-effort — saved to DB regardless)
    // In production, wire up SMTP env vars to enable email delivery
    try {
      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail && process.env.SMTP_HOST) {
        // Dynamic import to avoid loading nodemailer when not configured
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });
        await transporter.sendMail({
          from: process.env.SMTP_FROM || 'noreply@stratech.com',
          to: adminEmail,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Service:</strong> ${serviceType || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
      }
    } catch (emailErr) {
      console.error('Email notification failed (message still saved):', emailErr);
    }

    return NextResponse.json({ success: true, id: record.id });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to submit message' }, { status: 500 });
  }
}
