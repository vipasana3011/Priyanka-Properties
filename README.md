# Priyanka Properties

A luxury real estate website for **Priyanka Properties** built with **React + Vite** and **React Router DOM** (JavaScript only — no TypeScript, no backend).

## Tech
- React 18 + Vite 5
- React Router DOM 6 (true multi-page routing)
- Framer Motion (page transitions & reveal animations)
- Plain CSS design system (deep navy + gold + glassmorphism)

## Pages
Home · About · Projects · Services · Gallery · Contact

## Getting started
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy
Works out of the box on **Netlify** (`public/_redirects`) and **Vercel** (`vercel.json`) — SPA fallback is preconfigured.

## Structure
```
src/
├── components/   # Navbar, Footer, cards, helpers
├── pages/        # Home, About, Projects, Services, Gallery, Contact
├── data/         # property & service content
├── hooks/
├── assets/       # logo + imagery
├── App.jsx
├── main.jsx
└── App.css       # global design system
```
