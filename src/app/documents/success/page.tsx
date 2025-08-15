'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface DocumentData {
  id: string;
  downloadUrl: string;
  purchaseDate: string;
  expiryDate: string;
}

function DocumentPurchaseSuccessContent() {
  const searchParams = useSearchParams();
  const documentId = searchParams.get('documentId');
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [documentData, setDocumentData] = useState<DocumentData | null>(null);
  
  useEffect(() => {
    const fetchPurchaseDetails = async () => {
      if (!documentId) {
        setError('No document ID provided');
        setLoading(false);
        return;
      }
      
      try {
        const response = await fetch(`/api/stripe/success?documentId=${documentId}`);
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to retrieve purchase details');
        }
        
        setDocumentData(data.document);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPurchaseDetails();
  }, [documentId]);
  
  
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mx-auto"></div>
          <p className="mt-4 text-lg">Loading your purchase details...</p>
        </div>
      </div>
    );
  }
  
  if (error || !documentData) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-red-50 rounded-lg">
          <h1 className="text-2xl font-bold text-red-700 mb-4">Error</h1>
          <p className="text-red-600 mb-6">{error || 'Unable to retrieve document details'}</p>
          <Link href="/documents" className="bg-accent text-white px-6 py-2 rounded hover:bg-amber-600 transition-colors">
            Return to Documents
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-green-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center text-green-800 mb-4">Purchase Successful!</h1>
        <p className="text-center text-green-700 text-lg mb-6">
          Thank you for your purchase. Your document is ready for download.
        </p>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Document Details</h2>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-1">Document ID:</p>
          <p className="font-medium">{documentData.id}</p>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-1">Purchase Date:</p>
          <p className="font-medium">{new Date(documentData.purchaseDate).toLocaleDateString()}</p>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-1">Available Until:</p>
          <p className="font-medium">{new Date(documentData.expiryDate).toLocaleDateString()}</p>
        </div>
        
        <div className="mt-8">
          <a 
            href={documentData.downloadUrl}
            className="block w-full bg-accent text-white text-center font-bold py-3 px-6 rounded-md hover:bg-amber-600 transition-colors"
          >
            Download Document
          </a>
          
          <div className="mt-4 text-center">
            <Link href="/documents" className="text-accent hover:text-amber-600 font-medium">
              Return to Documents
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DocumentPurchaseSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mx-auto"></div>
          <p className="mt-4 text-lg">Loading purchase details...</p>
        </div>
      </div>
    }>
      <DocumentPurchaseSuccessContent />
    </Suspense>
  );
}
