//@SagyanTip-------------------------------------------------
import { useState, useContext } from "react";
import { MobilyaContext } from "../contexts/MobilyaContext";

const SagyanTip = () => {
  const [sagyanId, setsagyanId] = useState("1");
  const { mobilya, setmobilya } = useContext(MobilyaContext);
  const yeniMobilya = mobilya;
  return (
    <div>
      <h4>Tipi</h4>

      <input
        type="checkbox"
        id="1"
        name="radio1"
        checked={sagyanId === "1"}
        onChange={() => {
          yeniMobilya.sag_yan.dahil = true;
          setsagyanId("1");
          setmobilya({ ...mobilya, ...yeniMobilya });
        }}
      />
      <label>Sağ Yan</label>
      <br />
      <input
        type="checkbox"
        id="2"
        name="radio4"
        checked={sagyanId === "2"}
        onChange={() => {
          yeniMobilya.sag_yan.dahil = false;
          setsagyanId("2");
          setmobilya({ ...mobilya, ...yeniMobilya });
        }}
      />
      <label>Yok</label>
    </div>
  );
};
export default SagyanTip;
//-----------------------------------------------------------
