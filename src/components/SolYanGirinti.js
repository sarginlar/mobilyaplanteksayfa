import React from "react";
// burada sol yanın girintilerindeki değişiklikleri sadece çizimde gösterim genel sol yan ayarları
//ile oynamamış oluyoruz.
//burdan Ekran3D ye data gönderiyoruz.
const SolYanGirinti = (mobilya) => {
  console.log("SolYanGrinti ye uğradı");
  switch (mobilya.tip) {
    case 1: //1 nolu kasa tipi merkez odaklamalı
      mobilya.sol_yan.x0 =
        mobilya.sol_yan.x0 + mobilya.sol_yan.xg0 / 2 - mobilya.sol_yan.xg1 / 2;
      mobilya.sol_yan.y0 =
        mobilya.Y0 - mobilya.sol_yan.yg0 / 2 + mobilya.sol_yan.yg1 / 2;
      mobilya.sol_yan.z0 =
        mobilya.Z0 + mobilya.sol_yan.zg0 / 2 - mobilya.sol_yan.zg1 / 2;
      mobilya.sol_yan.x = mobilya.sol_yan.x;
      mobilya.sol_yan.y = mobilya.Y - mobilya.sol_yan.yg0 - mobilya.sol_yan.yg1;
      mobilya.sol_yan.z = mobilya.Z - mobilya.sol_yan.zg0 - mobilya.sol_yan.zg1;
      break;
    case 2:
      break;
    default:
      break;
  }
  return mobilya.sol_yan;
};

export default SolYanGirinti;
