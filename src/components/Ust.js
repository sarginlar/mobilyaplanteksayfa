const Ust = (mobilya) => {
  switch (mobilya.tip) {
    case 1: //1 nolu kasa tipi merkez odaklamalı
      mobilya.ust.dahil = true;
      mobilya.ust.x0 =
        mobilya.X0 +
        mobilya.ust.xg0 / 2 -
        mobilya.ust.xg1 / 2 +
        mobilya.sol_yan.x / 2 -
        mobilya.sag_yan.x / 2;
      mobilya.ust.y0 =
        mobilya.Y0 +
        (mobilya.Y / 2 - mobilya.ust.material_id / 2 - mobilya.ust.yg0);
      mobilya.ust.z0 = mobilya.Z0 + mobilya.ust.zg0 / 2 - mobilya.ust.zg1 / 2;
      mobilya.ust.x =
        mobilya.X -
        mobilya.sol_yan.x -
        mobilya.sag_yan.material_id -
        mobilya.ust.xg0 -
        mobilya.ust.xg1;
      mobilya.ust.y = mobilya.ust.material_id;
      mobilya.ust.z = mobilya.Z - mobilya.ust.zg0 - mobilya.ust.zg1;
      break;
    case 2:
      break;
    default:
      break;
  }
  return mobilya.ust;
};
export default Ust;
