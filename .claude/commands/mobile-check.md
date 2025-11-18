# Mobile Experience Checklist

## Critical Mobile Tests

### Visual & Layout
- [ ] Hero section displays correctly on mobile (320px width minimum)
- [ ] Headline is readable without zooming
- [ ] CTAs are thumb-friendly (minimum 44x44px)
- [ ] Images scale proportionally
- [ ] No horizontal scrolling
- [ ] Testimonials are readable in card format
- [ ] Services section collapses appropriately
- [ ] Footer navigation is accessible

### Navigation
- [ ] Hamburger menu works smoothly
- [ ] Menu items are tappable
- [ ] Close button is obvious
- [ ] Sticky nav doesn't cover content
- [ ] "Book Now" button always visible

### CTAs & Conversion
- [ ] Primary CTA is visible above fold on mobile
- [ ] Sticky floating button appears after scroll
- [ ] Button doesn't obscure content
- [ ] Calendly embed is mobile-optimized
- [ ] Forms are easy to complete on mobile
- [ ] No accidental clicks on small targets

### Performance
- [ ] Page loads in < 3 seconds on 4G
- [ ] Images lazy load properly
- [ ] No layout shift during load
- [ ] Smooth scrolling (no jank)
- [ ] Animations don't cause lag

### Content Readability
- [ ] Font size is at least 16px for body text
- [ ] Line height is comfortable (1.5-1.6)
- [ ] Contrast meets WCAG AA standards
- [ ] Testimonials aren't cut off
- [ ] Service descriptions are scannable

### Calendly Integration
- [ ] Calendly widget is responsive
- [ ] Date picker works on mobile
- [ ] Time selection is easy
- [ ] Form fields auto-fill from device
- [ ] Confirmation page displays correctly

### Touch Interactions
- [ ] All buttons respond to touch immediately
- [ ] No accidental hover states
- [ ] Swipe gestures work if implemented
- [ ] Pinch-to-zoom disabled on buttons
- [ ] No 300ms tap delay

### Testing Devices

Test on actual devices or simulators:

**iOS**
- iPhone SE (small screen)
- iPhone 13/14 Pro (common)
- iPad (tablet view)

**Android**
- Samsung Galaxy S21 (common)
- Google Pixel (pure Android)
- Various screen sizes (360px to 400px width)

### Browser Testing
- Safari on iOS (primary)
- Chrome on Android
- Samsung Internet Browser
- Firefox Mobile

### Quick Mobile Test
```bash
# Using Chrome DevTools
1. Open site in Chrome
2. Press F12
3. Toggle device toolbar (Ctrl+Shift+M)
4. Test iPhone SE, iPhone 12 Pro, iPad
5. Throttle to 4G network
6. Test all interactions
```

### Mobile Optimization Tools

**Test with:**
- Google PageSpeed Insights (mobile score)
- WebPageTest (mobile device)
- BrowserStack (real devices)
- Chrome DevTools Device Mode

### Common Mobile Issues

❌ **Text too small** → Minimum 16px font size  
❌ **Buttons too close** → Minimum 44x44px, 8px spacing  
❌ **Horizontal scroll** → Use `overflow-x: hidden` carefully  
❌ **Images too large** → Optimize and serve responsive images  
❌ **CTA hidden** → Ensure primary action is above fold  
❌ **Slow load** → Optimize images, lazy load, minimize JS  
❌ **Calendly broken** → Test embed at multiple widths  

### Mobile Success Criteria

✅ Loads in < 3 seconds on 4G  
✅ All CTAs are easily tappable  
✅ Content is readable without zoom  
✅ Conversion path is clear  
✅ Calendly works perfectly  
✅ No errors in browser console  
✅ Smooth scrolling and interactions  

### Fixing Common Problems

**CTA too small?**
```css
.cta-button {
  min-height: 48px;
  min-width: 150px;
  padding: 16px 32px;
  font-size: 18px;
}
```

**Text hard to read?**
```css
body {
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
```

**Calendly overflow?**
```css
.calendly-inline-widget {
  min-width: 320px;
  height: 630px;
}
```

### Final Mobile Checklist

Before launch, answer YES to all:

1. Can a user understand the value in 5 seconds on mobile? **YES/NO**
2. Can they easily book a consultation on their phone? **YES/NO**
3. Does the site load fast on a phone? **YES/NO**
4. Are testimonials readable and compelling? **YES/NO**
5. Are all images optimized and loading? **YES/NO**
6. Does the sticky CTA work correctly? **YES/NO**
7. Is the navigation intuitive? **YES/NO**
8. No console errors on mobile? **YES/NO**

If any answer is NO, fix before deploying.