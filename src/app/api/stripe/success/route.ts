import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16', // Use the latest API version or specify the one you want
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const sessionId = searchParams.get('session_id');
    const documentId = searchParams.get('document_id');
    
    if (!sessionId || !documentId) {
      return NextResponse.json(
        { error: 'Session ID and Document ID are required' },
        { status: 400 }
      );
    }
    
    // Verify the payment with Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    // Check if the payment was successful
    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment has not been completed' },
        { status: 400 }
      );
    }
    
    // Verify that the document ID in the session matches the one in the URL
    if (session.metadata?.documentId !== documentId) {
      return NextResponse.json(
        { error: 'Document ID mismatch' },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would update your database to record the purchase
    // For now, we'll return the document details
    const documentData = {
      id: documentId,
      downloadUrl: `/documents/${documentId}.pdf`, // This would be a real URL in production
      purchaseDate: new Date().toISOString(),
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
      paymentId: session.payment_intent as string,
    };
    
    return NextResponse.json({
      success: true,
      message: 'Payment successful! You can now download your document.',
      document: documentData
    });
    
  } catch (error) {
    console.error('Stripe success handler error:', error);
    return NextResponse.json(
      { error: 'There was an error processing your payment confirmation' },
      { status: 500 }
    );
  }
}
