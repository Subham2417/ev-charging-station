# Publish the EV Investor Website on GitHub Pages

## Method A — GitHub website (easiest)

### 1. Create a GitHub account
Go to https://github.com/ and sign in.

### 2. Create a new repository
1. Click the **+** button in the top-right.
2. Select **New repository**.
3. Give it a name such as:
   `ev-charging-investor-website`
4. Choose **Public** if you want the website to be publicly accessible.
5. Click **Create repository**.

### 3. Upload the website
On the new repository page:
1. Click **Add file → Upload files**.
2. Upload ALL files and folders from this project.
3. Make sure `index.html` is in the ROOT of the repository, not inside another folder.
4. Click **Commit changes**.

Your repository should look approximately like:

    ev-charging-investor-website/
    ├── index.html
    ├── business.html
    ├── technology.html
    ├── impact.html
    ├── financials.html
    ├── roadmap.html
    ├── investor.html
    ├── README.md
    └── assets/
        ├── style.css
        └── app.js

### 4. Turn on GitHub Pages
1. Open the repository.
2. Go to **Settings**.
3. Select **Pages** from the left menu.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**.

GitHub will generate a public URL, usually similar to:

    https://YOUR-USERNAME.github.io/ev-charging-investor-website/

It can take a few minutes for the first deployment.

### 5. Open your website
Visit the URL shown under:
**Settings → Pages**

## Method B — Using Git locally

If Git is installed:

    git clone https://github.com/YOUR-USERNAME/ev-charging-investor-website.git
    cd ev-charging-investor-website

Copy the website files into that folder, then:

    git add .
    git commit -m "Add EV investor website"
    git push origin main

GitHub Pages will deploy from the main branch if configured as above.

## Custom domain
If you own a domain such as:

    www.yourbrand.com

you can connect it from:
**Repository → Settings → Pages → Custom domain**

Then update your domain's DNS records according to GitHub's instructions.

## Contact form warning
The investor form included in `investor.html` is intentionally a demo. A static GitHub Pages website cannot process form submissions by itself.

For a real form, connect it to a service such as:
- Formspree
- Google Forms
- EmailJS
- Your own API/backend

Do not publish personal investor contact information directly in front-end JavaScript if you want it kept private.

## Recommended final checks
- Test every menu link.
- Test the website on mobile.
- Replace placeholder brand name.
- Add real investor email/phone.
- Add real logo and site photographs.
- Replace illustrative financial assumptions.
- Test the investor form.
- Check all regulatory and financial claims before sending the link to investors.
