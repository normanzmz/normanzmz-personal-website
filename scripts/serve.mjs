import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const { values } = parseArgs({ options: { directory: { type: 'string', default: '.' }, port: { type: 'string', default: '4173' } } });
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const root = resolve(projectRoot, values.directory);
const port = Number(values.port);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.mp4': 'video/mp4', '.pdf': 'application/pdf' };
const publicFiles = new Set(['/index.html', '/projects.html', '/publications.html', '/styles.css', '/main.js', '/favicon.svg']);

const server = createServer(async (req, res) => {
  try {
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }).end(); return; }
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const resource = pathname === '/' ? '/index.html' : pathname;
    const path = resolve(root, `.${resource}`);
    const projectPage = /^\/projects\/[a-z0-9-]+\.html$/.test(resource);
    const publicAsset = /^\/assets\/(home|projects|publications)\//.test(resource) && !resource.includes('-source.') && !resource.split('/').some(part => part.startsWith('.'));
    const allowed = publicFiles.has(resource) || projectPage || publicAsset;
    if (!allowed || !path.startsWith(root + sep)) { res.writeHead(404).end('Not found'); return; }
    const file = await stat(path);
    if (!file.isFile()) { res.writeHead(404).end('Not found'); return; }
    const headers = { 'Content-Type': types[extname(path)] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'Accept-Ranges': 'bytes', 'X-Content-Type-Options': 'nosniff' };
    let start = 0, end = file.size - 1, status = 200;
    if (req.headers.range) {
      const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if (!range || (!range[1] && !range[2])) { res.writeHead(416, { 'Content-Range': `bytes */${file.size}` }).end(); return; }
      start = range[1] ? Number(range[1]) : Math.max(0, file.size - Number(range[2]));
      end = range[1] && range[2] ? Math.min(Number(range[2]), end) : end;
      if (start > end || start >= file.size) { res.writeHead(416, { 'Content-Range': `bytes */${file.size}` }).end(); return; }
      status = 206;
      headers['Content-Range'] = `bytes ${start}-${end}/${file.size}`;
    }
    headers['Content-Length'] = String(end - start + 1);
    res.writeHead(status, headers);
    if (req.method === 'HEAD') res.end();
    else {
      const stream = createReadStream(path, { start, end });
      stream.on('error', () => res.destroy());
      res.on('close', () => stream.destroy());
      stream.pipe(res);
    }
  } catch (error) {
    res.writeHead(error.code === 'ENOENT' ? 404 : 500).end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
  }
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}\nServing ${root}\nPress Ctrl+C to stop.`));
