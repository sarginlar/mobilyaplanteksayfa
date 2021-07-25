import { DataMaterials } from "./DataMaterials";
const SolYan = (mobilya) => {
  console.log("SolYan a uğradı---");
  const kalinlik = DataMaterials[mobilya.sol_yan.material_id].thickness;
  //@SolYan---------------------------------------------------------------------------------

  console.log("sol_yan a uğradı");
  switch (mobilya.tip) {
    case 1: //1 nolu kasa tipi,tutma yeri modul merkezi
      mobilya.sol_yan.x0 =
        mobilya.X0 - mobilya.X / 2 + mobilya.sol_yan.xg0 / 2 + kalinlik / 2;
      mobilya.sol_yan.y0 =
        mobilya.Y0 - mobilya.sol_yan.yg0 / 2 + mobilya.sol_yan.yg1 / 2;
      mobilya.sol_yan.z0 =
        mobilya.Z0 -
        mobilya.sol_pervaz.material_id / 2 +
        mobilya.sol_yan.zg0 / 2 -
        mobilya.sol_yan.zg1 / 2;
      mobilya.sol_yan.x = kalinlik;
      mobilya.sol_yan.y = mobilya.Y - mobilya.sol_yan.yg0 - mobilya.sol_yan.yg1;
      mobilya.sol_yan.z =
        mobilya.Z -
        mobilya.sol_pervaz.material_id -
        mobilya.sol_yan.zg0 -
        mobilya.sol_yan.zg1;
      console.log("kalinlik=", kalinlik);
      break;
    case 2:
      break;
    default:
      break;
  }

  return mobilya.sol_yan;
};

export default SolYan;
