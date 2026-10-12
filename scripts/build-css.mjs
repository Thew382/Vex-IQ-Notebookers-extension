import { readFile, writeFile } from 'node:fs/promises'
import { watch } from 'node:fs'
import { createRequire } from 'node:module'
import { compile } from 'tailwindcss'

const require = createRequire(import.meta.url)
async function build() {
const html = await readFile(new URL('../notebookertool.html', import.meta.url), 'utf8')
const input = await readFile(new URL('../src/input.css', import.meta.url), 'utf8')
const candidates = [...html.matchAll(/class\s*=\s*["']([^"']*)["']/g)]
  .flatMap(([, value]) => value.split(/\s+/))
  .filter(Boolean)

const compiler = await compile(input, {
  base: process.cwd(),
  loadStylesheet: async (id) => {
    const path = require.resolve(`${id}/index.css`)
    return { path, base: process.cwd(), content: await readFile(path, 'utf8') }
  },
})
await writeFile(new URL('../styles.css', import.meta.url), compiler.build(candidates))
console.log('Built styles.css')
}

await build()

if (process.argv.includes('--watch')) {
  let timer
  for (const file of ['../notebookertool.html', '../src/input.css']) {
    watch(new URL(file, import.meta.url), () => {
      clearTimeout(timer)
      timer = setTimeout(() => build().catch(console.error), 100)
    })
  }
  console.log('Watching popup HTML and Tailwind input CSS. Press Ctrl+C to stop.')
}
