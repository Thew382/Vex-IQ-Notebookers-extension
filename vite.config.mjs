import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cp } from 'node:fs/promises'
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
        for (const file of ['manifest.json', 'background.js', 'images', 'scripts/content.js', 'scripts/sidebar-page.js']) {
          await cp(new URL(file, import.meta.url), new URL(`dist/${file}`, import.meta.url), { recursive: true })
        }
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
