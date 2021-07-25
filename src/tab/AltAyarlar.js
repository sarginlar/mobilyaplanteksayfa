import React from "react";
import { Tab } from "semantic-ui-react";
import Malzeme from "../ekranlar/Malzeme";
import AltTip from "../tab/AltTip";

const AltAyarlar = (props) => {
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
                placeholder={mobilya.alt.yg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.alt.yg0 = e.target.value;
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
                placeholder={mobilya.alt.zg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.alt.zg0 = e.target.value;
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
                placeholder={mobilya.alt.zg1}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.alt.zg1 = e.target.value;
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
                placeholder={mobilya.alt.xg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.alt.xg0 = e.target.value;
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
                placeholder={mobilya.alt.xg1}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.alt.xg1 = e.target.value;
                }}
              />
            </li>
          </ul>
        </li>
        {/*ALT_BANT------------------------------    */}
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
                placeholder={mobilya.ust.zg1}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.zg1 = e.target.value;
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
                placeholder={mobilya.ust.zg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.zg0 = e.target.value;
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
                placeholder={mobilya.ust.xg0}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.xg0 = e.target.value;
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
                placeholder={mobilya.ust.xg1}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.ust.xg1 = e.target.value;
                }}
              />
            </li>
          </ul>
        </li>
        {/*--------------------------------------------*/}

        <li className="flex-item">
          <Malzeme />
        </li>
        <li className="flex-item1">
          <AltTip />
        </li>
      </ul>
    </Tab.Pane>
  );
};

export default AltAyarlar;
