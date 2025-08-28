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
    id: 'price_1S17NOD6OMqbWvwTZLVIqAwG',
    name: 'Resale Disclosure Package',
    description: 'Complete disclosure package for property resale (delivered by email)',
    price: 395
  },
  {
    id: 'price_1S17NPD6OMqbWvwT6R45zcpq',
    name: 'Condo Questionnaire',
    description: 'Required questionnaire for condo transactions (delivered by email)',
    price: 165
  },
  {
    id: 'price_1S17NPD6OMqbWvwTYLjv3eZ0',
    name: 'Key Fob',
    description: 'Access key fob ($10 shipping per order, not per fob)',
    price: 45
  },
  {
    id: 'price_1S17NQD6OMqbWvwTBhkWOEPW',
    name: 'Additional Key (unit or common area)',
    description: 'Extra key for unit or common area access ($10 shipping per order, not per key)',
    price: 35
  }
];

export default function DocumentTable() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleBuyClick = async (priceId: string) => {
    setLoading(priceId);
    
    try {
      // Find the document details
      const document = documents.find(doc => doc.id === priceId);
      
      if (!document) {
        throw new Error('Document not found');
      }
      
      // Redirect directly to the appropriate Stripe payment link
      const paymentLinks: { [key: string]: string } = {
        'price_1S17NOD6OMqbWvwTZLVIqAwG': 'https://buy.stripe.com/test_dRmeVc4fVgzC0YYagW1gs01', // Resale Disclosure Package
        'price_1S17NPD6OMqbWvwT6R45zcpq': 'https://buy.stripe.com/test_dRmeVc4fVgzC0YYagW1gs01', // Condo Questionnaire
        'price_1S17NPD6OMqbWvwTYLjv3eZ0': 'https://buy.stripe.com/test_9B67sK5jZeru4ba1Kq1gs02', // Key Fob
        'price_1S17NQD6OMqbWvwTBhkWOEPW': 'https://buy.stripe.com/test_eVq00iaEj4QUbDCgFk1gs03'  // Additional Key
      };
      
      const paymentUrl = paymentLinks[priceId];
      if (paymentUrl) {
        // Redirect to Stripe payment page
        window.open(paymentUrl, '_blank');
      } else {
        throw new Error('Payment link not found');
      }
    } catch (error) {
      console.error('Error processing purchase:', error);
      alert(error instanceof Error ? error.message : 'An error occurred during checkout');
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
                  {loading === doc.id ? 'Processing...' : 'Buy'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
