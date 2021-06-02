const DikmeEkle = (mobilya, secilenBolge, secilen) => {
  console.log("DikmeEkle çalıştı");
  console.log("mobilya==", mobilya, "secilenBolge=", secilenBolge);
  //---------------------------------
  if (secilen.bolge) {
    //bölge seçilmemiş ise dikme eklemez
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
    /*  dikme: [{ dahil: true, tip: 3, name: 'Dikme', material_id: 18, x0: 0, y0: 0, z0: 0, x: 18, y: 1628, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],*/

    mobilya.dikme[mobilya.dikme.length] = {
      dahil: true,
      tip: 3,
      name: "Dikme",
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
    secilenBolge = false;
  }

  return mobilya;
};

export default DikmeEkle;
