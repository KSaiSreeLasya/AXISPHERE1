#!/usr/bin/env node

// Usage:
// 1. npm install --no-save png-to-ico
// 2. node scripts/generate-favicon.js <image-url>
// Example:
// node scripts/generate-favicon.js "https://cdn.builder.io/api/v1/image/assets%2F59bf3e928fc9473a97d5e87470c824bb%2Fc1294c5b215140a7b230049014fe792e?format=png&width=512"

const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const pngToIco = require('png-to-ico');

const url = process.argv[2] ||
  'https://cdn.builder.io/api/v1/image/assets%2F59bf3e928fc9473a97d5e87470c824bb%2Fc1294c5b215140a7b230049014fe792e?format=png&width=512';

const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function downloadToBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.headers.location) {
          // follow redirect
          return downloadToBuffer(res.headers.location).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) return reject(new Error('Failed to download image: ' + res.statusCode));
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      })
      .on('error', reject);
  });
}

(async () => {
  try {
    console.log('Downloading image from:', url);
    const pngBuf = await downloadToBuffer(url);
    const pngPath = path.join(outDir, 'logo.png');
    fs.writeFileSync(pngPath, pngBuf);
    console.log('Saved PNG to', pngPath);

    console.log('Converting PNG to favicon.ico (multi-resolution)');
    const icoBuf = await pngToIco(pngBuf);
    const icoPath = path.join(outDir, 'favicon.ico');
    fs.writeFileSync(icoPath, icoBuf);
    console.log('Wrote', icoPath);
    console.log('Done. Add public/favicon.ico to your repo and ensure index.html references /favicon.ico');
  } catch (err) {
    console.error('Error generating favicon:', err);
    process.exit(1);
  }
})();
