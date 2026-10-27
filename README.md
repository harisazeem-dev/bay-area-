# Bay Area Roof Master — Production Website & Hostinger Deployment Guide

A premium, conversion-optimized website for **Bay Area Roof Master**, a licensed California C-39 roofing contractor serving all nine San Francisco Bay Area counties.

- **Business Name**: Bay Area Roof Master
- **Business Address**: 4411 Geary Blvd, Suite 301, San Francisco, CA 94118
- **California Contractor License**: #1014432
- **Primary Conversion Goal**: Free Written Roofing Bids (`Get Free Roof Bids`)

---

## 1. Tech Stack & Prerequisites

- **Runtime**: Node.js 18.x or 20.x+
- **Package Manager**: npm, pnpm, or bun
- **Framework**: React 19 + TypeScript + Vite 6+
- **Styling**: Tailwind CSS v4 (native `@import "tailwindcss";`)
- **Icons**: Lucide React
- **Typography**: Manrope (Headings) & Inter (Body/UI)

---

## 2. Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or `http://localhost:5173`) in your browser.

3. **Validate syntax and types**:
   ```bash
   npm run build
   ```

---

## 3. Production Build & Output

To compile the application into static production assets:
```bash
npm run build
```

- **Output Directory**: `dist/`
- The `dist/` folder contains pure static HTML, CSS, JavaScript, SVG brand assets, and optimized WebP/JPEG images ready to serve on any high-performance web server or CDN.

---

## 4. Hostinger Deployment Guide

Hostinger supports static websites via **hPanel File Manager**, **FTP**, or **Git Integration**.

### Option A: Hostinger File Manager (Simplest & Fast)

1. Run `npm run build` locally or in your CI/CD pipeline to generate the `dist/` directory.
2. Log in to your **Hostinger hPanel**.
3. Navigate to **Websites** → Select your domain → click **Manage**.
4. Open **Files** → **File Manager** (or connect via SFTP).
5. Open the `public_html/` root directory of your website.
6. Delete any default `default.php` file present.
7. Upload all contents from inside your local `dist/` folder into `public_html/` (so `index.html`, `assets/`, `favicon.svg`, `robots.txt`, and `sitemap.xml` are located directly under `public_html/`).
8. Refresh your domain URL to confirm the site is live.

### Option B: Hostinger Git / GitHub Automated Deployment

1. Push this repository to GitHub or GitLab.
2. In Hostinger hPanel, go to **Advanced** → **Git**.
3. Enter your repository URL, select the `main` branch, and set directory to `/public_html`.
4. Configure the build command or deploy hook to run:
   ```bash
   npm install && npm run build && cp -r dist/* public_html/
   ```

### SPA Routing Configuration (`.htaccess` on Hostinger Apache)

Create or ensure an `.htaccess` file exists in `public_html/`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable Browser Caching for Performance
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 5. Connecting the Free Roof Bid Form to Email or CRM

The lead-generation form in `src/components/QuoteForm.tsx` is built with an abstracted submission adapter.

To connect submissions directly to an email or webhook service on Hostinger:

### Formspree / Web3Forms Integration:
1. Register your destination email on [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. In `src/components/QuoteForm.tsx`, replace the simulated handler with a `fetch`:
   ```ts
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData),
   });
   if (!response.ok) throw new Error("Submission failed");
   ```
3. Re-run `npm run build` and re-upload `dist/`.

---

## 6. SSL / HTTPS & Domain Verification

1. In Hostinger hPanel, go to **Security** → **SSL**.
2. Click **Install SSL** (Let's Encrypt Free Lifetime SSL is provided automatically).
3. Toggle on **Force HTTPS** so all traffic redirects securely.
4. Verify canonical domain resolution (e.g., `https://bayarearoofmaster.com`).

---

## 7. Post-Deployment Checklist

- [x] Verify Announcement Bar Google Maps link opens 4411 Geary Blvd, SF.
- [x] Test quote form client-side validation on mobile and desktop.
- [x] Test interactive ZIP code checker with Bay Area ZIP codes (e.g. `94118`, `94016`, `95112`).
- [x] Confirm CSLB verification external link opens `https://www.cslb.ca.gov/`.
- [x] Confirm all 8 FAQ accordions expand/collapse smoothly.
- [x] Verify Privacy Policy, Terms of Use, and CCPA Opt-Out modals open without dead links.
- [x] Verify Favicon and OpenGraph sharing tags in `index.html`.
