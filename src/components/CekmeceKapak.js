const CekmeceKapak = (mobilya, secilenBolge) => {
  console.log('cekmeceKapak çalıştı')
  console.log('mobilya==', mobilya, 'secilenBolge=', secilenBolge)
  //kapak: [{ dahil: true, tip: 3, name: 'Kapak', material_id: 18, x0: 0, y0: 0, z0: 0, x: 1000, y: 100, z: 18, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],
  mobilya.cekmece_kapak[mobilya.cekmece_kapak.length] = {
    dahil: true,
    tip: 3,
    name: 'CekmeceKapak',
    material_id: 18,
    x0: mobilya.bolge[secilenBolge].cx,
    y0: mobilya.bolge[secilenBolge].cy,
    z0: 318,
    x: mobilya.bolge[secilenBolge].x,
    y: mobilya.bolge[secilenBolge].y,
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

export default CekmeceKapak
