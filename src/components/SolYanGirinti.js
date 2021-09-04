import React from "react";
// burada sol yanın girintilerindeki değişiklikleri sadece çizimde gösterim genel sol yan ayarları
//ile oynamamış oluyoruz.
//burdan Ekran3D ye data gönderiyoruz.
const SolYanGirinti = (mobilya) => {
  console.log("SolYanGrinti ye uğradı");
  const donustur = JSON.stringify(mobilya);
  const state = JSON.parse(donustur);

  switch (state.tip) {
    case 1: //1 nolu kasa tipi merkez odaklamalı
      state.sol_yan.x0 =
        state.sol_yan.x0 +
        state.sol_yan.girinti_sol / 2 +
        state.sol_yan.girinti_sag / 2;
      state.sol_yan.y0 =
        state.sol_yan.y0 -
        state.sol_yan.girinti_ust / 2 +
        state.sol_yan.girinti_alt / 2;
      state.sol_yan.z0 =
        state.sol_yan.z0 -
        state.sol_yan.girinti_on / 2 +
        state.sol_yan.girinti_arka / 2;
      state.sol_yan.x = state.sol_yan.x;
      state.sol_yan.y =
        state.sol_yan.y - state.sol_yan.girinti_ust - state.sol_yan.girinti_alt;
      state.sol_yan.z =
        state.sol_yan.z - state.sol_yan.girinti_on - state.sol_yan.girinti_arka;
      break;
    case 2:
      break;
    default:
      break;
  }
  return state.sol_yan;
};

export default SolYanGirinti;
