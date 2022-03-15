import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Program from "./Program";
import "semantic-ui-css/semantic.min.css";
import { createContext, useState } from "react";
//import { Data } from "./components/Data";
import { DataSifirlama } from "./components/DataSifirlama";
import Ekran2d from "./ekranlar/Ekran2d";
import MobilyaContextProvider from "./contexts/MobilyaContext";
import BolgeEnAyarla from "./components/BolgeEnAyarla";
import MenuContextProvider from "./contexts/MenuContext";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { Navbar } from "./components/Navbar";
import Container from "@mui/material/Container";
import Ekran3d from "./ekranlar/Ekran3d";
//import SignUp from "./components/SignUp";

//export const mobilyaContext = createContext();

function App() {
  //const initialState = Data[0];
  //const [mobilya, setMobilya] = useState(initialState);
  //console.log("mooobilya=", mobilya);
  return (
    <MenuContextProvider>
      <MobilyaContextProvider>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Container>
              <Routes>
                <Route path="/" element={<Program />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/cizim" element={<Ekran3d />} />
                <Route path="/cizim2d" element={<Ekran2d />} />
              </Routes>
            </Container>
          </BrowserRouter>
        </div>
      </MobilyaContextProvider>
    </MenuContextProvider>
  );
}

export default App;
