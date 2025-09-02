'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [showGoogleForm, setShowGoogleForm] = useState(false);
  
  const handleContactClick = () => {
    // Option 1: Open in new tab (prevents account switching issues)
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfZRIDTgCODQXIl0TMNoNROt3uOTb1zTLUbZ5eS7NlJ7LHujg/viewform', '_blank');
    
    // Option 2: Show embedded form (comment out the line above and uncomment below)
    // setShowGoogleForm(true);
  };

  if (showGoogleForm) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="mb-4">
          <button 
            onClick={() => setShowGoogleForm(false)}
            className="text-accent hover:underline text-sm"
          >
            ← Back to contact info
          </button>
        </div>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfZRIDTgCODQXIl0TMNoNROt3uOTb1zTLUbZ5eS7NlJ7LHujg/viewform?embedded=true&usp=pp_url" 
          width="100%" 
          height="600" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          className="rounded-md"
          sandbox="allow-forms allow-scripts allow-same-origin"
        >
          Loading contact form...
        </iframe>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
        <p className="mb-6 text-gray-600">
          Click below to open our contact form. Your message will be sent directly to Jeni at J&L Management.
        </p>
        <button
          onClick={handleContactClick}
          className="w-full bg-accent text-white font-bold py-3 px-6 rounded-md hover:bg-amber-600 transition-colors"
        >
          Open Contact Form
        </button>
        <div className="mt-4 text-sm text-gray-500">
          <p>Or contact us directly:</p>
          <p>📞 612-741-0226</p>
          <p>✉️ jeni@jandlmanagement.com</p>
        </div>
      </div>
    </div>
  );
}
