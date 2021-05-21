const KayitEkleYatay = (mobilya, secilenBolge) => {
  console.log('KayıtEkle Yatay çalıştı')
  console.log('mobilya==', mobilya, 'secilenBolge=', secilenBolge)

  mobilya.kayit_ekle_yatay[mobilya.kayit_ekle_yatay.length] = {
    dahil: true,
    bolge: secilenBolge,
    tip: 3,
    name: 'DikeyKayıt',
    material_id: 18,
    x0: mobilya.bolge[secilenBolge].cx,
    y0: mobilya.bolge[secilenBolge].cy,
    z0: 318,
    x: mobilya.bolge[secilenBolge].x,
    y: 18,
    z: 18,
    xg0: 0,
    xg1: 0,
    zg0: 0,
    zg1: 0,
    yg0: 0,
    yg1: 0,
  }
  return mobilya
}

export default KayitEkleYatay
