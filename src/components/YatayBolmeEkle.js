const YatayBolmeEkle = (mobilya, secilenBolge, secilen) => {
  console.log("YatayBolmeEkle çalıştı");
  console.log("mobilya==", mobilya, "secilenBolge=", secilenBolge);
  //---------------------------------
  if (secilen.bolge) {
    //bölge seçilmemiş ise dikme eklenmez

    const a = mobilya.bolge[secilenBolge];
    const a1 = {
      dahil: true,
      tip: 3,
      name: "Bolge",
      cx: a.cx,
      cy: a.cy - (a.y + 18) / 4,
      x: a.x,
      y: (a.y - 18) / 2,
    };
    const a2 = {
      dahil: true,
      tip: 3,
      name: "Bolge",
      cx: a.cx,
      cy: a.cy + (a.y + 18) / 4,
      x: a.x,
      y: (a.y - 18) / 2,
    };
    mobilya.bolge[secilenBolge] = a1;
    mobilya.bolge[mobilya.bolge.length] = a2;

    mobilya.yatay_bolme[mobilya.yatay_bolme.length] = {
      dahil: true,
      tip: 3,
      name: "yatay_bolme",
      material_id: 18,
      x0: a.cx,
      y0: a.cy,
      z0: 0,
      x: a.x,
      y: 18,
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

export default YatayBolmeEkle;
