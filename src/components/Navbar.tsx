'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {/* Logo from provided URL */}
            <div className="relative h-10 w-40 mr-2">
              <Image 
                src="https://imagestopost.carrd.co/assets/images/image24.jpg?v=20ef2a31" 
                alt="J&L Management Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-primary hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/services" className="text-primary hover:text-accent transition-colors">
            Services
          </Link>
          <a 
            href="https://jlmanagement2.managebuilding.com/Resident/public/home" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            Login
          </a>
          <Link href="/testimonials" className="text-primary hover:text-accent transition-colors">
            Testimonials
          </Link>
          <Link href="/contact" className="text-primary hover:text-accent transition-colors">
            Contact
          </Link>
          <Link href="/documents" className="text-primary hover:text-accent transition-colors">
            Documents
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/about" 
              className="text-primary hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-primary hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <a 
              href="https://jlmanagement2.managebuilding.com/Resident/public/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
            <Link 
              href="/testimonials" 
              className="text-primary hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="/contact" 
              className="text-primary hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/documents" 
              className="text-primary hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Documents
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
