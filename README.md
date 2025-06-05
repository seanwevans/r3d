# r3d

This project is built with [Vite](https://vitejs.dev/) and React and is deployed on GitHub Pages.

Live site: <https://seanwevans.github.io/r3d/>

## Prerequisites

- [Node.js](https://nodejs.org/) **18** or newer (development is tested with Node 20)
- npm (comes with Node)

## Setup

Install dependencies once after cloning the repository:

```bash
npm install
```

## Development

To start a hot-reloading development server run:

```bash
npm run dev
```

Open the printed local URL (usually http://localhost:5173) to view the app during development.

## Linting

Check the codebase for lint errors by running:

```bash
npm run lint
```

Running the linter before committing helps keep the codebase clean and consistent.

## Build

Create an optimized production build with:

```bash
npm run build
```

The output is written to the `dist` directory. You can preview this build locally using:

```bash
npm run preview
```

Alternatively open `dist/index.html` in a browser.

## Deployment

The `deploy` script builds the project and publishes the `dist` folder to GitHub Pages:

```bash
npm run deploy
```

After deployment the site is available at <https://seanwevans.github.io/r3d/>.
