const SagYan = (mobilya) => {
  switch (mobilya.tip) {
    case 1: //1 nolu kasa tipi merkez odaklamalı
      mobilya.sag_yan.x0 =
        mobilya.X0 +
        mobilya.X / 2 -
        mobilya.sag_yan.xg0 / 2 -
        mobilya.sag_yan.material_id / 2;
      mobilya.sag_yan.y0 =
        mobilya.Y0 - mobilya.sag_yan.yg0 / 2 + mobilya.sag_yan.yg1 / 2;
      mobilya.sag_yan.z0 =
        mobilya.Z0 -
        mobilya.sag_pervaz.material_id / 2 +
        mobilya.sag_yan.zg0 / 2 -
        mobilya.sag_yan.zg1 / 2;
      mobilya.sag_yan.x = mobilya.sag_yan.material_id;
      mobilya.sag_yan.y = mobilya.Y - mobilya.sag_yan.yg0 - mobilya.sag_yan.yg1;
      mobilya.sag_yan.z =
        mobilya.Z -
        mobilya.sag_pervaz.material_id -
        mobilya.sag_yan.zg0 -
        mobilya.sag_yan.zg1;
      break;
    case 2:
      break;
    default:
      break;
  }
  return mobilya.sag_yan;
};

export default SagYan;
