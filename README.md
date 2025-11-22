# Matthew Esposito — Portfolio

An exceptional portfolio website for interior designer Matthew Esposito, crafted with deliberate restraint and editorial sophistication.

**Live Site**: [https://matthewesposito.github.io/website](https://matthewesposito.github.io/website)

## Design Philosophy

This site rejects generic, AI-generated aesthetics in favor of:
- **Asymmetrical Balance**: Layouts that create visual tension and interest
- **Editorial Sophistication**: High-end, gallery-like presentation inspired by Studio Magness, Atelier MVM, Valle de Valle, and Robert Stilin
- **Typographic Excellence**: Distinctive pairing of Cormorant Garamond (serif) and Inter (sans-serif) with bolder, more dramatic scale
- **Monochromatic Palette**: Black, white, and muted moss green accent
- **Human Touch**: Authentic content, personal playlist links, and curatorial details
- **Slow Transitions**: Deliberate pacing with 2-second transitions and 8-second image carousel
- **Immersive Imagery**: Full-bleed photography and generous white space

## Technical Stack

- **React 18** with TypeScript
- **Vite** for blazing-fast development
- **React Router** for seamless navigation
- **CSS Modules** with custom properties
- **Google Fonts**: Cormorant Garamond & Inter

## Structure

```
/design     - Residential and commercial projects
/tabletop   - Curated collection of tableware and objects
/writing    - Essays on design philosophy and practice
/contact    - Minimal contact information with personal touches
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Features

- **Slow Image Carousel**: Hero section with 3 rotating images every 8 seconds (Robert Stilin inspired)
- **Asymmetrical Layouts**: No standard grids—each section uses deliberate, non-uniform layouts
- **Hover Previews**: Navigation shows contextual image previews in unexpected locations (Studio Magness inspired)
- **Personal Touches**: Studio playlist link and curatorial details (Atelier MVM inspired)
- **Full-Bleed Imagery**: Immersive, large-scale photography (Valle de Valle inspired)
- **Editorial Typography**: High-contrast, publication-quality text rendering with dramatic scale
- **Responsive Design**: Gracefully adapts from desktop to mobile
- **Performance**: Optimized images and smooth transitions

## 🚀 Deployment (GitHub Actions - No Local Machine Required!)

The site is configured for automatic deployment via GitHub Actions.

### Quick Setup (2 minutes):

1. **Go to GitHub Repository Settings**
   - Navigate to `Settings` → `Pages`
   - Under "Source", select **"GitHub Actions"**

2. **That's it!** The workflow will automatically deploy on every push.

3. **Visit your live site**: `https://matthewesposito.github.io/website`

📖 **Detailed instructions**: See [`GITHUB_ACTIONS_SETUP.md`](./GITHUB_ACTIONS_SETUP.md)

### How It Works

Every push to the feature branch automatically:
- Builds the React app
- Deploys to GitHub Pages
- Updates your live site in 2-3 minutes

No local deployment needed!

## Philosophy

This website was designed as a considered exercise in editorial restraint. No templates, no AI generation—just deliberate choices about typography, layout, and white space. Every element serves a purpose, and empty space is treated as an active design element.

---

© 2024 Matthew Esposito
