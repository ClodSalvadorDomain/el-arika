// Builds every page as a single self-contained HTML file in standalone/.
import { execSync } from 'node:child_process'
import { rmSync } from 'node:fs'

const pages = ['index', 'category', 'product', 'cart', 'stores', 'components', 'logo-options', 'gradient-options']
rmSync('standalone', { recursive: true, force: true })
for (const page of pages) {
  console.log(`\n▸ ${page}.html`)
  execSync('npx vite build --logLevel warn', { stdio: 'inherit', env: { ...process.env, STANDALONE: page } })
}
