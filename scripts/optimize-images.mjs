// Builds responsive WebP + social JPEG variants from the original photos and writes src/data/photos.js.
// Originals in public/images are never modified. Run with: node scripts/optimize-images.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'public/images');
const outDir = path.join(srcDir, 'optimized');
const WIDTHS = [480, 800, 1200];

// [seo-friendly name, original file relative to public/images, extra widths]
const manifest = [
  ['house-removals-loading-household-furniture', 'Removals/470228512_17925330660004303_3636703471301192095_n.jpg'],
  ['fragile-boxes-careful-packing-van-load', 'Removals/472310536_516250548133120_879071349175469408_n.jpg'],
  ['optima-van-open-doors-residential-street', 'Removals/474950599_530908423333999_5692905876989644298_n.jpg', [1536]],
  ['long-haulage-wrapped-oak-furniture-units', 'Removals/475426755_533000376458137_8836232980612030584_n.jpg'],
  ['probate-clearance-van-period-property', 'Removals/476818894_543136392111202_8718590611771785173_n.jpg'],
  ['careful-handling-blankets-furniture-protection', 'Removals/476907392_543650832059758_5763145357884729735_n.jpg'],
  ['long-distance-haulage-van-loaded-cartons', 'Removals/477416085_544622288629279_3900270860672093648_n.jpg'],
  ['house-removal-van-outside-brick-home', 'Removals/477666885_544275135330661_2948018727284822774_n.jpg'],
  ['factory-clearance-strapped-equipment-van', 'Removals/479630388_544622471962594_4200373221481850727_n.jpg'],
  ['office-removals-stacked-boxes-loading', 'Removals/480028948_544622248629283_3921972433055014675_n.jpg'],
  ['commercial-pallet-haulage-wrapped-insulation-load', 'Removals/480543018_551958411229000_4345769607793548366_n.jpg'],
  ['wrapped-sofa-strapped-furniture-move', 'Removals/494431451_608396668918507_7081666399913053644_n.jpg'],
  ['warehouse-clearance-appliances-boxes-van', 'Removals/494662902_608396662251841_8403079903026381788_n.jpg'],
  ['optima-branded-van-side-profile', 'Removals/602906751_791248257300013_9116523897122615990_n.jpg'],
  ['removals-crew-member-van-rear-doors', 'Removals/Removals 2.jpg'],
  ['short-haulage-concrete-fence-posts-delivery', 'Hualage/470190684_17925330939004303_1626423355606133418_n.jpg'],
  ['single-item-sofa-delivery-van', 'Hualage/470234477_17925331830004303_6517218576657851765_n.jpg'],
  ['garage-outbuilding-clearance-fence-panels', 'Hualage/474893741_533019579789550_2817345534204742548_n.jpg'],
  ['single-item-leather-sofa-van-transport', 'Hualage/475256399_533015199789988_3986268314706037466_n.jpg'],
  ['end-of-lease-clearance-evening-van', 'Hualage/476631760_542592045498970_6171742074209893774_n.jpg'],
  ['house-removal-crew-van-rear-doors', 'Hualage/476660336_542098992214942_1354790779738493958_n.jpg'],
  ['commercial-clearance-van-industrial-units', 'Hualage/476875119_542098972214944_8751813887340797924_n.jpg'],
  ['retail-shop-clearance-van-trade-unit', 'Hualage/476969027_543657442059097_4366184902169029447_n.jpg'],
  ['short-distance-haulage-timber-sleepers-delivered', 'Hualage/480467208_547516878339820_112554766159075796_n.jpg'],
  ['industrial-unit-clearance-metal-casks-van', 'Hualage/495377759_608396658918508_1791068981028895308_n.jpg'],
  ['industrial-clearance-van-industrial-estate', 'Hualage/539103382_697732763318230_2730136397000392761_n.jpg'],
  ['commercial-clearance-van-business-premises', 'Hualage/793141652_18002842236004303_3189491527039007626_n.jpg'],
  ['long-distance-removals-van-tower-block', 'Clearances/476233524_541487892276052_732087286633938219_n.jpg'],
  ['house-clearance-furniture-loaded-van', 'Clearances/476447309_542098635548311_3894856660381901505_n.jpg'],
  ['haulage-van-long-distance-livery', 'Clearances/476980824_543657072059134_6861632690332867849_n.jpg'],
  ['optima-van-nationwide-road', 'Clearances/477231616_543650598726448_4079269760607381399_n.jpg'],
  ['house-clearance-blanket-wrapped-furniture-sack-truck', 'Clearances/479331935_544274908664017_1379297842865774279_n.jpg'],
  ['office-clearance-confidential-waste-recycling-centre', 'Clearances/479969462_544622108629297_5953266268682627021_n.jpg'],
  ['domestic-clearance-protecting-luggage-blankets', 'Clearances/480564182_550126984745476_5214981463386047781_n.jpg'],
  ['house-clearance-trolley-removal-from-property', 'Clearances/480686376_550126894745485_4324284074782989292_n.jpg'],
  ['clearances-van-skip-yorkshire-property', 'Clearances/480693528_550126938078814_9186910010411965119_n.jpg'],
  ['optima-van-service-livery-side', 'Clearances/481056684_552190721205769_6148710845515146559_n.jpg'],
  ['optima-transport-van-livery-close-up', 'Clearances/505876387_637147809376726_2387706402526000717_n.jpg'],
  ['commercial-removals-wrapped-white-furniture-units-van', 'Removals/495126236_608396665585174_7450115596730729171_n.jpg'],
  ['waste-removal-old-paving-slabs-timber-collection', 'Hualage/481204460_551961651228676_5039899237636109305_n.jpg']
];

fs.mkdirSync(outDir, { recursive: true });
const photos = {};

for (const [name, file, extra = []] of manifest) {
  const input = path.join(srcDir, file);
  const meta = await sharp(input).rotate().metadata();
  const origWidth = meta.autoOrient?.width ?? meta.width;
  const origHeight = meta.autoOrient?.height ?? meta.height;
  const widths = [...new Set([...WIDTHS, ...extra].map((w) => Math.min(w, origWidth)))].sort((a, b) => a - b);

  for (const w of widths) {
    await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 76, effort: 5 }).toFile(path.join(outDir, `${name}-${w}.webp`));
  }
  await sharp(input).rotate().resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(outDir, `${name}-og.jpg`));

  const largest = widths.filter((w) => w <= 1200).pop();
  photos[name] = {
    src: `/images/optimized/${name}-${largest}.webp`,
    srcset: widths.map((w) => `/images/optimized/${name}-${w}.webp ${w}w`).join(', '),
    width: largest,
    height: Math.round((origHeight / origWidth) * largest),
    og: `/images/optimized/${name}-og.jpg`
  };
}

// Brand logo (displayed ~115px wide in the header, 72px in the footer).
await sharp(path.join(srcDir, 'optima-logo.jpg')).resize({ width: 360 }).webp({ quality: 82 }).toFile(path.join(outDir, 'optima-logo-360.webp'));

const body = Object.entries(photos)
  .map(([name, p]) => `  '${name}': ${JSON.stringify(p)}`)
  .join(',\n');

fs.writeFileSync(
  path.join(root, 'src/data/photos.js'),
  `// Generated by scripts/optimize-images.mjs. Do not edit by hand.\nexport const photos = {\n${body}\n};\n\nexport const photo = (name) => {\n  if (!photos[name]) throw new Error(\`Unknown photo: \${name}\`);\n  return photos[name];\n};\n`
);

console.log(`Processed ${manifest.length} photos`);
