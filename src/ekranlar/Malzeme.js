//@SolyanMalzeme--------------------------------------
import { useState } from "react";
import { DataMaterials } from "../components/DataMaterials";

const Malzeme = () => {
  const initialState = DataMaterials;
  const [material, setmaterial] = useState(initialState);
  return (
    <div>
      <form action="">
        <label htmlFor="color">Malzeme</label>

        <select
          id="malzeme"
          onChange={(e) => {
            const selectedMaterial = e.target.value;
            console.log("material=", selectedMaterial);
          }}
        >
          {material.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
export default Malzeme;
//----------------------------------------------
