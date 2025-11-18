# Google Analytics 4 Setup Guide

## Why GA4?

- **100% FREE** with unlimited traffic
- Works on **any hosting** (Vercel, NameCheap, anywhere)
- Track consultation bookings and conversions
- Learn GCP through BigQuery integration
- Industry-standard analytics

---

## Part 1: Create Your GA4 Account (5 minutes)

### Step 1: Go to Google Analytics

1. Visit: https://analytics.google.com
2. Sign in with your Google account (personal or business email)

### Step 2: Create Account

1. Click **"Start measuring"**
2. **Account name**: "Cardinal Quality Consulting"
3. Check all the data sharing options (recommended)
4. Click **"Next"**

### Step 3: Create Property

1. **Property name**: "Cardinal Quality Website"
2. **Reporting time zone**: Your timezone
3. **Currency**: USD
4. Click **"Next"**

### Step 4: Business Information

1. **Industry**: Professional Services
2. **Business size**: Small (1-10 employees)
3. Click **"Next"**

### Step 5: Business Objectives

Select these (helps GA4 give you relevant reports):
- ✅ Generate leads
- ✅ Examine user behavior

Click **"Create"** → Accept Terms of Service

### Step 6: Set Up Data Stream

1. Select **"Web"**
2. **Website URL**: `https://www.cardinalquality.com`
3. **Stream name**: "Cardinal Quality Website"
4. Click **"Create stream"**

### Step 7: Get Your Measurement ID

You'll see a screen with your **Measurement ID** - looks like:
```
G-XXXXXXXXXX
```

**COPY THIS!** You'll need it in the next step.

---

## Part 2: Add Measurement ID to Your Site (2 minutes)

### For Local Development:

1. Create a file called `.env.local` in your project root:

```bash
cd /home/user/site
touch .env.local
```

2. Add this line (replace with YOUR measurement ID):

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Restart your dev server:

```bash
npm run dev
```

### For Vercel Deployment:

1. Go to your Vercel dashboard: https://vercel.com
2. Select your project: **cardinal-quality-consulting**
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Key**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX` (your measurement ID)
   - **Environment**: All (Production, Preview, Development)
5. Click **"Save"**
6. **Redeploy** your site (Vercel → Deployments → Click ⋯ → Redeploy)

### For NameCheap Production:

When you export your site for NameCheap, the measurement ID will be built into the static files automatically from your environment variable.

---

## Part 3: How to Use Google Analytics 4

### Dashboard Overview

Go to https://analytics.google.com and you'll see:

#### **Home** (Your Main Dashboard)
- **Users**: How many people visited
- **Sessions**: How many visits total (one person can have multiple sessions)
- **New vs Returning**: Are people coming back?
- **User acquisition**: Where traffic comes from (Google, LinkedIn, direct, etc.)

#### **Reports** → **Real-time**
- See visitors RIGHT NOW
- Which pages they're on
- Where they came from
- Great for testing!

#### **Reports** → **Acquisition** → **Traffic acquisition**
- **Most important for you!**
- Shows which channels bring traffic:
  - Organic Search (Google)
  - Direct (typed URL or bookmark)
  - Social (LinkedIn, Twitter)
  - Referral (other websites linking to you)
  - Email (if you send newsletters)

#### **Reports** → **Engagement** → **Pages and screens**
- Which pages get the most views?
- How long do people stay?
- Which pages do people leave from?

#### **Reports** → **Engagement** → **Events**
- **This is where you track conversions!**
- Our custom events will show here:
  - `consultation_click` - Someone clicked "Book Consultation"
  - `calendly_open` - Calendly modal opened
  - `service_view` - Someone viewed a service section

---

## Part 4: Track Consultation Bookings (Your Key Metric!)

### What We Already Set Up

I added custom event tracking for you. Here's how to use it:

### In Any Component:

```typescript
import { trackConsultationClick, trackCalendlyOpen } from '@/components/analytics/GoogleAnalytics';

// Track when someone clicks "Book Consultation"
<button onClick={() => {
  trackConsultationClick('hero'); // or 'nav', 'sticky', 'footer'
  // ... open Calendly
}}>
  Book Free Consultation
</button>

// Track when Calendly actually opens
<CalendlyEmbed onOpen={() => trackCalendlyOpen()} />
```

### View Conversion Data in GA4:

1. Go to **Reports** → **Engagement** → **Events**
2. You'll see:
   - `consultation_click` - How many CTA clicks?
   - `calendly_open` - How many actually opened the booking form?
   - `page_view` - Total page views

3. **Calculate your conversion rate**:
   ```
   Conversion Rate = (calendly_open / page_view) × 100
   ```

   Goal: 5-8% conversion rate

### Set Up a Conversion in GA4:

1. **Admin** (bottom left) → **Events**
2. Find `calendly_open` event
3. Toggle **"Mark as conversion"** ON
4. Now GA4 will treat Calendly opens as conversions!

5. View in **Reports** → **Engagement** → **Conversions**

---

## Part 5: Advanced - BigQuery for GCP Learning (Optional)

Want to learn GCP and run SQL queries on your analytics data? Set up BigQuery!

### What is BigQuery?

- Google's data warehouse (part of GCP)
- Run SQL queries on your GA4 data
- **Free tier**: 10GB storage, 1TB queries/month (plenty for this site)
- Great learning opportunity!

### Setup:

1. In GA4, go to **Admin** → **BigQuery Linking**
2. Click **"Link"**
3. Choose **"Export all data"** (free tier is fine)
4. Select your GCP project or create new one
5. Dataset location: US
6. Click **"Submit"**

### Example Queries You Can Run:

```sql
-- Most viewed pages yesterday
SELECT
  event_date,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') AS page,
  COUNT(*) as page_views
FROM `your-project.analytics_XXXXX.events_*`
WHERE event_name = 'page_view'
  AND _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
GROUP BY event_date, page
ORDER BY page_views DESC;

-- Conversion funnel
SELECT
  event_name,
  COUNT(*) as event_count
FROM `your-project.analytics_XXXXX.events_*`
WHERE event_name IN ('page_view', 'consultation_click', 'calendly_open')
  AND _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY))
                        AND FORMAT_DATE('%Y%m%d', CURRENT_DATE())
GROUP BY event_name
ORDER BY event_count DESC;
```

### Learning Resources:

- BigQuery Console: https://console.cloud.google.com/bigquery
- GA4 BigQuery Export Schema: https://support.google.com/analytics/answer/7029846
- BigQuery SQL Reference: https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax

---

## Part 6: Key Metrics to Watch

### Weekly Check (5 minutes):

1. **Users** - How many visitors this week?
2. **Traffic source** - Where are they coming from?
3. **consultation_click** events - How many CTA clicks?
4. **calendly_open** events - How many opened booking form?
5. **Conversion rate** - calendly_open / users

### Monthly Deep Dive (30 minutes):

1. **User acquisition** - Which channels work best?
2. **Pages and screens** - Which pages get most engagement?
3. **User retention** - Are people coming back?
4. **Demographics** - Age, gender, location (if enabled)
5. **Technology** - Desktop vs mobile, browsers, devices

### What Success Looks Like:

- **5-8% conversion rate** (calendly opens / page views)
- **Avg session 2+ minutes** (they're reading, not bouncing)
- **2-3 pages/session** (they're exploring your services)
- **Organic search growing** month over month
- **LinkedIn referrals** if you're posting there

---

## Testing Your Setup

### Before Going Live:

1. **Test locally**:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

2. **Open GA4 Real-time report**:
   https://analytics.google.com → Reports → Real-time

3. **Navigate your site** - you should see yourself in real-time!

4. **Click "Book Consultation"** - check for `consultation_click` event

5. **Wait 24 hours** - full reports take 24-48 hours to populate

### On Vercel:

1. After adding environment variable and redeploying
2. Visit your Vercel preview URL
3. Check GA4 Real-time again
4. Should see traffic from your preview domain

### On NameCheap:

1. Once exported and deployed
2. Visit cardinalquality.com
3. Check GA4 - should see your production domain

---

## Troubleshooting

### "No data showing up"

1. Wait 24-48 hours (GA4 is not instant for full reports)
2. Check Real-time reports (these are instant)
3. Verify measurement ID is correct
4. Check browser console for errors (F12)
5. Make sure ad blockers are off when testing

### "Events not tracking"

1. Check browser console for errors
2. Verify events are called in code
3. Test in Incognito mode (some extensions block tracking)
4. Check GA4 Real-time → Events (shows instantly)

### "Different numbers on Vercel vs GA4"

- Normal! They track differently
- Vercel counts page loads
- GA4 counts sessions (smarter)
- Use GA4 for business decisions

---

## Privacy & GDPR

GA4 is privacy-focused by default:

- IP anonymization built-in
- Cookie consent not required for basic analytics (but recommended)
- Users can opt out via browser settings
- No personal data collected

If you want to add a cookie banner later, search for "react-cookie-consent" package.

---

## Quick Reference

### Important URLs:

- **GA4 Dashboard**: https://analytics.google.com
- **Real-time Data**: Reports → Real-time
- **Traffic Sources**: Reports → Acquisition → Traffic acquisition
- **Events**: Reports → Engagement → Events
- **Conversions**: Reports → Engagement → Conversions
- **BigQuery Console**: https://console.cloud.google.com/bigquery

### Your Setup:

- **Measurement ID**: `G-XXXXXXXXXX` (replace with yours)
- **Environment Variable**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- **Custom Events**:
  - `consultation_click` - CTA button clicks
  - `calendly_open` - Booking form opened
  - `service_view` - Service section viewed

### Next Steps:

1. ✅ Create GA4 account
2. ✅ Add measurement ID to `.env.local`
3. ✅ Add measurement ID to Vercel environment variables
4. ⏳ Deploy and test
5. ⏳ Wait 24 hours for data
6. ⏳ Set up conversion tracking for `calendly_open`
7. 📊 Check weekly metrics
8. 🎓 (Optional) Set up BigQuery for GCP learning

---

**Questions?** Check the GA4 Help Center: https://support.google.com/analytics

**Ready to track real business insights!** 🚀
