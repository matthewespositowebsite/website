# Image Upload Guide 📸

This guide tells you exactly which photos to upload and where to put them.

## 📁 Folder Structure

```
public/images/
├── hero/                    # Homepage hero carousel images
├── projects/                # Design project photos
├── tabletop/                # Tabletop collection photos
└── navigation/              # Navigation preview images
```

## 🏠 Homepage Images

### Hero Carousel (3 images that slowly rotate)
Upload to: `public/images/hero/`

1. **`hero-1.jpg`** - Main hero image (2400×1600px recommended)
   - Example: Wide shot of your best interior project
   - Currently: Modern living room with natural light

2. **`hero-2.jpg`** - Second hero image (2400×1600px)
   - Example: Another stunning interior space
   - Currently: Elegant dining area

3. **`hero-3.jpg`** - Third hero image (2400×1600px)
   - Example: Third portfolio highlight
   - Currently: Bedroom or living space detail

### Homepage Intro Section
Upload to: `public/images/hero/`

4. **`intro-large.jpg`** - Large intro image (1200×1600px)
   - Example: Vertical shot of interior detail
   - Currently: Interior architectural detail

5. **`intro-small.jpg`** - Small intro image (700×900px)
   - Example: Close-up architectural element
   - Currently: Architectural detail shot
   - Caption: "Detail, Upper East Side residence, 2024"

### Featured Work Section
Upload to: `public/images/hero/`

6. **`featured-gramercy.jpg`** - Full-bleed featured image (2400×1200px)
   - Example: Wide interior shot of featured project
   - Currently: Living space overview
   - Caption: "Gramercy Residence, 2024"

## 🏛 Design Section (Project Images)

Upload to: `public/images/projects/`

### Gramercy Residence
7. **`gramercy-main.jpg`** - Main project image (1200×1600px)
8. **`gramercy-detail-1.jpg`** - Detail shot 1 (800×1000px)
9. **`gramercy-detail-2.jpg`** - Detail shot 2 (800×1000px)

### Brooklyn Heights Studio
10. **`brooklyn-main.jpg`** - Main project image (1200×800px)
11. **`brooklyn-detail-1.jpg`** - Detail shot 1 (800×1000px)
12. **`brooklyn-detail-2.jpg`** - Detail shot 2 (800×1000px)

### Hudson Valley Retreat
13. **`hudson-main.jpg`** - Main project image (1200×1600px)
14. **`hudson-detail-1.jpg`** - Detail shot 1 (800×1000px)

### Tribeca Loft
15. **`tribeca-main.jpg`** - Main project image (1000×1200px)
16. **`tribeca-detail-1.jpg`** - Detail shot 1 (800×1000px)

## 🍽 Tabletop Section

Upload to: `public/images/tabletop/`

17. **`plate-ceramic.jpg`** - Ceramic dinner plate (800×1000px)
18. **`napkins-linen.jpg`** - Linen napkins (800×1000px)
19. **`carafe-glass.jpg`** - Water carafe (800×1000px)
20. **`board-walnut.jpg`** - Walnut serving board (800×1000px)
21. **`flatware-silver.jpg`** - Silver flatware (800×1000px)
22. **`sake-set.jpg`** - Sake set (800×1000px)
23. **`table-setting-detail.jpg`** - Table setting philosophy image (1000×1200px)

## 🧭 Navigation Previews

Upload to: `public/images/navigation/`

24. **`preview-design.jpg`** - Design section preview (400×500px)
25. **`preview-tabletop.jpg`** - Tabletop section preview (400×500px)
26. **`preview-writing.jpg`** - Writing section preview (400×500px)

---

## 📏 Image Specifications

### Recommended Sizes:
- **Hero images**: 2400×1600px (landscape, 3:2 ratio)
- **Featured images**: 2400×1200px (wide, 2:1 ratio)
- **Main project images**: 1200×1600px (portrait, 3:4 ratio)
- **Detail shots**: 800×1000px (portrait, 4:5 ratio)
- **Tabletop items**: 800×1000px (portrait, 4:5 ratio)
- **Navigation previews**: 400×500px (portrait, 4:5 ratio)

### File Format:
- Use **JPG** for all images
- Quality: 85-90% (good balance of quality and file size)
- Max file size: ~500KB per image (optimize for web)

### Tips:
- Use descriptive, professional photography
- Ensure good lighting and composition
- Keep style consistent across all images
- Optimize images before uploading (use tools like TinyPNG or Squoosh)

---

## 🚀 How to Upload

1. **Save your photos** with the exact filenames listed above
2. **Place them in the correct folder** (hero/, projects/, tabletop/, or navigation/)
3. **Commit and push** to GitHub:
   ```bash
   git add public/images/
   git commit -m "Add portfolio images"
   git push
   ```
4. **Wait 2-3 minutes** for GitHub Actions to rebuild and deploy

That's it! Your images will automatically appear on the live site.

---

## 🎨 Current Placeholder Images

Right now, the site uses Unsplash stock photos as placeholders. Once you upload your photos with the names above, they will automatically replace the placeholders.

**No code changes needed** - just upload the images with the correct names!

---

## ❓ Need Different Images?

If you want to add/remove images or change what's shown:
1. Add your new images to the appropriate folder
2. Update the image references in the code (see `CUSTOMIZATION.md`)
3. Or ask for help!
