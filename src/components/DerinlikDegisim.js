import React from "react";

const DerinlikDegisim = (mobilya, olculer) => {
  const OranZ = olculer.Z / mobilya.Z;
  //---------------------------------
  //sol_yan ın yeni derinliğe e göre ayarlanması
  console.log("olculer.Z=", olculer.Z);
  mobilya.sol_yan.z0 = mobilya.sol_yan.z0 * OranZ;
  mobilya.sol_yan.z = mobilya.sol_yan.z * OranZ;
  //sag_yan ın yeni en e göre ayarlanması
  mobilya.sag_yan.z0 = mobilya.sag_yan.z0 * OranZ;
  mobilya.sag_yan.z = mobilya.sag_yan.z * OranZ;
  //Ust un yeni en e göre ayarlanması
  mobilya.ust.z0 = mobilya.ust.z0 * OranZ;
  mobilya.ust.z = mobilya.ust.z * OranZ;
  //alt ın yeni en e göre ayarlanması
  mobilya.alt.z0 = mobilya.alt.z0 * OranZ;
  mobilya.alt.z = mobilya.alt.z * OranZ;
  //Baza ın yeni en e göre ayarlanması
  mobilya.baza.z0 = mobilya.baza.z0 * OranZ;
  mobilya.baza.z = mobilya.baza.z * OranZ;
  //-----------------------------------
  //dikey bölme
  for (let index = 0; index < mobilya.dikey_bolme.length; index++) {
    mobilya.dikey_bolme[index].z0 = mobilya.dikey_bolme[index].z0 * OranZ;
    mobilya.dikey_bolme[index].z = mobilya.dikey_bolme[index].z * OranZ;
    //mobilya = DikeyBolmeKalinlik(mobilya, index, kalinlik);
  }
  // yatay bolme
  for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
    mobilya.yatay_bolme[index].z0 = mobilya.yatay_bolme[index].z0 * OranZ;
    mobilya.yatay_bolme[index].z = mobilya.yatay_bolme[index].z * OranZ;
  }
  //-------------------------------
  mobilya.Z = olculer.Z;

  return mobilya;
};

export default DerinlikDegisim;
