//@Alt--------------------------------------------------------------------------
const Alt = (mobilya) => {
  switch (mobilya.tip) {
    case 1: //1 nolu kasa tipi merkez odaklamalı
      mobilya.alt.x0 =
        mobilya.X0 +
        mobilya.alt.girinti_sol / 2 -
        mobilya.alt.girinti_sag / 2 +
        mobilya.sol_yan.x / 2 -
        mobilya.sag_yan.material_id / 2;
      mobilya.alt.y0 =
        mobilya.Y0 -
        mobilya.Y / 2 -
        mobilya.alt.girinti_ust / 2 +
        mobilya.alt.girinti_alt / 2 +
        mobilya.alt.material_id / 2 +
        mobilya.baza.y;
      mobilya.alt.z0 =
        mobilya.Z0 - mobilya.alt.girinti_on / 2 + mobilya.alt.girinti_arka / 2;
      mobilya.alt.x =
        mobilya.X -
        mobilya.sol_yan.x -
        mobilya.sag_yan.material_id -
        mobilya.alt.girinti_sol -
        mobilya.alt.girinti_sag;
      mobilya.alt.y = mobilya.alt.material_id;
      mobilya.alt.z =
        mobilya.Z - mobilya.alt.girinti_on - mobilya.alt.girinti_arka;
      break;
    case 2:
      break;
    default:
      break;
  }
  return mobilya.alt;
};
export default Alt;
