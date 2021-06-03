const DikeyBolmeSil = (mobilya, secilenDikeyBolme) => {
  const bolge = [
    { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0, x: 0, y: 0 },
  ];
  let komsu_sol_bolge = false;
  let komsu_sag_bolge = false;
  let komsu_sol_bolge_id = -1;
  let komsu_sag_bolge_id = -1;

  console.log("DikeyBolmeSil çalıştı");
  //dikey_bolmeninin silip silinemeyeceği kontrol edilecek
  //dikey_bolme silindikten sonra bölgeler dikey_bolmenin silinmesine göre ayarlanacak
  //bu bölgeler içindeki kapak çekmece kapağı ve kasa gibi unsurlar düzenlenecek
  //dikey_bolmeye komşu olan bölgelerin tespiti. komşu ola bölgeleri tespit etmek için dikey_bolmenin köşe noktaları ile eşit olan bölgeler bulunacak, bu durumda 2 bölge olabilir.

  //1...seçilen dikey_bolmenin dört köşe noktasının bulunması.
  const dikey_bolme = {
    x1:
      mobilya.dikey_bolme[secilenDikeyBolme].x0 -
      mobilya.dikey_bolme[secilenDikeyBolme].x / 2,
    y1:
      mobilya.dikey_bolme[secilenDikeyBolme].y0 +
      mobilya.dikey_bolme[secilenDikeyBolme].y / 2,
    x2:
      mobilya.dikey_bolme[secilenDikeyBolme].x0 +
      mobilya.dikey_bolme[secilenDikeyBolme].x / 2,
    y2:
      mobilya.dikey_bolme[secilenDikeyBolme].y0 +
      mobilya.dikey_bolme[secilenDikeyBolme].y / 2,
    x3:
      mobilya.dikey_bolme[secilenDikeyBolme].x0 -
      mobilya.dikey_bolme[secilenDikeyBolme].x / 2,
    y3:
      mobilya.dikey_bolme[secilenDikeyBolme].y0 -
      mobilya.dikey_bolme[secilenDikeyBolme].y / 2,
    x4:
      mobilya.dikey_bolme[secilenDikeyBolme].x0 +
      mobilya.dikey_bolme[secilenDikeyBolme].x / 2,
    y4:
      mobilya.dikey_bolme[secilenDikeyBolme].y0 -
      mobilya.dikey_bolme[secilenDikeyBolme].y / 2,
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

  //3..dikey_bolme üst ve alt noktalarına komşu olan bölgeleri tespit ediyoruz.
  for (let index = 0; index < mobilya.bolge.length; index++) {
    if (
      //dikey_bolmeye komsu sag bolge
      dikey_bolme.x2 === bolge[index].x1 &&
      dikey_bolme.y2 === bolge[index].y1 &&
      dikey_bolme.x4 === bolge[index].x3 &&
      dikey_bolme.y4 === bolge[index].y3
    ) {
      console.log("komsu sag bölge bulundu", index);
      komsu_sag_bolge = true;
      komsu_sag_bolge_id = index;
    }
    if (
      //dikey_bolmeye komsu sol bolge
      dikey_bolme.x1 === bolge[index].x2 &&
      dikey_bolme.y1 === bolge[index].y2 &&
      dikey_bolme.x3 === bolge[index].x4 &&
      dikey_bolme.y3 === bolge[index].y4
    ) {
      console.log("komsu sol bölge bulundu", index);
      komsu_sol_bolge = true;
      komsu_sol_bolge_id = index;
    }
  }

  //--yardımcı alt programlar
  const DikeyBolmeSilme = () => {
    mobilya.bolge[komsu_sol_bolge_id].dahil = false;
    mobilya.bolge[komsu_sag_bolge_id].dahil = false;
    //-----------------------------
    mobilya.dikey_bolme[secilenDikeyBolme].dahil = false;
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

    //seçilen dikey_bolmeyi sil
    const newList_dikey_bolme = mobilya.dikey_bolme.filter(
      (item) => item.dahil
    );
    mobilya.dikey_bolme = newList_dikey_bolme;
    console.log("newList_dikey_bolme=", newList_dikey_bolme);

    return mobilya;
  };

  //-dikey_bolme silindikten sonra bölgeler birleştiriliyor.
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
        mobilya.dikey_bolme[secilenDikeyBolme].x,
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
    DikeyBolmeSilme();
    komsu_sol_bolge = false;
    komsu_sag_bolge = false;
  } else {
    console.log("işlem yapılamaz");
  }

  //console.log("seçilen dikey_bolme=", mobilya.dikey_bolme[secilenDikeyBolme]);

  return mobilya;
};

export default DikeyBolmeSil;
