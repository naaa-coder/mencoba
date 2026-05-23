# 🚀 GitHub Pages Deployment Guide

Panduan lengkap untuk mendeploy Friendship Showcase ke GitHub Pages dengan mudah.

## 📋 Prerequisites

- Akun GitHub (gratis)
- Git installed di komputer Anda
- Basic command line knowledge
- Website files (sudah Anda punya!)

---

## ✅ Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. **Login ke GitHub**
   - Buka https://github.com
   - Sign in ke akun Anda

2. **Create New Repository**
   - Click `+` icon di top-right
   - Select "New repository"
   - Fill in details:

   **Option A: Personal GitHub Pages**
   ```
   Repository name: your-username.github.io
   Description: Friendship Showcase - Interactive website celebrating friendship
   Visibility: Public
   Initialize with README: ✓ (bisa)
   ```

   **Option B: Project Pages**
   ```
   Repository name: friendship-showcase
   Description: Friendship Showcase - Interactive website celebrating friendship
   Visibility: Public
   Initialize with README: ✗ (optional)
   ```

3. **Create Repository** - Click "Create repository"

---

### Step 2: Setup Local Repository

#### Option A: New Repository (Recommended)

```bash
# 1. Navigate ke folder website Anda
cd /path/to/friendship-showcase

# 2. Initialize git repository
git init

# 3. Add remote origin
# Ganti YOUR-USERNAME dengan username GitHub Anda
# Ganti REPO-NAME dengan nama repository (friendship-showcase atau username.github.io)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# 4. Add all files
git add .

# 5. Commit changes
git commit -m "Initial commit: Friendship Showcase website"

# 6. Rename branch ke 'main' (jika perlu)
git branch -M main

# 7. Push ke GitHub
git push -u origin main
```

#### Option B: Clone & Update Existing Repo

```bash
# Jika Anda sudah punya repo
git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
cd REPO-NAME

# Copy files website ke dalam folder
# kemudian:
git add .
git commit -m "Add Friendship Showcase website"
git push origin main
```

---

### Step 3: Enable GitHub Pages

#### Untuk Personal Pages (username.github.io)

- Repository sudah auto-deploy!
- Cek di: `https://your-username.github.io`
- Takes ~1 minute untuk go live

#### Untuk Project Pages (friendship-showcase)

1. **Go to Repository Settings**
   - Click "Settings" tab
   - Scroll down ke "Pages" section

2. **Configure Pages**
   ```
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
   Click Save
   ```

3. **Wait untuk Deploy**
   - GitHub akan build & deploy automatically
   - Takes ~1-2 minutes

4. **Check Live Site**
   - URL akan: `https://your-username.github.io/friendship-showcase`
   - Dapat dilihat di Pages settings

---

### Step 4: Verify Deployment

```bash
# Check site is live
curl -I https://your-username.github.io

# Check specific page
curl https://your-username.github.io/index.html | head -20
```

---

## 🎯 URL Formats

Depending on your setup:

```
Personal Page (username.github.io):
├─ https://your-username.github.io
├─ https://your-username.github.io/index.html
├─ https://your-username.github.io/styles.css
└─ https://your-username.github.io/script.js

Project Page (repo-name):
├─ https://your-username.github.io/friendship-showcase
├─ https://your-username.github.io/friendship-showcase/index.html
├─ https://your-username.github.io/friendship-showcase/styles.css
└─ https://your-username.github.io/friendship-showcase/script.js
```

---

## 🔄 Update Website

Setelah deployment, untuk update content:

```bash
# 1. Edit your files locally
# (index.html, styles.css, script.js, etc.)

# 2. Commit changes
git add .
git commit -m "Update: Added new quotes and features"

# 3. Push to GitHub
git push origin main

# 4. GitHub Pages auto-updates!
# (Check after ~1-2 minutes)
```

---

## 🛠️ Troubleshooting

### Website tidak muncul

**Problem: 404 error ketika akses website**

```bash
# 1. Verify repository ada
git remote -v

# 2. Check yang di-push
git log --oneline

# 3. Verify GitHub Pages enabled
# Settings → Pages → Check branch & folder
```

**Solution:**
- Pastikan repository PUBLIC (tidak private)
- Pastikan index.html di root directory
- Wait 5-10 menit untuk deploy complete
- Refresh browser (Ctrl+Shift+R untuk hard refresh)

### CSS/JS tidak load

**Problem: Styling/interactivity tidak bekerja**

**Causes:**
- CDN links down/blocked
- Relative paths salah
- Browser cache issue

**Solutions:**
```bash
# 1. Check file paths di index.html
# Harus seperti ini:
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>

# 2. Hard refresh browser
# Windows: Ctrl+Shift+R
# Mac: Cmd+Shift+R

# 3. Check CDN status
# Open Console (F12)
# Look for errors
```

### Performance issues

**Problem: Website lambat atau particles jadi patah**

**Solutions:**
1. Reduce particle count di script.js
2. Disable AOS mirror effect
3. Optimize images jika ada
4. Check browser performance tab

```javascript
// Di script.js, cari ParticleSystem
this.particleCount = 30; // Kurangi dari 50 ke 30
```

### Custom Domain

**Problem: Ingin gunakan custom domain**

**Solutions:**

1. **Setup DNS records**
   - Go to domain registrar (Namecheap, GoDaddy, etc)
   - Add A records pointing to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. **Add to GitHub**
   - Repository Settings → Pages
   - Custom domain: `yourdomain.com`
   - Save & wait untuk SSL cert

3. **Add CNAME file** (optional)
   ```
   # Create file: CNAME (no extension)
   # Content:
   yourdomain.com
   ```

---

## 📊 GitHub Pages Features

### Automatic Jekyll Processing
- If filename starts with `_`, Jekyll ignores it
- To disable Jekyll, add empty `.nojekyll` file

```bash
# Create .nojekyll file
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll to disable Jekyll processing"
git push origin main
```

### Environment Variables
- Available in Actions/Deployments
- Cannot be accessed from frontend (security)

### Build & Deployment Logs
- Check Actions tab untuk deployment status
- See build logs if something fails

---

## 🔒 Security Best Practices

### 1. Keep API Keys Secret
```bash
# WRONG - Don't do this!
const apiKey = "sk_live_12345...";

# BETTER - Use environment variables (if you have backend)
const apiKey = process.env.API_KEY;
```

### 2. No Sensitive Info
```javascript
// ❌ WRONG
const password = "myPassword123";

// ✅ RIGHT
// Don't include any sensitive info in frontend code
```

### 3. Use HTTPS Always
- GitHub Pages auto-provides HTTPS
- No custom action needed

---

## 📈 Monitoring & Analytics

### GitHub Insights
```
Repository → Insights tab
├─ Traffic
├─ Forks
├─ Stars
└─ Network
```

### Google Analytics (Optional)
Add tracking code ke `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🚀 Advanced: CI/CD with GitHub Actions

### Automatic Tests & Deploy

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Check HTML
      run: |
        ls -la *.html
        ls -la *.css
        ls -la *.js
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

---

## ✨ Tips & Tricks

### 1. Add GitHub Badge
```markdown
[![Pages Badge](https://img.shields.io/badge/GitHub%20Pages-Live-green?style=flat-square&logo=github)](https://your-username.github.io)
```

### 2. Share Website
- Copy URL dari GitHub Pages
- Share di social media dengan screenshot
- Add to portfolio/resume

### 3. Version Control
```bash
# Always commit meaningful messages
git commit -m "Feature: Add new quotes to generator"
git commit -m "Fix: Particle animation performance"
git commit -m "Docs: Update README with new features"
```

### 4. Backup Locally
```bash
# Create backup
cp -r /path/to/site /path/to/backup

# Or use git tags
git tag -a v1.0.0 -m "Version 1.0.0 - Initial Release"
git push origin v1.0.0
```

---

## 📞 Getting Help

### Common Resources
- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Pages Status](https://www.githubstatus.com/)
- [GitHub Community](https://github.community/)

### Community Support
- Stack Overflow: `[github-pages]` tag
- GitHub Discussions
- Dev.to Communities

---

## ✅ Final Checklist

Before declaring deployment complete:

- [ ] Website accessible at GitHub Pages URL
- [ ] All pages load correctly
- [ ] Styling displays properly
- [ ] JavaScript interactivity works
- [ ] Particles animation smooth
- [ ] Quotes generator functional
- [ ] Responsive on mobile
- [ ] No 404 errors in console
- [ ] No CORS errors
- [ ] Share URL working
- [ ] Git history clean and organized

---

## 🎉 Success!

Congratulations! Your Friendship Showcase website is now live on GitHub Pages!

**Next Steps:**
1. Share your website link with friends!
2. Customize quotes and messages
3. Add more features from roadmap
4. Keep updating and improving
5. Get feedback from users

---

**Happy Deploying! 🚀💫**

*Last Updated: May 2024*
*For latest updates, check the main README.md file*
