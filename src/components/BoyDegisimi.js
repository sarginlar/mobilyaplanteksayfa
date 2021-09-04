import UstKalinlik from "./UstKalinlik";
import AltKalinlik from "./AltKalinlik";
import YatayBolmeKalinlik from "./YatayBolmeKalinlik";
import DikeyBolmeKalinlik from "./DikeyBolmeKalinlik";
import BazaYukseklik from "./BazaYukseklik";
import KapakProfil from "./KapakProfil";
import KapakSil from "./KapakSil";

const BoyDegisimi = (mobilya, olculer) => {
  console.log("BoyDegisim e uğradı");
  console.log("ölcüler=", olculer);
  //ölçü baza hariç hesaplanım sonra baza dahiledilmeli
  //baza yok ise

  //baza var ise bazasız hali oluşturulacak
  if (mobilya.baza.dahil) {
    console.log("iffff uğradı");
    mobilya.sol_yan.y = mobilya.sol_yan.y - mobilya.baza.y;
    mobilya.sol_yan.y0 = mobilya.sol_yan.y0 + mobilya.baza.y / 2;
    mobilya.sag_yan.y = mobilya.sag_yan.y - mobilya.baza.y;
    mobilya.sag_yan.y0 = mobilya.sag_yan.y0 + mobilya.baza.y / 2;
    mobilya.Y = mobilya.Y - mobilya.baza.y;
    //mobilya.Y0 = mobilya.Y0 - mobilya.baza.y / 2;
    olculer.Y = olculer.Y - mobilya.baza.y;
  }

  //-----------------
  //Bölgelerin yeni boy'a e göre ayarlanması.
  const OranY = olculer.Y / mobilya.Y;
  console.log("OranY=", OranY);
  for (let index = 0; index < mobilya.bolge.length; index++) {
    mobilya.bolge[index].dahil = true;
    mobilya.bolge[index].aktif = false;
    mobilya.bolge[index].tip = 3;
    mobilya.bolge[index].name = "Bolge";
    mobilya.bolge[index].cy = mobilya.bolge[index].cy * OranY;

    mobilya.bolge[index].y = mobilya.bolge[index].y * OranY;
    const secilen = {
      bolge: true,
      kapak: false,
      kapak_profil: false,
    };
    //eğer bölgede kapak var ise onun daa yüksekliğini ayarlayabiliriz.
    //burada gereksiz döngü oluyor bu ilerde düzeltilmeli
    for (
      let index_kapak = 0;
      index_kapak < mobilya.kapak_profil.length;
      index_kapak++
    ) {
      if (mobilya.kapak_profil[index_kapak].bolge === index) {
        mobilya.kapak_profil[index_kapak].y = mobilya.bolge[index].y;
        mobilya = KapakSil(
          mobilya,
          index_kapak,
          mobilya.kapak_profil[index_kapak].kapak_model
        );
        mobilya = KapakProfil(mobilya, index, secilen);
      }
    }
  }
  //-------------------------------------------------------
  //boy'a göre parçaların ayarlanması---------------
  const kalinlik = 18;
  //sol_yan ın yeni boy e göre ayarlanması
  console.log("olculer.X=", olculer.X);

  //mobilya.Y0 = mobilya.Y0 * OranY;

  mobilya.Y = mobilya.Y * OranY;
  mobilya.sol_yan.y0 = mobilya.sol_yan.y0 * OranY;
  mobilya.sol_yan.y = mobilya.sol_yan.y * OranY;
  //sag_yan ın yeni en e göre ayarlanması
  mobilya.sag_yan.y0 = mobilya.sag_yan.y0 * OranY;
  mobilya.sag_yan.y = mobilya.sag_yan.y * OranY;
  //Ust un yeni en e göre ayarlanması
  mobilya.ust.y0 = mobilya.ust.y0 * OranY;
  mobilya.ust.y = mobilya.ust.y * OranY;
  //alt ın yeni en e göre ayarlanması
  mobilya.alt.y0 = mobilya.alt.y0 * OranY;
  mobilya.alt.y = mobilya.alt.y * OranY;
  //Baza ın yeni boy a göre ayarlanması

  //baza tekrar eklenecek hali oluşturulacak
  if (mobilya.baza.dahil) {
    //mobilya.Y0 = (mobilya.Y0 * OranY) / 2;
    mobilya.sol_yan.y = mobilya.sol_yan.y + mobilya.baza.y;
    mobilya.sol_yan.y0 = mobilya.sol_yan.y0 - mobilya.baza.y / 2;
    mobilya.sag_yan.y = mobilya.sag_yan.y + mobilya.baza.y;
    mobilya.sag_yan.y0 = mobilya.sag_yan.y0 - mobilya.baza.y / 2;
    //mobilya.Y = mobilya.Y + mobilya.baza.y;
    //olculer.Y = olculer.Y + mobilya.baza.y;
    mobilya.baza.y0 = mobilya.alt.y0 - mobilya.baza.y / 2 - mobilya.alt.y / 2;
  }
  //mobilya.baza.y0 = mobilya.baza.y0 * OranY;
  //mobilya.baza.y = mobilya.baza.y * OranY;
  //dikey bölme
  for (let index = 0; index < mobilya.dikey_bolme.length; index++) {
    mobilya.dikey_bolme[index].y0 = mobilya.dikey_bolme[index].y0 * OranY;
    mobilya.dikey_bolme[index].y = mobilya.dikey_bolme[index].y * OranY;
    //mobilya = DikeyBolmeKalinlik(mobilya, index, kalinlik);
  }
  // yatay bolme
  for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
    mobilya.yatay_bolme[index].y0 = mobilya.yatay_bolme[index].y0 * OranY;
    mobilya.yatay_bolme[index].y = mobilya.yatay_bolme[index].y * OranY;
  }

  //orantılı olarak küçültüldükten sonra malzeme kalınlıklarının ayarlanması

  mobilya = AltKalinlik(mobilya, mobilya.alt.y / OranY);
  console.log("*-*mobilya.ust.y=", mobilya.ust.y);
  mobilya = UstKalinlik(mobilya, mobilya.ust.y / OranY);
  //mobilya = SolYanKalinik(mobilya, kalinlik);
  //mobilya = BazaYukseklik(mobilya, 100);
  for (let index = 0; index < mobilya.dikey_bolme.length; index++) {
    mobilya = DikeyBolmeKalinlik(mobilya, index, kalinlik);
  }
  // yatay bolme

  for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
    mobilya = YatayBolmeKalinlik(mobilya, index, kalinlik);
  }

  //-------------------------

  //console.log("mobilya.bolge=", mobilya.bolge);
  //mobilya.Y0 = -1000;
  mobilya.Y = olculer.Y + mobilya.baza.y;
  //console.log("--mobilya=", mobilya);

  return mobilya;
};

export default BoyDegisimi;
