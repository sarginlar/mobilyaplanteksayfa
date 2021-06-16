//import React from 'react'

const DikeyBolmeKalinlik = (mobilya, secilenDikeyBolme, kalinlik) => {
  let secilenSagBolge_index = 0;
  let secilenSolBolge_index = 0;
  let secilenSagBolge = "yok";
  let secilenSolBolge = "yok";
  let bolge = [];
  let yatay_bolme = [];
  let dikey_bolme = [];
  //dikey bölmeye komsu olan bölgeler bulunacak
  //dikey bölmeye komsu olan raflar bulunacak
  //dikey bölmenin kalınlığı değiştiğinde komşularında ölçüleri değişecek.
  //------------------------------------------

  //bolgenin dört köşe noktasını buluyoruz.
  if (mobilya.bolge.length > 0) {
    for (let index = 0; index < mobilya.bolge.length; index++) {
      bolge[index] = {
        x1: mobilya.bolge[index].cx - mobilya.bolge[index].x / 2,
        y1: mobilya.bolge[index].cy + mobilya.bolge[index].y / 2,
        x2: mobilya.bolge[index].cx + mobilya.bolge[index].x / 2,
        y2: mobilya.bolge[index].cy + mobilya.bolge[index].y / 2,
        x3: mobilya.bolge[index].cx - mobilya.bolge[index].x / 2,
        y3: mobilya.bolge[index].cy - mobilya.bolge[index].y / 2,
        x4: mobilya.bolge[index].cx + mobilya.bolge[index].x / 2,
        y4: mobilya.bolge[index].cy - mobilya.bolge[index].y / 2,
        x: mobilya.bolge[index].x,
        y: mobilya.bolge[index].y,
      };
    }
  }
  // rafın dört köşe noktasını buluyoruz.
  if (mobilya.yatay_bolme.length > 0) {
    for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
      yatay_bolme[index] = {
        x1: mobilya.yatay_bolme[index].x0 - mobilya.yatay_bolme[index].x / 2,
        y1: mobilya.yatay_bolme[index].y0 + mobilya.yatay_bolme[index].y / 2,
        x2: mobilya.yatay_bolme[index].x0 + mobilya.yatay_bolme[index].x / 2,
        y2: mobilya.yatay_bolme[index].y0 + mobilya.yatay_bolme[index].y / 2,
        x3: mobilya.yatay_bolme[index].x0 - mobilya.yatay_bolme[index].x / 2,
        y3: mobilya.yatay_bolme[index].y0 - mobilya.yatay_bolme[index].y / 2,
        x4: mobilya.yatay_bolme[index].x0 + mobilya.yatay_bolme[index].x / 2,
        y4: mobilya.yatay_bolme[index].y0 - mobilya.yatay_bolme[index].y / 2,
      };
    }
  }
  //dikmenin dört köşe noktasını buluyoruz
  if (mobilya.dikey_bolme.length > 0) {
    for (let index = 0; index < mobilya.dikey_bolme.length; index++) {
      dikey_bolme[index] = {
        x1: mobilya.dikey_bolme[index].x0 - mobilya.dikey_bolme[index].x / 2,
        y1: mobilya.dikey_bolme[index].y0 + mobilya.dikey_bolme[index].y / 2,
        x2: mobilya.dikey_bolme[index].x0 + mobilya.dikey_bolme[index].x / 2,
        y2: mobilya.dikey_bolme[index].y0 + mobilya.dikey_bolme[index].y / 2,
        x3: mobilya.dikey_bolme[index].x0 - mobilya.dikey_bolme[index].x / 2,
        y3: mobilya.dikey_bolme[index].y0 - mobilya.dikey_bolme[index].y / 2,
        x4: mobilya.dikey_bolme[index].x0 + mobilya.dikey_bolme[index].x / 2,
        y4: mobilya.dikey_bolme[index].y0 - mobilya.dikey_bolme[index].y / 2,
      };
    }
  }
  //dikmeye komşu olan bölgeler.
  const fark = kalinlik - mobilya.dikey_bolme[secilenDikeyBolme].x;
  mobilya.dikey_bolme[secilenDikeyBolme].x = kalinlik;
  for (let index = 0; index < mobilya.bolge.length; index++) {
    if (
      dikey_bolme[secilenDikeyBolme].y1 >= bolge[index].y2 &&
      dikey_bolme[secilenDikeyBolme].y3 <= bolge[index].y4 &&
      bolge[index].x2 === dikey_bolme[secilenDikeyBolme].x1
    ) {
      secilenSagBolge_index = index;
      secilenSagBolge_index = bolge[index];
      mobilya.bolge[index].x = mobilya.bolge[index].x - fark / 2;
      mobilya.bolge[index].cx = mobilya.bolge[index].cx - fark / 4;
    }

    if (
      dikey_bolme[secilenDikeyBolme].y2 >= bolge[index].y1 &&
      dikey_bolme[secilenDikeyBolme].y4 <= bolge[index].y3 &&
      bolge[index].x1 === dikey_bolme[secilenDikeyBolme].x2
    ) {
      mobilya.bolge[index].x = mobilya.bolge[index].x - fark / 2;
      mobilya.bolge[index].cx = mobilya.bolge[index].cx + fark / 4;
      secilenSolBolge_index = index;
      secilenSolBolge = bolge[index];
    }
  }
  //dikey bölmeye komşu olan raflar-ve düzenlenmesi
  for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
    if (
      dikey_bolme[secilenDikeyBolme].y1 >= yatay_bolme[index].y2 &&
      dikey_bolme[secilenDikeyBolme].y3 <= yatay_bolme[index].y4 &&
      yatay_bolme[index].x2 === dikey_bolme[secilenDikeyBolme].x1
    ) {
      console.log("yatay-sol");
      mobilya.yatay_bolme[index].x = mobilya.yatay_bolme[index].x - fark / 2;
      mobilya.yatay_bolme[index].x0 = mobilya.yatay_bolme[index].x0 - fark / 4;
    }
    if (
      dikey_bolme[secilenDikeyBolme].y2 >= yatay_bolme[index].y1 &&
      dikey_bolme[secilenDikeyBolme].y4 <= yatay_bolme[index].y3 &&
      yatay_bolme[index].x1 === dikey_bolme[secilenDikeyBolme].x2
    ) {
      console.log("yatay-sag");
      mobilya.yatay_bolme[index].x = mobilya.yatay_bolme[index].x - fark / 2;
      mobilya.yatay_bolme[index].x0 = mobilya.yatay_bolme[index].x0 + fark / 4;
    }
  }

  return mobilya;
};

export default DikeyBolmeKalinlik;
