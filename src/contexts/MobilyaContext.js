import { createContext, useState } from "react";
import { Data } from "../components/Data";

export const MobilyaContext = createContext();

const MobilyaContextProvider = (props) => {
  const [mobilya, setmobilya] = useState(Data[0]);
  console.log("mooobilya=", mobilya);
  return (
    <MobilyaContext.Provider value={{ mobilya, setmobilya }}>
      {props.children}
    </MobilyaContext.Provider>
  );
};
export default MobilyaContextProvider;
