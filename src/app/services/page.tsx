import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - J&L Management',
  description: 'Comprehensive HOA management services including financial management, maintenance, board support, and community building.',
};

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive HOA management services to keep communities organized, financially sound, and thriving.
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg">
              At J&L Management, we provide tailored HOA management solutions to meet your community's unique needs.
              From financial oversight to maintenance coordination, our comprehensive services are designed to help
              your association run smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Services */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Taking Care of Your Finances</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Bookkeeping</h3>
                    <p>Accurate and transparent financial record-keeping for your association. Cloud based Accounting that can be accessed by your board of directors or Financial Committee in real time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Dues & Assessment Collections</h3>
                    <p>Efficient collection and processing of association dues and special assessments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Managing Delinquencies</h3>
                    <p>Professional handling of late payments to maintain financial stability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Paying the Bills</h3>
                    <p>Timely vendor payments and expense management.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Budgeting & Planning</h3>
                    <p>Strategic financial planning and budget development for long-term stability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Tax Season Support</h3>
                    <p>Preparation of financial documents for annual tax filings.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Financial.png"
                alt="Financial management services"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Organization Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Organized.png"
                alt="Organization services"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Keeping Things Organized</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Resident Records</h3>
                    <p>Maintaining accurate and up-to-date resident information.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Rules & Policies</h3>
                    <p>Development and enforcement of community guidelines and regulations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Architectural Review Support</h3>
                    <p>Assistance with review and approval of property modifications.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Meeting Prep</h3>
                    <p>Comprehensive preparation for board and community meetings.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Important Records</h3>
                    <p>Secure storage and management of association documents and records.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Board Support */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Supporting Your Board</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Board meeting attendance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Management reports</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>12-hour weekday homeowner response</span>
                </li>
              </ul>
            </div>
            
            {/* Maintenance & Projects */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Handling Maintenance & Projects</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Everyday upkeep</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Vendor management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>24/7 emergencies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Special projects</span>
                </li>
              </ul>
            </div>
            
            {/* Community Building */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Building a Stronger Community</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Events</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>New neighbor welcomes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Conflict resolution</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Educational sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Community's Needs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and how we can help your HOA thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
              Contact Us
            </a>
            <a href="/testimonials" className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-primary transition-colors">
              See What Our Clients Say
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
