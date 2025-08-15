import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials - J&L Management',
  description: 'Read what our clients say about J&L Management\'s HOA management services in Minnesota and Colorado.',
};

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "J&L Management turned our HOA around. Their attention to detail and responsiveness has made all the difference for our community.",
      author: "Board President",
      location: "Boulder, CO"
    },
    {
      id: 2,
      content: "Whenever we have an issue, Jeni is on it right away. It's refreshing to work with a management company that truly cares about our community.",
      author: "HOA Treasurer",
      location: "Minneapolis, MN"
    },
    {
      id: 3,
      content: "From budgeting to handling vendor contracts, J&L Management has streamlined our operations and saved us money in the process.",
      author: "Community Board Member",
      location: "Lafayette, CO"
    },
    {
      id: 4,
      content: "J&L helped us plan and manage a major roofing project that could have been a nightmare. Instead, it went smoothly and came in under budget.",
      author: "Property Owner",
      location: "Golden, CO"
    },
    {
      id: 5,
      content: "We've worked with other management companies before, but none have provided the level of personal service and expertise that J&L does.",
      author: "Homeowner",
      location: "Denver, CO"
    },
    {
      id: 6,
      content: "Having Jeni at our meetings has been a game-changer. She keeps us focused, informed, and helps us make better decisions for our community.",
      author: "HOA Secretary",
      location: "St. Paul, MN"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h1>
          <p className="text-xl max-w-3xl">
            Don't just take our word for it — hear from the communities we serve
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-center">
              For over 20 years, we've been helping HOA communities thrive across Minnesota and Colorado.
              Here's what our clients have to say about working with J&L Management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-secondary p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <svg className="w-10 h-10 text-accent mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                <div className="font-semibold">
                  — {testimonial.author}, {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the J&L Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn how we can help your community thrive with our personalized HOA management services.
          </p>
          <a href="/contact" className="bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
