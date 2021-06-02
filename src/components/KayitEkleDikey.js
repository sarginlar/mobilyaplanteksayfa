const KayitEkleDikey = (mobilya, secilenBolge) => {
  console.log("KayıtEkle Dikey çalıştı");
  console.log("mobilya==", mobilya, "secilenBolge=", secilenBolge);
  //kapak: [{ dahil: true, tip: 3, name: 'Kapak', material_id: 18, x0: 0, y0: 0, z0: 0, x: 1000, y: 100, z: 18, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],
  mobilya.kayit_ekle_dikey[mobilya.kayit_ekle_dikey.length] = {
    dahil: true,
    bolge: secilenBolge,
    model: 1, //dikey kayıt
    tip: 3,
    name: "DikeyKayıt",
    material_id: 18,
    x0: mobilya.bolge[secilenBolge].cx,
    y0: mobilya.bolge[secilenBolge].cy,
    z0: mobilya.Z / 2,
    x: mobilya.bolge[secilenBolge].x,
    y: 100,
    z: 18,
    xg0: 0,
    xg1: 0,
    zg0: 0,
    zg1: 0,
    yg0: 0,
    yg1: 0,
  };
  return mobilya;
};

export default KayitEkleDikey;
