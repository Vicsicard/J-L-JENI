import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="HOA community"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="brightness-[0.85]"
          />
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to J&L Management
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Personalized HOA Management You Can Count On
            </p>
            <Link href="/services" className="btn-primary">
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Copy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p className="mb-4">
                At J&L Management, we do more than manage properties — we help communities thrive. 
                Since 2000, we've been partnering with homeowners' associations across Minnesota 
                and Colorado, delivering the right mix of professional expertise and personal attention.
              </p>
              <p className="mb-4">
                With over 20 years of HOA management experience, we handle everything from bookkeeping 
                and budgeting to maintenance coordination, rule enforcement, and community events. 
                And when you call, you won't get an automated menu — you'll talk directly to Jeni, 
                who knows your property and cares about your community.
              </p>
              <p className="mb-4">
                Whether you need full-service HOA management or support in specific areas, 
                we'll create a plan that works for you — and make sure your board, your residents, 
                and your property are all in good hands.
              </p>
              <p className="font-bold text-center text-xl mt-8">
                J&L Management — Integrity, Accessibility, Expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Financial Management</h3>
                <p className="mb-4">
                  Comprehensive bookkeeping, budgeting, dues collection, and financial planning 
                  to keep your association financially sound.
                </p>
                <Link href="/services" className="text-accent font-semibold hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Maintenance & Projects</h3>
                <p className="mb-4">
                  From everyday upkeep to vendor management and 24/7 emergency response, 
                  we keep your property in excellent condition.
                </p>
                <Link href="/services" className="text-accent font-semibold hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Board Support</h3>
                <p className="mb-4">
                  Professional guidance for your board, including meeting attendance, 
                  management reports, and prompt homeowner response.
                </p>
                <Link href="/services" className="text-accent font-semibold hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-secondary p-6 rounded-lg">
              <p className="italic mb-4">
                "J&L Management turned our HOA around. Their attention to detail and responsiveness 
                has made all the difference for our community."
              </p>
              <p className="font-semibold">— Board President, Boulder, CO</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-secondary p-6 rounded-lg">
              <p className="italic mb-4">
                "Whenever we have an issue, Jeni is on it right away. It's refreshing to work 
                with a management company that truly cares about our community."
              </p>
              <p className="font-semibold">— HOA Treasurer, Minneapolis, MN</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials" className="btn-secondary">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how J&L Management can help your community thrive.
          </p>
          <Link href="/contact" className="bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
