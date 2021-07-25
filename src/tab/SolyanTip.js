//@SolyanTip----------------------------------
import { useState, useContext } from "react";
import { MobilyaContext } from "../contexts/MobilyaContext";

const SolyanTip = () => {
  const [solyanId, setsolyanId] = useState("1");
  const { mobilya, setmobilya } = useContext(MobilyaContext);
  const yeniMobilya = mobilya;
  return (
    <div>
      <h4>Tipi</h4>
      <form>
        <input
          type="checkbox"
          id="1"
          name="radio1"
          checked={solyanId === "1"}
          onChange={() => {
            yeniMobilya.sol_yan.dahil = true;
            setsolyanId("1");
            setmobilya({ ...mobilya, ...yeniMobilya });
          }}
        />
        <label>Sol Yan</label>
        <br />
        <input
          type="checkbox"
          id="2"
          name="radio4"
          checked={solyanId === "2"}
          onChange={() => {
            yeniMobilya.sol_yan.dahil = false;
            setsolyanId("2");
            setmobilya({ ...mobilya, ...yeniMobilya });
          }}
        />
        <label>Yok</label>
      </form>
    </div>
  );
};
export default SolyanTip;
