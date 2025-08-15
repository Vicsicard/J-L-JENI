import { NextResponse } from 'next/server';

// This is a placeholder for email sending functionality
// In a production environment, you would use a service like SendGrid, Mailgun, etc.
async function sendEmail(data: any) {
  // This would be replaced with actual email sending logic
  console.log('Sending email with data:', data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return { success: true };
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
    // In a real implementation, you would send an email or store in a database
    const result = await sendEmail({
      name: body.name,
      email: body.email,
      phone: body.phone || 'Not provided',
      message: body.message,
      date: new Date().toISOString(),
    });
    
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
