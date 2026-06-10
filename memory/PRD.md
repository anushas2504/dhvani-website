# Dhvani — Digital Marketing Studio Website

## Original Problem Statement
"design a website based on the portfolio attached" — PDF supplied was the portfolio of **Dhvani**, a boutique digital marketing studio (SEM, SMM, SEO, Website Designing) based in Vijayawada, specializing in concert marketing for Indian artists touring the USA, plus couture and showroom clients.

## User Choices
- Full-stack site: working Contact Us form persisting leads to MongoDB + admin view
- Visual: bold editorial (cream/navy/gold, Playfair Display + Outfit) blended with a tech-startup polish
- Sections: Welcome, About Us, Our Vision, Our Mission, Our Service, Our Work Reference, Contact Us
- WhatsApp click-to-chat integration (+91 90592 94740)

## Architecture
- **Backend**: FastAPI + Motor + MongoDB
  - `GET /api/` health
  - `POST /api/leads`, `GET /api/leads`, `GET /api/leads/count`, `DELETE /api/leads/{id}`
  - Pydantic `Lead` model (uuid id, EmailStr, ISO timestamps)
- **Frontend**: React (CRA + craco), Tailwind, shadcn UI, sonner toaster, lucide-react icons
  - Routes: `/` (Home) and `/admin` (Lead inbox)
  - Components: Header (sticky glass), Hero (editorial split), About, Vision/Mission (split cards), Services (4-card bento), Work (alternating case-studies with metrics), Contact (line-input form on navy bg), Footer, Floating WhatsApp button
- **Design tokens**: navy `#0A192F`, cream `#FDFBF7`, gold `#D4AF37`, alt `#F3F0EA`

## Implemented (2026-06-10)
- Editorial hero with marquee, masked arch image, USA/India badges
- About section with stats (years/tours/ROAS/referrals)
- Vision/Mission split with navy + cream cards
- Services bento (SEM/SMM/SEO/Web) with hover-to-navy interaction
- Work showcase with concert/bridal/car care case studies + metrics + client wall
- Contact form (name/email/phone/service/message) wired to `POST /api/leads`
- `/admin` lead inbox with refresh + delete
- Floating WhatsApp pulse button → `wa.me/919059294740`
- Sonner toast notifications (success/error)
- All interactive elements carry `data-testid`

## Tested
- Backend pytest: 7/7 passing (`/app/backend/tests/test_leads_api.py`)
- Full Playwright E2E flow: form submission → success toast → lead appears in `/admin` → delete

## Backlog (P1/P2)
- P1: Resend email notification on new lead (requires Resend API key)
- P1: Basic password protection for `/admin`
- P2: Animated entrance reveals on scroll, lightbox case-study modals
- P2: Blog / SEO content section, sitemap.xml, OG image
- P2: Replace `window.confirm` in Admin with styled dialog

## Tech Notes
- No external integrations beyond WhatsApp click-to-chat (no API key needed)
- CORS currently `*`; tighten in production
