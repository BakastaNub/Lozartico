import { copyFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "legacy", "images");
const outputDir = path.join(root, "public", "images");

const images = [
  ["aire_acondicionado_montaje_mantenimiento_lozartico.jpeg", "hero-aire-acondicionado.webp"],
  ["bano_reformado_lozartico_moderno.jpg", "proyecto-bano.webp"],
  ["habitacion_con-armario_empotrado_paredes_blancas_lozartico.jpg", "proyecto-armario.webp"],
  ["habitacion_reformada_lozartico_azulyblanco.jpg", "proyecto-habitacion.webp"],
  ["patio_reformado_espana_lozartico.jpg", "proyecto-patio.webp"],
];

await mkdir(outputDir, { recursive: true });

for (const [source, output] of images) {
  await sharp(path.join(sourceDir, source))
    .rotate()
    .resize({ width: 1080, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(outputDir, output));
  console.log(`created ${output}`);
}

const logo = await readFile(
  path.join(outputDir, "logo-lozartico-footer.webp"),
);
const logoUri = `data:image/webp;base64,${logo.toString("base64")}`;
const hero = await sharp(path.join(sourceDir, "aire_acondicionado_montaje_mantenimiento_lozartico.jpeg"))
  .rotate()
  .resize(700, 630, { fit: "cover", position: "attention" })
  .modulate({ brightness: 0.78, saturation: 0.9 })
  .png()
  .toBuffer();

const overlay = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#061B36" stop-opacity="1"/>
      <stop offset="0.48" stop-color="#061B36" stop-opacity="1"/>
      <stop offset="0.78" stop-color="#061B36" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#061B36" stop-opacity="0.15"/>
    </linearGradient>
    <linearGradient id="veil" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#061B36" stop-opacity="0.15"/>
      <stop offset="1" stop-color="#061B36" stop-opacity="0.65"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#fade)"/>
  <rect x="500" width="700" height="630" fill="url(#veil)"/>
  <image href="${logoUri}" x="80" y="66" width="260" height="62"/>
  <rect x="80" y="236" width="120" height="5" rx="2.5" fill="#C9A24A"/>
  <text x="80" y="306" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="800" letter-spacing="-1.5">
    <tspan x="80" dy="0">Aire acondicionado,</tspan>
    <tspan x="80" dy="60">reformas e</tspan>
    <tspan x="80" dy="60">impermeabilización</tspan>
  </text>
  <text x="80" y="496" fill="#F2D21A" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700">Valencia · Gran Canaria</text>
  <text x="80" y="548" fill="#A9BFD9" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="500">Lozartico SL · Presupuesto rápido por WhatsApp</text>
</svg>`;

await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#061B36" },
})
  .composite([
    { input: hero, left: 500, top: 0 },
    { input: Buffer.from(overlay), left: 0, top: 0 },
  ])
  .jpeg({ quality: 88 })
  .toFile(path.join(outputDir, "og-cover.jpg"));

console.log("created og-cover.jpg");

const faviconDir = path.join(root, "legacy", "favicons");
const faviconOutputs = [
  ["favicon-32x32.png", "favicon-32x32.png"],
  ["android-icon-192x192.png", "icon-192.png"],
  ["apple-icon-180x180.png", "apple-icon-180.png"],
  ["favicon.ico", "favicon.ico"],
];

for (const [source, output] of faviconOutputs) {
  await copyFile(path.join(faviconDir, source), path.join(root, "public", output));
  console.log(`copied ${output}`);
}
