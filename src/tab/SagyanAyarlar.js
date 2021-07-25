import React, { useContext } from "react";
import { Button, Tab } from "semantic-ui-react";
import Malzeme from "../ekranlar/Malzeme";
import SagyanTip from "../tab/SagyanTip";
import { MobilyaContext } from "../contexts/MobilyaContext";

const SagyanAyarlar = () => {
  const { mobilya, setmobilya } = useContext(MobilyaContext);
  const yeniMobilya = mobilya;
  return (
    <Tab.Pane>
      <ul className="flex-container">
        {/*GIRINTI-----------------------------------------  */}
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
                placeholder={mobilya.sag_yan.zg1}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.zg1 = e.target.value;
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
                placeholder={mobilya.sag_yan.zg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.zg0 = e.target.value;
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
                placeholder={mobilya.sag_yan.yg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.yg0 = e.target.value;
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
                placeholder={mobilya.sag_yan.yg1}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.yg1 = e.target.value;
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
        {/*BANT------------------------------------------------    */}

        <li className="flex-item1">
          <h3>Kenar Bantı</h3>
          <ul>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Ön
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.sag_yan.zg1}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.zg1 = e.target.value;
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
                placeholder={mobilya.sag_yan.zg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.zg0 = e.target.value;
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
                placeholder={mobilya.sag_yan.yg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.yg0 = e.target.value;
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
                placeholder={mobilya.sag_yan.yg1}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.yg1 = e.target.value;
                }}
              />
            </li>
          </ul>
        </li>

        {/* --------------------------------------------------------- */}

        <li className="flex-item">
          <Malzeme />
        </li>
        <li className="flex-item1">
          <SagyanTip />
        </li>
      </ul>
    </Tab.Pane>
  );
};

export default SagyanAyarlar;
