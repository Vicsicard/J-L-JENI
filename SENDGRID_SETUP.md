# SendGrid Setup for J&L Management Contact Form

This guide will walk you through setting up SendGrid to handle contact form submissions for the J&L Management website.

## SendGrid Free Tier

SendGrid offers a free tier that includes:
- 100 emails per day forever (perfect for a contact form)
- Email API, SMTP Relay, and Marketing Campaigns
- Delivery optimization tools
- Basic reporting and analytics

## Setup Instructions

### 1. Create a SendGrid Account

1. Go to [SendGrid's website](https://sendgrid.com/) and click "Start for Free"
2. Sign up with the following information:
   - Email: jeni@jandlmanagement.com
   - Company: J&L Management
   - Website: jandlmanagement.com
3. Complete the verification process (you'll receive an email to verify your account)

### 2. Verify Your Sender Identity

1. In the SendGrid dashboard, go to Settings → Sender Authentication
2. Click "Verify a Single Sender"
3. Fill in the form with:
   - From Name: J&L Management
   - From Email Address: noreply@jandlmanagement.com (or jeni@jandlmanagement.com if preferred)
   - Company: J&L Management
   - Address, City, State, Zip, Country: Use your business address
4. Follow the verification steps (you'll need to click a link in an email sent to the address)

### 3. Create an API Key

1. In the SendGrid dashboard, go to Settings → API Keys
2. Click "Create API Key"
3. Name it "J&L Management Website Contact Form"
4. Select "Full Access" or "Restricted Access" with Mail Send permissions
5. Click "Create & View"
6. **IMPORTANT**: Copy the API key shown - it will only be displayed once!

### 4. Configure Your Website

1. Create a `.env.local` file in the root of your project (copy from `.env.local.example`)
2. Add your SendGrid API key:
   ```
   SENDGRID_API_KEY=SG.your_copied_api_key_here
   SENDGRID_VERIFIED_SENDER=noreply@jandlmanagement.com
   ```
3. Deploy your website with these environment variables

## Testing

After setup, test the contact form by:
1. Filling out the form on your website
2. Checking that Jeni receives the email at jeni@jandlmanagement.com
3. Verifying the format and content of the email

## Troubleshooting

If emails aren't being received:
1. Check SendGrid's Activity feed for any delivery issues
2. Verify the API key is correctly set in your environment variables
3. Ensure the sender email is properly verified in SendGrid
4. Check your spam/junk folder

## Support

If you need assistance with your SendGrid integration:
- SendGrid Support: https://support.sendgrid.com/
- SendGrid Documentation: https://docs.sendgrid.com/
