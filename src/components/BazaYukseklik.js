import React from "react";

const BazaYukseklik = (mobilya, kalinlik) => {
  console.log("BazaYükseklik e uğradı kalınlığa uğradı");
  let secilenSagBolge_index = 0;
  //let secilenSolBolge_index = 0;
  let secilenSagBolge = "yok";
  //let secilenSolBolge = "yok";
  let bolge = [];
  let yatay_bolme = [];
  let dikey_bolme = [];
  let baza = {};
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
  //baza ın köşe noktalarını buluyoruz.
  if (mobilya.baza.dahil) {
    baza = {
      x1: mobilya.baza.x0 - mobilya.baza.x / 2,
      y1: mobilya.baza.y0 + mobilya.baza.y / 2,
      x2: mobilya.baza.x0 + mobilya.baza.x / 2,
      y2: mobilya.baza.y0 + mobilya.baza.y / 2,
      x3: mobilya.baza.x0 - mobilya.baza.x / 2,
      y3: mobilya.baza.y0 - mobilya.baza.y / 2,
      x4: mobilya.baza.x0 + mobilya.baza.x / 2,
      y4: mobilya.baza.y0 - mobilya.baza.y / 2,
    };
  }
  //------------------------------------------
  const fark = kalinlik - mobilya.baza.y;
  console.log("fark=", fark);
  mobilya.baza.y = kalinlik;
  mobilya.baza.y0 = mobilya.baza.y0 - fark / 2;

  //sol_yan ve sağ yan kasa modeline göre ayarlanmalı bunun için kasa modeli seçilmeli
  switch (mobilya.tip) {
    case 1: //standart kasa tipi
      break;
    case 2: //baza sol ve sağ yanın üstüne biniyor.
      //sol_yan ayarlanması
      mobilya.baza.y = mobilya.baza.y - fark;
      mobilya.baza.y0 = mobilya.baza.y0 + fark / 2;
      //sag_yan ayarlanması
      mobilya.alt.x = mobilya.alt.x - fark;
      mobilya.alt.x0 = mobilya.alt.x0 + fark / 2;

      break;

    default:
      break;
  }

  //baza a komşu olan alt bölgeler .
  for (let index = 0; index < mobilya.bolge.length; index++) {
    if (
      baza.x3 <= bolge[index].x1 &&
      baza.x4 >= bolge[index].x2 &&
      baza.y3 === bolge[index].y1
    ) {
      console.log("-- bolgeye uğradı");
      mobilya.bolge[index].y = mobilya.bolge[index].y - fark;
      mobilya.bolge[index].cy = mobilya.bolge[index].cy - fark / 2;
    }
  }
  //baza komşu olan dikmelerin düzenlenmesi
  for (let index = 0; index < mobilya.dikey_bolme.length; index++) {
    if (
      baza.x3 <= dikey_bolme[index].x1 &&
      baza.x4 >= dikey_bolme[index].x2 &&
      baza.y3 === dikey_bolme[index].y1fdr
    ) {
      console.log("dikey--- bolgeye uğradı");
      mobilya.dikey_bolme[index].y = mobilya.dikey_bolme[index].y - fark;
      mobilya.dikey_bolme[index].y0 = mobilya.dikey_bolme[index].y0 - fark / 2;
    }
  }
  console.log("mobilya.baza=", mobilya.baza);

  return mobilya;
};

export default BazaYukseklik;
