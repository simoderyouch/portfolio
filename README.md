# Portfolio Website

A modern, fast, and responsive personal portfolio built with React and Vite. It showcases projects, skills, and tools with smooth animations and a clean UI.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 4
- Three.js + React Three Fiber (with Drei/Rapier)
- GSAP / Motion
- Firebase (Auth + Firestore)
- ESLint 9

## Features

- Smooth, responsive UI with animations and scroll effects
- Project showcase with modal details, external links (source, demo, video)
- Tool/skills section with technology icons
- Optional Firebase integration (Google Auth, Firestore)
- Ready-to-deploy setup for GitHub Pages

## Requirements

- Node.js 18 LTS recommended for this setup (Vite 5)
- npm 9+ (npm 10 works as well)

If you use newer major versions of Vite or some libraries, you may need Node 20+.

## Getting Started

1) Clone the repository
```bash
git clone https://github.com/rissss21/portofolio.git
cd portofolio
```

2) Install dependencies
```bash
npm install
```

3) Start the dev server
```bash
npm run dev
```
Vite will print the local URL (by default: http://localhost:5173/portofolio/).

4) Build for production
```bash
npm run build
```
The production files will be in `dist/`.

5) Preview the production build
```bash
npm run preview
```

## Deploy to GitHub Pages

This project is preconfigured to deploy to GitHub Pages.

- `package.json` includes:
  - `homepage`: `https://rissss21.github.io/portofolio`
  - `deploy` script: `gh-pages -d dist`

Steps:
```bash
npm run build
npm run deploy
```
Your site will be published to GitHub Pages under the `homepage` URL.

If you change the repository/name, update `homepage` to match:
```
https://<your-username>.github.io/<your-repo-name>
```

## Project Structure

- `public/` — Static assets (images, models, icons)
- `src/` — Application source code
  - `components/` — Reusable React components
    - `ProjectModal/` — Project detail modal with buttons for source/demo/video
    - `Navbar.jsx` — Sticky navigation with scroll-based visibility
    - Other UI/animation components (Aurora, ChromaGrid, GlassIcons, etc.)
  - `data.js` — Images, tools, and project data used in the UI
  - `firebase.js` — Firebase initialization (Auth + Firestore)
  - `App.jsx`, `main.jsx` — App bootstrap and routing/layout
- `index.html` — App entry HTML
- `vite.config.js` — Vite configuration
- `eslint.config.js` — ESLint rules

## Environment (Firebase)

The file `src/firebase.js` contains a Firebase example configuration and exports for:

- `auth` (Google login/sign-out helpers)
- `db` (Firestore instance)

If you do not use Firebase:
- You can keep the file as-is (not used by default components), or
- Replace the config with your own Firebase project, or
- Remove Firebase-related imports and usage where not needed.

## Available Scripts

```json
{
  "dev": "vite",
  "build": "vite build && cp dist/index.html dist/404.html",
  "preview": "vite preview",
  "lint": "eslint .",
  "deploy": "gh-pages -d dist"
}
```

- `dev`: Start local development server
- `build`: Create production build (also copies `index.html` to `404.html` for GitHub Pages SPA fallback)
- `preview`: Preview the production build locally
- `lint`: Run ESLint
- `deploy`: Publish `dist/` to GitHub Pages

## Notes

- If you update major versions of React/Vite/Three, review compatibility between:
  - `react`, `react-dom`
  - `@react-three/fiber`, `@react-three/drei`, `three`
  - `vite` and your Node.js version
- Images and 3D assets live under `public/assets/`. Update paths in `src/data.js` as needed.

## Author

- GitHub: `rissss21`
- Email: email_farisedrik21@gmail.com
- LinkedIn: https://www.linkedin.com/in/farisedp/

---

If you find this useful, feel free to star the repo or reach out for collaboration!
