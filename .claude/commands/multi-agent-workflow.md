# Multi-Agent Workflow Guide

## Overview

This guide explains how to use specialized agents to build, refine, and optimize the Cardinal Quality Consulting website. Use this AFTER the initial build when you want to iterate and improve specific sections.

---

## The Four Agents

### 1. cqc-site-builder
**Use for**: Building components, creating structure, implementing features

**Strengths**:
- Creating React components
- Implementing layouts
- Adding functionality
- Integrating Calendly
- Building navigation, sections, forms

**Example prompts**:
- "Build the hero section with headline, subheadline, and CTA buttons"
- "Create a testimonials component that displays 4 LinkedIn recommendations"
- "Implement the sticky floating CTA button that appears after scrolling"

---

### 2. conversion-optimizer
**Use for**: Reviewing sections, suggesting improvements, identifying friction points

**Strengths**:
- Analyzing conversion effectiveness
- Identifying friction points
- Suggesting A/B test ideas
- Reviewing CTA placement
- Mobile conversion optimization

**Example prompts**:
- "Review the hero section for conversion effectiveness"
- "Analyze the testimonials placement - are they prominent enough?"
- "Check if the booking flow is frictionless"
- "Suggest improvements to increase consultation bookings"

---

### 3. content-writer
**Use for**: Writing headlines, copy, CTAs, and all text content

**Strengths**:
- Compelling headlines
- Benefit-focused copy
- CTA copy that converts
- Service descriptions
- About section narrative

**Example prompts**:
- "Write 3 headline options for the hero section"
- "Improve this service description to be more outcome-focused"
- "Create CTA copy that reduces friction and encourages booking"
- "Rewrite the About section to be warmer and more personal"

---

### 4. design-system-manager
**Use for**: Ensuring consistency, managing design tokens, checking standards

**Strengths**:
- Color consistency
- Typography standards
- Spacing consistency
- Component reusability
- Design system compliance

**Example prompts**:
- "Check that all components use the correct red (#E94B3C)"
- "Ensure spacing is consistent across all sections"
- "Verify button styles are standardized"
- "Review typography scale for consistency"

---

## How to Use Agents Sequentially

### Important: You Can't Run Agents in Parallel
Claude Code doesn't run multiple agents at the same time. Instead, use agents **one after another**, passing context between them.

---

## Workflow Patterns

### Pattern 1: Build → Review → Refine → Implement

**Use when**: Creating a new section from scratch

```
Step 1: BUILD with cqc-site-builder
"Build the testimonials section with 4 LinkedIn recommendations"

Step 2: REVIEW with conversion-optimizer
"Review this testimonials section. Does it build trust effectively?
Here's the code: [paste code]"

Step 3: REFINE with content-writer
"Based on this feedback: [paste recommendations]
Improve the testimonial pull quotes and section headline"

Step 4: IMPLEMENT with cqc-site-builder
"Update the testimonials section with:
- New headline: [paste]
- Updated pull quotes: [paste]
- Layout improvements: [paste]"
```

---

### Pattern 2: Review → Refine Copy → Implement

**Use when**: Improving existing sections

```
Step 1: REVIEW with conversion-optimizer
"Review the hero section. Is the value prop clear? Is the CTA prominent?"

Step 2: REFINE with content-writer
"Rewrite the hero headline to be more specific and compelling.
Current: [paste current headline]
Conversion feedback: [paste feedback]"

Step 3: IMPLEMENT with cqc-site-builder
"Update hero section with new headline: [paste]"
```

---

### Pattern 3: Check Consistency → Fix Issues

**Use when**: Ensuring design quality

```
Step 1: CHECK with design-system-manager
"Review all components for color consistency. Are we using #E94B3C correctly?"

Step 2: IMPLEMENT with cqc-site-builder
"Fix these color inconsistencies: [paste list]"
```

---

## Practical Examples

### Example 1: Building the Hero Section (Complete Workflow)

**Chat with cqc-site-builder**:
```
Build the hero section with:
- Headline about transforming product launches
- Subheadline highlighting 94% bug reduction
- Primary CTA: "Book Free Consultation"
- Secondary CTA: "View Services"
- Professional headshot on the right
- Clean layout with red accent color
```

**[Agent builds it]**

**Switch to conversion-optimizer**:
```
Review this hero section for conversion effectiveness:

[Paste the code or screenshot]

Questions:
1. Is the value prop clear in < 5 seconds?
2. Is the CTA prominent enough?
3. Does the layout guide the eye to action?
4. Any friction points?
```

**[Agent provides feedback]**

**Switch to content-writer**:
```
Improve the hero headline based on this feedback:

Current headline: "Transform Your Product Launches"

Conversion feedback:
- Not specific enough
- Doesn't address pain point
- Needs stronger benefit

Write 3 alternative headlines that:
1. Address the pain (release chaos)
2. Promise specific outcome (predictable systems)
3. Include credibility (20 years, 94% reduction)
```

**[Agent writes 3 options]**

**Back to cqc-site-builder**:
```
Update the hero section with:
- New headline: [chosen option]
- Improved subheadline: [paste]
- Make CTA button larger (min 48px height)
- Add more whitespace around CTA
```

---

### Example 2: Optimizing the Testimonials Section

**Chat with conversion-optimizer**:
```
Review the testimonials section:
[Paste code or URL]

Are testimonials:
- Prominent enough?
- Easy to read on mobile?
- Placed strategically?
- Building trust effectively?
```

**[Agent analyzes and suggests improvements]**

**Switch to content-writer**:
```
We have 4 full LinkedIn testimonials. Create:
1. 4 pull quotes (10-15 words each) highlighting key outcomes
2. A compelling section headline
3. A subheadline that emphasizes credibility

Focus on: systems thinking, beta programs, 94% bug reduction, team leadership
```

**[Agent creates copy]**

**Switch to cqc-site-builder**:
```
Update testimonials section:
- New headline: [paste]
- Display pull quotes above full testimonials
- Add "Read Full Recommendation" expand/collapse
- Ensure mobile-friendly card layout
- Add subtle animation on scroll
```

---

### Example 3: Writing Service Descriptions

**Chat with content-writer**:
```
Write descriptions for these 6 services:
1. Product & User Validation
2. Engineering Leadership
3. Release Systems
4. Test Strategy
5. Build a Quality Culture
6. Scaling Teams & Talent

For each:
- Start with the outcome (not the process)
- Use story format (not bullets)
- Include who it's for
- 100-150 words
- Professional but approachable tone
```

**[Agent writes all 6]**

**Switch to conversion-optimizer**:
```
Review these 6 service descriptions:
[Paste descriptions]

Do they:
- Lead with benefits?
- Address pain points?
- Build credibility?
- Include clear next steps?
- Work for the target audience (Engineering VPs, Founders)?
```

**[Agent provides feedback]**

**Back to content-writer**:
```
Revise these 3 service descriptions based on feedback:
[Paste specific feedback for each]
```

**[Agent revises]**

**Finally, cqc-site-builder**:
```
Implement the services section with:
- Tabbed interface for 6 services
- Final descriptions: [paste]
- "Book a Call" CTA after each service
- Smooth tab transitions
```

---

## Tips for Effective Agent Use

### 1. Pass Full Context
When switching agents, provide complete information:

❌ **Bad**: "Review the hero"  
✅ **Good**: "Review the hero section. Here's the code: [paste]. Here's the design: [screenshot]. Does it convert well?"

### 2. Be Specific About What You Need
Each agent has a specialty. Be clear:

❌ **Bad**: "Make the site better"  
✅ **Good**: "conversion-optimizer: Review CTA placement across all sections"

### 3. Iterate in Small Steps
Don't try to fix everything at once:

✅ **Good workflow**:
- Fix hero headline
- Test and review
- Fix testimonials placement
- Test and review
- Fix services copy
- Test and review

❌ **Bad workflow**:
- Try to fix everything in one massive update

### 4. Use the Right Agent for the Job
Don't ask agents to do things outside their expertise:

- ❌ Don't ask conversion-optimizer to write code
- ❌ Don't ask cqc-site-builder to critique conversion
- ❌ Don't ask content-writer to review color consistency
- ✅ Each agent should do what it's best at

### 5. Document What Works
Keep track of successful changes:

```
Hero Section Changes (Nov 18):
- Changed headline from X to Y → Improved clarity
- Made CTA button larger → More prominent
- Added 94% stat to subheadline → Better credibility

Result: Ready for testing on Vercel
```

---

## Common Workflows

### New Section Workflow
```
1. cqc-site-builder: Build initial version
2. conversion-optimizer: Review effectiveness
3. content-writer: Improve copy
4. cqc-site-builder: Implement improvements
5. design-system-manager: Check consistency
```

### Copy Improvement Workflow
```
1. conversion-optimizer: Identify weak copy
2. content-writer: Rewrite with better messaging
3. cqc-site-builder: Implement new copy
```

### Design Consistency Workflow
```
1. design-system-manager: Audit for consistency
2. cqc-site-builder: Fix inconsistencies
3. design-system-manager: Verify fixes
```

### Conversion Optimization Workflow
```
1. conversion-optimizer: Identify friction points
2. content-writer: Improve CTAs and headlines
3. cqc-site-builder: Implement changes
4. conversion-optimizer: Review improvements
```

---

## When to Use Which Agent

### Use cqc-site-builder when you need to:
- Create new components
- Modify layouts
- Add functionality
- Integrate third-party tools (Calendly)
- Fix bugs
- Implement design changes

### Use conversion-optimizer when you need to:
- Review a section for effectiveness
- Identify what's hurting conversions
- Get A/B test ideas
- Check CTA placement
- Analyze user journey
- Optimize for mobile conversions

### Use content-writer when you need to:
- Write headlines
- Improve copy clarity
- Make messaging more compelling
- Write CTAs that convert
- Create service descriptions
- Polish About section

### Use design-system-manager when you need to:
- Check color usage
- Verify spacing consistency
- Ensure typography standards
- Review component reusability
- Maintain design quality

---

## Example: Full Site Refinement

After initial build, go through each section:

### Week 1: Hero Section
```
Day 1: conversion-optimizer reviews
Day 2: content-writer improves headline
Day 3: cqc-site-builder implements
Day 4: Test on Vercel
Day 5: design-system-manager checks consistency
```

### Week 2: Testimonials & Social Proof
```
Day 1: conversion-optimizer reviews placement
Day 2: content-writer creates pull quotes
Day 3: cqc-site-builder implements layout
Day 4: Test on Vercel
Day 5: Review metrics
```

### Week 3: Services Section
```
Day 1: conversion-optimizer reviews effectiveness
Day 2-3: content-writer rewrites all 6 services
Day 4: cqc-site-builder implements
Day 5: Test on Vercel
```

### Week 4: Final Polish
```
Day 1: design-system-manager full audit
Day 2-3: cqc-site-builder fixes issues
Day 4: conversion-optimizer final review
Day 5: Deploy to NameCheap production
```

---

## Remember

1. **Agents work sequentially, not in parallel**
2. **Pass context between agents** (copy/paste code, feedback, etc.)
3. **Each agent has a specialty** - use them for what they're good at
4. **Iterate in small steps** - don't try to fix everything at once
5. **Test after each major change** on Vercel before continuing

---

## Quick Reference

| Task | Agent | Example Prompt |
|------|-------|---------------|
| Build component | cqc-site-builder | "Build the navigation with logo and Book Now CTA" |
| Review section | conversion-optimizer | "Review hero section - does it convert?" |
| Write headline | content-writer | "Write 3 hero headline options" |
| Check colors | design-system-manager | "Ensure all CTAs use #E94B3C" |
| Improve CTA | content-writer | "Make this CTA more compelling" |
| Fix layout | cqc-site-builder | "Make hero mobile-responsive" |
| Optimize mobile | conversion-optimizer | "Review mobile experience for friction" |
| Write service description | content-writer | "Write outcome-focused description for Release Systems" |

---

**Bottom line**: Build first with cqc-site-builder, then use the other agents to refine and optimize. Test frequently on Vercel.