# Mingzhang Zhu — personal website

The website includes the approved homepage, a Projects index, and nine project
detail pages, plus the Publications, awards, talks, media, and reviewing page. The original
MkDocs site and project material remain in `docs/` for reference.

## Local review

Requires Node.js 20 or later. No package installation is needed.

```powershell
node scripts/serve.mjs
```

Open http://127.0.0.1:4173. Stop the preview with Ctrl+C. To select another port,
use `node scripts/serve.mjs --port 4174`.

```powershell
node scripts/build.mjs
node scripts/serve.mjs --directory dist
```

The build copies the pages and their referenced assets into `dist/`, together
with the custom domain, redirects from the old site, a sitemap, and a 404 page.

## Publishing

The live website is https://mingzhangzhu.org, hosted by GitHub Pages from the
root of the `gh-pages` branch. The editable source lives on `main`; `docs/`
is retained as historical material and is not the publishing source.

To release, run `node scripts/build.mjs`, commit the reviewed source to `main`,
and publish the contents of `dist/` as a new commit on `gh-pages`. Keep `CNAME`
and `.nojekyll` from the build. Publishing uses normal fast-forward commits so
previous releases remain available in Git history. Local edits and builds do
not automatically publish.

## Editing

- `index.html`: biography, updates, selected work, and links.
- `styles.css`: layout, typography, and responsive styles.
- `main.js`: lazy video previews, offscreen pausing, and reduced-motion support.
- `assets/home/`: reused portrait/CV and compact, silent project video excerpts.
- `content/*.mjs`: project narratives, media, and related publication records.
- `scripts/generate-projects.mjs`: generates `projects.html` and `projects/*.html`.
- `scripts/generate-publications.mjs`: generates `publications.html` from the paper and academic-service records.
- `assets/projects/`: diagrams, prototypes, supporting clips, and complete local project videos.
- `assets/publications/`: the original four media thumbnails.

After editing project data, run `node scripts/generate-projects.mjs` and refresh
the browser. The build regenerates all project pages automatically. Edit project
content in the data modules rather than the generated HTML files.
After editing publication or academic-service data, run
`node scripts/generate-publications.mjs`. The build also regenerates this page.

Previews are derived from the existing repository (COSMO, ARTEMIS), the TriMI
project website, and the MIDAS/DexEXO teasers linked by Alvin Zhu. Original
downloaded `*-source.mp4` files are local-only and excluded from Git and builds.

The underactuated massage hand has its own project page. The former MERLIN
collection is not included in the rebuilt site. Related publications appear on
the relevant detail pages, including four RoboCup/ARTEMIS papers.
Project hero players use full YouTube videos or complete local videos with
their original audio. Short previews remain on the homepage and Projects index.

## Content sources

- Existing `docs/index.md`, `docs/Publication/publication.md`, and project pages.
- TriMI: https://trimi-hand.github.io/ (website only; paper not yet linked).
- MIDAS: https://midas-hand.com/ and https://arxiv.org/abs/2607.14487.
- DexEXO: https://dexexo-research.github.io/ and https://arxiv.org/abs/2603.17323.
- Kid COSMO: https://arxiv.org/abs/2508.11884 (IEEE Humanoids 2025).
- ARTEMIS: https://doi.org/10.1002/aisy.70594 (Advanced Intelligent Systems,
  published online November 5, 2026).

The homepage prioritizes current official project/paper author ordering where
it differs from abbreviated citations in the original site. Biography and
older updates retain the owner's existing information.
