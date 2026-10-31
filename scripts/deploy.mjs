// Publishes the site to GitHub Pages: builds dist/ and force-pushes it to the
// gh-pages branch of origin, which Pages serves as-is.
// Usage: npm run deploy   (GH_ACCOUNT=<login> to push as another gh account)
// Pushes with a one-off token header because the active gh account may not
// have access to this repo.
import { execSync } from 'node:child_process';
import { rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const account = process.env.GH_ACCOUNT || 'ClodSalvadorDomain';

const out = (cmd, cwd = root) => execSync(cmd, { cwd }).toString().trim();
const run = (cmd, cwd = dist) => execSync(cmd, { cwd, stdio: 'inherit' });

const remote = out('git remote get-url origin');
const name = out('git config user.name');
const email = out('git config user.email');

run('npm run build', root);
writeFileSync(resolve(dist, '.nojekyll'), '');
rmSync(resolve(dist, '.git'), { recursive: true, force: true });
run('git init -q -b gh-pages');
run('git -c core.autocrlf=false add -A');
run(`git -c user.name="${name}" -c user.email="${email}" commit -q -m "Deploy ${out('git rev-parse --short HEAD')}"`);

const token = out(`gh auth token --user ${account}`);
const auth = Buffer.from(`x-access-token:${token}`).toString('base64');
run(`git -c credential.helper= -c http.extraHeader="Authorization: Basic ${auth}" push -q -f ${remote} gh-pages`);
rmSync(resolve(dist, '.git'), { recursive: true, force: true });
console.log('deployed: GitHub Pages updates in about a minute');
