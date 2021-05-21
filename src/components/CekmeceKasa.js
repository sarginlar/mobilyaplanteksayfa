const cekmeceAdeti = 2
const cekmeceTipi = 'icten' // "icten","dıstan"
const sablon = 'teleskopic 450'
const rayTipi = '4-teleskopik 450'
const baslikArasiBosluk = 3
const cekmeceDerinligi = 500
const solBosluk = 45
const sagBosluk = 20
const ustBosluk = 20
const altBosluk = 20
const kasaYuksekligi = 150
const sol_yan_malzeme_kalinlik = 18
const sag_yan_malzeme_kalinlik = 18
const on_malzeme_kalinlik = 18
const arka_malzeme_kalinlik = 18
const alt_malzeme_kalinlik = 8
const CekmeceKasa = (mobilya, secilenBolge) => {
  console.log('cekmece_kasa çalıştı')
  let cekmece_alani_toplam = mobilya.bolge[secilenBolge].y - altBosluk - ustBosluk
  const cekmece_alani = cekmece_alani_toplam / cekmeceAdeti
  let baslama = mobilya.bolge[secilenBolge].cy - cekmece_alani_toplam / 2 - cekmece_alani / 2 + altBosluk / 2 - ustBosluk / 2

  for (let index = 0; index < cekmeceAdeti; index++) {
    console.log('mobilya.cekmece_kasa.length=', mobilya.cekmece_kasa.length)
    console.log('y0=')

    baslama = baslama + cekmece_alani
    mobilya.cekmece_kasa[mobilya.cekmece_kasa.length] = {
      dahil: true,
      bolge: secilenBolge,
      x0: mobilya.bolge[secilenBolge].cx,
      y0: mobilya.bolge[secilenBolge].cy,
      z0: 318,
      genislik: mobilya.bolge[secilenBolge].x,
      derinlik: 100,
      yukseklik: mobilya.bolge[secilenBolge].y,
      //Bosluklar-------------------------------
      sol_bosluk: solBosluk,
      sag_bosluk: sagBosluk,
      ust_bosluk: ustBosluk,
      alt_bosluk: altBosluk,

      //@ön hesaplama-------------------------------
      on: {
        dahil: true,
        tip: 0,
        name: 'on',
        material_id: 18,
        x0: mobilya.bolge[secilenBolge].cx + solBosluk / 2 - sagBosluk / 2,
        y0: baslama - cekmece_alani / 2 + kasaYuksekligi / 2,
        z0: mobilya.Z0 + mobilya.Z / 2 - on_malzeme_kalinlik / 2,
        x: mobilya.bolge[secilenBolge].x - solBosluk - sagBosluk - sol_yan_malzeme_kalinlik - sag_yan_malzeme_kalinlik,
        y: kasaYuksekligi,
        z: 18,
        xg0: 0,
        xg1: 0,
        yg0: 0,
        yg1: 0,
        zg0: 0,
        zg1: 0,
      },
      //------------------------------------------
      //@sol_yan hesaplama--------------------------
      sol_yan: {
        dahil: true,
        tip: 0,
        name: 'sol_yan',
        material_id: 18,
        x0: mobilya.bolge[secilenBolge].cx + solBosluk - mobilya.bolge[secilenBolge].x / 2 + sol_yan_malzeme_kalinlik / 2,
        y0: baslama - cekmece_alani / 2 + kasaYuksekligi / 2,
        z0: mobilya.Z0 + mobilya.Z / 2 - cekmeceDerinligi / 2,
        x: 18,
        y: kasaYuksekligi,
        z: cekmeceDerinligi,
        xg0: 0,
        xg1: 0,
        yg0: 0,
        yg1: 0,
        zg0: 0,
        zg1: 0,
      },
      //---------------------------------------------
      sag_yan: {
        dahil: false,
        tip: 0,
        name: 'sag_yan',
        material_id: 18,
        x0: mobilya.bolge[secilenBolge].cx - sagBosluk + mobilya.bolge[secilenBolge].x / 2 - sag_yan_malzeme_kalinlik / 2,
        y0: baslama - cekmece_alani / 2 + kasaYuksekligi / 2,
        z0: mobilya.Z0 + mobilya.Z / 2 - cekmeceDerinligi / 2,
        x: 18,
        y: kasaYuksekligi,
        z: cekmeceDerinligi,
        xg0: 0,
        xg1: 0,
        yg0: 0,
        yg1: 0,
        zg0: 0,
        zg1: 0,
      },
      arka: {
        dahil: false,
        tip: 0,
        name: 'arka',
        material_id: 18,
        x0: mobilya.bolge[secilenBolge].cx + solBosluk / 2 - sagBosluk / 2,
        y0: baslama - cekmece_alani / 2 + kasaYuksekligi / 2,
        z0: mobilya.Z0 + mobilya.Z / 2 - cekmeceDerinligi + arka_malzeme_kalinlik / 2,
        x: mobilya.bolge[secilenBolge].x - solBosluk - sagBosluk - sol_yan_malzeme_kalinlik - sag_yan_malzeme_kalinlik,
        y: kasaYuksekligi,
        z: 18,
        xg0: 0,
        xg1: 0,
        yg0: 0,
        yg1: 0,
        zg0: 0,
        zg1: 0,
      },
      alt: {
        dahil: false,
        tip: 0,
        name: 'alt',
        material_id: 18,
        x0: mobilya.bolge[secilenBolge].cx + solBosluk / 2 - sagBosluk / 2,
        y0: baslama - cekmece_alani / 2 + kasaYuksekligi / 2,
        z0: mobilya.Z0 + mobilya.Z / 2 - cekmeceDerinligi / 2,
        x: mobilya.bolge[secilenBolge].x - solBosluk - sagBosluk - sol_yan_malzeme_kalinlik - sag_yan_malzeme_kalinlik,
        y: 8,
        z: cekmeceDerinligi,
        xg0: 0,
        xg1: 0,
        yg0: 0,
        yg1: 0,
        zg0: 0,
        zg1: 0,
      },
    }
  }

  return mobilya
}

export default CekmeceKasa
