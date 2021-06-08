import React from "react";

const Bolgeler = (mobilya, olculer) => {
  console.log("Bolgeler e uğradı");
  console.log("ölcüler=", olculer);
  //console.log("secilenBolge=", secilenBolge);
  if (mobilya.bolge.length === 0) {
    const kalan_en = mobilya.X - mobilya.sol_yan.x - mobilya.sag_yan.x;
    const kalan_boy =
      mobilya.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y;
    const mcx = mobilya.X0;
    const mcy =
      mobilya.Y0 + mobilya.alt.y / 2 + mobilya.baza.y / 2 - mobilya.ust.y / 2;
    mobilya.bolge[0] = {
      dahil: true,
      aktif: false,
      tip: 3,
      name: "Bolge",
      cx: mcx,
      cy: mcy,
      x: kalan_en,
      y: kalan_boy,
    };
  } else {
    /*
    const kalan_en = mobilya.X - mobilya.sol_yan.x - mobilya.sag_yan.x;
    const kalan_X = olculer.X - mobilya.sol_yan.x - mobilya.sag_yan.x;
    const kalan_boy =
      mobilya.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y;
    const kalan_Y = olculer.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y;
    const kalan_cx = mobilya.X0;
    const kalan_x = mobilya.X;
    console.log("kalan_cx=", kalan_cx, "kalan_x=", kalan_x);
    const kalan_cy = mobilya.Y0;
    // mobilya.Y0 + mobilya.alt.y / 2 + mobilya.baza.y / 2 - mobilya.ust.y / 2;
    const kalan_y = mobilya.Y;
    //mobilya.Y0 + mobilya.alt.y / 2 + mobilya.baza.y / 2 - mobilya.ust.y / 2;
    //const Oranx = (kalan_en - kalan_X) / 2;
    //const Orany = (olculer.Y - mobilya.Y) / 4;
    //console.log(Oranx, Orany);
    */
    const OranX = mobilya.X / olculer.X;
    const OranY = mobilya.Y / olculer.Y;
    const OranZ = mobilya.Z / olculer.Z;
    console.log(OranX, OranY, OranZ);
    for (let index = 0; index < mobilya.bolge.length; index++) {
      mobilya.bolge[index].dahil = true;
      mobilya.bolge[index].aktif = false;
      mobilya.bolge[index].tip = 3;
      mobilya.bolge[index].name = "Bolge";
      mobilya.bolge[index].cx = mobilya.bolge[index].cx * OranX;
      mobilya.bolge[index].cy = mobilya.bolge[index].cy * OranY;
      mobilya.bolge[index].x = mobilya.bolge[index].x * OranX;
      mobilya.bolge[index].y = mobilya.bolge[index].y * OranY;
    }
  }

  console.log("mobilya.bolge=", mobilya.bolge);
  return mobilya.bolge;
};

export default Bolgeler;
