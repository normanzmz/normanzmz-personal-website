import { copyFile, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateProjects } from './generate-projects.mjs';
import { generatePublications } from './generate-publications.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const destination = resolve(root, 'dist');
await generateProjects();
await generatePublications();
const detailPages = (await readdir(resolve(root, 'projects'))).filter(file => file.endsWith('.html')).map(file => `projects/${file}`);
const pages = ['index.html', 'projects.html', 'publications.html', ...detailPages];
const files = new Set([...pages, 'styles.css', 'main.js', 'favicon.svg', 'CNAME', '.nojekyll', '404.html']);
for (const page of pages) {
  const html = await readFile(resolve(root, page), 'utf8');
  for (const match of html.matchAll(/(?:href|src|data-src|poster)="((?:\.\.\/)?assets\/(?:home|projects|publications)\/[^"#?]+)"/g)) {
    files.add(match[1].replace(/^\.\.\//, ''));
  }
}
for (const file of files) {
  const target = resolve(destination, file);
  await mkdir(dirname(target), { recursive: true });
  await copyFile(resolve(root, file), target);
}

// Preserve links shared before the redesign. Targets use the existing custom domain.
const siteUrl = 'https://mingzhangzhu.org';
const redirects = {
  'Project/projects/index.html': '/projects.html',
  'Project/Cosmo/cosmo/index.html': '/projects/kid-cosmo.html',
  'Project/EEWOC/eewoc/index.html': '/projects/eewoc.html',
  'Project/Robocup/robocup/index.html': '/projects/robocup-2024.html',
  'Project/LIMMS/limms/index.html': '/projects/limms.html',
  'Project/Hand/MERLIN hand/index.html': '/projects.html',
  'Project/Fiber/fiber/index.html': '/publications.html',
  'Publication/publication/index.html': '/publications.html',
  'contact/index.html': '/#about',
};
for (const [file, path] of Object.entries(redirects)) {
  const url = siteUrl + path;
  const target = resolve(destination, file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="refresh" content="0;url=${url}"><link rel="canonical" href="${url}"><title>Page moved | Mingzhang Zhu</title></head><body><p>This page has moved. <a href="${url}">Continue to Mingzhang Zhu’s website</a>.</p></body></html>\n`);
}
await copyFile(resolve(root, 'assets/home/Mingzhang-Zhu-CV.pdf'), resolve(destination, 'assets/Mingzhang Zhu_CV_2026_condensed.pdf'));
const sitemap = pages.map(page => `<url><loc>${siteUrl}/${page === 'index.html' ? '' : page}</loc></url>`).join('\n');
await writeFile(resolve(destination, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`);
await writeFile(resolve(destination, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`Built ${pages.length} pages, ${Object.keys(redirects).length} legacy redirects, and ${files.size - pages.length} shared files in ${destination}.`);
