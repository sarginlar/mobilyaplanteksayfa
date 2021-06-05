const DikeyBolmeEkle = (mobilya, secilenBolge, secilen) => {
  console.log("DikeyBolmeEkle çalıştı");
  console.log("mobilya==", mobilya, "secilenBolge=", secilenBolge);
  //---------------------------------
  if (secilen.bolge) {
    //bölge seçilmemiş ise dikey_bolme eklemez
    const a = mobilya.bolge[secilenBolge];
    const a1 = {
      dahil: true,
      tip: 3,
      name: "Bolge",
      cx: a.cx - (a.x + 18) / 4,
      cy: a.cy,
      x: (a.x - 18) / 2,
      y: a.y,
    };
    const a2 = {
      dahil: true,
      tip: 3,
      name: "Bolge",
      cx: a.cx + (a.x + 18) / 4,
      cy: a.cy,
      x: (a.x - 18) / 2,
      y: a.y,
    };
    mobilya.bolge[secilenBolge] = a1;
    mobilya.bolge[mobilya.bolge.length] = a2;
    /*  dikey_bolme: [{ dahil: true, tip: 3, name: 'DikeyBolme', material_id: 18, x0: 0, y0: 0, z0: 0, x: 18, y: 1628, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],*/

    mobilya.dikey_bolme[mobilya.dikey_bolme.length] = {
      dahil: true,
      sabit: true,
      tip: 3,
      name: "DikeyBolme",
      material_id: 18,
      x0: a.cx,
      y0: a.cy,
      z0: 0,
      x: 18,
      y: a.y,
      z: 600,
      xg0: 0,
      xg1: 0,
      zg0: 0,
      zg1: 0,
      yg0: 0,
      yg1: 0,
    };
    secilen.bolge = false;
  }

  return mobilya;
};

export default DikeyBolmeEkle;
