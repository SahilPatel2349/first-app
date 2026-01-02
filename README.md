# MFE-BFF (single package.json)

This project contains a React frontend (built with Webpack) and an Express BFF. There is a single `package.json` at the repository root.

Available scripts (run from project root):

- `npm run dev` — starts the BFF (via `nodemon`) and the webpack dev server (client) concurrently. Client served on `http://localhost:3000`, BFF on `http://localhost:4000` (API proxy configured).
- `npm run build` — builds the React app into `dist/`.
- `npm start` — starts the Express server which serves built static assets from `dist/` and provides the `/api/*` mock endpoints.

API endpoints exposed by the BFF:
- `GET /api/users`
- `GET /api/products`
- `GET /api/stats`
- `GET /api/echo` — returns query parameters

Quick start:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` and click the buttons to load microfrontends which call the BFF.
