// Builds favicon set from the existing logo into public/. Run with: node scripts/generate-favicons.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const logo = path.join(root, 'public/images/optima-logo.jpg');
const out = (name) => path.join(root, 'public', name);

// Road-and-flag mark from the 1000x1000 logo.
const mark = { left: 300, top: 160, width: 395, height: 395 };
const square = (size, padding = 0) =>
  sharp(logo)
    .extract(mark)
    .resize(size - padding * 2, size - padding * 2)
    .extend({ top: padding, bottom: padding, left: padding, right: padding, background: '#ffffff' })
    .png();

await square(16).toFile(out('favicon-16x16.png'));
await square(32).toFile(out('favicon-32x32.png'));
await square(180, 18).toFile(out('apple-touch-icon.png'));
await square(192, 12).toFile(out('icon-192.png'));
await square(512, 32).toFile(out('icon-512.png'));

// ICO container with one embedded 48px PNG.
const png48 = await square(48).toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(48, 6);
header.writeUInt8(48, 7);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png48.length, 14);
header.writeUInt32LE(22, 18);
fs.writeFileSync(out('favicon.ico'), Buffer.concat([header, png48]));

fs.writeFileSync(
  out('site.webmanifest'),
  JSON.stringify(
    {
      name: 'Optima Transport Ltd',
      short_name: 'Optima',
      description: 'Removals, haulage and clearances from Boston Spa across Yorkshire and the UK.',
      start_url: '/',
      display: 'browser',
      background_color: '#ffffff',
      theme_color: '#18181a',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
      ]
    },
    null,
    2
  ) + '\n'
);
console.log('Favicons written');
