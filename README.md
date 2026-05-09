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

Pushes to `main` deploy automatically via `.github/workflows/deploy.yml`.

### One-time Cloudflare setup

The workflow needs two GitHub secrets:

| Secret                  | Where to get it |
| ----------------------- | --------------- |
| `CLOUDFLARE_API_TOKEN`  | Cloudflare dashboard → My Profile → API Tokens → **Create Token** → use the **"Edit Cloudflare Workers"** template (or a custom token with `Account → Cloudflare Pages → Edit`). |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard → Workers & Pages → right sidebar shows **Account ID**. |

The Cloudflare Pages project is named `thecollections` and is created on first deploy.

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
.github/workflows/    # CI/CD
```

## Content credit

Imagery and product specifications are used with permission from the original brochure source.
