import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - J&L Management',
  description: 'Learn about J&L Management, providing HOA management services with integrity, accessibility, and expertise since 2000.',
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About J&L Management</h1>
          <p className="text-xl max-w-3xl">
            Professional HOA management with a personal touch since 2000
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content Column */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p>
                  At J&L Management, we believe great community management is built on trust, transparency, 
                  and personal connection. Since 2000, we've been dedicated to helping homeowners' associations 
                  thrive—providing the expertise, resources, and care needed to keep communities running smoothly.
                </p>
                
                <p>
                  With more than 20 years of experience in property and association management, we've seen every 
                  challenge an HOA can face—and we know how to handle it. Our founder, Jeni Carrier, began her 
                  management career in 1998 and quickly recognized the need for HOA services that go beyond 
                  paperwork and policies. That's why, in 2001, she focused J&L exclusively on community 
                  association management, combining deep industry knowledge with a hands-on, responsive approach.
                </p>
                
                <p>
                  Licensed in both Minnesota and Colorado, and certified through the Community Association 
                  Institute in the Rocky Mountain and Twin Cities chapters, J&L Management offers a full 
                  spectrum of HOA services. From bookkeeping and budget preparation to rule enforcement, 
                  maintenance coordination, and large-scale project oversight, we provide tailored solutions 
                  that meet each community's unique needs.
                </p>
                
                <p>
                  What truly sets us apart is our accessibility—you won't get lost in an automated system or 
                  wait days for a response. When you call, Jeni answers. We know your property is more than 
                  just an address; it's your home, your investment, and your community. We're committed to 
                  protecting it as if it were our own.
                </p>
                
                <p className="font-bold text-xl mt-8">
                  J&L Management — Personalized HOA Management with Integrity, Accessibility, and Expertise.
                </p>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg mb-8">
                  <Image
                    src="/j-l-logo-2-cropped.png"
                    alt="J&L Management"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="bg-white p-4"
                  />
                </div>
                
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Certifications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Community Association Institute - Rocky Mountain Chapter
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Community Association Institute - Twin Cities Chapter
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Licensed in Minnesota and Colorado
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
