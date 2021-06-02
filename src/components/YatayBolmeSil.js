const YatayBolmeSil = (mobilya, secilenYatayBolme) => {
  const bolge = [
    { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0, x: 0, y: 0 },
  ];
  let komsu_ust_bolge = false;
  let komsu_alt_bolge = false;
  let komsu_ust_bolge_id = -1;
  let komsu_alt_bolge_id = -1;

  console.log("YatayBolmeSil çalıştı");
  //yatay_bolmeın silip silinemeyeceği kontrol edilecek
  //yatay_bolme silindikten sonra bölgeler yatay_bolme silinmesine göre ayarlanacak
  //bu bölgeler içindeki kapak çekmece kapağı ve kasa gibi unsurlar düzenlenecek
  //yatay_bolme a komşu olan bölgelerin tespiti. komşu ola bölgeleri tespit etmek için yatay_bolmeın köşe noktaları ile eşit olan bölgeler bulunacak, bu durumda 2 bölge olabilir.

  //1...seçilen yatay_bolmeın dört köşe noktasının bulunması.
  const yatay_bolme = {
    x1:
      mobilya.yatay_bolme[secilenYatayBolme].x0 -
      mobilya.yatay_bolme[secilenYatayBolme].x / 2,
    y1:
      mobilya.yatay_bolme[secilenYatayBolme].y0 +
      mobilya.yatay_bolme[secilenYatayBolme].y / 2,
    x2:
      mobilya.yatay_bolme[secilenYatayBolme].x0 +
      mobilya.yatay_bolme[secilenYatayBolme].x / 2,
    y2:
      mobilya.yatay_bolme[secilenYatayBolme].y0 +
      mobilya.yatay_bolme[secilenYatayBolme].y / 2,
    x3:
      mobilya.yatay_bolme[secilenYatayBolme].x0 -
      mobilya.yatay_bolme[secilenYatayBolme].x / 2,
    y3:
      mobilya.yatay_bolme[secilenYatayBolme].y0 -
      mobilya.yatay_bolme[secilenYatayBolme].y / 2,
    x4:
      mobilya.yatay_bolme[secilenYatayBolme].x0 +
      mobilya.yatay_bolme[secilenYatayBolme].x / 2,
    y4:
      mobilya.yatay_bolme[secilenYatayBolme].y0 -
      mobilya.yatay_bolme[secilenYatayBolme].y / 2,
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

  //3..yatay_bolmeın sağ ve sol ust noktalarına komşu olan bölgeleri tespit ediyoruz.
  for (let index = 0; index < mobilya.bolge.length; index++) {
    if (
      //yatay_bolmea komsu ust bolge
      yatay_bolme.x1 === bolge[index].x3 &&
      yatay_bolme.y1 === bolge[index].y3 &&
      yatay_bolme.x2 === bolge[index].x4 &&
      yatay_bolme.y2 === bolge[index].y4
    ) {
      console.log("komsu üst bölge bulundu", index);
      komsu_ust_bolge = true;
      komsu_ust_bolge_id = index;
    }
    if (
      //yatay_bolme komsu alt bolge
      yatay_bolme.x3 === bolge[index].x1 &&
      yatay_bolme.y3 === bolge[index].y1 &&
      yatay_bolme.x4 === bolge[index].x2 &&
      yatay_bolme.y4 === bolge[index].y2
    ) {
      console.log("komsu alt bölge bulundu", index);
      komsu_alt_bolge = true;
      komsu_alt_bolge_id = index;
    }
  }

  //--yardımcı alt programlar
  const YatayBolmeSilme = () => {
    mobilya.bolge[komsu_ust_bolge_id].dahil = false;
    mobilya.bolge[komsu_alt_bolge_id].dahil = false;
    //-----------------------------
    mobilya.yatay_bolme[secilenYatayBolme].dahil = false;
    //-----------------------------
    //silinen
    for (let index = 0; index < mobilya.kapak.length; index++) {
      if (
        mobilya.kapak[index].bolge === komsu_ust_bolge_id ||
        mobilya.kapak[index].bolge === komsu_alt_bolge_id
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

    //seçilen yatay_bolmeyi sil
    const newList_yatay_bolme = mobilya.yatay_bolme.filter(
      (item) => item.dahil
    );
    mobilya.yatay_bolme = newList_yatay_bolme;
    console.log("newList_dikme=", newList_yatay_bolme);

    return mobilya;
  };

  //-yatay_bolme silindikten sonra bölgeler birleştiriliyor.
  const BolgeBirlestirme = () => {
    // birleşik bir bölge önceden hesaplanacak sonra diğer bölgeler silincek
    const yeniBolge = {
      dahil: true,
      name: "Bolge",
      tip: 3,
      cx:
        (mobilya.bolge[komsu_ust_bolge_id].cx +
          mobilya.bolge[komsu_alt_bolge_id].cx) /
        2,
      cy:
        (mobilya.bolge[komsu_ust_bolge_id].cy +
          mobilya.bolge[komsu_alt_bolge_id].cy) /
        2,
      x: mobilya.bolge[komsu_ust_bolge_id].x,
      y:
        mobilya.bolge[komsu_ust_bolge_id].y +
        mobilya.bolge[komsu_alt_bolge_id].y +
        mobilya.yatay_bolme[secilenYatayBolme].y,
    };
    console.log("bölge birleştirmeye uğradı");

    mobilya.bolge[mobilya.bolge.length] = yeniBolge;

    return mobilya;
  };
  //----------------------------------00000

  //-----------------------
  //iki bölgede true ise işlem yapılabilir
  if (komsu_ust_bolge && komsu_alt_bolge) {
    console.log("işlem yapılabilir");

    BolgeBirlestirme();
    YatayBolmeSilme();
    komsu_ust_bolge = false;
    komsu_alt_bolge = false;
  } else {
    console.log("işlem yapılamaz");
  }

  //console.log("seçilen mobilya.yatay_bolme=", mobilya.yatay_bolme[secilenYatayBolme]);

  return mobilya;
};

export default YatayBolmeSil;
