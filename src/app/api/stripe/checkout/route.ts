import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16', // Use the latest API version or specify the one you want
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request
    if (!body.documentId || !body.documentName || !body.price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: body.documentName,
              description: `Document ID: ${body.documentId}`,
            },
            unit_amount: Math.round(body.price * 100), // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/documents/success?session_id={CHECKOUT_SESSION_ID}&document_id=${body.documentId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/documents`,
      metadata: {
        documentId: body.documentId,
        documentName: body.documentName,
      },
    });
    
    return NextResponse.json({ 
      success: true,
      sessionId: session.id,
      checkoutUrl: session.url
    });
    
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'There was an error processing your payment request' },
      { status: 500 }
    );
  }
}
