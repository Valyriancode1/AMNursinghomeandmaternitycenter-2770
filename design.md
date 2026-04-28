# Design System — A.M Nursing Home & Maternity Center

## Brand Identity
- **Name**: A.M Nursing Home & Maternity Center
- **Tagline**: "Caring for Every Life, Every Step of the Way"
- **Personality**: Trustworthy, warm, professional, compassionate

## Color Palette
- **Primary (Deep Teal)**: `#0B6E6E` — headers, buttons, nav
- **Primary Dark (Navy)**: `#0D2B45` — footer, dark sections
- **Accent (Rose/Coral)**: `#E8567A` — CTAs, highlights, maternity warmth
- **Accent Light**: `#FDE8EE` — rose tints, soft backgrounds
- **Teal Light**: `#E0F4F4` — teal section backgrounds
- **Neutral Off-White**: `#F9FAFB`
- **Light Grey**: `#EFF2F6`
- **Text Dark**: `#1A2332`
- **Text Muted**: `#6B7280`

## Typography
- **Display/Headings**: `Playfair Display` — serif, elegant, trustworthy
- **Body/UI**: `DM Sans` — clean, highly legible
- **Heading scale**: 3xl (hero) → 2xl (section) → xl (card titles) → base (body)

## Spacing
- Section padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## Components Style
- **Buttons**: Rounded-full, solid rose (primary CTA), outline teal (secondary)
- **Cards**: White bg, subtle shadow `shadow-md hover:shadow-xl`, rounded-2xl, border-none
- **Section headers**: centered, Playfair Display, teal accent underline
- **Icons**: Lucide React, teal color
- **Gradients**: `from-[#0D2B45] via-[#0B6E6E] to-[#1a8a8a]` — hero/dark sections

## Layout Principles
- Full-width sections with alternating light/white/teal backgrounds
- Asymmetric content blocks with image offset
- Max 7xl container, generous padding
- Mobile-first responsive (hamburger nav on mobile)

## Motion
- Fade-in + translateY on scroll reveal for section entries
- Staggered card reveals
- Smooth hover transitions on cards/buttons (200ms ease)
