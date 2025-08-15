import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Phone: 612-741-0226</p>
            <p className="mb-2">Email: jeni@jandlmanagement.com</p>
            <p className="mb-2">
              Mailing Address:<br />
              J&L Management<br />
              161 Mesa Circle<br />
              Lafayette, CO 80026
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/documents" className="hover:text-accent transition-colors">
                  Documents
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal & Social</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/privacy-policy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-accent transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-accent transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-notice" className="hover:text-accent transition-colors">
                  Cookie Notice
                </Link>
              </li>
            </ul>
            <div className="flex items-center">
              <a 
                href="https://facebook.com/JandLManagement" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} J&L Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
