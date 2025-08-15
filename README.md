# J&L Management Website

A professional website for J&L Management, an HOA management company serving communities in Minnesota and Colorado since 2000.

## Project Overview

This website showcases J&L Management's services, testimonials, and provides a streamlined way to purchase/download documents via Stripe. The site is fully mobile-responsive, SEO-optimized, and designed for easy navigation.

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: TailwindCSS
- **Payment Processing**: Stripe
- **Deployment**: Vercel
- **Version Control**: GitHub

## Features

- Responsive design for all devices
- SEO-optimized with proper metadata
- Document purchase system with Stripe integration
- Contact form for inquiries
- Testimonials showcase
- Comprehensive service information

## Local Development

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/Vicsicard/J-L-JENI.git
   cd J-L-JENI
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file with the following variables:
   ```
   STRIPE_PUBLIC_KEY=pk_test_placeholder
   STRIPE_SECRET_KEY=sk_test_placeholder
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

The site is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy from main branch

## Project Structure

```
J&L-JENI/
├── src/
│   ├── app/                  # Next.js app router pages
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── documents/        # Documents page
│   │   ├── services/         # Services page
│   │   ├── testimonials/     # Testimonials page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   ├── components/           # Reusable components
│   │   ├── ContactForm.tsx   # Contact form component
│   │   ├── DocumentTable.tsx # Document purchase table
│   │   ├── Footer.tsx        # Site footer
│   │   └── Navbar.tsx        # Site navigation
├── public/                   # Static assets
│   └── images/               # Image files
├── .env.local                # Environment variables
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # TailwindCSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Future Enhancements

- Add authentication for client portal
- Implement blog/news section
- Add analytics tracking
- Integrate with a CMS for content management
- Set up automated testing

## Content Management

The site content is based on the `jl_management_master_outline.md` document, which provides comprehensive guidelines for the website's structure, content, and design.

## License

Proprietary - All rights reserved by J&L Management.

## Contact

For questions about this project, contact:
- Jeni Carrier: jeni@jandlmanagement.com
