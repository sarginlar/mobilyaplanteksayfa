const DikmeSil = (mobilya, secilenDikme) => {
  const bolge = [
    { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0, x: 0, y: 0 },
  ];
  let komsu_sol_bolge = false;
  let komsu_sag_bolge = false;
  let komsu_sol_bolge_id = -1;
  let komsu_sag_bolge_id = -1;

  console.log("DikmeSil çalıştı");
  //dikmeninin silip silinemeyeceği kontrol edilecek
  //dikme silindikten sonra bölgeler dikmenin silinmesine göre ayarlanacak
  //bu bölgeler içindeki kapak çekmece kapağı ve kasa gibi unsurlar düzenlenecek
  //dikmeye komşu olan bölgelerin tespiti. komşu ola bölgeleri tespit etmek için dikmenin köşe noktaları ile eşit olan bölgeler bulunacak, bu durumda 2 bölge olabilir.

  //1...seçilen dikmenin dört köşe noktasının bulunması.
  const dikme = {
    x1: mobilya.dikme[secilenDikme].x0 - mobilya.dikme[secilenDikme].x / 2,
    y1: mobilya.dikme[secilenDikme].y0 + mobilya.dikme[secilenDikme].y / 2,
    x2: mobilya.dikme[secilenDikme].x0 + mobilya.dikme[secilenDikme].x / 2,
    y2: mobilya.dikme[secilenDikme].y0 + mobilya.dikme[secilenDikme].y / 2,
    x3: mobilya.dikme[secilenDikme].x0 - mobilya.dikme[secilenDikme].x / 2,
    y3: mobilya.dikme[secilenDikme].y0 - mobilya.dikme[secilenDikme].y / 2,
    x4: mobilya.dikme[secilenDikme].x0 + mobilya.dikme[secilenDikme].x / 2,
    y4: mobilya.dikme[secilenDikme].y0 - mobilya.dikme[secilenDikme].y / 2,
  };
  //2..bölgelerin köşe noktalarının bulunması
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

  //3..dikme üst ve alt noktalarına komşu olan bölgeleri tespit ediyoruz.
  for (let index = 0; index < mobilya.bolge.length; index++) {
    if (
      //dikmeye komsu sag bolge
      dikme.x2 === bolge[index].x1 &&
      dikme.y2 === bolge[index].y1 &&
      dikme.x4 === bolge[index].x3 &&
      dikme.y4 === bolge[index].y3
    ) {
      console.log("komsu sag bölge bulundu", index);
      komsu_sag_bolge = true;
      komsu_sag_bolge_id = index;
    }
    if (
      //dikmeye komsu sol bolge
      dikme.x1 === bolge[index].x2 &&
      dikme.y1 === bolge[index].y2 &&
      dikme.x3 === bolge[index].x4 &&
      dikme.y3 === bolge[index].y4
    ) {
      console.log("komsu sol bölge bulundu", index);
      komsu_sol_bolge = true;
      komsu_sol_bolge_id = index;
    }
  }

  //--yardımcı alt programlar
  const DikmeSilme = () => {
    mobilya.bolge[komsu_sol_bolge_id].dahil = false;
    mobilya.bolge[komsu_sag_bolge_id].dahil = false;
    //-----------------------------
    mobilya.dikme[secilenDikme].dahil = false;
    //-----------------------------
    //silinen
    for (let index = 0; index < mobilya.kapak.length; index++) {
      if (
        mobilya.kapak[index].bolge === komsu_sol_bolge_id ||
        mobilya.kapak[index].bolge === komsu_sag_bolge_id
      ) {
        mobilya.kapak[index].dahil = false;
        console.log("kapak bölgeleri eşit", index);
      }
    }

    // silinen bölgelerdeki kapaklar silinir.
    const newList_kapak = mobilya.kapak.filter((item) => item.dahil);

    mobilya.kapak = newList_kapak;
    console.log("newList_kapak=", newList_kapak);
    //---------------------------
    //kalan bölgeler silinir
    const newList = mobilya.bolge.filter((item) => item.dahil);
    mobilya.bolge = newList;
    console.log("newList_bolge=", newList);
    //-----------------------------

    //seçilen dikmeyi sil
    const newList_dikme = mobilya.dikme.filter((item) => item.dahil);
    mobilya.dikme = newList_dikme;
    console.log("newList_dikme=", newList_dikme);

    return mobilya;
  };

  //-dikme silindikten sonra bölgeler birleştiriliyor.
  const BolgeBirlestirme = () => {
    // birleşik bir bölge önceden hesaplanacak sonra diğer bölgeler silincek
    const yeniBolge = {
      dahil: true,
      name: "Bolge",
      tip: 3,
      cx:
        (mobilya.bolge[komsu_sol_bolge_id].cx +
          mobilya.bolge[komsu_sag_bolge_id].cx) /
        2,
      cy:
        (mobilya.bolge[komsu_sol_bolge_id].cy +
          mobilya.bolge[komsu_sag_bolge_id].cy) /
        2,
      x:
        mobilya.bolge[komsu_sol_bolge_id].x +
        mobilya.bolge[komsu_sag_bolge_id].x +
        mobilya.dikme[secilenDikme].x,
      y: mobilya.bolge[komsu_sol_bolge_id].y,
    };
    console.log("bölge birleştirmeye uğradı");

    mobilya.bolge[mobilya.bolge.length] = yeniBolge;

    return mobilya;
  };
  //-----------------------
  //iki bölgede true ise işlem yapılabilir
  if (komsu_sol_bolge && komsu_sag_bolge) {
    console.log("işlem yapılabilir");

    BolgeBirlestirme();
    DikmeSilme();
    komsu_sol_bolge = false;
    komsu_sag_bolge = false;
  } else {
    console.log("işlem yapılamaz");
  }

  //console.log("seçilen dikme=", mobilya.dikme[secilenDikme]);

  return mobilya;
};

export default DikmeSil;
