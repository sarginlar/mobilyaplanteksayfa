//import React from 'react'

const SagYanKalinlik = (mobilya, kalinlik) => {
  console.log("solyan kalınlığa uğradı");
  let secilenSolBolge_index = 0;
  //let secilenSolBolge_index = 0;
  let secilenSolBolge = "yok";
  //let secilenSolBolge = "yok";
  let bolge = [];
  let yatay_bolme = [];
  let dikey_bolme = [];
  let sag_yan = {};
  //sag_yan komsu olan bölgeler bulunacak
  //sag_yan komsu olan raflar bulunacak
  //sag_yan kalınlığı değiştiğinde komşularında ölçüleri değişecek.
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
  //sag_yan ın köşe noktalarını buluyoruz.
  if (mobilya.sag_yan.dahil) {
    sag_yan = {
      x1: mobilya.sag_yan.x0 - mobilya.sag_yan.x / 2,
      y1: mobilya.sag_yan.y0 + mobilya.sag_yan.y / 2,
      x2: mobilya.sag_yan.x0 + mobilya.sag_yan.x / 2,
      y2: mobilya.sag_yan.y0 + mobilya.sag_yan.y / 2,
      x3: mobilya.sag_yan.x0 - mobilya.sag_yan.x / 2,
      y3: mobilya.sag_yan.y0 - mobilya.sag_yan.y / 2,
      x4: mobilya.sag_yan.x0 + mobilya.sag_yan.x / 2,
      y4: mobilya.sag_yan.y0 - mobilya.sag_yan.y / 2,
    };
  }
  //------------------------------------------
  const fark = kalinlik - mobilya.sag_yan.x;
  console.log("fark=", fark);
  mobilya.sag_yan.x = kalinlik;
  mobilya.sag_yan.x0 = mobilya.sag_yan.x0 - fark / 2;
  //üstün ayarlanması
  mobilya.ust.x = mobilya.ust.x - fark;
  mobilya.ust.x0 = mobilya.ust.x0 - fark / 2;
  //alt ayarlanması
  mobilya.alt.x = mobilya.alt.x - fark;
  mobilya.alt.x0 = mobilya.alt.x0 - fark / 2;
  //Baza ayarlanması
  mobilya.baza.x = mobilya.baza.x - fark;
  mobilya.baza.x0 = mobilya.baza.x0 - fark / 2;

  //sag_yan a komşu olan sol bölgeler .
  for (let index = 0; index < mobilya.bolge.length; index++) {
    if (
      sag_yan.y1 >= bolge[index].y2 &&
      sag_yan.y3 <= bolge[index].y4 &&
      sag_yan.x1 === bolge[index].x2
    ) {
      console.log("bölgeyi buldu");
      //secilenSagBolge_index = index;
      //secilenSagBolge_index = bolge[index];
      mobilya.bolge[index].x = mobilya.bolge[index].x - fark;
      mobilya.bolge[index].cx = mobilya.bolge[index].cx - fark / 2;
    }
  }
  //sag_yan komşu olan raflar-ve düzenlenmesi
  for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
    if (
      sag_yan.y1 >= yatay_bolme[index].y2 &&
      sag_yan.y3 <= yatay_bolme[index].y4 &&
      sag_yan.x1 === yatay_bolme[index].x2
    ) {
      console.log("yatay bolgeye uğradı");
      mobilya.yatay_bolme[index].x = mobilya.yatay_bolme[index].x - fark;
      mobilya.yatay_bolme[index].x0 = mobilya.yatay_bolme[index].x0 - fark / 2;
    }
  }
  console.log("mobilya.sag_yan=", mobilya.sag_yan);

  return mobilya;
};

export default SagYanKalinlik;
