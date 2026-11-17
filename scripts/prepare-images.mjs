import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "legacy", "images");
const newSourceDir = path.join(root, "legacy", "source-images");
const brandDir = path.join(root, "legacy", "brand");
const outputDir = path.join(root, "public", "images");

const images = [
  { source: path.join(sourceDir, "aire_acondicionado_montaje_mantenimiento_lozartico.jpeg"), output: "hero-aire-acondicionado.webp" },
  { source: path.join(sourceDir, "habitacion_con-armario_empotrado_paredes_blancas_lozartico.jpg"), output: "proyecto-armario.webp" },
  { source: path.join(sourceDir, "habitacion_reformada_lozartico_azulyblanco.jpg"), output: "proyecto-habitacion.webp" },
  { source: path.join(sourceDir, "patio_reformado_espana_lozartico.jpg"), output: "proyecto-patio.webp" },
  { source: path.join(newSourceDir, "bano-1.jpeg"), output: "reforma-bano-1.webp" },
  { source: path.join(newSourceDir, "bano-2.jpeg"), output: "reforma-bano-2.webp" },
  { source: path.join(newSourceDir, "presentacion.jpeg"), output: "presentacion.webp", quality: 80 },
  { source: path.join(newSourceDir, "cesped-1.jpeg"), output: "cesped-artificial-1.webp", quality: 80 },
  { source: path.join(newSourceDir, "cesped-2.jpeg"), output: "cesped-artificial-2.webp", quality: 80 },
  { source: path.join(newSourceDir, "cesped-3.jpeg"), output: "cesped-artificial-3.webp", quality: 80 },
  { source: path.join(newSourceDir, "finca-escalera.jpeg"), output: "finca-escalera.webp", quality: 80 },
  { source: path.join(newSourceDir, "suelo-1.jpeg"), output: "instalacion-suelo-1.webp", quality: 80 },
  { source: path.join(newSourceDir, "suelo-2.jpeg"), output: "instalacion-suelo-2.webp", quality: 80 },
  { source: path.join(newSourceDir, "construccion.jpeg"), output: "construccion.webp", width: 900, quality: 78 },
  { source: path.join(newSourceDir, "equipo.jpeg"), output: "equipo-lozartico.webp" },
  { source: path.join(newSourceDir, "sede.jpeg"), output: "sede-lozartico.webp" },
  { source: path.join(newSourceDir, "tejado.jpeg"), output: "impermeabilizacion-tejado.webp", width: 900, quality: 78 },
];

await mkdir(outputDir, { recursive: true });

await sharp(path.join(brandDir, "lozartico-sl-source.svg"))
  .extract({ left: 60, top: 297, width: 1493, height: 408 })
  .resize({ width: 800 })
  .webp({ quality: 90, effort: 6 })
  .toFile(path.join(outputDir, "logo-lozartico.webp"));
console.log("created logo-lozartico.webp");

for (const { source, output, width = 1080, quality = 82 } of images) {
  await sharp(source)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(path.join(outputDir, output));
  console.log(`created ${output}`);
}

const logo = await readFile(path.join(outputDir, "logo-lozartico.webp"));
const logoUri = `data:image/webp;base64,${logo.toString("base64")}`;
const hero = await sharp(path.join(newSourceDir, "construccion.jpeg"))
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
  <text x="80" y="496" fill="#F2D21A" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700">Valencia · L'Horta Nord y Sud</text>
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
