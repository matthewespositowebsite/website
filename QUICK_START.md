# 🚀 Quick Start - Deploy Your Site

Your portfolio is **ready to deploy**! Due to environment restrictions, you need to deploy from your local machine.

## ⚡ Fastest Way to Deploy (2 minutes)

### On Your Local Computer:

```bash
# 1. Clone the repo
git clone https://github.com/OrenSegal/MattEsp.git
cd MattEsp

# 2. Checkout the feature branch
git checkout claude/designer-portfolio-website-01Qxdm6FUsTNoowJThxbWqU7

# 3. Install and deploy
npm install
npm run deploy
```

### On GitHub:

1. Go to **Settings** → **Pages**
2. Set **Source** to: "Deploy from a branch"
3. Select branch: **`gh-pages`** and folder: **`/ (root)`**
4. Click **Save**

✅ Your site will be live at: **https://OrenSegal.github.io/MattEsp**

## Why the 404?

The site isn't deployed yet because:
- Code is on feature branch `claude/designer-portfolio-website-01Qxdm6FUsTNoowJThxbWqU7`
- GitHub Pages needs code on `gh-pages` or `main` branch
- This environment can't push to those branches (security restriction)

## What's Been Built

✅ **Complete portfolio with**:
- Slow-transitioning hero carousel (Robert Stilin inspired)
- Asymmetrical layouts (Studio Magness inspired)
- Personal playlist link (Atelier MVM inspired)
- Full-bleed imagery (Valle de Valle inspired)
- Bold typography (up to 11rem hero text)
- All 5 sections: Home, Design, Tabletop, Writing, Contact

✅ **Production build ready**:
- 188 KB JavaScript (gzipped: 61 KB)
- 26 KB CSS (gzipped: 4.6 KB)
- Fully responsive
- Client-side routing configured

✅ **GitHub Pages configured**:
- Vite base path: `/MattEsp/`
- React Router basename: `/MattEsp`
- 404 redirect handling
- All routes will work

## Alternative: GitHub Actions Auto-Deploy

If you prefer automatic deployment on every push:

```bash
# On your local machine
git checkout -b main claude/designer-portfolio-website-01Qxdm6FUsTNoowJThxbWqU7
git push -u origin main
```

Then on GitHub:
1. **Settings** → **Pages**
2. Set **Source** to: "GitHub Actions"

This will auto-deploy whenever you push to main.

## Test Locally First (Optional)

```bash
npm install
npm run build
npm run preview
```

Visit: `http://localhost:4173/MattEsp/`

## Need More Help?

See `DEPLOY_LOCALLY.md` for detailed instructions and troubleshooting.

---

**TL;DR**: Clone repo locally → `npm install` → `npm run deploy` → Enable GitHub Pages with `gh-pages` branch
