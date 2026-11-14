import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import publications from '../content/publications.mjs';
import { awards, talks, media, reviews } from '../content/academic-service.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
function abbreviatedName(name) {
  const parts = name.split(/\s+/);
  const surname = parts.pop();
  return `${parts.map(part => `${part.replace(/\./g, '')[0]}.`).join(' ')} ${surname}`;
}
function renderAuthor(author) {
  const name = `${escape(abbreviatedName(author.name))}${author.equal ? '*' : ''}`;
  return author.highlight ? `<strong>${name}</strong>` : name;
}
function renderAuthors(paper) {
  const authors = paper.authors;
  if (authors.length <= 6) return authors.map(renderAuthor).join(', ');
  const leading = authors.slice(0, 2);
  const ownName = authors.find(author => author.highlight);
  const extra = ownName && !leading.includes(ownName) ? `, …, ${renderAuthor(ownName)}` : '';
  return `${leading.map(renderAuthor).join(', ')}${extra}, et al.`;
}

export async function generatePublications() {
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Publications, awards, talks, media, and academic reviewing by Mingzhang Zhu."><meta name="theme-color" content="#fcfbf8">
<title>Publications | Mingzhang Zhu</title><link rel="icon" type="image/svg+xml" href="favicon.svg"><link rel="stylesheet" href="styles.css"><script src="main.js" defer></script></head>
<body><a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="header-inner"><a class="wordmark" href="./" aria-label="Mingzhang Zhu, home">Mingzhang Zhu<span class="wordmark-dot" aria-hidden="true">.</span></a>
<nav aria-label="Main navigation"><a href="./">Home</a><a href="projects.html">Projects</a><a href="publications.html" aria-current="page">Publications</a><a href="assets/home/Mingzhang-Zhu-CV.pdf" target="_blank" rel="noopener">CV <span aria-hidden="true">↗</span></a></nav></div></header>
<main id="main" class="page-shell publications-page">
  <div class="publications-heading"><p class="eyebrow">Research &amp; academic service</p><h1>Publications</h1></div>
  <section id="publication-list" class="publication-section" aria-labelledby="publication-list-title"><h2 id="publication-list-title">Publication List</h2>
    <ol class="publication-list">${publications.map(paper => `<li id="${escape(paper.id)}"><p><span class="publication-authors" title="${escape(paper.authors.map(author => author.name).join(', '))}">${renderAuthors(paper)}</span>, “<a href="${escape(paper.url)}" target="_blank" rel="noopener">${escape(paper.title)}</a>.” <span class="publication-venue">${escape(paper.venue)}, ${paper.year}.</span>${paper.status ? ` <em class="publication-status${paper.status === 'Withdrawn preprint' ? ' withdrawn' : ''}">${escape(paper.status)}.</em>` : ''}</p></li>`).join('\n')}</ol>
    <p class="publication-note">* Equal contribution.</p>
    <div class="profile-links"><a href="https://scholar.google.com/citations?user=Q7DtlZ0AAAAJ&amp;sortby=pubdate" target="_blank" rel="noopener">Google Scholar <span aria-hidden="true">↗</span></a><a href="https://www.researchgate.net/profile/Mingzhang-Zhu" target="_blank" rel="noopener">ResearchGate <span aria-hidden="true">↗</span></a></div>
  </section>
  <section id="awards" class="publication-section" aria-labelledby="awards-title"><h2 id="awards-title">Award List</h2><ul class="academic-list">${awards.map(award => `<li>${award.year} ${escape(award.event)}, <strong>${escape(award.distinction)}</strong></li>`).join('')}</ul></section>
  <section id="talks" class="publication-section" aria-labelledby="talks-title"><h2 id="talks-title">Talk</h2><ul class="academic-list">${talks.map(talk => `<li><a href="${escape(talk.url)}" target="_blank" rel="noopener">${escape(talk.text)}</a></li>`).join('')}</ul></section>
  <section id="media" class="publication-section" aria-labelledby="media-title"><h2 id="media-title">Media</h2><div class="publication-media">${media.map(item => `<article><a href="${escape(item.url)}" target="_blank" rel="noopener"><img src="${escape(item.image)}" alt="${escape(item.alt)}" loading="lazy"><h3>${escape(item.title)} <span aria-hidden="true">↗</span></h3></a><p>${escape(item.description)}</p><p class="media-date">${escape(item.dateLabel)}</p></article>`).join('')}</div></section>
  <section id="reviews" class="publication-section" aria-labelledby="reviews-title"><h2 id="reviews-title">Review List</h2><ul class="academic-list review-list">${reviews.map(review => `<li>${escape(review.event)} ${review.year} <span aria-label="${review.count} ${review.count === 1 ? 'review' : 'reviews'}">× ${review.count}</span></li>`).join('')}</ul></section>
</main>
<footer class="site-footer"><div class="footer-inner"><p>© 2026 Mingzhang Zhu</p><a href="mailto:normanzmz@g.ucla.edu">normanzmz@g.ucla.edu <span aria-hidden="true">↗</span></a><a class="back-to-top" href="#main">Back to top <span aria-hidden="true">↑</span></a></div></footer>
</body></html>\n`;
  await writeFile(resolve(root, 'publications.html'), html);
  console.log(`Generated Publications: ${publications.length} papers, ${awards.length} awards, ${talks.length} talks, ${media.length} media entries, ${reviews.length} review entries.`);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await generatePublications();
