import { DataMaterials } from "./DataMaterials";
const SolYan = (mobilya) => {
  console.log("SolYan a uğradı---");
  const kalinlik = DataMaterials[mobilya.sol_yan.material_id].thickness;
  //@SolYan---------------------------------------------------------------------------------
  //sol_yan'ı hesaplamak için gereken minimum datalar
  //mobilya.X, mobilya.Y, mobilya.Z,mobilya.X0,mobilya.Y0, mobilya.Z0,malzeme kalınlık
  //sol_yan_girinti_on, sol_yan_girinti_arka
  console.log("sol_yan a uğradı");
  switch (mobilya.tip) {
    case 1: //1 nolu kasa tipi,tutma yeri modul merkezi
      mobilya.sol_yan.x0 =
        mobilya.X0 -
        mobilya.X / 2 +
        mobilya.sol_yan.girinti_sol / 2 +
        kalinlik / 2;
      mobilya.sol_yan.y0 =
        mobilya.Y0 -
        mobilya.sol_yan.girinti_ust / 2 +
        mobilya.sol_yan.girinti_alt / 2;
      mobilya.sol_yan.z0 =
        mobilya.Z0 -
        mobilya.sol_pervaz.material_id / 2 +
        mobilya.sol_yan.girinti_on / 2 -
        mobilya.sol_yan.girinti_arka / 2;
      mobilya.sol_yan.x = kalinlik;
      mobilya.sol_yan.y =
        mobilya.Y - mobilya.sol_yan.girinti_ust - mobilya.sol_yan.girinti_alt;
      mobilya.sol_yan.z =
        mobilya.Z -
        mobilya.sol_pervaz.material_id -
        mobilya.sol_yan.girinti_on -
        mobilya.sol_yan.girinti_arka;
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
