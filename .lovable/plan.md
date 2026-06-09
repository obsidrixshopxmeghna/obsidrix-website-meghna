# OBSIDRIX — Luxury Women's Kurti Campaign Site

A cinematic, mobile-first luxury fashion experience for OBSIDRIX with Meghna Chavan as Brand Ambassador, plus a 12-product trending collection where each product is regenerated with a premium AI fashion model wearing the **exact same kurti design** from your uploaded screenshot (same fabric, print, color, silhouette — only the model and pose change for an editorial feel).

## Design System

- **Palette**: Matte Black `#0A0A0A`, Charcoal `#121212`, Soft Ivory `#F7F3EE`, Luxury Gold `#D4AF37`, White, champagne accents.
- **Type**: Display serif (editorial) + clean modern sans (body). Generous tracking on uppercase eyebrows.
- **Surfaces**: Glassmorphism, soft depth shadows, gold hairlines, subtle gold gradients.
- **Motion**: Framer Motion + Lenis smooth scroll + GSAP-style reveals; magnetic buttons, tilt cards, parallax, cinematic image reveals, luxury loading screen, page transitions.
- **Mobile-first**: All layouts, carousels, image ratios, type scale tuned for mobile, then enhanced for desktop.

## Sections (in order)

1. **Luxury loader** → fade into hero.
2. **Hero** — Full-screen, Meghna Chavan as "Official Brand Ambassador", floating glass panels, parallax kurti silhouettes, gold accents, dual CTA (Shop Collection / Explore Campaign).
3. **Meghna Chavan placeholders** — exactly TWO premium editorial portrait slots in glass frames (clearly marked replaceable), gold spotlight, cinematic reveal.
4. **The Face of Obsidrix** — editorial campaign announcement layout (large type, split image, pull quote).
5. **Kurti Collections** — swipeable mobile carousel / desktop grid: Cotton, Floral, Printed, Premium Kurta Sets, Summer, Trending, New Arrivals, Best Sellers. 3D tilt cards.
6. **Luxury Fashion Showcase** — large editorial image blocks with cinematic reveals and pinned scroll storytelling.
7. **Trending Kurti Collection (12 products from your image)** — premium product cards with image, title, price (₹) + strike-through MRP, discount badge, Verified badge, size chips, rating, wishlist, quick view, Add to Cart, Buy Now. Glass overlays, tilt, consistent 3:4 aspect ratio (no crop issues).
8. **Premium Collection Grid** — masonry editorial.
9. **Why Obsidrix** — animated icon row (fabric, fit, design, exclusivity, trends, lifestyle).
10. **Customer Fashion Gallery** — editorial masonry with lightbox, swipe.
11. **Instagram Experience** — luxury social cards.
12. **Testimonials** — floating glass cards.
13. **Footer** — minimal luxury: brand, categories, policies, newsletter, social, contact.

## Product Mapping (12 cards — same dresses, new model poses)

Each card uses the exact title/pricing from your uploaded screenshot. New AI imagery keeps fabric, print, color, neckline, sleeve, silhouette identical; only model identity and pose change to a premium editorial standard (full-body, sharp focus, clean studio or soft outdoor backdrop, no text/watermark/cropped limbs).

1. Men-Kurta, Women-Kurti & Dupatta 3-Piece Set Couple… — ₹699 (48% OFF) — *powder-blue cotton kurti with gold thread placket + matching dupatta*
2. Premium Women's Kurta Set – Black & White Bandhani Print — ₹399 (50% OFF)
3. Women's Trending Printed Kurta and Pant — ₹399 (50% OFF) — *off-white floral print kurta + pant set*
4. Women's Trendy Sleeveless Printed Kurta with Leggings Set — ₹399 (43% OFF) — *mustard booti print*
5. WOLF Women's Daily Wear Festival Wear Cotton Stylish… — ₹599 (45% OFF) — *grey floral A-line*
6. White Floral Printed Co-Ord Set with Wide-Leg Pants — ₹699 (50% OFF)
7. Floral Printed Cotton Short Kurti — ₹380 (52% OFF) — *purple floral short kurti*
8. Premium Printed Short Kurti — ₹399 (43% OFF) — *soft grey-blue print*
9. Women's Black Floral Printed Cotton A-Line Short Kurti / V-… — ₹350 (58% OFF)
10. Premium Short Kurti & Women's Topwear — ₹299 (63% OFF) — *ivory floral short kurti*
11. Premium Short Kurti Top — ₹399 (50% OFF) — *sage green floral*
12. Ethnic Wine Purple Bandi Rayon Short Kurti — ₹444 (51% OFF) — *magenta short kurti + black palazzo*

All cards show: Verified badge, "Free delivery in 3–5 days", "Trusted seller checks", size chips, Save amount.

## Image Generation Plan

- **Hero / ambassador editorial frames**: 2 premium placeholder slots (Meghna) — clearly labeled, easy manual swap. Surrounding hero atmosphere uses AI-generated editorial backdrops.
- **Collections section**: 8 category hero images (premium Indian model, full-body, editorial).
- **Showcase / gallery**: 6–8 large editorial campaign images.
- **Product cards**: 12 images, one per product above, faithful to the original garment.
- **Constraints baked into every prompt**: realistic Indian female model, full-body framing, sharp focus, professional studio or clean outdoor light, no cropped head/feet, no text, no watermark, no logo, no distortion, 8K editorial quality, garment exactly as described.

Quality control: each generated image visually checked; regenerated if cropped, blurry, distorted, or off-brand.

## Technical Notes

- TanStack Start + Tailwind v4 tokens in `src/styles.css` (semantic tokens for the palette above).
- Framer Motion for reveals/tilt/magnetic CTAs; `@studio-freight/lenis` for smooth scroll; CSS for heavy effects to protect Lighthouse.
- No Three.js scenes by default (keeps mobile perf 95+); "3D feel" achieved via layered parallax, perspective transforms, tilt, depth shadows. Can add a single Spline/Three element later if you want.
- Lazy-loaded images, explicit width/height (no CLS), preloaded LCP hero image, per-route SEO `head()` with OG/Twitter tags.
- Routes: `/` (home with all sections), `/collections/$slug`, `/product/$id` (basic detail), `/about-ambassador`. Hash links only for in-page jumps.
- Wishlist + cart state in localStorage (no backend) — purely frontend so the site stays fast and self-contained. Real checkout can be wired later.

## Out of Scope (ask if you want these)

- Real checkout / payments / inventory backend.
- Real CMS for swapping Meghna images (current plan: edit two image imports).
- Three.js/Spline 3D scene (skipped for mobile perf; can add on request).

Confirm and I'll build it.
