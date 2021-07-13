import "./App.css";
import Program from "./Program";
import "semantic-ui-css/semantic.min.css";
import { createContext, useState } from "react";
//import { Data } from "./components/Data";
import { DataSifirlama } from "./components/DataSifirlama";
//import { mobilyaContext } from "./Context.js";
import MobilyaContextProvider from "./contexts/MobilyaContext";

//export const mobilyaContext = createContext();

function App() {
  //const initialState = Data[0];
  //const [mobilya, setMobilya] = useState(initialState);
  //console.log("mooobilya=", mobilya);
  return (
    <MobilyaContextProvider>
      <div className="App">
        <Program />
      </div>
    </MobilyaContextProvider>
  );
}

export default App;
