const bolge = [
  { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0, x: 0, y: 0 },
];
const yatay_bolme = [
  { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0 },
];
const dikey_bolme = [
  { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0 },
];

const DikeyBolmeAyarla = (mobilya, bolge_x, bolge_y, secilenBolge, islem) => {
  console.log("islem=", islem);
  console.log("--secilenBolge=", secilenBolge, "bolge_x=", bolge_x);
  let secilenSagDikeyBolme_index = 0;
  let secilenSolDikeyBolme_index = 0;
  let secilenSagDikeyBolme = "yok";
  let secilenSolDikeyBolme = "yok";
  let komsu_sol_bolge = [];
  let komsu_sag_bolge = [];
  let komsuSolRaf = [];
  let komsuSagRaf = [];
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

  //önce bölge seçilecek
  //bölgenin değdiği yatay_bolme bulunacak
  // bölgenin değdiği yatay_bolme için cx ve xo merkez noktaları eşit olacak
  //bu rafa komşu olan(değen) tüm bölgeler ve dikey_bolmeler seçilecek
  // rafın haraketine göre bölge ve yatay_bolme ayarları yapılacak
  //seçilen bölge ** secilenBolge
  //seçilen yatay_bolme iki adet ise ???

  // secilenBolgeye komşu olan dikey_bolmenin bulunması

  for (let index = 0; index < mobilya.dikey_bolme.length; index++) {
    if (
      dikey_bolme[index].y1 >= bolge[secilenBolge].y2 &&
      dikey_bolme[index].y3 <= bolge[secilenBolge].y4 &&
      bolge[secilenBolge].x2 === dikey_bolme[index].x1
    ) {
      secilenSagDikeyBolme_index = index;
      secilenSagDikeyBolme = dikey_bolme[index];
    }

    if (
      dikey_bolme[index].y2 >= bolge[secilenBolge].y1 &&
      dikey_bolme[index].y4 <= bolge[secilenBolge].y3 &&
      bolge[secilenBolge].x1 === dikey_bolme[index].x2
    ) {
      secilenSolDikeyBolme_index = index;
      secilenSolDikeyBolme = dikey_bolme[index];
    }
  }

  console.log("secilenSagDikeyBolme=", secilenSagDikeyBolme);
  console.log("secilenSolDikeyBolme=", secilenSolDikeyBolme);

  //@sag_dikey_bolme işlemi--------------------------------------------------------------
  console.log(
    "mobilya.bolge[secilenBolge].x=",
    mobilya.bolge[secilenBolge].x,
    "bolge_x=",
    bolge_x
  );
  if (islem === "sag_dikey_bolme" && bolge_x > 0) {
    //secilenSagDikeyBolmeı ın üst komşuları x1-x2 arasında kalan x3-x4 ler
    let say = 0;
    let say1 = 0;
    for (let index = 0; index < bolge.length; index++) {
      if (
        secilenSagDikeyBolme.y1 >= bolge[index].y2 &&
        secilenSagDikeyBolme.y3 <= bolge[index].y4 &&
        secilenSagDikeyBolme.x1 === bolge[index].x2
      ) {
        komsu_sol_bolge.push(index);
        say = say + 1;
      }
      if (
        secilenSagDikeyBolme.y2 >= bolge[index].y1 &&
        secilenSagDikeyBolme.y4 <= bolge[index].y3 &&
        secilenSagDikeyBolme.x2 === bolge[index].x1
      ) {
        komsu_sag_bolge.push(index);
        say1 = say1 + 1;
      }
    }
    // seçilen dikey_bolmeye komsu olan raflar seçilecek
    let artir = 0;
    let artir1 = 0;
    for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
      if (
        yatay_bolme[index].y2 <= dikey_bolme[secilenSagDikeyBolme_index].y1 &&
        yatay_bolme[index].y4 >= dikey_bolme[secilenSagDikeyBolme_index].y3 &&
        yatay_bolme[index].x2 === dikey_bolme[secilenSagDikeyBolme_index].x1
      ) {
        komsuSolRaf.push(index);
        artir = artir + 1;
      }
      if (
        yatay_bolme[index].y1 <= dikey_bolme[secilenSagDikeyBolme_index].y2 &&
        yatay_bolme[index].y3 >= dikey_bolme[secilenSagDikeyBolme_index].y4 &&
        yatay_bolme[index].x1 === dikey_bolme[secilenSagDikeyBolme_index].x2
      ) {
        komsuSagRaf.push(index);
        artir1 = artir1 + 1;
      }
    }

    const sonuc = mobilya.bolge[secilenBolge].x - bolge_x;
    for (let index = 0; index < komsu_sol_bolge.length; index++) {
      if (bolge_x > 0) {
        //const sonuc = mobilya.bolge[komsu_sol_bolge[index]].y - bolge_y
        mobilya.bolge[komsu_sol_bolge[index]].cx =
          mobilya.bolge[komsu_sol_bolge[index]].cx - sonuc / 2;
        mobilya.bolge[komsu_sol_bolge[index]].x =
          mobilya.bolge[komsu_sol_bolge[index]].x - sonuc;
      }
    }
    for (let index = 0; index < komsu_sag_bolge.length; index++) {
      if (bolge_x > 0) {
        mobilya.bolge[komsu_sag_bolge[index]].cx =
          mobilya.bolge[komsu_sag_bolge[index]].cx - sonuc / 2;
        mobilya.bolge[komsu_sag_bolge[index]].x =
          mobilya.bolge[komsu_sag_bolge[index]].x + sonuc;
      }
    }
    console.log("komsu_sag_bolge.length=", komsu_sag_bolge.length);

    //komşu sagdikey_bolmenin ayarlanması
    if (secilenSagDikeyBolme === "yok") {
      console.log("***sag dikey_bolme yok");
    } else {
      for (let index = 0; index < komsuSagRaf.length; index++) {
        mobilya.yatay_bolme[komsuSagRaf[index]].x0 =
          mobilya.yatay_bolme[komsuSagRaf[index]].x0 - sonuc / 2;
        mobilya.yatay_bolme[komsuSagRaf[index]].x =
          mobilya.yatay_bolme[komsuSagRaf[index]].x + sonuc;
      }
      for (let index = 0; index < komsuSolRaf.length; index++) {
        mobilya.yatay_bolme[komsuSolRaf[index]].x0 =
          mobilya.yatay_bolme[komsuSolRaf[index]].x0 - sonuc / 2;
        mobilya.yatay_bolme[komsuSolRaf[index]].x =
          mobilya.yatay_bolme[komsuSolRaf[index]].x - sonuc;
      }
      //rafın ayarlanması
      mobilya.dikey_bolme[secilenSagDikeyBolme_index].x0 =
        mobilya.dikey_bolme[secilenSagDikeyBolme_index].x0 - sonuc;
    }
  }
  //----------------------------------------------------------------------------
  //@sol_dikey_bolme--------------------------------------------------------------------
  if (islem === "sol_dikey_bolme" && bolge_x > 0) {
    //secilen rafa komşu olan sol bolge ve sag bolgeler seçilecek
    let say = 0;
    let say1 = 0;
    for (let index = 0; index < bolge.length; index++) {
      if (
        secilenSolDikeyBolme.y2 >= bolge[index].y1 &&
        secilenSolDikeyBolme.y4 <= bolge[index].y3 &&
        secilenSolDikeyBolme.x2 === bolge[index].x3
      ) {
        komsu_sag_bolge.push(index);
        say = say + 1;
      } else {
      }
      if (
        secilenSolDikeyBolme.y1 >= bolge[index].y2 &&
        secilenSolDikeyBolme.y3 <= bolge[index].y4 &&
        secilenSolDikeyBolme.x1 === bolge[index].x2
      ) {
        komsu_sol_bolge.push(index);
        say1 = say1 + 1;
      }
    }
    // seçilen dikey_bolmeye komsu olan raflar seçilecek
    let artir = 0;
    let artir1 = 0;
    for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
      if (
        yatay_bolme[index].y2 <= dikey_bolme[secilenSolDikeyBolme_index].y1 &&
        yatay_bolme[index].y4 >= dikey_bolme[secilenSolDikeyBolme_index].y3 &&
        yatay_bolme[index].x2 === dikey_bolme[secilenSolDikeyBolme_index].x1
      ) {
        komsuSolRaf.push(index);
        artir = artir + 1;
      }
      if (
        yatay_bolme[index].y1 <= dikey_bolme[secilenSolDikeyBolme_index].y2 &&
        yatay_bolme[index].y3 >= dikey_bolme[secilenSolDikeyBolme_index].y4 &&
        yatay_bolme[index].x1 === dikey_bolme[secilenSolDikeyBolme_index].x2
      ) {
        komsuSagRaf.push(index);
        artir1 = artir1 + 1;
      }
    }

    //ölcüye göre bolgelerin ayarlanması
    const sonuc = mobilya.bolge[secilenBolge].x - bolge_x;

    for (let index = 0; index < komsu_sol_bolge.length; index++) {
      if (bolge_x > 0) {
        //const sonuc = mobilya.bolge[komsu_sol_bolge[index]].y - bolge_y
        mobilya.bolge[komsu_sol_bolge[index]].cx =
          mobilya.bolge[komsu_sol_bolge[index]].cx + sonuc / 2;
        mobilya.bolge[komsu_sol_bolge[index]].x =
          mobilya.bolge[komsu_sol_bolge[index]].x + sonuc;
      }
    }
    for (let index = 0; index < komsu_sag_bolge.length; index++) {
      if (bolge_x > 0) {
        mobilya.bolge[komsu_sag_bolge[index]].cx =
          mobilya.bolge[komsu_sag_bolge[index]].cx + sonuc / 2;
        mobilya.bolge[komsu_sag_bolge[index]].x =
          mobilya.bolge[komsu_sag_bolge[index]].x - sonuc;
      }
    }

    //komşu sağ rafın ayarlanması
    if (secilenSolDikeyBolme === "yok") {
      console.log("***sol dikey_bolme yok");
    } else {
      for (let index = 0; index < komsuSolRaf.length; index++) {
        mobilya.yatay_bolme[komsuSolRaf[index]].x0 =
          mobilya.yatay_bolme[komsuSolRaf[index]].x0 + sonuc / 2;
        mobilya.yatay_bolme[komsuSolRaf[index]].x =
          mobilya.yatay_bolme[komsuSolRaf[index]].x + sonuc;
      }
      for (let index = 0; index < komsuSagRaf.length; index++) {
        console.log("komsu sag rafa ugradı");
        mobilya.yatay_bolme[komsuSagRaf[index]].x0 =
          mobilya.yatay_bolme[komsuSagRaf[index]].x0 + sonuc / 2;
        mobilya.yatay_bolme[komsuSagRaf[index]].x =
          mobilya.yatay_bolme[komsuSagRaf[index]].x - sonuc;
      }
      //dikey_bolmenin ayarlanması
      mobilya.dikey_bolme[secilenSolDikeyBolme_index].x0 =
        mobilya.dikey_bolme[secilenSolDikeyBolme_index].x0 + sonuc;
    }
  }

  //----------------------------------------------------------------------------
  //sınırlama--------------------------------------------------------------

  //------------------------------------------------------------------------

  return mobilya;
};
export default DikeyBolmeAyarla;
