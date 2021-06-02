const bolge = [
  { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0, x: 0, y: 0 },
];
const yatay_bolme = [
  { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0 },
];
const dikme = [{ x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0 }];

const DikmeAyarla = (mobilya, bolge_x, bolge_y, secilenBolge, islem) => {
  console.log("islem=", islem);
  console.log("--secilenBolge=", secilenBolge, "bolge_x=", bolge_x);
  let secilenSagDikme_index = 0;
  let secilenSolDikme_index = 0;
  let secilenSagDikme = "yok";
  let secilenSolDikme = "yok";
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
  if (mobilya.dikme.length > 0) {
    for (let index = 0; index < mobilya.dikme.length; index++) {
      dikme[index] = {
        x1: mobilya.dikme[index].x0 - mobilya.dikme[index].x / 2,
        y1: mobilya.dikme[index].y0 + mobilya.dikme[index].y / 2,
        x2: mobilya.dikme[index].x0 + mobilya.dikme[index].x / 2,
        y2: mobilya.dikme[index].y0 + mobilya.dikme[index].y / 2,
        x3: mobilya.dikme[index].x0 - mobilya.dikme[index].x / 2,
        y3: mobilya.dikme[index].y0 - mobilya.dikme[index].y / 2,
        x4: mobilya.dikme[index].x0 + mobilya.dikme[index].x / 2,
        y4: mobilya.dikme[index].y0 - mobilya.dikme[index].y / 2,
      };
    }
  }

  //önce bölge seçilecek
  //bölgenin değdiği yatay_bolme bulunacak
  // bölgenin değdiği yatay_bolme için cx ve xo merkez noktaları eşit olacak
  //bu rafa komşu olan(değen) tüm bölgeler ve dikmeler seçilecek
  // rafın haraketine göre bölge ve yatay_bolme ayarları yapılacak
  //seçilen bölge ** secilenBolge
  //seçilen yatay_bolme iki adet ise ???

  // secilenBolgeye komşu olan dikmenin bulunması

  for (let index = 0; index < mobilya.dikme.length; index++) {
    if (
      dikme[index].y1 >= bolge[secilenBolge].y2 &&
      dikme[index].y3 <= bolge[secilenBolge].y4 &&
      bolge[secilenBolge].x2 === dikme[index].x1
    ) {
      secilenSagDikme_index = index;
      secilenSagDikme = dikme[index];
    }

    if (
      dikme[index].y2 >= bolge[secilenBolge].y1 &&
      dikme[index].y4 <= bolge[secilenBolge].y3 &&
      bolge[secilenBolge].x1 === dikme[index].x2
    ) {
      secilenSolDikme_index = index;
      secilenSolDikme = dikme[index];
    }
  }

  console.log("secilenSagDikme=", secilenSagDikme);
  console.log("secilenSolDikme=", secilenSolDikme);

  //@sag_dikme işlemi--------------------------------------------------------------
  console.log(
    "mobilya.bolge[secilenBolge].x=",
    mobilya.bolge[secilenBolge].x,
    "bolge_x=",
    bolge_x
  );
  if (islem === "sag_dikme" && bolge_x > 0) {
    //secilenSagDikmeı ın üst komşuları x1-x2 arasında kalan x3-x4 ler
    let say = 0;
    let say1 = 0;
    for (let index = 0; index < bolge.length; index++) {
      if (
        secilenSagDikme.y1 >= bolge[index].y2 &&
        secilenSagDikme.y3 <= bolge[index].y4 &&
        secilenSagDikme.x1 === bolge[index].x2
      ) {
        komsu_sol_bolge.push(index);
        say = say + 1;
      }
      if (
        secilenSagDikme.y2 >= bolge[index].y1 &&
        secilenSagDikme.y4 <= bolge[index].y3 &&
        secilenSagDikme.x2 === bolge[index].x1
      ) {
        komsu_sag_bolge.push(index);
        say1 = say1 + 1;
      }
    }
    // seçilen dikmeye komsu olan raflar seçilecek
    let artir = 0;
    let artir1 = 0;
    for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
      if (
        yatay_bolme[index].y2 <= dikme[secilenSagDikme_index].y1 &&
        yatay_bolme[index].y4 >= dikme[secilenSagDikme_index].y3 &&
        yatay_bolme[index].x2 === dikme[secilenSagDikme_index].x1
      ) {
        komsuSolRaf.push(index);
        artir = artir + 1;
      }
      if (
        yatay_bolme[index].y1 <= dikme[secilenSagDikme_index].y2 &&
        yatay_bolme[index].y3 >= dikme[secilenSagDikme_index].y4 &&
        yatay_bolme[index].x1 === dikme[secilenSagDikme_index].x2
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

    //komşu sagdikmenin ayarlanması
    if (secilenSagDikme === "yok") {
      console.log("***sag dikme yok");
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
      mobilya.dikme[secilenSagDikme_index].x0 =
        mobilya.dikme[secilenSagDikme_index].x0 - sonuc;
    }
  }
  //----------------------------------------------------------------------------
  //@sol_dikme--------------------------------------------------------------------
  if (islem === "sol_dikme" && bolge_x > 0) {
    //secilen rafa komşu olan sol bolge ve sag bolgeler seçilecek
    let say = 0;
    let say1 = 0;
    for (let index = 0; index < bolge.length; index++) {
      if (
        secilenSolDikme.y2 >= bolge[index].y1 &&
        secilenSolDikme.y4 <= bolge[index].y3 &&
        secilenSolDikme.x2 === bolge[index].x3
      ) {
        komsu_sag_bolge.push(index);
        say = say + 1;
      } else {
      }
      if (
        secilenSolDikme.y1 >= bolge[index].y2 &&
        secilenSolDikme.y3 <= bolge[index].y4 &&
        secilenSolDikme.x1 === bolge[index].x2
      ) {
        komsu_sol_bolge.push(index);
        say1 = say1 + 1;
      }
    }
    // seçilen dikmeye komsu olan raflar seçilecek
    let artir = 0;
    let artir1 = 0;
    for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
      if (
        yatay_bolme[index].y2 <= dikme[secilenSolDikme_index].y1 &&
        yatay_bolme[index].y4 >= dikme[secilenSolDikme_index].y3 &&
        yatay_bolme[index].x2 === dikme[secilenSolDikme_index].x1
      ) {
        komsuSolRaf.push(index);
        artir = artir + 1;
      }
      if (
        yatay_bolme[index].y1 <= dikme[secilenSolDikme_index].y2 &&
        yatay_bolme[index].y3 >= dikme[secilenSolDikme_index].y4 &&
        yatay_bolme[index].x1 === dikme[secilenSolDikme_index].x2
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
    if (secilenSolDikme === "yok") {
      console.log("***sol dikme yok");
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
      //dikmenin ayarlanması
      mobilya.dikme[secilenSolDikme_index].x0 =
        mobilya.dikme[secilenSolDikme_index].x0 + sonuc;
    }
  }

  //----------------------------------------------------------------------------
  //sınırlama--------------------------------------------------------------

  //------------------------------------------------------------------------

  return mobilya;
};
export default DikmeAyarla;
