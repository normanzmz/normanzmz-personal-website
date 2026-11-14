import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import hands from '../content/hands.mjs';
import humanoids from '../content/humanoids.mjs';
import archive from '../content/archive.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const projects = [...hands, archive.find(project => project.slug === 'massage-hand'), ...humanoids, ...archive.filter(project => project.category === 'Mechanisms & devices')];
const categories = [
  { name: 'Robotic hands', id: 'robotic-hands', description: 'Dexterity, sensing, and human–robot interfaces.' },
  { name: 'Humanoids', id: 'humanoids', description: 'Dynamic locomotion and integrated robotic systems.' },
  { name: 'Mechanisms & devices', id: 'mechanisms', description: 'Mechanical interfaces for mobility, climbing, and medical instruments.' }
];
const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const paragraphs = items => (items ?? []).map(item => `<p>${escape(item)}</p>`).join('\n');
const isVideo = src => /\.mp4$/i.test(src);

function header(prefix = '') {
  return `<header class="site-header"><div class="header-inner">
    <a class="wordmark" href="${prefix || './'}" aria-label="Mingzhang Zhu, home">Mingzhang Zhu<span class="wordmark-dot" aria-hidden="true">.</span></a>
    <nav aria-label="Main navigation">
      <a href="${prefix || './'}">Home</a><a href="${prefix}projects.html" aria-current="page">Projects</a><a href="${prefix}publications.html">Publications</a>
      <a href="${prefix}assets/home/Mingzhang-Zhu-CV.pdf" target="_blank" rel="noopener">CV <span aria-hidden="true">↗</span></a>
    </nav>
  </div></header>`;
}
function footer() {
  return `<footer class="site-footer"><div class="footer-inner"><p>© 2026 Mingzhang Zhu</p><a href="mailto:normanzmz@g.ucla.edu">normanzmz@g.ucla.edu <span aria-hidden="true">↗</span></a><a class="back-to-top" href="#main">Back to top <span aria-hidden="true">↑</span></a></div></footer>`;
}
function document(title, description, body, prefix = '') {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${escape(description)}"><meta name="theme-color" content="#fcfbf8">
<title>${escape(title)} | Mingzhang Zhu</title><link rel="icon" type="image/svg+xml" href="${prefix}favicon.svg"><link rel="stylesheet" href="${prefix}styles.css"><script src="${prefix}main.js" defer></script></head>
<body><a class="skip-link" href="#main">Skip to content</a>${header(prefix)}${body}${footer()}</body></html>\n`.replace(/[ \t]+$/gm, '');
}
function card(project) {
  const url = `projects/${project.slug}.html`;
  const title = ({ limms: 'LIMMS', eewoc: 'EEWOC', 'endoscopic-device': 'Steerable endoscopic device', 'massage-hand': 'Underactuated massage hand' })[project.slug] || project.title;
  const preview = isVideo(project.hero)
    ? `<video class="project-video" data-src="${escape(project.hero)}" poster="${escape(project.poster)}" muted loop playsinline preload="none" width="704" height="396" aria-label="${escape(project.title)} project preview"></video>`
    : `<img src="${escape(project.hero)}" alt="${escape(project.title)} project overview" width="704" height="396" loading="lazy">`;
  return `<article class="project-card">
    <a class="project-card-media${isVideo(project.hero) ? '' : ' is-diagram'}" href="${url}" aria-label="Explore ${escape(project.title)}">${preview}<span class="card-open" aria-hidden="true">↗</span></a>
    <div class="project-card-copy">${project.period ? `<p class="project-period">${escape(project.period)}</p>` : '<p class="project-period" aria-hidden="true">&nbsp;</p>'}
      <h3><a href="${url}">${escape(title)}</a></h3><p>${escape(project.summary)}</p>
      <div class="project-card-links"><a href="${url}">View project <span aria-hidden="true">→</span></a>${project.publications.length ? `<a href="${url}#publications">${project.publications.length === 1 ? 'Related paper' : `${project.publications.length} related papers`} <span aria-hidden="true">↗</span></a>` : ''}</div>
    </div>
  </article>`;
}
function mediaFigure(media) {
  const src = `../${media.src}`;
  const visual = media.kind === 'video'
    ? `<video src="${escape(src)}" poster="${escape(src.replace(/\.mp4$/i, '-poster.jpg'))}" controls muted playsinline loop preload="none" aria-label="${escape(media.alt)}"></video>`
    : `<a class="figure-zoom" href="${escape(src)}" target="_blank" rel="noopener" aria-label="Open full-size image: ${escape(media.alt)}"><img src="${escape(src)}" alt="${escape(media.alt)}" loading="lazy"></a>`;
  return `<figure>${visual}<figcaption>${escape(media.caption)}</figcaption></figure>`;
}
function detail(project) {
  const sections = project.sections.map((section, i) => ({ ...section, id: `${slug(section.title)}-${i + 1}` }));
  const mainMedia = project.mainMedia;
  const hero = mainMedia?.kind === 'youtube'
    ? `<div class="embed-container"><iframe src="https://www.youtube-nocookie.com/embed/${escape(mainMedia.videoId)}?rel=0" title="${escape(project.title)} — full project video" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
    : mainMedia?.kind === 'video'
      ? `<video src="../${escape(mainMedia.src)}" poster="../${escape(project.poster)}" controls playsinline preload="metadata" aria-label="${escape(project.title)} — full project video"></video>`
      : `<img src="../${escape(project.hero)}" alt="${escape(project.title)} overview" fetchpriority="high">`;
  const resources = project.links.map(link => `<a href="${escape(link.url)}" target="_blank" rel="noopener">${escape(link.label)} <span aria-hidden="true">↗</span></a>`).join('');
  return document(project.title, project.summary, `<main id="main" class="page-shell case-study">
    <a class="project-back" href="../projects.html">← All projects</a>
    <div class="case-heading"><p class="eyebrow">${escape(project.category)}${project.period ? ` · ${escape(project.period)}` : ''}</p><h1>${escape(project.title)}</h1><p class="case-summary">${escape(project.summary)}</p>
      <div class="case-links">${project.publications.length ? '<a href="#publications">Related publications <span aria-hidden="true">↓</span></a>' : ''}${resources}</div>
    </div>
    <figure class="case-hero${mainMedia ? '' : ' is-diagram'}">${hero}<figcaption>${escape(mainMedia?.caption || 'Project overview.')}</figcaption></figure>
    <div class="case-layout"><div class="case-body">
      <section id="overview" class="case-section"><h2>Overview</h2>${paragraphs(project.overview)}${project.role ? `<div class="contribution"><span>My focus</span><p>${escape(project.role)}</p></div>` : ''}</section>
      ${sections.map(section => `<section id="${section.id}" class="case-section"><h2>${escape(section.title)}</h2>${paragraphs(section.paragraphs)}${section.bullets?.length ? `<ul>${section.bullets.map(item => `<li>${escape(item)}</li>`).join('')}</ul>` : ''}${section.media?.length ? `<div class="case-gallery${section.media.length === 1 ? ' single' : ''}">${section.media.map(mediaFigure).join('')}</div>` : ''}</section>`).join('\n')}
      ${project.publications.length ? `<section id="publications" class="case-section case-publications"><h2>Related publications</h2><ol>${project.publications.map(paper => `<li><a href="${escape(paper.url)}" target="_blank" rel="noopener">${escape(paper.title)} <span aria-hidden="true">↗</span></a><p>${escape(paper.venue)}</p></li>`).join('')}</ol></section>` : ''}
    </div><aside class="case-nav" aria-label="On this page"><p>On this page</p><nav aria-label="Project sections"><a href="#overview">Overview</a>${sections.map(section => `<a href="#${section.id}">${escape(section.title)}</a>`).join('')}${project.publications.length ? '<a href="#publications">Related publications</a>' : ''}</nav></aside></div>
    <div class="case-return"><a href="../projects.html">← Back to all projects</a></div>
  </main>`, '../');
}

export async function generateProjects() {
  await mkdir(resolve(root, 'projects'), { recursive: true });
  for (const project of projects) {
    if (!/^[a-z0-9-]+$/.test(project.slug)) throw new Error(`Invalid project slug: ${project.slug}`);
    await writeFile(resolve(root, 'projects', `${project.slug}.html`), detail(project));
  }
  const index = document('Projects', 'Robotic hands, humanoids, and mechanism design projects by Mingzhang Zhu, with technical details and related publications.', `<main id="main" class="page-shell projects-index">
    <div class="projects-intro"><p class="eyebrow">Research &amp; engineering</p><h1>Projects</h1><p>From dexterous hands to dynamic humanoids, I work across mechanism design, robotic hardware, and control.</p></div>
    <div class="projects-toolbar"><nav class="category-links" aria-label="Project categories">${categories.map(category => `<a href="#${category.id}">${escape(category.name)}</a>`).join('')}</nav>
      <button class="motion-toggle" type="button" aria-pressed="false" hidden><svg class="motion-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4 3h3v10H4zm5 0h3v10H9z"/></svg><span>Pause previews</span></button>
    </div>
    ${categories.map(category => `<section id="${category.id}" class="project-group" aria-labelledby="${category.id}-title"><div class="project-group-heading"><h2 id="${category.id}-title">${escape(category.name)}</h2><p>${escape(category.description)}</p></div><div class="projects-grid">${projects.filter(project => project.category === category.name).map(card).join('\n')}</div></section>`).join('\n')}
  </main>`);
  await writeFile(resolve(root, 'projects.html'), index);
  console.log(`Generated Projects index and ${projects.length} detail pages.`);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await generateProjects();
