# Nagendra Hegde Portfolio

Personal portfolio website for Nagendra Hegde, built as a modern React-based portfolio from the latest resume content.

The site highlights cloud infrastructure experience, OCI Compute work, featured systems, experience history, skills, education, and contact actions in a responsive single-page experience.

## Tech Stack

- React
- TypeScript
- Vite
- Vitest
- Testing Library
- Lucide React icons
- GitHub Pages deployment

## Local Development

Install dependencies:

```bash
npm install
```

Run the site locally:

```bash
npm run dev -- --port 4000 --strictPort
```

Then open:

```text
http://127.0.0.1:4000
```

If npm cache permissions are an issue locally, use:

```bash
npm_config_cache=/private/tmp/npm-cache npm run dev -- --port 4000 --strictPort
```

## Available Scripts

Run the development server:

```bash
npm run dev
```

Run tests:

```bash
npm test -- --run
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
.
├── public/
│   └── logos/              # Company logo assets used in the experience section
├── src/
│   ├── components/         # Portfolio UI components
│   ├── data/               # Structured resume/profile content
│   ├── test/               # Test setup
│   ├── App.tsx             # Main page composition
│   └── styles.css          # Global responsive visual system
├── index.html              # SEO metadata and app root
├── vite.config.ts          # Vite and Vitest config
└── .github/workflows/      # GitHub Pages deployment workflow
```

## Deployment

The site deploys to GitHub Pages using the workflow at:

```text
.github/workflows/deploy-gh-pages.yml
```

On pushes to `main`, the workflow:

1. Installs dependencies with `npm ci`.
2. Runs tests with `npm test -- --run`.
3. Builds the Vite app with `npm run build`.
4. Uploads the `dist` directory to GitHub Pages.

## Notes

- Portfolio content is centralized in `src/data/profile.ts`.
- Company logos are stored in `public/logos` and rendered without modifying the source images.
- Email and phone actions copy values to the clipboard from the hero section.
- The navigation stays sticky across the full page.
