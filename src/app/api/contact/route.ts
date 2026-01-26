import { NextResponse } from 'next/server'

const RECIPIENT_EMAIL = 'info@bdabuilt.com.au'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  projectType?: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Format the email content
    const emailContent = `
New Contact Form Submission from BDA Built Website

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}
Project Type: ${data.projectType || 'Not specified'}

Message:
${data.message}

---
This message was sent from the BDA Built website contact form.
    `.trim()

    // In production, you would integrate with an email service here
    // Options include:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Mailgun

    // For now, we'll log the submission and return success
    // You'll need to add your email service integration here
    console.log('=== Contact Form Submission ===')
    console.log('To:', RECIPIENT_EMAIL)
    console.log('From:', data.email)
    console.log('Content:', emailContent)
    console.log('==============================')

    // TODO: Replace with actual email sending logic
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'website@bdabuilt.com.au',
    //   to: RECIPIENT_EMAIL,
    //   replyTo: data.email,
    //   subject: `New Contact Form Submission from ${data.name}`,
    //   text: emailContent,
    // })

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        recipient: RECIPIENT_EMAIL
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    )
  }
}
