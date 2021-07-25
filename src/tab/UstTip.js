import { useState, useContext } from "react";
import { MobilyaContext } from "../contexts/MobilyaContext";

//@UstTip-----------------------------------------------
const UstTip = () => {
  const [ustId, setustId] = useState("1");
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
          checked={ustId === "1"}
          onChange={() => {
            yeniMobilya.ust.dahil = true;
            setustId("1");
            setmobilya({ ...mobilya, ...yeniMobilya });
          }}
        />
        <label>Tam Ust</label>
        <br />
        <input
          type="checkbox"
          id="2"
          name="radio2"
          checked={ustId === "2"}
          onChange={() => {
            setustId("2");
          }}
        />
        <label>Kuşaklar</label>
        <br />
        <input
          type="checkbox"
          id="3"
          name="radio3"
          checked={ustId === "3"}
          onChange={() => {
            setustId("3");
          }}
        />
        <label>WebFrame</label>
        <br />
        <input
          type="checkbox"
          id="4"
          name="radio4"
          checked={ustId === "4"}
          onChange={() => {
            yeniMobilya.ust.dahil = false;
            setustId("4");
            setmobilya({ ...mobilya, ...yeniMobilya });
          }}
        />
        <label>Yok</label>
      </form>
    </div>
  );
};
//----------------------------------------

export default UstTip;
