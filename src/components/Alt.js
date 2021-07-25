//@Alt--------------------------------------------------------------------------
const Alt = (mobilya) => {
  switch (mobilya.tip) {
    case 1: //1 nolu kasa tipi merkez odaklamalı
      mobilya.alt.x0 =
        mobilya.X0 +
        mobilya.alt.xg0 / 2 -
        mobilya.alt.xg1 / 2 +
        mobilya.sol_yan.x / 2 -
        mobilya.sag_yan.material_id / 2;
      mobilya.alt.y0 =
        mobilya.Y0 -
        mobilya.Y / 2 -
        mobilya.alt.yg0 / 2 +
        mobilya.alt.yg1 / 2 +
        mobilya.alt.material_id / 2 +
        mobilya.baza.y;
      mobilya.alt.z0 = mobilya.Z0 - mobilya.alt.zg0 / 2 + mobilya.alt.zg1 / 2;
      mobilya.alt.x =
        mobilya.X -
        mobilya.sol_yan.x -
        mobilya.sag_yan.material_id -
        mobilya.alt.xg0 -
        mobilya.alt.xg1;
      mobilya.alt.y = mobilya.alt.material_id;
      mobilya.alt.z = mobilya.Z - mobilya.alt.zg0 - mobilya.alt.zg1;
      break;
    case 2:
      break;
    default:
      break;
  }
  return mobilya.alt;
};
export default Alt;
