# Katrina Paula Inajenes — Portfolio Website

A premium, minimalist portfolio site built for Accounts Receivable, Billing, Collections,
Reconciliation, and Financial Operations roles.

## Tech Stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling (custom navy / charcoal / soft-blue palette)
- **Framer Motion** for animations (fade-ins, slide-ups, hover micro-interactions)
- **lucide-react** for icons
- **next-themes** for dark / light mode

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata, theme provider, JSON-LD
  page.tsx           Assembles all page sections
  globals.css        Tailwind layers, glass/gradient utilities
  loading.tsx         Branded loading animation (route transitions)
components/
  Navbar.tsx           Sticky glass navigation + mobile menu
  ScrollProgress.tsx   Top scroll-progress bar
  BackToTop.tsx        Floating back-to-top button
  ThemeToggle.tsx      Light / dark mode switch
  AnimatedCounter.tsx  Count-up stat component
  Hero.tsx             Landing section with animated gradient background
  About.tsx            About Me narrative + quick facts
  ExperienceTimeline.tsx  Animated work history timeline
  Skills.tsx           Skill categories + competency bars
  CoreExpertise.tsx    Expertise card grid
  Achievements.tsx     Animated stat cards
  WhyHireMe.tsx        Recruiter-facing strengths section
  ResumeDownload.tsx   Resume CTA banner
  Contact.tsx          Contact info + message form
  Footer.tsx           Minimal footer with social links
lib/
  data.ts              All resume-derived content, typed and centralized
public/
  resume.pdf           Downloadable CV
```

## Customizing Content

All copy lives in `lib/data.ts` — update experience, skills, achievements, and contact
details there without touching component code.

## Customizing Design

- Colors: `tailwind.config.ts` (`navy`, `charcoal`, `softblue`, `paper`, `mist`)
- Fonts: `app/layout.tsx` (Inter via `next/font/google`)
- Glass / gradient utilities: `app/globals.css` (`.glass`, `.glass-card`, `.btn-primary`, `.btn-secondary`)

## SEO

Metadata, Open Graph tags, and a `Person` JSON-LD structured data block are configured in
`app/layout.tsx`. Update `metadataBase` with your real production domain before deploying,
and add an `og-image.jpg` (1200×630) to `public/` for social share previews.

## Deployment

This project deploys directly to [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or connect the repository in the Vercel dashboard for automatic deploys on every push.
