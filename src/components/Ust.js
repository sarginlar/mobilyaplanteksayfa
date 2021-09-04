const Ust = (mobilya) => {
  switch (mobilya.tip) {
    case 1: //1 nolu kasa tipi merkez odaklamalı
      mobilya.ust.dahil = true;
      mobilya.ust.x0 =
        mobilya.X0 +
        mobilya.ust.girinti_sol / 2 -
        mobilya.ust.girinti_sag / 2 +
        mobilya.sol_yan.x / 2 -
        mobilya.sag_yan.x / 2;
      mobilya.ust.y0 =
        mobilya.Y0 +
        (mobilya.Y / 2 - mobilya.ust.material_id / 2 - mobilya.ust.yg0);
      mobilya.ust.z0 =
        mobilya.Z0 + mobilya.ust.girinti_on / 2 - mobilya.ust.girinti_arka / 2;
      mobilya.ust.x =
        mobilya.X -
        mobilya.sol_yan.x -
        mobilya.sag_yan.material_id -
        mobilya.ust.girinti_sol -
        mobilya.ust.girinti_sag;
      mobilya.ust.y = mobilya.ust.material_id;
      mobilya.ust.z =
        mobilya.Z - mobilya.ust.girinti_on - mobilya.ust.girinti_arka;
      break;
    case 2:
      break;
    default:
      break;
  }
  return mobilya.ust;
};
export default Ust;
