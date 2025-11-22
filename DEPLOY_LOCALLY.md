# Deploy from Your Local Machine

Due to branch restrictions in this environment, you need to deploy from your local machine.

## Quick Deploy Steps

### 1. Clone the Repository Locally

```bash
# Clone your repository
git clone https://github.com/OrenSegal/MattEsp.git
cd MattEsp

# Checkout the feature branch
git fetch origin
git checkout claude/designer-portfolio-website-01Qxdm6FUsTNoowJThxbWqU7
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Option A: Deploy with gh-pages (Recommended)

This is the simplest method:

```bash
npm run deploy
```

This will:
- Build the production version
- Create/update the `gh-pages` branch
- Push to GitHub

**Then enable GitHub Pages:**
1. Go to your repository on GitHub
2. Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Select branch: `gh-pages` and folder: `/ (root)`
5. Click Save

Your site will be live at: `https://OrenSegal.github.io/MattEsp`

### 3. Option B: Deploy with GitHub Actions

```bash
# Create main branch from feature branch
git checkout -b main
git push -u origin main
```

**Then enable GitHub Pages:**
1. Go to your repository on GitHub
2. Settings → Pages
3. Under "Source", select "GitHub Actions"

The site will auto-deploy on every push to main.

## Verify Deployment

After deployment, wait 2-3 minutes then visit:
- `https://OrenSegal.github.io/MattEsp/`

Test all routes:
- `/design`
- `/tabletop`
- `/writing`
- `/contact`

## Troubleshooting

**404 Error After Deployment:**

1. **Check GitHub Pages Settings**
   - Go to Settings → Pages
   - Verify the source is correct (`gh-pages` branch or GitHub Actions)
   - Check if "Enforce HTTPS" is enabled

2. **Verify Branch Exists**
   ```bash
   git branch -a
   # Should see: remotes/origin/gh-pages
   ```

3. **Check Deployment Status**
   - Go to Actions tab on GitHub
   - Look for deployment workflow status

4. **Clear Browser Cache**
   - Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

5. **Wait a Bit**
   - GitHub Pages can take 5-10 minutes to propagate changes

## Local Testing Before Deploy

Test the production build locally:

```bash
# Build
npm run build

# Preview (will run on http://localhost:4173/MattEsp/)
npm run preview
```

Navigate to `http://localhost:4173/MattEsp/` to test the built version with the correct base path.

## Common Issues

**Assets not loading:**
- Ensure `vite.config.ts` has `base: '/MattEsp/'`

**Routes return 404:**
- Verify `404.html` exists in the `dist` folder after build
- Check that GitHub Pages is enabled

**Blank page:**
- Open browser console for errors
- Verify `basename` in App.tsx matches `base` in vite.config.ts

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all files are committed and pushed
3. Ensure GitHub Pages is properly configured in repository settings
4. Wait a few minutes and try again (GitHub Pages can be slow)

## Alternative: Merge Feature Branch Locally

If you want to work with a `main` branch:

```bash
# On your local machine
git checkout -b main claude/designer-portfolio-website-01Qxdm6FUsTNoowJThxbWqU7
git push -u origin main

# Set main as default branch on GitHub
# Then use GitHub Actions for auto-deployment
```
