//import React from 'react'

const YatayBolmeKalinlik = (mobilya, secilenYatayBolme, kalinlik) => {
  let secilenUstBolge_index = 0;
  let secilenAltBolge_index = 0;
  let secilenUstBolge = "yok";
  let secilenAltBolge = "yok";
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
  //rafa komşu olan bölgeler.
  const fark = kalinlik - mobilya.yatay_bolme[secilenYatayBolme].y;
  mobilya.yatay_bolme[secilenYatayBolme].y = kalinlik;
  for (let index = 0; index < mobilya.bolge.length; index++) {
    //rafa komsu olan üst bölge
    if (
      yatay_bolme[secilenYatayBolme].x1 <= bolge[index].x3 &&
      yatay_bolme[secilenYatayBolme].x2 >= bolge[index].x4 &&
      bolge[index].y3 === yatay_bolme[secilenYatayBolme].y1
    ) {
      secilenUstBolge_index = index;
      secilenUstBolge_index = bolge[index];
      mobilya.bolge[index].y = mobilya.bolge[index].y - fark / 2;
      mobilya.bolge[index].cy = mobilya.bolge[index].cy + fark / 4;
    }
    //rafa komşu olan alt bolge
    if (
      yatay_bolme[secilenYatayBolme].x3 <= bolge[index].x1 &&
      yatay_bolme[secilenYatayBolme].x4 >= bolge[index].x2 &&
      bolge[index].y1 === yatay_bolme[secilenYatayBolme].y3
    ) {
      mobilya.bolge[index].y = mobilya.bolge[index].y - fark / 2;
      mobilya.bolge[index].cy = mobilya.bolge[index].cy - fark / 4;
      secilenAltBolge_index = index;
      secilenAltBolge = bolge[index];
    }
  }
  //yatay bölmeye komşu olan dikey bölgeler-ve düzenlenmesi
  for (let index = 0; index < mobilya.dikey_bolme.length; index++) {
    if (
      yatay_bolme[secilenYatayBolme].x1 <= dikey_bolme[index].x3 &&
      yatay_bolme[secilenYatayBolme].x2 >= dikey_bolme[index].x4 &&
      yatay_bolme[secilenYatayBolme].y1 === dikey_bolme[index].y3
    ) {
      console.log("uğradı1");
      mobilya.dikey_bolme[index].y = mobilya.dikey_bolme[index].y - fark / 2;
      mobilya.dikey_bolme[index].y0 = mobilya.dikey_bolme[index].y0 + fark / 4;
    }
    if (
      yatay_bolme[secilenYatayBolme].x3 <= dikey_bolme[index].x1 &&
      yatay_bolme[secilenYatayBolme].x4 >= dikey_bolme[index].x2 &&
      yatay_bolme[secilenYatayBolme].y3 === dikey_bolme[index].y1
    ) {
      console.log("uğradı2");
      mobilya.dikey_bolme[index].y = mobilya.dikey_bolme[index].y - fark / 2;
      mobilya.dikey_bolme[index].y0 = mobilya.dikey_bolme[index].y0 - fark / 4;
    }
  }

  return mobilya;
};

export default YatayBolmeKalinlik;
