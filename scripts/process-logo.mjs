import sharp from 'sharp'
import { copyFileSync } from 'fs'

/**
 * Keep the original logo intact.
 * Only removes the solid black background and adds a little padding.
 */
const src = 'public/logo/nrs-logo-source.jpg'
const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const w = info.width
const h = info.height
const ch = info.channels
const pad = 20
const ow = w + pad * 2
const oh = h + pad * 2
const out = Buffer.alloc(ow * oh * 4)

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const i = (y * w + x) * ch
    const p = ((y + pad) * ow + (x + pad)) * 4
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const max = Math.max(r, g, b)
    let a = 255
    if (max < 16) a = 0
    else if (max < 40) a = Math.round(((max - 16) / 24) * 255)
    out[p] = r
    out[p + 1] = g
    out[p + 2] = b
    out[p + 3] = a
  }
}

await sharp(out, { raw: { width: ow, height: oh, channels: 4 } })
  .png()
  .toFile('public/logo/nrs-logo.png')

copyFileSync('public/logo/nrs-logo.png', 'public/logo/nrs-logo-dark.png')
const meta = await sharp('public/logo/nrs-logo.png').metadata()
console.log('saved full logo', meta.width, 'x', meta.height)
