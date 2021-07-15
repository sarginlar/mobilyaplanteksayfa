import { useContext, Suspense, useEffect, useRef, useState } from "react";
import { MobilyaContext } from "../contexts/MobilyaContext";
import Path, { Rect } from "react-svg-path";
import Bolgeler from "../components/Bolgeler";
import DikeyBolmeEkle from "../components/DikeyBolmeEkle";
import YatayBolmeEkle from "../components/YatayBolmeEkle";
import RafEkle from "../components/RafEkle";
import {
  UncontrolledReactSVGPanZoom,
  ControlledReactSVGPanZoom,
} from "react-svg-pan-zoom";
import Kapak from "../components/Kapak";
import KapakSil from "../components/KapakSil";
import DikeyBolmeSil from "../components/DikeyBolmeSil";
import YatayBolmeSil from "../components/YatayBolmeSil";
import KayitSil from "../components/KayitSil";
import KapakProfil from "../components/KapakProfil";
import CekmeceKapak from "../components/CekmeceKapak";
import CekmeceKasa from "../components/CekmeceKasa";
import KayitEkleDikey from "../components/KayitEkleDikey";
import KayitEkleYatay from "../components/KayitEkleYatay";
import BolgeEnAyarla from "../components/BolgeEnAyarla";

let bolge_x = -1;
let bolge_y = -1;

//@Ekran2d------------------------------------------------
const Ekran2d = () => {
  const { mobilya, setmobilya } = useContext(MobilyaContext);

  let m = mobilya;
  const initialState_olculer = {
    X: mobilya.X,
    Y: mobilya.Y,
    Z: mobilya.Z,
  };
  const [olculer, setOlculer] = useState(initialState_olculer);

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

  //TekParcalar();
  //SolYan();
  //SagYan();
  //Ust();
  //Alt();
  //Baza();
  //Bolges()

  //secilen bölge------
  const aktifBolge = (index) => {
    mobilya.bolge.map((item) => (item.aktif = false));
    mobilya.bolge[index].aktif = true;
  };

  //@kapak----------------------------------------------
  const kapak = () => {
    const sonuc = Kapak(mobilya, secilenBolge, secilen);
    setmobilya({ ...mobilya, ...sonuc });
    setSecilen({
      bolge: false,
      kapak: false,
      kapak_profil: false,
    });
    return <div>{/*<button>kapak</button>*/}</div>;
  };

  //@kapak_sil----------------------------------------------
  const kapak_sil = () => {
    const sonuc = KapakSil(mobilya, secilenKapak, secilenKapakModel);
    setmobilya({ ...mobilya, ...sonuc });
    setSecilen({
      bolge: false,
      kapak: false,
      kapak_profil: false,
    });
    return <div>{/*<button>kapak</button>*/}</div>;
  };

  //-----------------------------------------------------
  //@dikey_bolme_sil----------------------------------------------
  const dikey_bolme_sil = () => {
    const sonuc = DikeyBolmeSil(mobilya, secilenDikeyBolme, secilen);
    setmobilya({ ...mobilya, ...sonuc });
    setSecilenBolge(0);
    setSecilen({
      bolge: false,
      kapak: false,
      kapak_profil: false,
    });

    return <div>{/*<button>kapak</button>*/}</div>;
  };

  //@yatay_bolme_sil----------------------------------------------
  const yatay_bolme_sil = () => {
    const sonuc = YatayBolmeSil(mobilya, secilenYatayBolme, secilen);
    setmobilya({ ...mobilya, ...sonuc });
    setSecilenBolge(0);
    setSecilen({
      bolge: false,
      kapak: false,
      kapak_profil: false,
    });

    return <div>{/*<button>kapak</button>*/}</div>;
  };

  //-----------------------------------------------------
  //@kayit_sil----------------------------------------------
  const kayit_sil = () => {
    const sonuc = KayitSil(mobilya, secilenKayit, secilenKayitModel);
    setmobilya({ ...mobilya, ...sonuc });
    setSecilenBolge(0);
    setSecilen({
      bolge: false,
      kapak: false,
      kapak_profil: false,
    });

    return <div>{/*<button>kapak</button>*/}</div>;
  };

  //-----------------------------------------------------

  //@profilkapak----------------------------------------------
  const profilKapak = () => {
    const sonuc = KapakProfil(mobilya, secilenBolge, secilen);
    setmobilya({ ...mobilya, ...sonuc });
    setSecilen({
      bolge: false,
      kapak: false,
      kapak_profil: false,
    });
    return <div>{/*<button>kapak_profil</button>*/}</div>;
  };

  //-----------------------------------------------------

  //@cekmece_kapak----------------------------------------------
  const cekmece_kapak = () => {
    const sonuc = CekmeceKapak(mobilya, secilenBolge);
    setmobilya({ ...mobilya, ...sonuc });
    return (
      <div>
        <button>CekmeceKapak</button>
      </div>
    );
  };

  //-----------------------------------------------------

  //@cekmece_kasa----------------------------------------------
  const cekmece_kasa = () => {
    const sonuc = CekmeceKasa(mobilya, secilenBolge);
    setmobilya({ ...mobilya, ...sonuc });
    return (
      <div>
        <button>CekmeceKasa</button>
      </div>
    );
  };

  //-----------------------------------------------------

  //@kayit_ekle_dikey----------------------------------------------
  const kayit_ekle_dikey = () => {
    const sonuc = KayitEkleDikey(mobilya, secilenBolge);
    setmobilya({ ...mobilya, ...sonuc });
    return (
      <div>
        <button>KayıtEkleDikey</button>
      </div>
    );
  };
  //-----------------------------------------------------

  //@kayit_ekle_yatay----------------------------------------------
  const kayit_ekle_yatay = () => {
    const sonuc = KayitEkleYatay(mobilya, secilenBolge);
    setmobilya({ ...mobilya, ...sonuc });
    return (
      <div>
        <button>KayıtEkleYatay</button>
      </div>
    );
  };
  //-----------------------------------------------------

  const Viewer = useRef(null);

  useEffect(() => {
    Viewer.current.fitToViewer();
  }, []);

  /* Read all the available methods in the documentation */
  const _zoomOnViewerCenter = () => Viewer.current.zoomOnViewerCenter(1.1);
  const _fitSelection = () => Viewer.current.fitSelection(40, 40, 500, 500);
  const _fitToViewer = () => Viewer.current.fitToViewer();
  //burada ilk bolge otomatik olarak oluşturuluyor.

  if (mobilya.bolge.length === 0) {
    mobilya.bolge = Bolgeler(mobilya, olculer);
  }
  //-----------------------------------------------
  return (
    <>
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
      <h4>Ekran2d</h4>
      {/** //@dikey_bolme_ekle **************************/}
      <button
        onClick={() => {
          m = DikeyBolmeEkle(mobilya, secilenBolge, secilen);
          console.log("seçilenBölge=", secilenBolge);
          console.log("seçilen=", secilen);
          setmobilya({ ...mobilya, ...m });
        }}
      >
        dikey_bolme ekle
      </button>

      {/** //@yatay_bolme_ekle ***************************/}
      <button
        onClick={() => {
          m = YatayBolmeEkle(mobilya, secilenBolge, secilen);
          console.log("seçilenBölge=", secilenBolge);
          console.log("seçilen=", secilen);
          setmobilya({ ...mobilya, ...m });
        }}
      >
        yatay_bolme ekle
      </button>

      {/** //@raf_ekle ***************************/}
      <button
        onClick={() => {
          m = RafEkle(mobilya, secilenBolge, secilen);
          console.log("seçilenBölge=", secilenBolge);
          console.log("seçilen=", secilen);
          setmobilya({ ...mobilya, ...m });
        }}
      >
        raf ekle
      </button>

      {secilen.bolge && (
        <input
          type="number"
          className="girinti"
          placeholder={mobilya.bolge[secilenBolge].x}
          id="name"
          name="name"
          onChange={(e) => {
            bolge_x = Number(e.target.value);
          }}
        />
      )}

      {secilen.bolge && (
        <input
          type="number"
          className="girinti"
          placeholder={mobilya.bolge[secilenBolge].y}
          id="name"
          name="name"
          onChange={(e) => {
            bolge_y = Number(e.target.value);
          }}
        />
      )}
      <button onClick={kapak}>kapak ekle</button>
      <button onClick={profilKapak}>profil kapak ekle</button>
      <button onClick={kapak_sil}>kapak sil</button>

      <button onClick={cekmece_kapak}>cekmece_kapak_ekle</button>
      <button onClick={cekmece_kasa}>cekmece_kasa_ekle</button>
      <button onClick={kayit_ekle_dikey}>kayit_ekle_dikey</button>
      <button onClick={kayit_ekle_yatay}>kayit_ekle_yatay</button>
      <button onClick={kayit_sil}>kayit sil</button>
      <button onClick={dikey_bolme_sil}>dikey_bolme sil</button>
      <button onClick={yatay_bolme_sil}>yatay_bolme_sil</button>

      <BolgeEnAyarla />
      <button>yukseklik</button>
      <div></div>
      <div> KayıtEkle</div>
      {/*kayit_ekle 2d çizimi---------*/}
      {mobilya.kayit_ekle_dikey.length > 0 && (
        <svg
          width={300}
          height={300}
          viewBox={`${-10} ${-10} ${mobilya.bolge[secilenBolge].x + 100} ${
            mobilya.bolge[secilenBolge].y + 100
          } `}
        >
          <rect
            x={0}
            y={0}
            height={mobilya.bolge[secilenBolge].y}
            width={mobilya.Z}
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
          {mobilya.kayit_ekle_dikey
            .filter((o) => o.bolge === secilenBolge)
            .map((o, index) => {
              return (
                <rect
                  x={mobilya.kayit_ekle_dikey[index].xg1}
                  y={mobilya.kayit_ekle_dikey[index].yg1}
                  height={mobilya.kayit_ekle_dikey[index].y}
                  width={18}
                  fill="lightblue"
                  stroke="black"
                  strokeWidth="1"
                />
              );
            })}
        </svg>
      )}
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
    </>
  );
};

export default Ekran2d;
