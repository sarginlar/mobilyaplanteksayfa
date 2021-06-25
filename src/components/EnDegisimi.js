import SolYanKalinlik from "./SolYanKalinlik";
import SagYanKalinlik from "./SagYanKalinlik";
import DikeyBolmeKalinlik from "./DikeyBolmeKalinlik";

const EnDegisimi = (mobilya, olculer) => {
  console.log("Bolgeler e uğradı");
  console.log("ölcüler=", olculer);

  //Bölgelerin yeni en e göre ayarlanması.
  const OranX = olculer.X / mobilya.X;
  const OranY = olculer.Y / mobilya.Y;
  const OranZ = olculer.Z / mobilya.Z;
  console.log(OranX, OranY, OranZ);
  for (let index = 0; index < mobilya.bolge.length; index++) {
    mobilya.bolge[index].dahil = true;
    mobilya.bolge[index].aktif = false;
    mobilya.bolge[index].tip = 3;
    mobilya.bolge[index].name = "Bolge";
    mobilya.bolge[index].cx = mobilya.bolge[index].cx * OranX;
    // mobilya.bolge[index].cy = mobilya.bolge[index].cy * OranY;
    mobilya.bolge[index].x = mobilya.bolge[index].x * OranX;
    // mobilya.bolge[index].y = mobilya.bolge[index].y * OranY;
  }
  //en e göre parçaların ayarlanması---------------
  const kalinlik = 18;
  //sol_yan ın yeni en e göre ayarlanması
  console.log("olculer.X=", olculer.X);
  mobilya.sol_yan.x0 = mobilya.sol_yan.x0 * OranX;
  mobilya.sol_yan.x = mobilya.sol_yan.x * OranX;
  //sag_yan ın yeni en e göre ayarlanması
  mobilya.sag_yan.x0 = mobilya.sag_yan.x0 * OranX;
  mobilya.sag_yan.x = mobilya.sag_yan.x * OranX;
  //Ust un yeni en e göre ayarlanması
  mobilya.ust.x0 = mobilya.ust.x0 * OranX;
  mobilya.ust.x = mobilya.ust.x * OranX;
  //alt ın yeni en e göre ayarlanması
  mobilya.alt.x0 = mobilya.alt.x0 * OranX;
  mobilya.alt.x = mobilya.alt.x * OranX;
  //Baza ın yeni en e göre ayarlanması
  mobilya.baza.x0 = mobilya.baza.x0 * OranX;
  mobilya.baza.x = mobilya.baza.x * OranX;
  //dikey bölme
  for (let index = 0; index < mobilya.dikey_bolme.length; index++) {
    mobilya.dikey_bolme[index].x0 = mobilya.dikey_bolme[index].x0 * OranX;
    mobilya.dikey_bolme[index].x = mobilya.dikey_bolme[index].x * OranX;
    //mobilya = DikeyBolmeKalinlik(mobilya, index, kalinlik);
  }
  // yatay bolme
  for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
    mobilya.yatay_bolme[index].x0 = mobilya.yatay_bolme[index].x0 * OranX;
    mobilya.yatay_bolme[index].x = mobilya.yatay_bolme[index].x * OranX;
  }

  //orantılı olarak küçültüldükten sonra malzeme kalınlıklarının ayarlanması
  mobilya = SolYanKalinlik(mobilya, kalinlik);
  mobilya = SagYanKalinlik(mobilya, kalinlik);
  for (let index = 0; index < mobilya.dikey_bolme.length; index++) {
    mobilya = DikeyBolmeKalinlik(mobilya, index, kalinlik);
  }
  // yatay bolme
  for (let index = 0; index < mobilya.yatay_bolme.length; index++) {}
  //-------------------------
  //console.log("mobilya.bolge=", mobilya.bolge);
  mobilya.X = olculer.X;
  console.log("--mobilya=", mobilya);
  return mobilya;
};

export default EnDegisimi;
