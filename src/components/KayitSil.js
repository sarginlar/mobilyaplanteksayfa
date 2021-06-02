const KayitSil = (mobilya, secilenKayit, secilenKayitModel) => {
  console.log("kayit Sil çalıştı");
  console.log(
    "mobilya==",
    mobilya,
    "secilenKayit=",
    secilenKayit,
    "secilenKayitModel=",
    secilenKayitModel
  );
  //seçilen kayıtın modeline göre silme yapıyor.
  //1-dikey kayıt 2-yatay kayıt
  switch (secilenKayitModel) {
    case 1: //dikey kayıt
      // mobilya.kayit_ekle_dikey[mobilya.kayit_ekle_dikey.length]
      const newList = mobilya.kayit_ekle_dikey.filter(
        (item) => item.bolge !== mobilya.kayit_ekle_dikey[secilenKayit].bolge
      );
      mobilya.kayit_ekle_dikey = newList;
      break;
    case 2: //yatay kayıt
      const newList_1 = mobilya.kayit_ekle_yatay.filter(
        (item) => item.bolge !== mobilya.kayit_ekle_yatay[secilenKayit].bolge
      );
      mobilya.kayit_ekle_yatay = newList_1;
      break;

    default:
      break;
  }

  return mobilya;
};

export default KayitSil;
