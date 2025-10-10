# UI Components Reference (React + Vanilla CSS)

A minimal, clean scaffold to build your **UI component reference** site:
- Sidebar lists your component categories (Button, Loader, Card, …)
- Clicking a category shows its **design variants** in a **uniform grid of cells**
- Each cell has a **demo area** and a **title**
- No UI library, **vanilla CSS** only. You fill in the component code.

## Quick Start
```bash
npm i
npm run dev
```
Then open the printed local URL.

## Where to add your components
Open `src/data/registry.js` and edit:
```js
export const registry = [
  {
    id: "button",
    label: "Button",
    variants: [
      { id: "primary", title: "Primary", Demo: MyPrimaryButton },
      // ...
    ],
  },
  // ...
]
```
- Create your own demo components (e.g. `const MyPrimaryButton = () => ( ... )`) and attach them to `Demo`.
- Keep styles in **vanilla CSS** at `src/styles/base.css` (you can split files later if you want).

## URL deep-link
Selection syncs to the URL hash (e.g. `#/button`). This keeps the page state on refresh and lets you share links.

## File structure
```
ui-ref-react-vanilla-css/
  ├─ index.html
  ├─ package.json
  ├─ vite.config.js
  └─ src/
      ├─ main.jsx
      ├─ App.jsx
      ├─ styles/
      │   └─ base.css
      ├─ components/
      │   ├─ Sidebar.jsx
      │   ├─ Gallery.jsx
      │   └─ Cell.jsx
      └─ data/
          └─ registry.js
```

## Customize
- Colors/spacing: edit CSS variables in `:root` within `base.css`.
- Grid density: change `grid-template-columns` in `.grid`.
- Cell size: tweak `min-height` in `.cell` or the demo area aspect ratio.

Happy building! 🎉
