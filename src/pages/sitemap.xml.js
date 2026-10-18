import { pages } from '../data/services/index.js';
import { site } from '../data/site.js';

const staticPaths = ['/', '/contact/', '/privacy-policy/'];

export function GET() {
  const urls = [...staticPaths, ...pages.map((page) => page.path)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${new URL(path, site.url).href}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
