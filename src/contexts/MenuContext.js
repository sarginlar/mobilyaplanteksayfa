import { createContext, useState } from "react";
//import { Data } from "../components/Data";

export const MenuContext = createContext();
const initialState_menu = {
  main: false,
  Login: false,
  SignUp: false,
  Ekran3d: false,
  ScreenDikeyBolme: false,
  Nesting: false,
  Price: false,
  Materials: false,
  Hardwares: false,
  ScreenProducts: false,
};

const MenuContextProvider = (props) => {
  const [menu, setmenu] = useState(initialState_menu);
  console.log("mmeenu=", menu);
  return (
    <MenuContext.Provider value={{ menu, setmenu }}>
      {props.children}
    </MenuContext.Provider>
  );
};
export default MenuContextProvider;
