# Cardinal Quality Consulting Website Rebuild

## Project Overview

High-converting consulting website for Cardinal Quality Consulting helping product and engineering teams achieve faster insights, predictable releases, and scalable growth.

**Current Site**: https://www.cardinalquality.com  
**Development Preview**: https://cqc-website.vercel.app (will be set up)  
**Production**: NameCheap  
**Calendly**: https://calendly.com/nick-cardinalquality/30min

---

## Deployment Strategy

### Two-Stage Approach

**Stage 1: Development on Vercel**
- Automatic deployments on every git push
- Preview URLs for every branch
- Fast iteration and testing
- Easy to share with stakeholders
- Free for this project

**Stage 2: Production on NameCheap**
- Deploy when ready for public launch
- Your domain: cardinalquality.com
- Full control over hosting
- Static export from Next.js

### Workflow

```
Local Development → GitHub → Vercel (auto-deploy) → Test → Export → NameCheap (production)
```

See `commands/deploy.md` for detailed deployment instructions.

---

## Key Objectives

1. Increase consultation bookings by 3-5x
2. Communicate value proposition in < 5 seconds
3. Build trust through powerful LinkedIn testimonials
4. Reduce friction in booking process
5. Highlight 94% bug reduction achievement
6. Maintain clean, professional aesthetic from current site

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Scheduler**: Calendly embed
- **Development Hosting**: Vercel
- **Production Hosting**: NameCheap (static export)
- **TypeScript**: Yes
- **Version Control**: Git + GitHub

---

## Design System

### Colors

```css
--primary-red: #E94B3C;      /* CTAs, accents */
--light-pink: #F4A5A0;       /* Backgrounds, sections */
--off-white: #F5F5F5;        /* Neutral backgrounds */
--dark-text: #1A1A1A;        /* Body text */
--white: #FFFFFF;            /* Contrast backgrounds */
```

### Typography

- **Font Stack**: System fonts (San Francisco, Segoe UI, Roboto, Ubuntu, sans-serif)
- **Headings**: Bold, large scale, responsive
- **Body**: 16px base, 1.6 line height
- **Mobile**: Minimum 16px (avoid zoom on iOS)

### Spacing

- Container max-width: 1200px
- Section padding: py-16 md:py-24
- Consistent vertical rhythm: space-y-8, space-y-12, space-y-16

### Current Aesthetic

- Clean, modern, spacious
- Bold typography
- Red as primary accent color
- Generous whitespace
- Professional but approachable

---

## Assets Available

### Images

- Location: `/assets/logo.png` (Cardinal logo)
- Location: `/assets/headshot.jpg` (Nick's photo)
- Location: `/assets/old-site/` (Current site screenshots for reference)

### Cannot Use

- Company logos (Google, Fender, etc.) - legal restrictions
- Solution: Text-based "Experience From" section

---

## Site Structure

```
/
├── Navigation (sticky with Book Now CTA)
├── Hero Section
│   ├── Powerful headline
│   ├── Subheadline with 94% metric
│   ├── Primary CTA: Book consultation
│   ├── Secondary CTA: View services
│   └── Professional headshot
├── Experience From Section (text-only)
│   └── Google • Fender • Native Instruments • EastWest • Output
├── Outcomes You Can Achieve
│   ├── Faster Insights
│   ├── Predictable Releases
│   └── Scalable Systems
├── Testimonials Section (LinkedIn recommendations)
│   ├── Ben Inada - Staff Software Engineer, Output
│   ├── Andrew Boscardin - Senior Director of Engineering, Output
│   ├── Andrew Coven - Manager, Output
│   └── Nick Rapattoni - Senior QA Engineer, Output
├── How I Deliver Results
│   ├── Product & User Validation
│   ├── Engineering Leadership
│   ├── Release Systems
│   ├── Test Strategy
│   ├── Build a Quality Culture
│   └── Scaling Teams & Talent
├── Key Achievements (Stats Callout)
│   └── 94% reduction in new bugs
├── What I Offer (Overview)
├── About Me
│   ├── James Clear quote
│   ├── Professional photo
│   ├── 20 years experience narrative
│   └── Systems thinking philosophy
├── Final CTA with Calendly
└── Footer
```

---

## Critical Conversion Elements

### Primary CTAs

1. **Book Free 30-Min Consultation**
   - Calendly link: https://calendly.com/nick-cardinalquality/30min
   - Appears in: Nav, Hero, Sticky button, Mid-page, Final section
   
2. **Sticky Floating Button**
   - Appears after hero scroll
   - Bottom-right position
   - "Book Free Consultation"
   - Opens Calendly modal or scrolls to embed

### Trust Signals

- **20 years experience** at top companies
- **94% bug reduction** metric
- **4 LinkedIn testimonials** from engineers and directors at Output
- **Specific outcomes** in each testimonial
- **Systems-focused** positioning

### Experience Companies (Text Only)

Google • Fender • Native Instruments • EastWest • Output

---

## Testimonials Content

### Full Testimonials

**Ben Inada**, Staff Software Engineer at Output:

"I worked with Nick during his time managing the Quality Assurance team at Output. As one of his many engineering partners, I collaborated with Nick as he introduced a variety of astutely selected tools and techniques that now form the foundation of our ability to deliver numerous music technology products at a high quality bar. Nick's leadership provided us a robust framework of beta testing and continuous feedback that our teams depend on everyday to ensure our products not only meet quality standards but also delight users and produce positive outcomes for the business. Nick's contributions are instrumental to how we operate today, and I am certain that his future contributions will be just as instrumental to any organization lucky to have him in the future."

**Andrew Boscardin**, Senior Director of Engineering at Output:

"I had the pleasure of working closely with Nick during his time as Senior QA Manager at Output. He was a fantastic collaborator with all of the product squads and other Engineering leaders, always bringing a thoughtful and solution-oriented approach to our work. Nick built an effective and engaged QA team that raised the bar for quality across the organization, and he established Output's beta testing program from the ground up — giving us invaluable insight into our products before release. Beyond his technical impact, Nick is a thoughtful leader who genuinely cares about the growth and development of his team. His leadership, attention to detail, and collaborative spirit made a real difference, and I greatly enjoyed working with him."

**Nick Rapattoni**, Senior Quality Assurance Engineer at Output:

"I had the privilege of working under Nick's leadership for the past four years, during which he transformed our QA practice. He built repeatable processes for manual testing, championed test automation, and even implemented Centercode to bridge the gap between beta testers and developers—directly improving backlog prioritization and product direction. As a leader, Nick struck the perfect balance between guidance and autonomy. He encouraged his team to challenge themselves, explore creative solutions, and grow their skills, all while staying on top of release schedules. He cared deeply about our career paths, enabling us to stretch our abilities through education and hack-day style ideation sessions that inspired innovation and collaboration. Nick's holistic approach to quality—considering the customer, the developer, and the team—made a lasting impact. His leadership style not only improved our processes but also fostered a culture of trust, growth, and excellence. Any organization would be fortunate to have him at the helm of their QA practice."

**Andrew Coven**, Manager at Output:

"Nick and I worked together at Output, and you'd be hard-pressed to find a more human- and customer-centered leader. He didn't just help Output grow and launch the best ethical AI product in music—Output Co-Producer—he also became an expert in Centercode. He was the central hub for filtering hundreds of customers into our beta program and maintaining strong relationships with them through town halls and direct engagement, ensuring real connection between our customers and our company. Nick was also a champion of new technologies, especially in using AI to reduce repetitive drudgery so his team could focus on the most impactful work. Most importantly, he was a flag-bearer for quality. He had the courage to hit the red HALT button when necessary, and the pragmatism to balance quality with execution so that we could deliver at the highest standard in the right amount of time. I wholeheartedly recommend Nick for any role that demands thoughtful, customer-centered leadership. I hope to work with him again in the future."

### Pull Quotes

- "Nick's contributions are instrumental to how we operate today." — Ben Inada
- "A thoughtful leader who genuinely cares about the growth and development of his team." — Andrew Boscardin
- "Built repeatable processes, championed test automation, bridged the gap between beta testers and developers." — Nick Rapattoni
- "You'd be hard-pressed to find a more human- and customer-centered leader." — Andrew Coven

---

## Key Achievements to Highlight

### Organizational Leadership and Systems Thinking

- Built QA organizations from the ground up, establishing team structures, hiring processes, career frameworks, and cross-functional collaboration models that scaled with company growth
- Led organizational transformations introducing company-wide quality standards, integrated workflows, and adoption of modern QA practices across engineering, product, and design teams
- Defined clear performance standards, set SMART goals, and coached teams through feedback that turned underperformance into measurable improvement

### User Validation Systems and Product Partnership

- Built company-wide user validation systems adopted across departments, making user feedback a shared input for roadmap and launch decisions
- Recruited and managed beta programs whose insights shaped MVP scope, improved feature quality, and reduced post-release issues

### Release Confidence and Risk Assessment

- Designed release confidence scorecards and dashboards connecting test coverage, regression trends, and user sentiment to clear go/no-go decisions
- Established KPI frameworks tracking regressions, coverage, and beta satisfaction, **achieving a 94% reduction in new bugs** through structured test plans, cross-functional collaboration, and proactive prevention

### Strategic Automation and Quality Infrastructure

- Led automation strategy and implementation across multiple platforms, selecting frameworks, establishing CI/CD integration, and scaling coverage from zero to hundreds of tests
- Selected and implemented QA tooling ecosystems integrated into development workflows to standardize testing, reporting, and incident response

---

## Content Principles

### Voice & Tone

- Professional but approachable
- Confident without arrogance
- Systems-focused and practical
- Outcome-driven
- Free of jargon and buzzwords

### Target Audience

- SaaS founders facing release chaos
- Engineering managers dealing with quality issues
- Product directors seeking faster feedback
- VPs of Engineering scaling teams
- CTOs at growth-stage companies

### Pain Points to Address

- Release unpredictability
- Quality blind spots
- Slow validation cycles
- Scaling challenges
- Team process friction
- Bug regression nightmares

### Key Messages

1. **20 years building systems** at world-class companies
2. **94% reduction in bugs** through structured approaches
3. **Proven frameworks** that make success repeatable
4. **Holistic thinking**: customer, developer, team
5. **Beta programs and user validation** expertise
6. **Automation and tooling** strategy
7. **Leadership and coaching** that scales teams

---

## Development Guidelines

### Performance

- Optimize for Core Web Vitals
- Lazy load images
- Minimize JavaScript bundle
- Static generation where possible
- Target: < 3 second load on 4G

### Accessibility

- WCAG AA minimum
- Semantic HTML
- Keyboard navigation
- Screen reader friendly
- Color contrast compliance
- Focus indicators on interactive elements

### Mobile-First

- Responsive at all breakpoints (320px → 1920px)
- Touch-friendly CTAs (minimum 44x44px)
- Fast mobile load times
- Simplified mobile navigation
- Test on actual devices

### SEO

- Semantic HTML structure
- Meta descriptions (140-160 chars)
- Open Graph tags
- Schema markup for consulting service
- Alt text on all images
- Fast page loads

---

## Testing & Validation

### Conversion Flow Testing

See `commands/test-flow.md` for user journey testing:
1. Landing → Understanding value (< 5 seconds)
2. Exploring services/testimonials
3. Building trust
4. Clicking primary CTA
5. Booking via Calendly
6. Mobile experience

### Mobile Experience

See `commands/mobile-check.md` for mobile validation checklist

### Performance Testing

- Google PageSpeed Insights (target: 90+)
- WebPageTest on 4G
- Real device testing (iOS Safari, Android Chrome)
- Lighthouse scores (Performance, Accessibility, Best Practices, SEO)

---

## Success Metrics

Track via analytics:
- **Booking rate**: % of visitors who book consultation (target: 5-8%)
- **Time to CTA**: How long before first CTA click
- **Scroll depth**: Do they see testimonials?
- **Bounce rate**: < 40% target
- **Mobile vs Desktop**: Conversion rate comparison
- **Traffic sources**: Which channels convert best

---

## Questions ANSWERED ✓

- [x] Professional photos available? YES - in /assets/
- [x] Company logos with permission? NO - use text-based approach
- [x] Testimonials ready to use? YES - 4 powerful LinkedIn recommendations
- [x] Metrics to highlight? YES - 94% bug reduction
- [x] Video introduction desired? NO - not now
- [x] Downloadable guide content? NO - not now
- [x] Calendly account details? YES - https://calendly.com/nick-cardinalquality/30min
- [x] Preferred font choices? System font stack
- [x] Domain/hosting? NameCheap production, Vercel development
- [x] Current site reference? https://www.cardinalquality.com

---

## Build Priority Order

1. ✅ Project setup (Next.js + Tailwind + GitHub)
2. ✅ Connect to Vercel for auto-deployment
3. ✅ Design system (colors, typography, spacing)
4. 🎯 **Hero section** (MOST CRITICAL)
5. Navigation with sticky CTA
6. Experience From section (text-based)
7. Testimonials section (LinkedIn recommendations)
8. Outcomes section
9. Key achievements callout (94% stat)
10. Services section
11. About Me section
12. Final CTA with Calendly
13. Sticky floating CTA button
14. Footer
15. Mobile optimization
16. Performance optimization
17. Final testing on Vercel
18. Deploy to NameCheap production

---

## When Building, Always Ask

1. Does this help visitors book a consultation?
2. Is the value clear immediately?
3. Are we reducing friction?
4. Does this build trust?
5. Is it mobile-friendly?
6. Is it fast and accessible?
7. Can I test this on Vercel before pushing to production?

**The goal**: Turn visitors into booked consultations through clarity, credibility, and a frictionless path to action.

---

## Quick Commands

```bash
# Development
npm run dev                 # Local dev server (http://localhost:3000)
npm run build              # Production build
npm run export             # Export static files to out/

# Git/Deployment
git push                   # Auto-deploys to Vercel
git push origin [branch]   # Creates branch preview on Vercel

# Testing
npm run lint              # Check for errors
npm run type-check        # TypeScript validation (if using)
```

---

## File Structure

```
cqc-website/
├── app/
│   ├── page.tsx          # Main homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Testimonials.tsx
│   ├── Services.tsx
│   ├── AboutMe.tsx
│   └── Footer.tsx
├── public/
│   └── assets/
│       ├── logo.png
│       ├── headshot.jpg
│       └── old-site/
├── commands/
│   ├── deploy.md
│   ├── mobile-check.md
│   └── test-flow.md
├── next.config.js        # Next.js config (includes export settings)
├── tailwind.config.js    # Tailwind config (includes color palette)
├── package.json
├── CLAUDE.md            # This file
└── README.md
```

---

## Agent Workflow

This project uses specialized agents for different tasks:

1. **cqc-site-builder**: Main building agent, creates components and structure
2. **design-system-manager**: Maintains consistency, manages design tokens
3. **content-writer**: Writes compelling, conversion-focused copy
4. **conversion-optimizer**: Reviews and suggests improvements

Use agents in sequence:
1. Build with cqc-site-builder
2. Review with conversion-optimizer
3. Refine copy with content-writer
4. Ensure consistency with design-system-manager

---

**Remember**: Develop on Vercel (fast, easy), launch on NameCheap (your domain). Test everything on Vercel before pushing to production.
