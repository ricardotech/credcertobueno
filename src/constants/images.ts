/**
 * Image Constants
 *
 * Placeholder image URLs used throughout the application.
 * Replace these with actual image URLs when assets are ready.
 */

// Using a reliable placeholder service for consistent sizing
const PLACEHOLDER_BASE = "https://placehold.co";

export const IMAGES = {
  // Hero Section
  hero: {
    background: `${PLACEHOLDER_BASE}/1920x1080/1e40af/ffffff?text=Hero+Background`,
  },

  // Statistics Section
  statistics: {
    avatarGroup: `${PLACEHOLDER_BASE}/200x200/1e40af/ffffff?text=Avatars`,
  },

  // Solutions Section
  solutions: {
    illustration: `${PLACEHOLDER_BASE}/600x400/1e40af/ffffff?text=Solutions`,
  },

  // Services Section
  services: {
    fgts: `${PLACEHOLDER_BASE}/400x300/1e40af/ffffff?text=FGTS`,
    consignado: `${PLACEHOLDER_BASE}/400x300/1e40af/ffffff?text=Consignado`,
    clt: `${PLACEHOLDER_BASE}/400x300/1e40af/ffffff?text=CLT`,
  },

  // Testimonials Section
  testimonials: {
    avatar1: `${PLACEHOLDER_BASE}/100x100/1e40af/ffffff?text=Customer+1`,
    avatar2: `${PLACEHOLDER_BASE}/100x100/1e40af/ffffff?text=Customer+2`,
    avatar3: `${PLACEHOLDER_BASE}/100x100/1e40af/ffffff?text=Customer+3`,
  },

  // Partners Section
  partners: {
    partner1: `${PLACEHOLDER_BASE}/200x100/1e40af/ffffff?text=Partner+1`,
    partner2: `${PLACEHOLDER_BASE}/200x100/1e40af/ffffff?text=Partner+2`,
    partner3: `${PLACEHOLDER_BASE}/200x100/1e40af/ffffff?text=Partner+3`,
    partner4: `${PLACEHOLDER_BASE}/200x100/1e40af/ffffff?text=Partner+4`,
    partner5: `${PLACEHOLDER_BASE}/200x100/1e40af/ffffff?text=Partner+5`,
  },
} as const;

/**
 * Instructions for replacing placeholders:
 *
 * 1. Export your images to /public folder
 * 2. Update the paths above to use Next.js Image paths
 * 3. Example: background: "/images/hero-background.jpg"
 * 4. Ensure images are optimized for web (WebP format recommended)
 * 5. Maintain aspect ratios as specified in the sizes above
 */
