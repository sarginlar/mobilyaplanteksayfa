import React from "react";
import { Tab } from "semantic-ui-react";
import Malzeme from "../ekranlar/Malzeme";
import UstTip from "../tab/UstTip";

const UstAyarlar = (props) => {
  const { mobilya } = props;
  return (
    <Tab.Pane>
      <ul className="flex-container">
        <li className="flex-item1">
          <h3>Girinti</h3>
          <ul>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Üst
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.ust.yg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.yg0 = e.target.value;
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Ön
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.ust.girinti_arka}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.girinti_arka = e.target.value;
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
                placeholder={mobilya.ust.girinti_on}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.girinti_on = e.target.value;
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Sol
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.ust.girinti_sol}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.girinti_sol = e.target.value;
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Sağ
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.ust.girinti_sag}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.girinti_sag = e.target.value;
                }}
              />
            </li>
          </ul>
        </li>
        {/*BANT-------------------- */}
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
                placeholder={mobilya.ust.girinti_arka}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.girinti_arka = e.target.value;
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
                placeholder={mobilya.ust.girinti_on}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.girinti_on = e.target.value;
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Sol
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.ust.girinti_sol}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.girinti_sol = e.target.value;
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Sağ
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.ust.girinti_sag}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.girinti_sag = e.target.value;
                }}
              />
            </li>
          </ul>
        </li>
        {/*------------------------ */}

        <li className="flex-item">
          <Malzeme />
        </li>
        <li className="flex-item1">
          <UstTip />
        </li>
      </ul>
    </Tab.Pane>
  );
};

export default UstAyarlar;
