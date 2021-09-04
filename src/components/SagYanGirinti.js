import React from "react";

const SagYanGirinti = (mobilya) => {
  const donustur = JSON.stringify(mobilya);
  const state = JSON.parse(donustur);
  switch (state.tip) {
    case 1: //1 nolu kasa tipi merkez odaklamalı
      state.sag_yan.x0 =
        state.sag_yan.x0 +
        state.sag_yan.girinti_sol / 2 -
        state.sag_yan.girinti_sag / 2;
      state.sag_yan.y0 =
        state.sag_yan.y0 -
        state.sag_yan.girinti_ust / 2 +
        state.sag_yan.girinti_alt / 2;
      state.sag_yan.z0 =
        state.sag_yan.z0 +
        state.sag_yan.girinti_on / 2 -
        state.sag_yan.girinti_arka / 2;
      state.sag_yan.x = state.sag_yan.x;
      state.sag_yan.y =
        state.sag_yan.y - state.sag_yan.girinti_ust - state.sag_yan.girinti_alt;
      state.sag_yan.z =
        state.sag_yan.z -
        state.sag_pervaz.x -
        state.sag_yan.girinti_on -
        state.sag_yan.girinti_arka;
      break;
    case 2:
      break;
    default:
      break;
  }
  return state.sag_yan;
};

export default SagYanGirinti;
