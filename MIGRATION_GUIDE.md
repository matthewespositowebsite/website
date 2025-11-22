# 🔧 Migrating to a New GitHub Repository

If you've imported this site to a different GitHub repo, you need to update the base paths throughout the project.

## Step 1: Identify Your New Repo Info

You need:
- **GitHub Username**: e.g., `YourUsername`
- **Repository Name**: e.g., `your-new-repo`

Your live URL will be: `https://YourUsername.github.io/your-new-repo`

---

## Step 2: Update These 5 Files

### 1. `vite.config.ts`

**Change:**
```typescript
base: '/MattEsp/',
```

**To:**
```typescript
base: '/your-new-repo/',
```

---

### 2. `src/App.tsx`

**Change:**
```typescript
<Router basename="/MattEsp">
```

**To:**
```typescript
<Router basename="/your-new-repo">
```

---

### 3. `package.json`

**Change:**
```json
"homepage": "https://OrenSegal.github.io/MattEsp",
```

**To:**
```json
"homepage": "https://YourUsername.github.io/your-new-repo",
```

---

### 4. `public/404.html`

**Change:**
```javascript
window.location.replace('/MattEsp/');
```

**To:**
```javascript
window.location.replace('/your-new-repo/');
```

---

### 5. All Image Paths (6 files to update)

**Files to update:**
- `src/pages/Homepage.tsx`
- `src/pages/Design.tsx`
- `src/pages/Tabletop.tsx`
- `src/components/Navigation.tsx`

**In each file, change:**
```typescript
'/MattEsp/images/...'
```

**To:**
```typescript
'/your-new-repo/images/...'
```

**Or better yet, use:**
```typescript
import.meta.env.BASE_URL + 'images/...'
```

This automatically uses the correct base path from vite.config.ts.

---

## Step 3: Enable GitHub Pages

After making these changes:

1. **Push your changes** to GitHub
2. Go to **Settings** → **Pages** in your new repo
3. Set **Source** to: **"GitHub Actions"**
4. Wait 2-3 minutes for deployment

---

## Step 4: Verify Deployment

Visit: `https://YourUsername.github.io/your-new-repo`

Check that:
- ✅ Site loads (not blank)
- ✅ All routes work (design, tabletop, writing, contact)
- ✅ Images load properly
- ✅ Navigation works

---

## Common Issues

### Blank White Screen
**Cause**: Base path mismatch
**Fix**: Ensure `vite.config.ts` base matches your repo name exactly

### Images Not Loading
**Cause**: Wrong image paths
**Fix**: Update all `/MattEsp/` references to `/your-new-repo/`

### 404 on Direct Links
**Cause**: 404.html redirect wrong
**Fix**: Update redirect path in `public/404.html`

### GitHub Actions Failing
**Cause**: Workflow not configured
**Fix**: Check `.github/workflows/deploy.yml` has your branch name

---

## Quick Find & Replace

Use your code editor's find & replace:

**Find:** `/MattEsp/`
**Replace:** `/your-new-repo/`

**In files:**
- vite.config.ts
- src/App.tsx
- src/pages/Homepage.tsx
- src/pages/Design.tsx
- src/pages/Tabletop.tsx
- src/components/Navigation.tsx
- public/404.html
- package.json

---

## Alternative: Use Environment Variable

For a cleaner approach that works in any repo:

**In all image paths, replace:**
```typescript
'/MattEsp/images/hero-01.jpg'
```

**With:**
```typescript
`${import.meta.env.BASE_URL}images/hero-01.jpg`
```

This way, you only need to update `vite.config.ts` when moving repos!

---

## Need Help?

If you're still getting a blank screen after these changes:

1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab to see which files are 404ing
4. Share the errors and I can help debug
