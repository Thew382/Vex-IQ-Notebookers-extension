# Vex-IQ-Notebooker-s-extension

Chrome extension UI built with React, Vite, Tailwind CSS v4, and shadcn/ui.

## Build and load in Chrome

```powershell
npm install
npm run build
```

In `chrome://extensions`, enable Developer mode, choose **Load unpacked**, and select this project's folder or its **dist** folder. Both work after building: the project-root manifest opens the compiled page in `dist`, and `dist` also contains a standalone manifest, background worker, content scripts, and icons ready for Chrome.

After editing source files, rebuild and reload the extension. Use `npm run watch` for automatic rebuilds. `npm run dev` previews the UI in a normal browser; Chrome extension APIs are only available in the loaded extension.

## Use shadcn components

The Button component is installed in `src/components/ui/button.jsx`. Components are editable source files, rather than a single prebuilt UI library.

```jsx
import { Button } from '@/components/ui/button'

function Example() {
  return <Button variant="outline">Add notebook entry</Button>
}
```

Add other components from the project directory:

```powershell
npx shadcn add card input textarea
```

Edit the UI in `src/main.jsx`, theme styles in `src/input.css`, and shadcn configuration in `components.json`. JavaScript components, the `@/` source alias, neutral colors, and dark mode are configured.

The previous `build:css` and `watch:css` commands now build the full extension, including CSS used by React components. `scripts/build-css.mjs` and the old root `styles.css` are retained for reference; the extension uses Vite's compiled CSS in `dist/assets`.
