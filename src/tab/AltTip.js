//@AltTip-----------------------------------------------
import { useState, useContext } from "react";
import { MobilyaContext } from "../contexts/MobilyaContext";

const AltTip = () => {
  const [altId, setaltId] = useState("1");
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
          checked={altId === "1"}
          onChange={() => {
            setaltId("1");
            setmobilya((mobilya) => {
              const yeniMobilya = mobilya;

              yeniMobilya.Alt.dahil = true;

              return yeniMobilya;
            });
            //setmobilya({ ...mobilya, ...yeniMobilya });
          }}
        />
        <label>Tam Alt</label>
        <br />
        <input
          type="checkbox"
          id="2"
          name="radio2"
          checked={altId === "2"}
          onChange={() => {
            setaltId("2");
          }}
        />
        <label>Kuşaklar</label>
        <br />
        <input
          type="checkbox"
          id="3"
          name="radio3"
          checked={altId === "3"}
          onChange={() => {
            setaltId("3");
          }}
        />
        <label>WebFrame</label>
        <br />
        <input
          type="checkbox"
          id="4"
          name="radio4"
          checked={altId === "4"}
          onChange={() => {
            yeniMobilya.alt.dahil = false;
            setaltId("4");
            setmobilya({ ...mobilya, ...yeniMobilya });
          }}
        />
        <label>Yok</label>
      </form>
    </div>
  );
};
export default AltTip;
//---------------------------------------
