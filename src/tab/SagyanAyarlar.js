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
                placeholder={mobilya.sag_yan.girinti_arka}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.girinti_arka = e.target.value;
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
                placeholder={mobilya.sag_yan.girinti_on}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.girinti_on = e.target.value;
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
                placeholder={mobilya.sag_yan.girinti_ust}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.girinti_ust = e.target.value;
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
                placeholder={mobilya.sag_yan.girinti_alt}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.girinti_alt = e.target.value;
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
                placeholder={mobilya.sag_yan.girinti_arka}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.girinti_arka = e.target.value;
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
                placeholder={mobilya.sag_yan.girinti_on}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.girinti_on = e.target.value;
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
                placeholder={mobilya.sag_yan.girinti_ust}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.girinti_ust = e.target.value;
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
                placeholder={mobilya.sag_yan.girinti_alt}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sag_yan.girinti_alt = e.target.value;
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
