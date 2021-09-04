const UstGirinti = (mobilya) => {
  const donustur = JSON.stringify(mobilya);
  const state = JSON.parse(donustur);
  switch (state.tip) {
    case 1: //1 nolu kasa tipi merkez odaklamalı
      state.ust.dahil = true;
      state.ust.x0 =
        state.ust.x0 + state.ust.girinti_sol / 2 - state.ust.girinti_sag / 2;
      console.log("state.0===", state.Y0);
      state.ust.y0 = state.ust.y0 - state.ust.girinti_ust / 2;
      state.ust.z0 =
        state.ust.z0 + state.ust.girinti_on / 2 - state.ust.girinti_arka / 2;
      state.ust.x = state.ust.x - state.ust.girinti_sol - state.ust.girinti_sag;
      //state.ust.y = state.ust.material_id;
      state.ust.z = state.Z - state.ust.girinti_on - state.ust.girinti_arka;
      break;
    case 2:
      break;
    default:
      break;
  }
  return state.ust;
};
export default UstGirinti;
