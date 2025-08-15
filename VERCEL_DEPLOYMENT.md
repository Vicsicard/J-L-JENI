# Vercel Deployment Guide for J&L Management Website

This guide walks through the process of deploying the J&L Management website to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (you can sign up with GitHub)
2. Your project pushed to GitHub (already completed)
3. Stripe account (for production deployment)

## Deployment Steps

### 1. Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Select "Import Git Repository" and connect your GitHub account if not already connected
4. Find and select the "J-L-JENI" repository
5. Click "Import"

### 2. Configure Project Settings

On the configuration screen:

1. **Project Name**: Keep the default or customize (e.g., "j-l-management")
2. **Framework Preset**: Ensure "Next.js" is selected
3. **Root Directory**: Leave as `.` (default)
4. **Build and Output Settings**: Leave defaults

### 3. Environment Variables

Add the following environment variables:

```
STRIPE_PUBLIC_KEY=pk_test_placeholder
STRIPE_SECRET_KEY=sk_test_placeholder
```

**Note**: For production, replace these with your actual Stripe API keys.

### 4. Deploy

1. Click "Deploy"
2. Wait for the build and deployment to complete
3. Once deployed, Vercel will provide a URL (e.g., https://j-l-management.vercel.app)

## Post-Deployment Steps

### 1. Verify Deployment

1. Visit your deployment URL
2. Test navigation to ensure all pages load correctly
3. Test the contact form functionality
4. Test the document purchase flow

### 2. Set Up Custom Domain (When Ready)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain (e.g., jandlmanagement.com)
3. Follow Vercel's instructions to configure DNS settings with your domain registrar
4. Wait for DNS propagation (can take up to 48 hours)

### 3. Production Configuration

Before going live with real customers:

1. Update Stripe API keys to production keys
2. Set up proper document storage solution
3. Configure email sending for contact form submissions
4. Set up analytics (Google Analytics, etc.)

## Continuous Deployment

Vercel automatically deploys when changes are pushed to the main branch of your GitHub repository. To make updates:

1. Make changes to your local repository
2. Commit changes: `git commit -m "Description of changes"`
3. Push to GitHub: `git push origin master`
4. Vercel will automatically detect the push and deploy the changes

## Troubleshooting

If you encounter deployment issues:

1. Check the build logs in the Vercel dashboard
2. Ensure all dependencies are correctly specified in package.json
3. Verify environment variables are set correctly
4. Check for any TypeScript errors that might be preventing the build

## Support

For Vercel-specific issues, refer to [Vercel Documentation](https://vercel.com/docs) or contact Vercel support.

For project-specific issues, refer to the project README or contact the development team.
