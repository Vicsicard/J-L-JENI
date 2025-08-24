import type { Metadata } from 'next';
import Link from 'next/link';
import DocumentTable from '@/components/DocumentTable';

export const metadata: Metadata = {
  title: 'Documents - J&L Management',
  description: 'Purchase and download HOA management documents from J&L Management.',
};

export default function Documents() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documents</h1>
          <p className="text-xl max-w-3xl">
            Purchase the documents you need for your community
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary p-6 rounded-lg mb-10">
              <h2 className="text-2xl font-bold mb-4">Instructions</h2>
              <p className="mb-6">
                Select the document you need below. When you click 'Buy,' you'll be taken to our secure Stripe checkout. 
                Once your payment is complete, we will be notified and will email your document directly to you.
              </p>
              <div className="bg-amber-100 border-l-4 border-accent p-4 text-sm">
                <p className="font-semibold">Note:</p>
                <p>Documents are delivered via email within 24 hours of payment confirmation. Please check your spam folder if you don't see the email.</p>
              </div>
            </div>

            <DocumentTable />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What format are the documents in?</h3>
              <p>All documents are provided in PDF format, which can be viewed on any device.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Can I edit the documents?</h3>
              <p>Some documents are fillable PDFs that allow you to enter your information. For customized documents, please contact us directly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What if I need help with a document?</h3>
              <p>If you have questions about any document or need assistance filling it out, please contact us at jeni@jandlmanagement.com or call 612-741-0226.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What is your refund policy?</h3>
              <p>Due to the digital nature of these documents, all sales are final. However, if you experience technical difficulties, please contact us and we'll be happy to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Document?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If you don't see what you're looking for or need a customized document for your specific situation, we can help.
          </p>
          <Link href="/contact" className="bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
