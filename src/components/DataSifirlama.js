import { useContext, useState } from "react";
import { MobilyaContext } from "../contexts/MobilyaContext";

//@DataSifirlama-------------------------------------------------
export const DataSifirlama = (mobilya) => {
  // const { mobilya, setMobilya } = useContext(mobilyaContext);

  //const { mobilya, setmobilya } = useContext(MobilyaContext);
  console.log("DatatSifirlama_mobilya=", mobilya);

  //const [mobilya1, setMobilya1] = useState(mobilya);

  const b = mobilya;
  if (b.sol_yan.dahil) {
  } else {
    b.sol_yan = {
      dahil: false,
      tip: 1,
      name: "Sol Yan-yok",
      material_id: 0,
      x0: 0,
      y0: 0,
      z0: 0,
      x: 0,
      y: 0,
      z: 0,
      xg0: 0,
      xg1: 0,
      zg0: 0,
      zg1: 0,
      yg0: 0,
      yg1: 0,
    };
  }
  if (b.sag_yan.dahil) {
  } else {
    b.sag_yan = {
      dahil: false,
      tip: 1,
      name: "Sag Yan-yok",
      material_id: 0,
      x0: 0,
      y0: 0,
      z0: 0,
      x: 0,
      y: 0,
      z: 0,
      xg0: 0,
      xg1: 0,
      zg0: 0,
      zg1: 0,
      yg0: 0,
      yg1: 0,
    };
  }
  if (b.ust.dahil) {
  } else {
    b.ust = {
      dahil: false,
      tip: 1,
      name: "Ust-yok",
      material_id: 0,
      x0: 0,
      y0: 0,
      z0: 0,
      x: 0,
      y: 0,
      z: 0,
      xg0: 0,
      xg1: 0,
      zg0: 0,
      zg1: 0,
      yg0: 0,
      yg1: 0,
    };
  }
  if (b.alt.dahil) {
  } else {
    b.alt = {
      dahil: false,
      tip: 1,
      name: "Alt-yok",
      material_id: 0,
      x0: 0,
      y0: 0,
      z0: 0,
      x: 0,
      y: 0,
      z: 0,
      xg0: 0,
      xg1: 0,
      zg0: 0,
      zg1: 0,
      yg0: 0,
      yg1: 0,
    };
  }
  if (b.baza) {
  } else {
    b.baza = {
      dahil: false,
      tip: 1,
      name: "Baza-yok",
      material_id: 0,
      x0: 0,
      y0: 0,
      z0: 0,
      x: 0,
      y: 0,
      z: 0,
      xg0: 0,
      xg1: 0,
      zg0: 0,
      zg1: 0,
      yg0: 0,
      yg1: 0,
    };
  }
  if (b.sol_pervaz.dahil) {
  } else {
    b.sol_pervaz = {
      dahil: false,
      tip: 1,
      name: "Sol Pervaz-yok",
      material_id: 0,
      x0: 0,
      y0: 0,
      z0: 0,
      x: 0,
      y: 0,
      z: 0,
      xg0: 0,
      xg1: 0,
      zg0: 0,
      zg1: 0,
      yg0: 0,
      yg1: 0,
    };
  }
  if (b.sag_pervaz.dahil) {
  } else {
    b.sag_pervaz = {
      dahil: false,
      tip: 1,
      name: "Sag Pervaz-yok",
      material_id: 0,
      x0: 0,
      y0: 0,
      z0: 0,
      x: 0,
      y: 0,
      z: 0,
      xg0: 0,
      xg1: 0,
      zg0: 0,
      zg1: 0,
      yg0: 0,
      yg1: 0,
    };
  }

  //setmobilya(b);
  return b;
};
