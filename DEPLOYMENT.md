# Deployment Guide

## GitHub Pages Deployment

This portfolio is configured for seamless deployment to GitHub Pages.

### Automatic Deployment

The site is configured with GitHub Actions to automatically deploy when you push to the `main` or `master` branch.

**Setup Steps:**

1. **Enable GitHub Pages in Repository Settings**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Build and deployment" → "Source", select "GitHub Actions"

2. **Push to Main Branch**
   - Merge your feature branch to main:
     ```bash
     git checkout main
     git merge claude/designer-portfolio-website-01Qxdm6FUsTNoowJThxbWqU7
     git push origin main
     ```

3. **Monitor Deployment**
   - Go to the "Actions" tab in your repository
   - Watch the deployment workflow execute
   - Once complete, your site will be live at: `https://OrenSegal.github.io/MattEsp`

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build and deploy in one command
npm run deploy
```

This will:
1. Run `npm run build` to create the production build
2. Deploy the `dist` folder to the `gh-pages` branch
3. GitHub Pages will automatically serve from the `gh-pages` branch

### Configuration Details

#### Vite Configuration (`vite.config.ts`)
```typescript
base: '/MattEsp/'  // Repository name as base path
```

#### React Router (`src/App.tsx`)
```typescript
<Router basename="/MattEsp">  // Must match Vite base
```

#### Package.json
```json
"homepage": "https://OrenSegal.github.io/MattEsp"
```

### Client-Side Routing

GitHub Pages doesn't natively support client-side routing. This project solves this with:

1. **404.html** - Redirects to index.html with the original path stored in sessionStorage
2. **RedirectHandler** - Component in App.tsx that restores the correct route on load

This allows direct navigation to routes like `/MattEsp/design` or `/MattEsp/contact`.

### Files Required for Deployment

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/.nojekyll` - Disables Jekyll processing
- `public/404.html` - Handles client-side routing
- `vite.config.ts` - Configured with correct base path
- `package.json` - Deployment scripts and homepage URL

### Verification

After deployment, test these URLs:

- Homepage: `https://OrenSegal.github.io/MattEsp/`
- Design: `https://OrenSegal.github.io/MattEsp/design`
- Tabletop: `https://OrenSegal.github.io/MattEsp/tabletop`
- Writing: `https://OrenSegal.github.io/MattEsp/writing`
- Contact: `https://OrenSegal.github.io/MattEsp/contact`

All routes should load correctly without 404 errors.

### Troubleshooting

**Issue**: Assets not loading
- **Solution**: Ensure `vite.config.ts` has correct `base: '/MattEsp/'`

**Issue**: Routes return 404
- **Solution**: Verify `404.html` is in the dist folder and GitHub Pages is configured

**Issue**: Blank page after deployment
- **Solution**: Check browser console for errors, verify basename in Router matches base in Vite config

**Issue**: GitHub Actions workflow fails
- **Solution**: Ensure GitHub Pages is set to "GitHub Actions" source in repository settings

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `public/` folder with your domain
2. Configure DNS records with your domain provider
3. Update `homepage` in package.json to your custom domain
4. Update `base` in vite.config.ts to `'/'`
5. Update `basename` in App.tsx to `undefined`

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The preview will run at `http://localhost:4173/MattEsp/` to match the GitHub Pages path structure.

---

**Note**: After initial deployment, GitHub Pages may take 5-10 minutes to fully propagate changes.
