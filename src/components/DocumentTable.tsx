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
    id: 'price_1S16r9GEHfPiJwM4MiSwntVg',
    name: 'Resale Disclosure Package',
    description: 'Complete disclosure package for property resale (delivered by email)',
    price: 395
  },
  {
    id: 'price_1S16rHGEHfPiJwM4J42TzMQ9',
    name: 'Condo Questionnaire',
    description: 'Required questionnaire for condo transactions (delivered by email)',
    price: 165
  },
  {
    id: 'price_1S16rQGEHfPiJwM4Sa0yWT2h',
    name: 'Key Fob',
    description: 'Access key fob ($10 shipping per order, not per fob)',
    price: 45
  },
  {
    id: 'price_1S16sAGEHfPiJwM4ZBM8VSyF',
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
        'price_1S16r9GEHfPiJwM4MiSwntVg': 'https://buy.stripe.com/9B63cvgGEgwN9GA4Sqcwg0N',
        'price_1S16rHGEHfPiJwM4J42TzMQ9': 'https://buy.stripe.com/28E7sLaigbct1a41Gecwg0O',
        'price_1S16rQGEHfPiJwM4Sa0yWT2h': 'https://buy.stripe.com/aFafZh6200xP9GAgB8cwg0P',
        'price_1S16sAGEHfPiJwM4ZBM8VSyF': 'https://buy.stripe.com/dRmeVdfCA6Wd7ysdoWcwg0Q'
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
