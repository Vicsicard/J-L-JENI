import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Function to handle form submissions using SendGrid
async function handleFormSubmission(data: any) {
  try {
    // Set SendGrid API key from environment variable
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error('SendGrid API key not found');
      return { success: false, error: 'Email service configuration error' };
    }
    
    sgMail.setApiKey(apiKey);
    
    // Create email message
    const msg = {
      to: 'jeni@jandlmanagement.com', // Client's email address
      from: process.env.SENDGRID_VERIFIED_SENDER || 'noreply@jandlmanagement.com', // Must be verified in SendGrid
      subject: 'New Contact Form Submission - J&L Management Website',
      text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}

Submitted on: ${new Date().toLocaleString()}
`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
    };
    
    // Send email
    await sgMail.send(msg);
    
    // Log success (without personal details)
    console.log('Contact form submission processed successfully at:', new Date().toISOString());
    
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    
    // Process the contact form submission
    const result = await handleFormSubmission({
      name: body.name,
      email: body.email,
      phone: body.phone || 'Not provided',
      message: body.message
    });
    
    // Only log that a submission was received without personal details
    console.log('Contact form submission received at:', new Date().toISOString());
    
    // Return success response
    return NextResponse.json({ 
      success: true,
      message: 'Thank you for your message! We will get back to you shortly.'
    });
    
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'There was an error processing your request' },
      { status: 500 }
    );
  }
}
