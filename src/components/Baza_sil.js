//@Baza---------------------------------------------------------------------------------
const Baza = (mobilya) => {
  switch (mobilya.tip) {
    case 1: //1 nolu kasa tipi merkez odaklamalı
      mobilya.baza.x0 = mobilya.X0;
      mobilya.baza.y0 = -200;
      mobilya.baza.y0 = mobilya.Y0 - (mobilya.Y / 2 - mobilya.baza.y / 2);
      mobilya.baza.z0 =
        mobilya.Z0 + mobilya.Z / 2 - mobilya.baza.material_id / 2 - 10;
      mobilya.baza.x = mobilya.X - (mobilya.sol_yan.x + mobilya.sag_yan.x);
      mobilya.baza.y = 100;
      mobilya.baza.z = 18;
      break;
    case 2:
      break;
    default:
      break;
  }
  return mobilya.baza;
};
export default Baza;
