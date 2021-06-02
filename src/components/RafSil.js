const RafSil = (mobilya, secilenRaf) => {
  const bolge = [
    { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0, x: 0, y: 0 },
  ];
  let komsu_ust_bolge = false;
  let komsu_alt_bolge = false;
  let komsu_ust_bolge_id = -1;
  let komsu_alt_bolge_id = -1;

  console.log("RafSil çalıştı");
  //Rafın silip silinemeyeceği kontrol edilecek
  //raf silindikten sonra bölgeler raf silinmesine göre ayarlanacak
  //bu bölgeler içindeki kapak çekmece kapağı ve kasa gibi unsurlar düzenlenecek
  //raf a komşu olan bölgelerin tespiti. komşu ola bölgeleri tespit etmek için rafın köşe noktaları ile eşit olan bölgeler bulunacak, bu durumda 2 bölge olabilir.

  //1...seçilen rafın dört köşe noktasının bulunması.
  const raf = {
    x1: mobilya.raf[secilenRaf].x0 - mobilya.raf[secilenRaf].x / 2,
    y1: mobilya.raf[secilenRaf].y0 + mobilya.raf[secilenRaf].y / 2,
    x2: mobilya.raf[secilenRaf].x0 + mobilya.raf[secilenRaf].x / 2,
    y2: mobilya.raf[secilenRaf].y0 + mobilya.raf[secilenRaf].y / 2,
    x3: mobilya.raf[secilenRaf].x0 - mobilya.raf[secilenRaf].x / 2,
    y3: mobilya.raf[secilenRaf].y0 - mobilya.raf[secilenRaf].y / 2,
    x4: mobilya.raf[secilenRaf].x0 + mobilya.raf[secilenRaf].x / 2,
    y4: mobilya.raf[secilenRaf].y0 - mobilya.raf[secilenRaf].y / 2,
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

  //3..rafın sağ ve sol ust noktalarına komşu olan bölgeleri tespit ediyoruz.
  for (let index = 0; index < mobilya.bolge.length; index++) {
    if (
      //rafa komsu ust bolge
      raf.x1 === bolge[index].x3 &&
      raf.y1 === bolge[index].y3 &&
      raf.x2 === bolge[index].x4 &&
      raf.y2 === bolge[index].y4
    ) {
      console.log("komsu üst bölge bulundu", index);
      komsu_ust_bolge = true;
      komsu_ust_bolge_id = index;
    }
    if (
      //raf komsu alt bolge
      raf.x3 === bolge[index].x1 &&
      raf.y3 === bolge[index].y1 &&
      raf.x4 === bolge[index].x2 &&
      raf.y4 === bolge[index].y2
    ) {
      console.log("komsu alt bölge bulundu", index);
      komsu_alt_bolge = true;
      komsu_alt_bolge_id = index;
    }
  }

  //--yardımcı alt programlar
  const RafSilme = () => {
    mobilya.bolge[komsu_ust_bolge_id].dahil = false;
    mobilya.bolge[komsu_alt_bolge_id].dahil = false;
    //-----------------------------
    mobilya.raf[secilenRaf].dahil = false;
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

    //seçilen rafı sil
    const newList_raf = mobilya.raf.filter((item) => item.dahil);
    mobilya.raf = newList_raf;
    console.log("newList_dikme=", newList_raf);

    return mobilya;
  };

  //-raf silindikten sonra bölgeler birleştiriliyor.
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
        mobilya.raf[secilenRaf].y,
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
    RafSilme();
    komsu_ust_bolge = false;
    komsu_alt_bolge = false;
  } else {
    console.log("işlem yapılamaz");
  }

  //console.log("seçilen mobilya.raf=", mobilya.raf[secilenRaf]);

  return mobilya;
};

export default RafSil;
