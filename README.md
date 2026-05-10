# The Collections

Marketing site for **The Collections** — kitchen cabinetry, finishes, and engineered quartz countertops.

- **Domain:** thecollections.com
- **Hosting:** Cloudflare Pages
- **CI/CD:** GitHub Actions → Cloudflare Pages on push to `main`

## Local development

The site is plain HTML/CSS/JS in `site/`. Open `site/index.html` in a browser, or serve it:

```bash
npx serve site
# or
python -m http.server -d site 8000
```

## Deploy

Pushes to `main` auto-deploy via the **Cloudflare Pages GitHub App** integration.

### One-time setup (already done)

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**
2. Select `jefferykarbowski/thecollections`
3. Build settings:
   - Framework preset: **None**
   - Build command: *(empty)*
   - Build output directory: `site`
4. Save and Deploy

After that, every push to `main` deploys automatically; PRs get preview URLs.

### Custom domain

After the first successful deploy, in the Cloudflare dashboard:

1. **Workers & Pages → thecollections → Custom domains → Set up a custom domain**
2. Enter `thecollections.com` and `www.thecollections.com`
3. If the domain is already on Cloudflare, DNS is wired automatically; otherwise add the CNAME records shown.

## Project structure

```
site/                 # Static site root (deployed to Cloudflare Pages)
  index.html
  styles.css
  main.js
  favicon.svg
  robots.txt
  sitemap.xml
  _headers            # Cloudflare Pages headers (security + caching)
  images/
```

## Content credit

Imagery and product specifications are used with permission from the original brochure source.
