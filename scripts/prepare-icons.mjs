import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const icoSource = path.join(root, "legacy", "brand", "lozartico.ico");
const outputDir = path.join(root, "public");
const blue = { r: 7, g: 51, b: 104, alpha: 1 };

function pngFromIco(buffer) {
  const count = buffer.readUInt16LE(4);

  for (let i = 0; i < count; i += 1) {
    const offset = 6 + i * 16;
    const width = buffer[offset] || 256;
    const height = buffer[offset + 1] || 256;
    const size = buffer.readUInt32LE(offset + 8);
    const dataOffset = buffer.readUInt32LE(offset + 12);

    if (width === 256 && height === 256) {
      return buffer.subarray(dataOffset, dataOffset + size);
    }
  }

  throw new Error("No se encontró el icono de 256 px en el ICO");
}

function icoFromPngs(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const directory = Buffer.alloc(images.length * 16);
  let offset = 6 + directory.length;

  images.forEach(({ size, data }, index) => {
    const entry = index * 16;
    directory[entry] = size >= 256 ? 0 : size;
    directory[entry + 1] = size >= 256 ? 0 : size;
    directory[entry + 2] = 0;
    directory[entry + 3] = 0;
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(data.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });

  return Buffer.concat([header, directory, ...images.map((image) => image.data)]);
}

const source = await readFile(icoSource);
const artwork = pngFromIco(source);
const trimmed = await sharp(artwork).trim().png().toBuffer();
const centered = await sharp(trimmed)
  .resize({ width: 420, height: 420, fit: "inside" })
  .png()
  .toBuffer();
const base = await sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background: blue,
  },
})
  .composite([{ input: centered, gravity: "center" }])
  .png()
  .toBuffer();

const pngOutputs = [
  ["favicon-32x32.png", 32],
  ["apple-icon-180.png", 180],
  ["icon-192.png", 192],
];

for (const [name, size] of pngOutputs) {
  await sharp(base).resize(size, size).png().toFile(path.join(outputDir, name));
  console.log(`created ${name}`);
}

const icoSizes = [16, 32, 48, 64, 128, 256];
const icoImages = [];

for (const size of icoSizes) {
  icoImages.push({
    size,
    data: await sharp(base).resize(size, size).png().toBuffer(),
  });
}

await writeFile(path.join(outputDir, "favicon.ico"), icoFromPngs(icoImages));
console.log("created favicon.ico");
