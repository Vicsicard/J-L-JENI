'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// This would be replaced with your actual Stripe public key from env variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || 'pk_test_placeholder');

interface Document {
  id: string;
  name: string;
  description: string;
  price: number;
}

const documents: Document[] = [
  {
    id: 'doc_welcome',
    name: 'HOA Welcome Packet',
    description: 'Comprehensive information for new residents',
    price: 10
  },
  {
    id: 'doc_arch_req',
    name: 'Architectural Request Form',
    description: 'Required for renovations and property modifications',
    price: 5
  },
  {
    id: 'doc_bylaws',
    name: 'HOA Bylaws Template',
    description: 'Standard bylaws template for HOA communities',
    price: 15
  },
  {
    id: 'doc_meeting',
    name: 'Meeting Minutes Template',
    description: 'Professional template for recording HOA meetings',
    price: 5
  },
  {
    id: 'doc_budget',
    name: 'Annual Budget Template',
    description: 'Comprehensive HOA budget planning template',
    price: 12
  }
];

export default function DocumentTable() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleBuyClick = async (documentId: string) => {
    setLoading(documentId);
    
    try {
      // In a real implementation, this would call your API route
      // that creates a Stripe Checkout session
      console.log(`Processing purchase for document: ${documentId}`);
      
      // Example API call (commented out as placeholder)
      /*
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          documentId,
        }),
      });

      const { sessionId } = await response.json();
      
      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId,
      });
      
      if (error) {
        console.error('Stripe checkout error:', error);
      }
      */
      
      // For demo purposes, we'll just show a success message
      alert('This is a placeholder. In production, you would be redirected to Stripe checkout.');
    } catch (error) {
      console.error('Error processing purchase:', error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left border-b">Document Name</th>
            <th className="py-3 px-4 text-left border-b">Description</th>
            <th className="py-3 px-4 text-left border-b">Price</th>
            <th className="py-3 px-4 text-left border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">{doc.name}</td>
              <td className="py-3 px-4">{doc.description}</td>
              <td className="py-3 px-4">${doc.price.toFixed(2)}</td>
              <td className="py-3 px-4">
                <button
                  onClick={() => handleBuyClick(doc.id)}
                  disabled={loading === doc.id}
                  className="bg-accent text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors disabled:bg-gray-400"
                >
                  {loading === doc.id ? 'Processing...' : 'Buy & Download'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
