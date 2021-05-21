import { useEffect, useState } from 'react'

//let yeniMobilya = { X0: 0, Y0: 0, Z0: 0, bolge: [], raf: [], dikme: [] }
const Coordinat = (dene) => {
  // yeni koordinata dönüştürülecek
  const mobilya = dene
  console.log('mobilya=', mobilya)
  const yeniMobilya = { ...mobilya }
  // X0=mobilya.X/2 y0=mobilya.Y/2
  yeniMobilya.X0 = mobilya.X / 2
  yeniMobilya.Y0 = mobilya.Y / 2
  yeniMobilya.Z0 = mobilya.Z / 2

  for (let i = 0; i < mobilya.bolge.length; i++) {
    console.log('yeniMobilya.bolge[i].cx=', yeniMobilya.bolge[i].cx)
    yeniMobilya.bolge[i].cx = mobilya.bolge[i].cx + yeniMobilya.X0
    yeniMobilya.bolge[i].cy = mobilya.bolge[i].cy + yeniMobilya.Y0
    yeniMobilya.bolge[i].x = mobilya.bolge[i].x
    yeniMobilya.bolge[i].y = mobilya.bolge[i].y
  }
  for (let i = 0; i < mobilya.raf.length; i++) {
    console.log('yeniMobilya.bolge[i].cx=', yeniMobilya.bolge[i].cx)
    yeniMobilya.raf[i].x0 = mobilya.raf[i].x0 + yeniMobilya.X0
    yeniMobilya.raf[i].y0 = mobilya.raf[i].y0 + yeniMobilya.Y0
    yeniMobilya.raf[i].x = mobilya.raf[i].x
    yeniMobilya.raf[i].y = mobilya.raf[i].y
  }
  for (let i = 0; i < mobilya.dikme.length; i++) {
    console.log('yeniMobilya.bolge[i].cx=', yeniMobilya.bolge[i].cx)
    yeniMobilya.dikme[i].x0 = mobilya.dikme[i].x0 + yeniMobilya.X0
    yeniMobilya.dikme[i].y0 = mobilya.dikme[i].y0 + yeniMobilya.Y0
    yeniMobilya.dikme[i].x = mobilya.dikme[i].x
    yeniMobilya.dikme[i].y = mobilya.dikme[i].y
  }

  return yeniMobilya
}

export default Coordinat
