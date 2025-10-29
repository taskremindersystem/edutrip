git# 🚀 Deploying EduTrip to Netlify

## Method 1: Deploy via Netlify Website (Easiest)

### Step 1: Prepare Your Project

1. **Make sure all changes are saved**
2. **Test your build locally:**
   ```bash
   npm run build
   ```
   This should create a `build` folder with your production-ready files.

### Step 2: Create a Netlify Account

1. Go to [https://www.netlify.com](https://www.netlify.com)
2. Click **"Sign up"** (it's free!)
3. Sign up with GitHub, GitLab, Bitbucket, or Email

### Step 3: Deploy Your Site

#### Option A: Drag & Drop (Quickest)

1. After logging in, you'll see the Netlify dashboard
2. Look for the **"Sites"** tab
3. Scroll down to find a box that says **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**
4. Open your project folder in File Explorer
5. Drag the `build` folder (inside your EduTrip project) onto this box
6. Wait for deployment to complete (usually 30-60 seconds)
7. **Done!** Netlify will give you a URL like: `https://random-name-123456.netlify.app`

#### Option B: Connect to Git Repository (Recommended for Updates)

1. Click **"Add new site"** → **"Import an existing project"**
2. Choose your Git provider (GitHub/GitLab/Bitbucket)
3. Authorize Netlify to access your repositories
4. Select your EduTrip repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - **Branch:** `main` or `master`
6. Click **"Deploy site"**
7. Wait for deployment (2-3 minutes for first deployment)
8. **Done!** Your site is live!

### Step 4: Customize Your Site

1. **Change Site Name:**
   - Go to **Site settings** → **General** → **Site details**
   - Click **"Change site name"**
   - Enter: `edutrip-your-name` or any available name
   - Your new URL: `https://edutrip-your-name.netlify.app`

2. **Add Custom Domain (Optional):**
   - Go to **Domain settings**
   - Click **"Add custom domain"**
   - Follow the instructions to connect your domain

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```
This will open your browser to authenticate.

### Step 3: Initialize and Deploy

```bash
# Navigate to your project directory
cd "C:\Users\dekuma\OneDrive - ASSA ABLOY Group\Desktop\AlgoMaster\Playground\EduTrip"

# Build your project
npm run build

# Deploy to Netlify
netlify deploy
```

Follow the prompts:
- **Create & configure a new site?** Yes
- **Team:** Select your team
- **Site name:** Enter a name or leave blank for random
- **Publish directory:** `build`

### Step 4: Deploy to Production

After testing the draft URL, deploy to production:

```bash
netlify deploy --prod
```

## Method 3: Deploy via GitHub Actions (Automatic)

### Step 1: Push to GitHub

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/edutrip.git
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. Follow **Method 1, Option B** above
2. Netlify will automatically deploy on every push to GitHub!

## 📝 Important Configuration

Your `netlify.toml` file is already configured with:

```toml
[build]
  publish = "build"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

This ensures:
- ✅ Correct build output directory
- ✅ React Router works properly (SPA redirects)
- ✅ Uses Node.js 18

## 🎯 Quick Checklist Before Deployment

- [ ] Run `npm run build` successfully
- [ ] No errors in the build output
- [ ] All dependencies are in `package.json`
- [ ] `netlify.toml` exists in root directory
- [ ] `.gitignore` includes `node_modules` and `build`

## 🔧 Troubleshooting

### Build Fails on Netlify

1. **Check Node version:**
   - Make sure `netlify.toml` has `NODE_VERSION = "18"`

2. **Missing dependencies:**
   ```bash
   npm install
   npm run build
   ```
   If it works locally, it should work on Netlify

3. **Check build logs:**
   - Go to **Deploys** tab in Netlify
   - Click on the failed deploy
   - Read the error messages

### Site Shows Blank Page

1. **Check publish directory:**
   - Should be `build` (not `public` or `dist`)

2. **Check redirects:**
   - Make sure `netlify.toml` has the redirect rules

### Environment Variables (if needed later)

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add your variables
4. Redeploy the site

## 🎉 Your Site is Live!

Once deployed, you'll get:
- 🌐 **Free HTTPS URL**: `https://your-site-name.netlify.app`
- 🚀 **Automatic deployments** (if using Git)
- 🔄 **Instant rollbacks** to previous versions
- 📊 **Deploy previews** for pull requests
- ⚡ **CDN hosting** worldwide

## 📱 Share Your Site

Your EduTrip site will be accessible at:
```
https://your-site-name.netlify.app
```

Share this URL with:
- Schools and colleges
- Students and teachers
- Tour operators
- Anyone planning educational trips!

---

Need help? Check Netlify documentation: https://docs.netlify.com

