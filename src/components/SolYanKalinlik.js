//import React from 'react'

const SolYanKalinlik = (mobilya, kalinlik) => {
  console.log("solyan kalınlığa uğradı");
  let secilenSagBolge_index = 0;
  //let secilenSolBolge_index = 0;
  let secilenSagBolge = "yok";
  //let secilenSolBolge = "yok";
  let bolge = [];
  let yatay_bolme = [];
  let dikey_bolme = [];
  let sol_yan = {};
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
  //sol_yan ın köşe noktalarını buluyoruz.
  if (mobilya.sol_yan.dahil) {
    sol_yan = {
      x1: mobilya.sol_yan.x0 - mobilya.sol_yan.x / 2,
      y1: mobilya.sol_yan.y0 + mobilya.sol_yan.y / 2,
      x2: mobilya.sol_yan.x0 + mobilya.sol_yan.x / 2,
      y2: mobilya.sol_yan.y0 + mobilya.sol_yan.y / 2,
      x3: mobilya.sol_yan.x0 - mobilya.sol_yan.x / 2,
      y3: mobilya.sol_yan.y0 - mobilya.sol_yan.y / 2,
      x4: mobilya.sol_yan.x0 + mobilya.sol_yan.x / 2,
      y4: mobilya.sol_yan.y0 - mobilya.sol_yan.y / 2,
    };
  }
  //------------------------------------------
  const fark = kalinlik - mobilya.sol_yan.x;
  console.log("fark=", fark);
  mobilya.sol_yan.x = kalinlik;
  mobilya.sol_yan.x0 = mobilya.sol_yan.x0 + fark / 2;
  //üstün ayarlanması
  mobilya.ust.x = mobilya.ust.x - fark;
  mobilya.ust.x0 = mobilya.ust.x0 + fark / 2;
  //alt ayarlanması
  mobilya.alt.x = mobilya.alt.x - fark;
  mobilya.alt.x0 = mobilya.alt.x0 + fark / 2;
  //Baza ayarlanması
  mobilya.baza.x = mobilya.baza.x - fark;
  mobilya.baza.x0 = mobilya.baza.x0 + fark / 2;

  //sol_yan a komşu olan sag bölgeler .
  for (let index = 0; index < mobilya.bolge.length; index++) {
    if (
      sol_yan.y2 >= bolge[index].y1 &&
      sol_yan.y4 <= bolge[index].y3 &&
      sol_yan.x2 === bolge[index].x1
    ) {
      console.log("bölgeyi buldu");
      //secilenSagBolge_index = index;
      //secilenSagBolge_index = bolge[index];
      mobilya.bolge[index].x = mobilya.bolge[index].x - fark;
      mobilya.bolge[index].cx = mobilya.bolge[index].cx + fark / 2;
    }
  }
  //sol_yan komşu olan raflar-ve düzenlenmesi
  for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
    if (
      sol_yan.y2 >= yatay_bolme[index].y1 &&
      sol_yan.y4 <= yatay_bolme[index].y3 &&
      sol_yan.x2 === yatay_bolme[index].x1
    ) {
      console.log("yatay bolgeye uğradı");
      mobilya.yatay_bolme[index].x = mobilya.yatay_bolme[index].x - fark;
      mobilya.yatay_bolme[index].x0 = mobilya.yatay_bolme[index].x0 + fark / 2;
    }
  }
  console.log("mobilya.sol_yan=", mobilya.sol_yan);

  return mobilya;
};

export default SolYanKalinlik;
