const KapakSil = (mobilya, secilenKapak, secilenKapakModel) => {
  console.log("Kapak Sil çalıştı");
  console.log(
    "mobilya==",
    mobilya,
    "secilenKapak=",
    secilenKapak,
    "secilenKapakModel=",
    secilenKapakModel
  );
  //seçilen kapağın modeline göre silme yapıyor.
  switch (secilenKapakModel) {
    case 1: //düz kapak
      const newList = mobilya.kapak.filter(
        (item) => item.bolge !== mobilya.kapak[secilenKapak].bolge
      );
      mobilya.kapak = newList;
      break;
    case 2: //profil kapak
      const newList_1 = mobilya.kapak_profil.filter(
        (item) => item.bolge !== mobilya.kapak_profil[secilenKapak].bolge
      );
      mobilya.kapak_profil = newList_1;
      break;

    default:
      break;
  }

  return mobilya;
};

export default KapakSil;
