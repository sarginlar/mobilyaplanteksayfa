import { useContext, Suspense, useEffect, useRef, useState } from "react";
import { MobilyaContext } from "../contexts/MobilyaContext";
import YatayBolmeAyarla from "./YatayBolmeAyarla";
import DikeyBolmeKalinlik from "./DikeyBolmeKalinlik";
import DikeyBolmeAyarla from "./DikeyBolmeAyarla";
import YatayBolmeKalinlik from "./YatayBolmeKalinlik";
import SolYanKalinlik from "./SolYanKalinlik";
import SagYanKalinlik from "./SagYanKalinlik";
import UstKalinlik from "./UstKalinlik";
import AltKalinlik from "./AltKalinlik";

//@BolgeEnAyarla----------------------------------------------------------
let bolge_x = -1;
let bolge_y = -1;

const BolgeEnAyarla = () => {
  //const sonuc = {}

  const { mobilya, setmobilya } = useContext(MobilyaContext);
  const [secilenBolge, setSecilenBolge] = useState(0);
  const [secilenDikeyBolme, setSecilenDikeyBolme] = useState(0);
  const [secilenYatayBolme, setSecilenYatayBolme] = useState(0);
  const aranan_bolge = mobilya.bolge.find((item) => item.aktif === true);
  console.log("aranan_bolge=", aranan_bolge);
  return (
    <div>
      <button
        onClick={() => {
          const islem = "alt_yatay_bolme";
          const sonuc = YatayBolmeAyarla(
            mobilya,
            bolge_x,
            bolge_y,
            secilenBolge,
            islem
          );
          setmobilya({ ...mobilya, ...sonuc });
          bolge_y = -1;
          bolge_x = -1;
        }}
      >
        alt_yatay_bolme
      </button>
      <button
        onClick={() => {
          const islem = "ust_yatay_bolme";
          const sonuc = YatayBolmeAyarla(
            mobilya,
            bolge_x,
            bolge_y,
            secilenBolge,
            islem
          );
          setmobilya({ ...mobilya, ...sonuc });
          bolge_y = -1;
          bolge_x = -1;
        }}
      >
        ust_yatay_bolme
      </button>
      <button
        onClick={() => {
          const islem = "sag_dikey_bolme";
          const sonuc = DikeyBolmeAyarla(
            mobilya,
            bolge_x,
            bolge_y,
            secilenBolge,
            islem
          );
          setmobilya({ ...mobilya, ...sonuc });
          bolge_y = -1;
          bolge_x = -1;
        }}
      >
        sag_dikey_bolme
      </button>
      {/*//dikey bolmenin kalınlığının ayarlanması**************/}
      <button
        onClick={() => {
          //const islem = "sag_dikey_bolme";
          const kalinlik = 100;
          const sonuc = DikeyBolmeKalinlik(
            mobilya,
            secilenDikeyBolme,
            kalinlik
          );
          setmobilya({ ...mobilya, ...sonuc });
        }}
      >
        dikey bolme kalınlık
      </button>

      {/*//yatay bolmenin kalınlığının ayarlanması**************/}
      <button
        onClick={() => {
          //const islem = "sag_dikey_bolme";
          const kalinlik = 100;
          const sonuc = YatayBolmeKalinlik(
            mobilya,
            secilenYatayBolme,
            kalinlik
          );
          setmobilya({ ...mobilya, ...sonuc });
        }}
      >
        yatay bolme kalınlık
      </button>
      {/*//sol_yan kalınlığının ayarlanması**************/}
      <button
        onClick={() => {
          //const islem = "sag_dikey_bolme";
          const kalinlik = 100;
          const sonuc = SolYanKalinlik(mobilya, kalinlik);
          console.log("sonuc=", sonuc);
          setmobilya({ ...mobilya, ...sonuc });
        }}
      >
        sol_yan kalınlık
      </button>

      {/*//sag_yan kalınlığının ayarlanması**************/}
      <button
        onClick={() => {
          //const islem = "sag_dikey_bolme";
          const kalinlik = 100;
          const sonuc = SagYanKalinlik(mobilya, kalinlik);
          console.log("sonuc=", sonuc);
          setmobilya({ ...mobilya, ...sonuc });
        }}
      >
        sag_yan kalınlık
      </button>

      {/*//Ust kalınlığının ayarlanması**************/}
      <button
        onClick={() => {
          //const islem = "sag_dikey_bolme";
          const kalinlik = 100;
          const sonuc = UstKalinlik(mobilya, kalinlik);
          console.log("sonuc=", sonuc);
          setmobilya({ ...mobilya, ...sonuc });
        }}
      >
        Ust kalınlık
      </button>

      {/*//Alt kalınlığının ayarlanması**************/}
      <button
        onClick={() => {
          //const islem = "sag_dikey_bolme";
          const kalinlik = 100;
          const sonuc = AltKalinlik(mobilya, kalinlik);
          console.log("sonuc=", sonuc);
          setmobilya({ ...mobilya, ...sonuc });
        }}
      >
        Alt kalınlık
      </button>
      {/**sol_dikey_bolme **********************************/}
      <button
        onClick={() => {
          const islem = "sol_dikey_bolme";
          const sonuc = DikeyBolmeAyarla(
            mobilya,
            bolge_x,
            bolge_y,
            secilenBolge,
            islem
          );
          setmobilya({ ...mobilya, ...sonuc });
          bolge_y = -1;
          bolge_x = -1;
        }}
      >
        sol_dikey_bolme
      </button>
    </div>
  );
};
export default BolgeEnAyarla;
