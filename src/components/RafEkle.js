const RafEkle = (mobilya, secilenBolge, secilen) => {
  console.log("RafEkle çalıştı");
  console.log("mobilya==", mobilya, "secilenBolge=", secilenBolge);
  //---------------------------------
  if (secilen.bolge) {
    //raf eklecek
    mobilya.raf[mobilya.raf.length] = {
      dahil: true,
      tip: 3,
      bolge: secilenBolge,
      name: "raf",
      material_id: 18,
      x0: mobilya.bolge[secilenBolge].cx,
      y0: mobilya.bolge[secilenBolge].cy,
      z0: 0,
      x: mobilya.bolge[secilenBolge].x,
      y: 18,
      z: 600,
      xg0: 0,
      xg1: 0,
      zg0: 0,
      zg1: 0,
      yg0: 0,
      yg1: 0,
    };
    //bölge seçilmemiş ise raf eklemez
    /*  raf: [{ dahil: true, tip: 3,bolge:0, name: 'DikeyBolme', material_id: 18, x0: 0, y0: 0, z0: 0, x: 18, y: 1628, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],*/
    //daha önce konmus aynı bölgede raf var ise diğer raf ile birlikte yerleştirilir.
    //seçilen bölgede bulunan raf adeti
    const bolgedeki_raflar = mobilya.raf.filter(
      (item) => item.bolge === mobilya.raf[secilenBolge].bolge
    );

    const diger_raflar = mobilya.raf.filter(
      (item) => item.bolge !== mobilya.raf[secilenBolge].bolge
    );

    console.log("bolgedeki_raflar=", bolgedeki_raflar);
    console.log("bolgedeki raf adeti=", bolgedeki_raflar.length);
    const bolunecek =
      mobilya.bolge[secilenBolge].y / (bolgedeki_raflar.length + 1);
    //----------------------------------
    let toplam = 0;
    for (let index = 0; index < bolgedeki_raflar.length; index++) {
      toplam = toplam + bolunecek;
      bolgedeki_raflar[index].y0 =
        mobilya.bolge[secilenBolge].cy -
        mobilya.bolge[secilenBolge].y / 2 +
        toplam;
    }
    console.log("bolgedeki_raflar=", bolgedeki_raflar);
    mobilya.raf = diger_raflar;
    let say = 0;
    for (
      let index = diger_raflar.length;
      index < bolgedeki_raflar.length;
      index++
    ) {
      mobilya.raf[index] = bolgedeki_raflar[say];
      say = say + 1;
    }
    //yeni eklenen rafla birlikte yeni yerleşim şekli

    secilen.bolge = false;
  }

  return mobilya;
};

export default RafEkle;
