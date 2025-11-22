# 🚀 Step-by-Step: Get Your Site Running

## The Problem
Your new repo `matthewespositowebsite/website` is empty, so there's nothing for GitHub Pages to deploy yet.

## The Solution (Choose One Method)

---

## ⭐ METHOD 1: Direct Upload (Easiest - 5 minutes)

### Step 1: Download the Code

Go to this URL and download:
**https://github.com/OrenSegal/MattEsp/archive/refs/heads/claude/designer-portfolio-website-01Qxdm6FUsTNoowJThxbWqU7.zip**

Or:
1. Go to https://github.com/OrenSegal/MattEsp
2. Click the branch dropdown → select `claude/designer-portfolio-website-01Qxdm6FUsTNoowJThxbWqU7`
3. Click green "Code" button → "Download ZIP"

**Extract the ZIP file.**

### Step 2: Upload Everything to New Repo

1. Go to: https://github.com/matthewespositowebsite/website
2. Click **"Add file"** → **"Upload files"**
3. **Drag ALL files and folders** from the extracted folder into the upload box
   - Make sure to include the `.github` folder (it might be hidden)
   - Include ALL files, including hidden ones
4. Scroll down, type commit message: "Initial commit - Portfolio website"
5. Click **"Commit changes"**

### Step 3: Enable GitHub Pages

1. Still in `matthewespositowebsite/website` repo
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"** from dropdown
5. The page will refresh - you should now see the workflow option

### Step 4: Trigger Deployment

1. Go to **Actions** tab (top menu)
2. You should see "Deploy to GitHub Pages" workflow
3. If you see a yellow dot or it says "waiting", click it
4. Click **"Run workflow"** if needed
5. Wait 2-3 minutes for the green checkmark ✓

### Step 5: Visit Your Site

Go to: **https://matthewespositowebsite.github.io/website**

Your site should be live! 🎉

---

## METHOD 2: Using Git Commands (If You Know Git)

On your local computer:

```bash
# Clone the source repo
git clone https://github.com/OrenSegal/MattEsp.git
cd MattEsp

# Switch to the correct branch
git checkout claude/designer-portfolio-website-01Qxdm6FUsTNoowJThxbWqU7

# Change where it pushes to
git remote set-url origin https://github.com/matthewespositowebsite/website.git

# Push to new repo
git push -u origin HEAD:main --force
```

Then follow Step 3-5 from Method 1.

---

## Important: Hidden Folder `.github`

The `.github` folder contains the deployment automation. Make sure it gets uploaded!

**On Mac/Linux:**
- Press `Cmd+Shift+.` (Mac) or `Ctrl+H` (Linux) to show hidden files
- Make sure `.github` folder is included when uploading

**On Windows:**
- View → Show → Hidden items (in File Explorer)
- Make sure `.github` folder is included

---

## What You Should See After Upload

In your new repo, you should see these files/folders:
```
.github/
  workflows/
    deploy.yml
public/
  images/
  404.html
  favicon.svg
src/
  components/
  pages/
  App.tsx
  index.css
  main.tsx
package.json
vite.config.ts
index.html
README.md
... and more
```

---

## After Upload: Enable GitHub Pages

Once files are uploaded:

1. **Settings** → **Pages**
2. You'll now see options (not empty anymore!)
3. **Source**: Select "GitHub Actions"
4. Go to **Actions** tab
5. Wait for workflow to complete (green checkmark)
6. Visit: https://matthewespositowebsite.github.io/website

---

## Troubleshooting

### "Pages settings still empty after upload"
- Make sure `.github/workflows/deploy.yml` file exists
- Try refreshing the Settings page
- Wait a few seconds and check again

### "Actions tab is empty"
- The workflow only appears after you select "GitHub Actions" as source
- Go to Settings → Pages → Select "GitHub Actions"
- Then check Actions tab again

### "Workflow fails"
- Click on the failed workflow to see error details
- Most common: `.github/workflows/deploy.yml` wasn't uploaded
- Solution: Re-upload making sure `.github` folder is included

### "Still getting blank screen"
- Check browser console (F12) for errors
- Verify the base path is `/website/` in vite.config.ts
- Wait 5 minutes and try again (sometimes takes time to propagate)

---

## Need Help?

After you upload the files, let me know if:
- ✅ Files appear in the repo
- ✅ Pages settings show options
- ✅ Workflow runs successfully
- ✅ Site is live

And I can help troubleshoot any issues!
