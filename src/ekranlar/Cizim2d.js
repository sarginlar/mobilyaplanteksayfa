import React, { useRef, useEffect, useContext, useState } from "react";
import { MobilyaContext } from "../contexts/MobilyaContext";
import Path, { Rect } from "react-svg-path";
import {
  UncontrolledReactSVGPanZoom,
  ControlledReactSVGPanZoom,
} from "react-svg-pan-zoom";

const Cizim2d = () => {
  const { mobilya, setmobilya } = useContext(MobilyaContext);
  const Viewer = useRef(null);

  const [secilenBolge, setSecilenBolge] = useState(0);
  const [secilenYatayBolme, setSecilenYatayBolme] = useState(0);
  const [secilenRaf, setSecilenRaf] = useState(0);
  const [secilenDikeyBolme, setSecilenDikeyBolme] = useState(0);
  const [secilenKapak, setSecilenKapak] = useState(0);
  const [secilenKayit, setSecilenKayit] = useState(0);
  const [secilenKayitModel, setSecilenKayitModel] = useState(0);
  const [secilenKapakModel, setSecilenKapakModel] = useState(0);
  const [secilen, setSecilen] = useState({
    bolge: false,
    kapak: false,
    kapak_profil: false,
  });

  const [secilenCekmeceKapak, setSecilenCekmeceKapak] = useState(0);
  const [secilenCekmeceKasa, setSecilenCekmeceKasa] = useState(0);

  useEffect(() => {
    Viewer.current.fitToViewer();
  }, []);

  /* Read all the available methods in the documentation */
  const _zoomOnViewerCenter = () => Viewer.current.zoomOnViewerCenter(1.1);
  const _fitSelection = () => Viewer.current.fitSelection(40, 40, 500, 500);
  const _fitToViewer = () => Viewer.current.fitToViewer();
  //burada ilk bolge otomatik olarak oluşturuluyor.

  //secilen bölge------
  const aktifBolge = (index) => {
    mobilya.bolge.map((item) => (item.aktif = false));
    mobilya.bolge[index].aktif = true;
  };
  return (
    <div>
      <h1>UncontrolledReactSVGPanZoom</h1>
      <hr />

      <button className="btn" onClick={() => _zoomOnViewerCenter()}>
        Zoom on center
      </button>
      <button className="btn" onClick={() => _fitSelection()}>
        Zoom area 200x200
      </button>
      <button className="btn" onClick={() => _fitToViewer()}>
        Fit
      </button>
      <hr />
      {/** -----------------------------------*/}
      <UncontrolledReactSVGPanZoom
        ref={Viewer}
        width={400}
        height={400}
        //onZoom={(e) => console.log('zoom')}
        //onPan={(e) => console.log('pan')}
        //onClick={(event) => console.log('click', event.x, event.y, event.originalEvent)}
      >
        <svg viewBox="-1500 -1500 3000 3000">
          {mobilya.sol_yan.dahil && (
            <Rect
              centerEnd={true}
              cx={mobilya.sol_yan.x0}
              cy={-mobilya.sol_yan.y0}
              height={mobilya.sol_yan.y}
              width={mobilya.sol_yan.x}
              fill="lightblue"
              stroke="black"
              strokeWidth="5"
            />
          )}
          {mobilya.sag_yan.dahil && (
            <Rect
              centerEnd={true}
              cx={mobilya.sag_yan.x0}
              cy={-mobilya.sag_yan.y0}
              height={mobilya.sag_yan.y}
              width={mobilya.sag_yan.x}
              fill="lightblue"
              stroke="black"
              strokeWidth="5"
            />
          )}
          {mobilya.ust.dahil && (
            <Rect
              centerEnd={true}
              cx={mobilya.ust.x0}
              cy={-mobilya.ust.y0}
              height={mobilya.ust.y}
              width={mobilya.ust.x}
              fill="lightblue"
              stroke="black"
              strokeWidth="5"
            />
          )}

          {mobilya.alt.dahil && (
            <Rect
              centerEnd={true}
              cx={mobilya.alt.x0}
              cy={-mobilya.alt.y0}
              height={mobilya.alt.y}
              width={mobilya.alt.x}
              fill="lightblue"
              stroke="black"
              strokeWidth="5"
            />
          )}

          {mobilya.baza.dahil && (
            <Rect
              centerEnd={true}
              cx={mobilya.baza.x0}
              cy={-mobilya.baza.y0}
              height={mobilya.baza.y}
              width={mobilya.baza.x}
              fill="lightblue"
              stroke="black"
              strokeWidth="5"
            />
          )}

          {mobilya.bolge.map((item, index) => {
            return (
              <Rect
                className="on"
                key={index}
                centerEnd={true}
                cx={item.cx}
                cy={-item.cy}
                height={item.y}
                width={item.x}
                fill={mobilya.bolge[index].aktif ? "blue" : "green"}
                stroke="black"
                strokeWidth="5"
                fillOpacity="0.2"
                onClick={() => {
                  setSecilenBolge(index);
                  aktifBolge(index);
                  setSecilen({
                    bolge: true,
                    kapak: false,
                    kapak_profil: false,
                  });
                  console.log("--seçilen_bölge=", secilenBolge);

                  console.warn("onPress ***");
                }}
              />
            );
          })}

          {mobilya.dikey_bolme.map((item, index) => {
            return (
              <Rect
                className="on"
                key={index}
                centerEnd={true}
                cx={item.x0}
                cy={-item.y0}
                height={item.y}
                width={item.x}
                fill={"blue"}
                stroke="black"
                strokeWidth="5"
                fillOpacity="0.5"
                onClick={() => {
                  setSecilenDikeyBolme(index);
                  console.log("seçilen_dikey_bolme=", secilenDikeyBolme);
                  console.warn("onPress ***");
                }}
              />
            );
          })}

          {/***mobilya yatay_bolme çizimi---------------------- */}
          {mobilya.yatay_bolme.map((item, index) => {
            return (
              <Rect
                className="on"
                key={index}
                centerEnd={true}
                cx={item.x0}
                cy={-item.y0}
                height={item.y}
                width={item.x}
                fill={"red"}
                stroke="black"
                strokeWidth="5"
                fillOpacity="0.5"
                onClick={() => {
                  setSecilenYatayBolme(index);
                  console.log(
                    "seçilen_yatay_bolme=",
                    mobilya.yatay_bolme[index]
                  );

                  console.warn("onPress ***");
                }}
              />
            );
          })}
          {/*-------------------------------------------- */}

          {/***mobilya raf çizimi---------------------- */}
          {mobilya.raf.map((item, index) => {
            return (
              <Rect
                className="on"
                key={index}
                centerEnd={true}
                cx={item.x0}
                cy={-item.y0}
                height={item.y}
                width={item.x}
                fill={"red"}
                stroke="black"
                strokeWidth="5"
                fillOpacity="0.5"
                onClick={() => {
                  setSecilenRaf(index);
                  console.log(
                    "seçilen_yatay_bolme=",
                    mobilya.yatay_bolme[index]
                  );

                  console.warn("onPress ***");
                }}
              />
            );
          })}
          {/*-------------------------------------------- */}

          {/***mobilya kapak çizimi---------------------- */}
          {mobilya.kapak.map((item, index) => {
            return (
              <Rect
                className="on"
                key={index}
                centerEnd={true}
                cx={item.x0}
                cy={-item.y0}
                height={item.y}
                width={item.x}
                fill={"red"}
                stroke="black"
                strokeWidth="5"
                fillOpacity="0.5"
                onClick={() => {
                  setSecilenKapak(index);
                  setSecilenKapakModel(item.kapak_model);
                  setSecilen({
                    bolge: false,
                    kapak: true,
                    kapak_profil: false,
                  });
                  console.log("seçilen_kapak=", mobilya.kapak[index]);

                  console.warn("onPress ***");
                }}
              />
            );
          })}
          {/**------------------------------------- */}

          {/***mobilya profil_kapak çizimi---------------------- */}
          {mobilya.kapak_profil.map((item, index) => {
            return (
              <Rect
                className="on"
                key={index}
                centerEnd={true}
                cx={item.x0}
                cy={-item.y0}
                height={item.y}
                width={item.x}
                fill={"blue"}
                stroke="black"
                strokeWidth="5"
                fillOpacity="0.5"
                onClick={() => {
                  setSecilenKapak(index);
                  setSecilenKapakModel(item.kapak_model);
                  setSecilen({
                    bolge: false,
                    kapak: true,
                    kapak_profil: false,
                  });
                  console.log("seçilen_kapak=", mobilya.kapak_profil[index]);

                  console.warn("onPress ***");
                }}
              />
            );
          })}
          {/**------------------------------------- */}

          {/***kayit_ekle_dikey çizimi---------------------- */}
          {mobilya.kayit_ekle_dikey.map((item, index) => {
            return (
              <Rect
                className="on"
                key={index}
                centerEnd={true}
                cx={item.x0}
                cy={-item.y0}
                height={item.y}
                width={item.x}
                fill={"red"}
                stroke="black"
                strokeWidth="5"
                fillOpacity="0.5"
                onClick={() => {
                  setSecilenKayit(index);
                  setSecilenKayitModel(item.model);
                  setSecilen({
                    bolge: false,
                    kapak: true,
                    kapak_profil: false,
                  });
                  console.log(
                    "seçilen_kayit_ekle_dikey=",
                    mobilya.kayit_ekle_dikey[index]
                  );

                  console.warn("onPress ***");
                }}
              />
            );
          })}
          {/**------------------------------------- */}
          {/***kayit_ekle_yatay çizimi---------------------- */}
          {mobilya.kayit_ekle_yatay.map((item, index) => {
            return (
              <Rect
                className="on"
                key={index}
                centerEnd={true}
                cx={item.x0}
                cy={-item.y0}
                height={item.y}
                width={item.x}
                fill={"red"}
                stroke="black"
                strokeWidth="5"
                fillOpacity="0.5"
                onClick={() => {
                  setSecilenKayit(index);
                  setSecilenKayitModel(item.model);
                  setSecilen({
                    bolge: false,
                    kapak: true,
                    kapak_profil: false,
                  });
                  console.log(
                    "seçilen_kayit_ekle_yatay=",
                    mobilya.kayit_ekle_yatay[index]
                  );

                  console.warn("onPress ***");
                }}
              />
            );
          })}
          {/**------------------------------------- */}

          {/*@cekmece_kapak-------------------------*/}
          {mobilya.cekmece_kapak.map((item, index) => {
            return (
              <Rect
                className="on"
                key={index}
                centerEnd={true}
                cx={item.x0}
                cy={-item.y0}
                height={item.y}
                width={item.x}
                fill={"orange"}
                stroke="black"
                strokeWidth="5"
                fillOpacity="0.5"
                onClick={() => {
                  setSecilenCekmeceKapak(index);
                  console.log(
                    "seçilen_cekmece_kapak=",
                    mobilya.cekmece_kapak[index]
                  );

                  console.warn("onPress ***");
                }}
              />
            );
          })}

          {mobilya.cekmece_kasa.map((item, index) => {
            return (
              <g>
                {/*on cizim ------------------------*/}
                <Rect
                  className="on"
                  key={index}
                  centerEnd={true}
                  cx={item.on.x0}
                  cy={-item.on.y0}
                  height={item.on.y}
                  width={item.on.x}
                  fill={"red"}
                  stroke="black"
                  strokeWidth="5"
                  fillOpacity="0.5"
                  onClick={() => {
                    setSecilenCekmeceKasa(index);
                    console.log(
                      "seçilen_cekmece_kasa=",
                      mobilya.cekmece_kasa[index]
                    );
                    console.warn("onPress ***");
                  }}
                />
                {/*sol_yan cizim ------------------------*/}
                <Rect
                  className="on"
                  key={index}
                  centerEnd={true}
                  cx={item.sol_yan.x0}
                  cy={-item.sol_yan.y0}
                  height={item.sol_yan.y}
                  width={item.sol_yan.x}
                  fill={"red"}
                  stroke="black"
                  strokeWidth="5"
                  fillOpacity="0.5"
                  onClick={() => {
                    setSecilenCekmeceKasa(index);
                    console.log(
                      "seçilen_cekmece_kasa=",
                      mobilya.cekmece_kasa[index]
                    );
                    console.warn("onPress ***");
                  }}
                />
                {/*sag_yan cizim ------------------------*/}
                <Rect
                  className="on"
                  key={index}
                  centerEnd={true}
                  cx={item.sag_yan.x0}
                  cy={-item.sag_yan.y0}
                  height={item.sag_yan.y}
                  width={item.sag_yan.x}
                  fill={"red"}
                  stroke="black"
                  strokeWidth="5"
                  fillOpacity="0.5"
                  onClick={() => {
                    setSecilenCekmeceKasa(index);
                    console.log(
                      "seçilen_cekmece_kasa=",
                      mobilya.cekmece_kasa[index]
                    );
                    console.warn("onPress ***");
                  }}
                />

                {/*arka cizim ------------------------*/}
                <Rect
                  className="on"
                  key={index}
                  centerEnd={true}
                  cx={item.arka.x0}
                  cy={-item.arka.y0}
                  height={item.arka.y}
                  width={item.arka.x}
                  fill={"green"}
                  stroke="black"
                  strokeWidth="5"
                  fillOpacity="0.5"
                  onClick={() => {
                    setSecilenCekmeceKasa(index);
                    console.log(
                      "seçilen_cekmece_kasa=",
                      mobilya.cekmece_kasa[index]
                    );
                    console.warn("onPress ***");
                  }}
                />
                {/*arka cizim ------------------------*/}
                <Rect
                  className="on"
                  key={index}
                  centerEnd={true}
                  cx={item.alt.x0}
                  cy={-item.alt.y0}
                  height={item.alt.y}
                  width={item.alt.x}
                  fill={"green"}
                  stroke="black"
                  strokeWidth="5"
                  fillOpacity="0.5"
                  onClick={() => {
                    setSecilenCekmeceKasa(index);
                    console.log(
                      "seçilen_cekmece_kasa=",
                      mobilya.cekmece_kasa[index]
                    );
                    console.warn("onPress ***");
                  }}
                />
              </g>
            );
          })}
        </svg>
      </UncontrolledReactSVGPanZoom>
    </div>
  );
};

export default Cizim2d;
