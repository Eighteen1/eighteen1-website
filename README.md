# Eighteen1 Studios Website

The official website for [Eighteen1 Studios](https://eighteen1.com) — a mobile app development studio based in Germany.

Built with **Next.js**, **Tailwind CSS**, hosted on **Vercel**, with a **Supabase** backend for contact form submissions.

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- A [Supabase](https://supabase.com) project (free tier is fine)

### Local Development

```bash
# Install dependencies
npm install

# Copy environment template and fill in your values
cp .env.local.example .env.local

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    page.tsx          # Home
    projects/         # Our Projects
    car-cult/         # Car Cult brand page
    contact/          # Contact form
    privacy/          # Privacy Policy
    terms/            # Terms of Service
    delete-data/      # Delete User Data
  components/
    Navbar.tsx        # Responsive navigation
    Footer.tsx        # Site footer
    ProjectCard.tsx   # Reusable project card
    ContactForm.tsx   # Contact form with Supabase integration
supabase/
  migrations/         # SQL for the contact_requests table
  functions/          # Supabase Edge Function for form submissions
```

## Supabase Setup

### 1. Create the database table

Run the SQL from `supabase/migrations/001_contact_requests.sql` in your Supabase SQL Editor:

```sql
CREATE TABLE contact_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;
```

### 2. Deploy the Edge Function

```bash
# Install the Supabase CLI if you haven't already
npm install -g supabase

# Link to your project
supabase link --project-ref <your-project-ref>

# Deploy the function
supabase functions deploy submit-contact
```

### 3. Set the environment variable

Your Edge Function URL will be:

```
https://<your-project-ref>.supabase.co/functions/v1/submit-contact
```

Add this to `.env.local` (locally) and to your Vercel project environment variables (for production).

## Deploying to Vercel

1. Push this repo to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add the environment variable `NEXT_PUBLIC_SUPABASE_FUNCTION_URL` in Vercel project settings
4. Deploy

### Custom Domain

1. In Vercel, go to **Settings → Domains** and add `eighteen1.com` (and `www.eighteen1.com`)
2. Update DNS records at your domain registrar to point to Vercel (Vercel provides the exact A/CNAME records)
3. SSL is handled automatically by Vercel

## Images

Place your images in `public/images/`. Suggested assets:

- `logo.png` — Eighteen1 Studios logo
- App screenshots for Car Sounds, Car Quiz, Motorcycle Sounds
- Hero background image (optional)

## Legal Pages

Replace the placeholder text in these files with your actual content:

- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`
- `src/app/delete-data/page.tsx`
