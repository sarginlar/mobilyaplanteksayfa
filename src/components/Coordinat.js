import { useEffect, useState } from "react";

//let yeniMobilya = { X0: 0, Y0: 0, Z0: 0, bolge: [], yatay_bolme: [], dikey_bolme: [] }
const Coordinat = (dene) => {
  // yeni koordinata dönüştürülecek
  const mobilya = dene;
  console.log("mobilya=", mobilya);
  const yeniMobilya = { ...mobilya };
  // X0=mobilya.X/2 y0=mobilya.Y/2
  yeniMobilya.X0 = mobilya.X / 2;
  yeniMobilya.Y0 = mobilya.Y / 2;
  yeniMobilya.Z0 = mobilya.Z / 2;

  for (let i = 0; i < mobilya.bolge.length; i++) {
    console.log("yeniMobilya.bolge[i].cx=", yeniMobilya.bolge[i].cx);
    yeniMobilya.bolge[i].cx = mobilya.bolge[i].cx + yeniMobilya.X0;
    yeniMobilya.bolge[i].cy = mobilya.bolge[i].cy + yeniMobilya.Y0;
    yeniMobilya.bolge[i].x = mobilya.bolge[i].x;
    yeniMobilya.bolge[i].y = mobilya.bolge[i].y;
  }
  for (let i = 0; i < mobilya.yatay_bolme.length; i++) {
    console.log("yeniMobilya.bolge[i].cx=", yeniMobilya.bolge[i].cx);
    yeniMobilya.yatay_bolme[i].x0 = mobilya.yatay_bolme[i].x0 + yeniMobilya.X0;
    yeniMobilya.yatay_bolme[i].y0 = mobilya.yatay_bolme[i].y0 + yeniMobilya.Y0;
    yeniMobilya.yatay_bolme[i].x = mobilya.yatay_bolme[i].x;
    yeniMobilya.yatay_bolme[i].y = mobilya.yatay_bolme[i].y;
  }
  for (let i = 0; i < mobilya.dikey_bolme.length; i++) {
    console.log("yeniMobilya.bolge[i].cx=", yeniMobilya.bolge[i].cx);
    yeniMobilya.dikey_bolme[i].x0 = mobilya.dikey_bolme[i].x0 + yeniMobilya.X0;
    yeniMobilya.dikey_bolme[i].y0 = mobilya.dikey_bolme[i].y0 + yeniMobilya.Y0;
    yeniMobilya.dikey_bolme[i].x = mobilya.dikey_bolme[i].x;
    yeniMobilya.dikey_bolme[i].y = mobilya.dikey_bolme[i].y;
  }

  return yeniMobilya;
};

export default Coordinat;
