# Deployment Guide

## Two-Stage Deployment Strategy

**Development**: Vercel (automatic, fast, shareable previews)  
**Production**: NameCheap (your domain, when ready to launch)

---

## Part 1: Development on Vercel

### Initial Setup (One Time)

```bash
# 1. Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit - Cardinal Quality Consulting"

# 2. Create GitHub repository
# Go to github.com → New Repository → "cqc-website"
# Then connect:
git remote add origin https://github.com/YOUR_USERNAME/cqc-website.git
git branch -M main
git push -u origin main

# 3. Connect to Vercel
# Visit vercel.com
# Sign in with GitHub
# Click "Add New Project"
# Import "cqc-website" repository
# Click "Deploy" (no configuration needed)
```

### Everyday Development Workflow

```bash
# Make your changes locally
# Test with: npm run dev

# When ready to preview:
git add .
git commit -m "Updated hero section with 94% metric"
git push

# Vercel automatically:
# ✅ Builds your site
# ✅ Deploys to https://cqc-website.vercel.app
# ✅ Shows deployment status
# ✅ Provides preview URL

# Check deployment:
# Visit your Vercel dashboard or click the GitHub deployment link
```

### Feature Branch Previews

```bash
# Create a branch for testing
git checkout -b test-new-testimonials

# Make changes, commit, push
git add .
git commit -m "Testing new testimonial layout"
git push origin test-new-testimonials

# Vercel creates unique preview URL:
# https://cqc-website-git-test-new-testimonials.vercel.app

# Share this URL for feedback
# Keep main branch clean
```

---

## Part 2: Production on NameCheap

### When to Deploy to Production

Only deploy to NameCheap when:
- ✅ Site is thoroughly tested on Vercel
- ✅ All stakeholders have approved
- ✅ Mobile experience is perfect
- ✅ Calendly integration works flawlessly
- ✅ Ready for public launch

### Build for Production

```bash
# 1. Ensure you're on the main branch
git checkout main
git pull

# 2. Build and export static site
npm run build
npm run export

# This creates 'out/' directory with static HTML, CSS, JS, images
```

### Upload to NameCheap

**Option A: FTP/SFTP (Recommended)**

```bash
# Using an FTP client (FileZilla, Cyberduck, Transmit):

Host: ftp.cardinalquality.com (or IP from NameCheap)
Username: [from NameCheap cPanel]
Password: [from NameCheap cPanel]
Port: 21 (FTP) or 22 (SFTP)

# Steps:
1. Connect to NameCheap hosting
2. Navigate to /public_html/
3. Upload ALL contents from /out/ directory
4. Ensure .htaccess is present (see below)
5. Set file permissions: 644 for files, 755 for folders
```

**Option B: cPanel File Manager**

```bash
1. Log into NameCheap cPanel
2. Open "File Manager"
3. Navigate to public_html/
4. Click "Upload"
5. Select all files from out/ directory
6. Upload
7. If you uploaded a zip, extract it
```

### Configure .htaccess

Create or update `.htaccess` in public_html/:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 day"
</IfModule>

# SPA Routing
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Verify Production Deployment

Visit https://www.cardinalquality.com and verify:

- [ ] Site loads correctly
- [ ] Hero section displays properly
- [ ] All images load
- [ ] Testimonials section works
- [ ] Services section interactive
- [ ] Calendly embed functional
- [ ] All CTAs clickable
- [ ] Mobile responsive
- [ ] SSL/HTTPS active
- [ ] No console errors (F12)
- [ ] Fast load time (< 3 seconds)

---

## Updating Production

When you want to update the live site:

```bash
# 1. Make changes locally
# 2. Push to GitHub (tests on Vercel automatically)
git add .
git commit -m "Updated testimonials section"
git push

# 3. Verify on Vercel preview
# Visit: https://cqc-website.vercel.app
# Test thoroughly

# 4. If satisfied, rebuild for NameCheap
npm run build
npm run export

# 5. Upload new out/ folder to NameCheap
# Use FTP or File Manager (same process as initial deploy)

# 6. Clear browser cache and test
# Visit: https://www.cardinalquality.com
```

---

## Quick Reference

```bash
# Development
npm run dev                  # Local development server
git push                     # Auto-deploy to Vercel

# Production
npm run build               # Build Next.js app
npm run export              # Export static files
# → Upload out/ to NameCheap

# Vercel URLs
https://cqc-website.vercel.app                    # Production
https://cqc-website-git-[branch].vercel.app       # Branch preview
```

---

## Troubleshooting

### Vercel Issues

**Build fails on Vercel?**
```bash
# Check Vercel dashboard for build logs
# Common issues:
- Missing dependencies → npm install locally, then push
- TypeScript errors → fix errors, then push
- Environment variables → set in Vercel dashboard
```

**Preview not updating?**
```bash
# Force a new deployment:
git commit --allow-empty -m "Trigger rebuild"
git push
```

### NameCheap Issues

**Site not loading?**
- Check DNS points to NameCheap servers
- Verify files uploaded to public_html/ (not a subfolder)
- Check .htaccess exists and is correct
- Clear browser cache (Ctrl+Shift+R)

**Images not loading?**
- Verify images uploaded from out/
- Check file paths are relative (not absolute)
- Ensure next.config.js has `images.unoptimized: true`

**Calendly not working?**
- Check browser console for errors
- Verify Calendly script loaded
- Test in incognito mode
- Check CSP headers not blocking

**Styles broken?**
- Verify all CSS files uploaded
- Check _next/ folder uploaded completely
- Clear browser cache
- Check .htaccess not blocking CSS

---

## Production Checklist

Before deploying to NameCheap:

- [ ] Tested on Vercel preview
- [ ] Mobile experience verified
- [ ] All CTAs functional
- [ ] Calendly integration works
- [ ] Images optimized and loading
- [ ] No console errors
- [ ] Fast load time (< 3 seconds)
- [ ] SEO meta tags present
- [ ] Analytics code added (if using)
- [ ] .htaccess configured
- [ ] SSL certificate active on NameCheap

---

## Rollback Plan

Keep backups before each deployment:

```bash
# Before uploading new version to NameCheap:
1. Download current public_html/ folder
2. Save to backups/YYYY-MM-DD/
3. Document what was live

# To rollback:
1. Re-upload previous version from backup
2. Clear browser cache
3. Verify site restored
```

---

## Summary

**Development = Vercel** (fast, automatic, shareable)  
**Production = NameCheap** (your domain, your control)

**Workflow:**
1. Code locally
2. Push to GitHub → Vercel deploys automatically
3. Test on Vercel preview
4. When perfect → Export and upload to NameCheap
5. Go live on cardinalquality.com

This gives you the speed of Vercel with the control of NameCheap.
