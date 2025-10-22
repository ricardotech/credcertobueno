# Website Replication Plan - VIP Financeira to CredCertoBueno

## Project Overview
This plan outlines the step-by-step process to transform the credcertobueno website by replicating the VIP Financeira design structure with adapted, original content. Each step below represents a single prompt to execute sequentially.

---

## 📋 Execution Steps

### **Step 1: Project Setup & Dependencies**

**Prompt to use:**
```
Review the current project dependencies and set up the foundation for the VIP-inspired redesign. Configure Tailwind with the appropriate color scheme (blue/white with yellow accents). Create a constants file for placeholder image URLs that we'll use throughout the project. Ensure all necessary UI dependencies are installed.
```

**What will be done:**
- Check package.json for any missing dependencies
- Create a constants/images.ts file with placeholder image URLs
- Set up custom color palette in Tailwind config if needed
- Verify lucide-react icons are available for use

---

### **Step 2: Replace Hero Section**

**Prompt to use:**
```
Replace the current HomeHeroSection component with a new hero section inspired by VIP Financeira. The hero should include:
- A compelling headline asking about customer goals/dreams
- Supporting text about helping customers achieve better financial life
- Two CTA buttons: "Contact Us" (with WhatsApp icon) and "Learn More"
- Background image using placeholder URL
- Responsive design that works on mobile, tablet, and desktop
- Professional blue color scheme
Keep the text adapted and original - don't copy directly from VIP.
```

**Expected outcome:**
- New HomeHeroSection component
- Dual CTAs with proper styling
- Responsive layout with background image

---

### **Step 3: Statistics Section**

**Prompt to use:**
```
Create a new Statistics section component to display key company metrics. Include:
- 4 metric cards showing: clients served, team size, rating, years in business
- Icon for each metric (use lucide-react)
- Avatar carousel placeholder showing customer count
- Professional styling with proper spacing
- Responsive grid layout (2x2 on mobile, 4 across on desktop)
- Use adapted text that reflects CredCertoBueno's values, not VIP's exact numbers
Add this section to the main page below the hero.
```

**Expected outcome:**
- New StatisticsSection component
- 4 metric cards with icons
- Responsive grid layout

---

### **Step 4: About Us Section**

**Prompt to use:**
```
Build an About Us section with:
- Headline about company history/foundation year
- 3 value badges with icons representing: Efficiency, Quality, Speed
- A key claim/tagline about the company's market position
- Clean layout with proper visual hierarchy
- Icons using lucide-react
- Adapt the content to be original and reflect CredCertoBueno's brand
Add this section to the main page.
```

**Expected outcome:**
- New AboutSection component
- 3 value badges with custom icons
- Professional typography and spacing

---

### **Step 5: Differentials Grid**

**Prompt to use:**
```
Create a Differentials section showcasing 8 key features/differentials:
- Mission
- Vision
- Company values
- VIP service
- Best rates
- Simplified credit
- Speed and practicality
- (Choose an 8th relevant feature)

Each feature should have:
- An icon (lucide-react)
- Heading
- Descriptive text (adapted and original)
- Responsive grid (1 column mobile, 2 columns tablet, 4 columns desktop)
Add this to the main page.
```

**Expected outcome:**
- New DifferentialsSection component
- 8 feature cards with icons
- Responsive grid layout

---

### **Step 6: Solutions Section**

**Prompt to use:**
```
Build a Solutions section with:
- Headline: "We have financial solutions for:"
- 5 bulleted items describing use cases (bringing plans to life, organizing finances, investing in future, home improvement, caring for family)
- Accompanying illustration on the right side (use placeholder image)
- Side-by-side layout on desktop, stacked on mobile
- Professional styling with proper spacing
Adapt the text to be original while maintaining the same purpose.
Add this to the main page.
```

**Expected outcome:**
- New SolutionsSection component
- Bulleted list with illustration
- Responsive layout

---

### **Step 7: Services Cards**

**Prompt to use:**
```
Create a Services section with 3 service cards:
1. FGTS Advance
2. Consigned Credit
3. CLT Consigned Credit

Each card should include:
- Service name as heading
- Descriptive text (adapted and original)
- Placeholder image
- "Learn more" link with arrow icon
- Hover effects
- Responsive grid (1 column mobile, 3 columns desktop)
Add this to the main page.
```

**Expected outcome:**
- New ServicesSection component
- 3 service cards with images
- Interactive hover states

---

### **Step 8: Testimonials Section**

**Prompt to use:**
```
Build a Testimonials carousel section with:
- Section heading
- 3 customer testimonial cards showing:
  - Avatar placeholder image
  - Customer name (fictional)
  - 5-star rating
  - Review text (adapted and original, praising service quality)
  - "Via Google Reviews" attribution
- Carousel navigation arrows
- Responsive design
Add this to the main page.
```

**Expected outcome:**
- New TestimonialsSection component
- Carousel with 3 testimonials
- Navigation controls

---

### **Step 9: Partners Section**

**Prompt to use:**
```
Create a Partners section displaying:
- Heading: "Our Partners" and subheading about security/credibility
- Grid of 5 partner logos (use placeholder images)
- Each partner card showing:
  - Logo placeholder
  - Institution name
  - Operation type
  - Contact numbers (SAC, ombudsman)
  - Operating hours
- Professional layout with proper spacing
- Responsive grid
Use fictional but realistic-looking partner information.
Add this to the main page.
```

**Expected outcome:**
- New PartnersSection component
- 5 partner cards with details
- Responsive grid layout

---

### **Step 10: FAQ & Footer**

**Prompt to use:**
```
Implement two final sections:

1. FAQ Teaser:
   - Heading: "Have Questions?"
   - Link to FAQ page
   - Simple, clean design

2. Comprehensive Footer with:
   - Company description
   - Social media links (Facebook, LinkedIn, Instagram icons)
   - 3-column navigation:
     * INSTITUTIONAL (Home, About, Services, Testimonials, FAQ, Careers)
     * SOLUTIONS (Consigned Credit, FGTS Advance)
     * CONTACT (Email, phone)
   - Legal disclaimer
   - Copyright notice
   - Privacy Policy and Terms links
   - Company registration info (CNPJ, address)

Add both to the main page and create a reusable Footer component.
```

**Expected outcome:**
- New FAQSection component
- New Footer component
- Complete footer with all sections

---

### **Step 11: Final Polish & Testing**

**Prompt to use:**
```
Perform final polish and pixel-perfect adjustments:
- Review all section spacing and ensure consistent gaps between sections
- Verify typography hierarchy is consistent throughout
- Check that all colors match the design system
- Test responsive behavior on mobile (375px), tablet (768px), and desktop (1440px)
- Ensure all placeholder images are properly sized and positioned
- Verify all hover states and interactive elements work correctly
- Check that the page flows smoothly from section to section
Fix any alignment, spacing, or styling issues found.
```

**Expected outcome:**
- Pixel-perfect alignment
- Consistent spacing
- Fully responsive design
- All interactive elements working

---

### **Step 12: Documentation & README**

**Prompt to use:**
```
Create comprehensive documentation:
1. Update the main README.md with:
   - Project overview
   - Tech stack
   - Installation instructions
   - Development commands
   - Project structure
   - How to replace placeholder images with real ones

2. Add comments to complex components explaining structure

3. Create a COMPONENTS.md file documenting:
   - Each component's purpose
   - Props (if any)
   - Usage examples

Make the documentation clear and helpful for future development.
```

**Expected outcome:**
- Updated README.md
- Component documentation
- Clear instructions for image replacement

---

## 🎯 Success Criteria

After completing all steps, the website should have:
- ✅ Complete homepage with 10+ sections
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Adapted, original content (not copied)
- ✅ Placeholder images ready to be replaced
- ✅ Consistent design system
- ✅ Professional polish and alignment
- ✅ Clear documentation

---

## 📝 Notes

- Each step is designed to be executed independently
- Test after each step to ensure quality
- All placeholder images should use the same URL format for easy replacement later
- Keep content adapted and original - never copy text directly
- Focus on pixel-perfect implementation
- Maintain accessibility best practices

---

## 🚀 Getting Started

To begin, simply copy and paste the prompt from **Step 1** into your conversation with Claude Code. After each step is complete and you've verified the results, move on to the next prompt.

**Current Status:** Ready to begin Step 1
