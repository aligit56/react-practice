# react-practice

Collection of small React practice projects used during DevWeekend.

Projects included

- `01vitereact` — initial Vite + React starter project.
- `02counter` — small counter app (limits: 0..25) with UI improvements.
- `03tailwindprops` — Vite + React + Tailwind demo with a `Card` component.

Prerequisites

- Node.js (16+ recommended) and `npm`
- Git
- (optional) GitHub CLI `gh` for creating/remotes

Quick start

1. Open a terminal in the repository root.

2. Run one of the projects. Example for `03tailwindprops`:

```bash
cd "03tailwindprops"
npm install
npm run dev
```

Repeat the same steps inside `01vitereact` and `02counter` to run those projects.

Notes and important changes

- `02counter`
  - The counter enforces bounds: it will not go below 0 or above 25.
  - UI improvements and disabled button states were added in `src/App.jsx` and `src/App.css`.

- `03tailwindprops`
  - Tailwind setup fixed: added `src/tailwind.css`, `tailwind.config.cjs`, and `postcss.config.cjs`.
  - If you see Tailwind class issues, run `npm install` in `03tailwindprops` and restart the dev server.
  - Card component: `src/components/Card.jsx` accepts a `title` prop. Example used in `src/App.jsx`:
    - `Card` receives `title={"Muhammad Ali doing DevWeekend task"}` in the demo.

- Workspace setting: a workspace `.vscode/settings.json` was added in `01vitereact` to disable delete confirmation (`explorer.confirmDelete: false`) and permanent delete (`files.enableTrash: false`). Revert if you prefer safer delete behavior.

Git

- Remote created: `git@github.com:aligit56/react-practice.git` (push is already performed).
- To push further changes:

```bash
git add .
git commit -m "Your message"
git push origin main
```

If you want me to add CI, a nicer README or increment the repo description, tell me which details you'd like included.
