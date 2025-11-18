# Cardinal Quality Consulting Website

High-converting consulting website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build the site
npm run build

# The build outputs to .next/
```

### Export Static Site (for NameCheap)

```bash
# Export static files
npm run build

# Static files will be in out/ directory
# Upload contents of out/ to NameCheap public_html/
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Scheduler**: Calendly
- **Analytics**: Vercel Analytics (free tier)
- **Hosting**:
  - Development: Vercel (auto-deploy)
  - Production: NameCheap (static export)

## 🎨 Design System

### Colors

- **Primary Red**: `#E94B3C` - CTAs, accents, highlights
- **Light Pink**: `#F4A5A0` - Backgrounds, soft sections
- **Off-White**: `#F5F5F5` - Neutral backgrounds
- **Dark Text**: `#1A1A1A` - Body text, headings
- **White**: `#FFFFFF` - Contrast backgrounds

### Typography

- System font stack for optimal performance
- Bold headings with large scale
- 16px base, 1.6 line height
- Mobile minimum 16px (prevents iOS zoom)

### Spacing

- Container max-width: 1200px
- Section padding: py-16 md:py-24
- Consistent vertical rhythm

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large Desktop: 1200px+ (container max-width)

## 🔗 Key Links

- **Calendly**: https://calendly.com/nick-cardinalquality/30min
- **Current Site**: https://www.cardinalquality.com
- **Vercel Preview**: Will auto-deploy on push

## 📄 Site Structure

1. **Navigation** - Sticky header with Book Now CTA
2. **Hero** - "Ship Faster. Build Smarter. Scale Confidently."
3. **Experience From** - Text-based company list (Google, Fender, etc.)
4. **Outcomes** - 3 key benefits (Faster Insights, Predictable Releases, Scalable Systems)
5. **Testimonials** - 4 LinkedIn recommendations (expandable)
6. **Services** - 6 service areas in grid layout
7. **Key Achievements** - Stats callout (94% bug reduction)
8. **About Me** - James Clear quote + professional narrative
9. **Final CTA** - Inline Calendly embed
10. **Footer** - Links and contact
11. **Sticky Floating CTA** - Appears after scrolling past hero

## 🎯 Conversion Elements

### Primary CTAs (All Link to Calendly)

- Navigation: "Book Free Consultation"
- Hero: "Book Free 30-Min Consultation" (primary)
- Hero: "View Services" (secondary, smooth scroll)
- Each Service: "Book a Call →"
- About: "Let's Talk About Your Challenges"
- Final Section: Inline Calendly embed
- Sticky Floating Button: "Book Free Consultation" (bottom-right)

### Trust Signals

- **20 years** experience at top companies
- **94% bug reduction** metric (highlighted multiple times)
- **4 LinkedIn testimonials** from engineers and directors
- **Specific outcomes** in each section
- **Systems-focused** positioning

## 🚢 Deployment

### Vercel (Development/Staging)

1. **Initial Setup** (one time):
   - Sign in to Vercel with GitHub
   - Import this repository
   - Click Deploy (zero config needed)

2. **Every Push**:
   - Automatic deployment on every push
   - Preview URL for every branch
   - Main branch deploys to production URL

### NameCheap (Production)

When ready for public launch:

```bash
# 1. Build and export
npm run build

# 2. Upload contents of out/ to NameCheap
# Use FTP/SFTP or cPanel File Manager
# Upload to: public_html/

# 3. Verify at https://www.cardinalquality.com
```

See `.claude/commands/deploy.md` for detailed deployment instructions.

## 📊 Analytics

Vercel Analytics is included (free tier):
- Page views
- Unique visitors
- Top pages
- Referrers
- Devices (mobile vs desktop)

Access analytics in Vercel dashboard after deployment.

### Key Metrics to Track

- **Booking conversion rate**: % of visitors who click Calendly CTA
- **Scroll depth**: Do visitors see testimonials?
- **Time to first CTA click**: How long before engagement?
- **Mobile vs Desktop**: Conversion comparison
- **Bounce rate**: Target < 40%

## 🧪 Testing Checklist

Before deploying to production:

- [ ] All CTAs link to Calendly correctly
- [ ] Calendly embed loads and works
- [ ] Mobile responsive (test on real device)
- [ ] Navigation smooth scroll works
- [ ] Testimonials expand/collapse
- [ ] All images load
- [ ] Sticky floating CTA appears after hero scroll
- [ ] Load time < 3 seconds on 4G
- [ ] No console errors
- [ ] Lighthouse score 90+ (Performance, Accessibility, SEO)

## 📝 Content Updates

### To Update Content

1. **Hero Headline**: Edit `components/Hero.tsx`
2. **Services**: Edit `components/Services.tsx`
3. **Testimonials**: Edit `components/Testimonials.tsx`
4. **About Section**: Edit `components/About.tsx`
5. **Outcomes**: Edit `components/Outcomes.tsx`

### To Change Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  'primary-red': '#E94B3C',  // Change here
  'light-pink': '#F4A5A0',
  // ...
}
```

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server locally
npm run lint            # Run ESLint

# Deployment
git push                # Auto-deploys to Vercel
```

## 📞 Support

For questions about this website build, refer to:
- `.claude/CLAUDE.md` - Full project requirements
- `.claude/commands/deploy.md` - Deployment guide
- `.claude/commands/mobile-check.md` - Mobile testing
- `.claude/commands/test-flow.md` - Conversion flow testing

## ✅ Success Criteria

- Clear value proposition visible in < 5 seconds ✓
- Multiple CTAs without feeling pushy ✓
- Trust signals (testimonials, metrics, experience) ✓
- Mobile-first, fast loading ✓
- Inline Calendly for frictionless booking ✓
- 94% metric prominently featured ✓
- Professional yet approachable tone ✓

**Goal**: Turn visitors into booked consultations through clarity, credibility, and a frictionless path to action.

---

Built with ❤️ for Cardinal Quality Consulting
