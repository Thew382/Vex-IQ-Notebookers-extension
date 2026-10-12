import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cp, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-extension-files',
      apply: 'build',
      async closeBundle() {
        for (const file of ['background.js', 'images', 'scripts/content.js', 'scripts/sidebar-page.js']) {
          await cp(new URL(file, import.meta.url), new URL(`dist/${file}`, import.meta.url), { recursive: true })
        }
        // The project-root manifest uses dist/; the packaged manifest is already inside dist/.
        const manifest = JSON.parse(await readFile(new URL('manifest.json', import.meta.url), 'utf8'))
        manifest.action.default_popup = manifest.action.default_popup.replace(/^dist\//, '')
        manifest.side_panel.default_path = manifest.side_panel.default_path.replace(/^dist\//, '')
        await writeFile(new URL('dist/manifest.json', import.meta.url), JSON.stringify(manifest, null, 2) + '\n')
      },
    },
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    outDir: 'dist',
    rollupOptions: { input: `${root}notebookertool.html` },
  },
})
