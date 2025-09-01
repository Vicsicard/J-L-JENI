import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - J&L Management',
  description: 'Get in touch with J&L Management for personalized HOA management services in Minnesota and Colorado.',
};

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl max-w-3xl">
            We're here to answer your questions and help your community succeed — when you call, Jeni answers.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">612-741-0226</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">jeni@jandlmanagement.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Mailing Address</h3>
                    <p className="text-gray-700">
                      J&L Management<br />
                      1917 Windemere Ln<br />
                      Erie, CO 80516
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Social Media</h3>
                    <a 
                      href="https://facebook.com/JandLManagement" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      facebook.com/JandLManagement
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Response Commitment</h3>
                <p className="mb-4">
                  At J&L Management, we pride ourselves on being accessible and responsive. 
                  When you reach out to us, you can expect:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Phone calls answered by a real person (Jeni)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Email responses within 12 business hours</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>24/7 emergency response for urgent issues</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
