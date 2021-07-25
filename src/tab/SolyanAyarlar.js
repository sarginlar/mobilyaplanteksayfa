import React, { useContext } from "react";
import { Button, Tab } from "semantic-ui-react";
import Malzeme from "../ekranlar/Malzeme";
import SolyanTip from "../tab/SolyanTip";
import { MobilyaContext } from "../contexts/MobilyaContext";

const SolyanAyarlar = () => {
  //const { mobilya } = props;
  const { mobilya, setmobilya } = useContext(MobilyaContext);
  const yeniMobilya = mobilya;
  return (
    <Tab.Pane>
      <ul className="flex-container">
        {/*GİRİNTİ */}
        <li className="flex-item1">
          <h3>Girinti</h3>
          <ul>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Ön
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.sol_yan.zg1}
                id="name"
                name="name"
                onChange={(e) => {
                  yeniMobilya.sol_yan.zg1 = Number(e.target.value);
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Arka
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.sol_yan.zg0}
                id="name"
                name="name"
                onChange={(e) => {
                  yeniMobilya.sol_yan.zg0 = Number(e.target.value);
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Ust
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.sol_yan.yg0}
                id="name"
                name="name"
                onChange={(e) => {
                  yeniMobilya.sol_yan.yg0 = Number(e.target.value);
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Alt
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.sol_yan.yg1}
                id="name"
                name="name"
                onChange={(e) => {
                  yeniMobilya.sol_yan.yg1 = Number(e.target.value);
                }}
              />
            </li>
            <Button
              onClick={() => {
                setmobilya({ ...mobilya, ...yeniMobilya });
                console.log("yeniMobilya=", yeniMobilya);
              }}
            >
              Kaydet
            </Button>
          </ul>
        </li>
        {/*BANT------------------------------------ */}
        <li className="flex-item1">
          <h3>Kenar Bandı</h3>
          <ul>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Ön
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.sol_yan.zg1}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sol_yan.zg1 = e.target.value;
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Arka
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.sol_yan.zg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sol_yan.zg0 = e.target.value;
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Ust
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.sol_yan.yg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sol_yan.yg0 = e.target.value;
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Alt
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.sol_yan.yg1}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sol_yan.yg1 = e.target.value;
                }}
              />
            </li>
          </ul>
        </li>
        {/*------------------- */}

        <li className="flex-item">
          <Malzeme />
        </li>

        <li className="flex-item1">
          <SolyanTip />
        </li>
      </ul>
    </Tab.Pane>
  );
};

export default SolyanAyarlar;
