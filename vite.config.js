import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

const root = dirname(fileURLToPath(import.meta.url))
const pages = ['index', 'category', 'product', 'cart', 'stores', 'components', 'logo-options', 'gradient-options']

/**
 * Static HTML partials: `<!-- @include header -->` is replaced by partials/header.html
 * at dev and build time, so shared chrome ships as real HTML (good for SEO / no-JS).
 */
function htmlPartials() {
  const include = (html, depth = 0) =>
    html.replace(/<!--\s*@include\s+([\w-]+)\s*-->/g, (_, name) => {
      if (depth > 5) throw new Error(`Partial nesting too deep at "${name}"`)
      return include(readFileSync(resolve(root, 'partials', `${name}.html`), 'utf8'), depth + 1)
    })
  return {
    name: 'html-partials',
    transformIndexHtml: { order: 'pre', handler: (html) => include(html) },
    handleHotUpdate({ file, server }) {
      if (file.includes(`${'partials'}`) && file.endsWith('.html')) server.ws.send({ type: 'full-reload' })
    },
  }
}

/**
 * STANDALONE=<page> builds that page as one self-contained .html file into standalone/
 * (scripts, CSS and images inlined) so it opens straight from disk. See scripts/standalone.mjs.
 */
const standalone = process.env.STANDALONE

export default defineConfig({
  base: './',
  plugins: [htmlPartials(), tailwindcss(), react(), ...(standalone ? [viteSingleFile()] : [])],
  build: standalone
    ? {
        outDir: 'standalone',
        emptyOutDir: false,
        assetsInlineLimit: 1e8,
        copyPublicDir: false,
        chunkSizeWarningLimit: 4000,
        rollupOptions: { input: resolve(root, `${standalone}.html`) },
      }
    : {
        rollupOptions: {
          input: Object.fromEntries(pages.map((p) => [p, resolve(root, `${p}.html`)])),
        },
        chunkSizeWarningLimit: 1600,
      },
})
