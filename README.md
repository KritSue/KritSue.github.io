# Krittameth Suemanotham — Engineering Portfolio

The source for [kritsue.github.io](https://kritsue.github.io/), a single-page engineering and software portfolio. It gathers research, open learning projects, engineering notes, experience and public contact links.

## Technology

Plain HTML, CSS and a small JavaScript file. There is no package manager, build step, backend, analytics or external widget. The optional Google Fonts stylesheet falls back to system fonts if unavailable.

## Local development

Open `index.html` in a browser, or serve the folder locally for a closer Pages preview:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000/`. Edit the semantic sections in `index.html` to update content. Styles live in `assets/styles.css`; the theme toggle and copyright year live in `assets/site.js`.

## Structure

- `index.html` — portfolio content and metadata
- `assets/styles.css` — responsive layout and light/dark palettes
- `assets/site.js` — theme preference and footer year
- `assets/favicon.svg` — simple monogram
- `.github/workflows/deploy.yml` — GitHub Pages deployment
- `.nojekyll` — serve static files without Jekyll processing

## Deployment

Pushes to `main` trigger the official GitHub Pages Actions workflow. The workflow uploads this static directory and deploys it with `actions/deploy-pages`. In repository **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. No generated `site/` directory is committed.

Public project links point to their existing sites; the private RadioAI project has no repository link or implementation details.
