//@Alt--------------------------------------------------------------------------
const AltGirinti = (mobilya) => {
  const donustur = JSON.stringify(mobilya);
  const state = JSON.parse(donustur);
  switch (state.tip) {
    case 1: //1 nolu kasa tipi merkez odaklamalı
      state.alt.x0 =
        state.alt.x0 + state.alt.girinti_sol / 2 - state.alt.girinti_sag / 2;

      state.alt.y0 =
        state.alt.y0 - state.alt.girinti_ust / 2 + state.alt.girinti_alt / 2;

      state.alt.z0 =
        state.alt.z0 - state.alt.girinti_on / 2 + state.alt.girinti_arka / 2;
      state.alt.x = state.alt.x - state.alt.girinti_sol - state.alt.girinti_sag;
      state.alt.y = state.alt.y;
      state.alt.z = state.alt.z - state.alt.girinti_on - state.alt.girinti_arka;
      break;
    case 2:
      break;
    default:
      break;
  }
  return state.alt;
};
export default AltGirinti;
