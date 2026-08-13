# Md. Rajon Ahamad — Software Engineer Portfolio

A responsive React portfolio focused on ERP engineering, backend development, production projects, technical skills, experience, and deployment work.

## UI stack

- React 18
- Tailwind CSS 3
- Framer Motion
- React Icons
- React Scroll
- React GitHub Calendar
- EmailJS

**Chakra UI is not used anywhere in this project.**

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Add more projects

Add project objects to:

```text
src/db/projectdb.js
```

The project section automatically handles category filters and pagination at 6 projects per page.

## Tailwind files

```text
tailwind.config.js
postcss.config.js
src/index.css
```

## Contact form

The existing EmailJS environment variables are preserved:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

## Clean install (important)

If you previously installed dependencies from an older version, remove the old dependency tree first:

```bash
rm -rf node_modules package-lock.json
npm cache verify
npm install
npm run dev
```

The portfolio intentionally extends only `react-app` ESLint rules. It does not load `react-app/jest` because this project has no Jest test suite.
