//@Program
//@EKRANLAR
//@DataMaterials
//@DataHardware
//@DataSifirlama
//@Header
//@Login
//@SignUp
//@SolYan  //@SolyanMalzeme
//@SagYan
//@Ust
//@Baza
//@Alt  //@AltTip  //@AltAyarlar
//@Bolges
//@dikey_bolme_sil
//@kapak_sil
//@yatay_bolme_ekle
//@profilkapak
//@ScreenDikeyBolme  //@dikey_bolmeUpdate  //@YatayBolmeUpdate  //@Bolgeler //@kapak

//@Nest
//@Nesting
//@Price
//@Materials
//@Hardwares
//@ScreenProducts
//@RETURN
//@ConstructionSettings   //@SolyanTip   //@SagyanTip  //@UstTip  //@UstAyarlar
//@GenelAyarlar
import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  Suspense,
  useContext,
} from "react";
import {
  Form,
  Segment,
  Button,
  Grid,
  Message,
  Menu,
  Table,
  Divider,
  Card,
  Tab,
  Container,
  Input,
  Image,
  Checkbox,
  Dropdown,
} from "semantic-ui-react";
import Path, { Rect } from "react-svg-path";
import {
  UncontrolledReactSVGPanZoom,
  ControlledReactSVGPanZoom,
} from "react-svg-pan-zoom";
import { useForm } from "react-hook-form";
import * as THREE from "three";
import { Canvas, extend, useLoader } from "react-three-fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Text } from "troika-three-text";
import {
  INITIAL_VALUE,
  ReactSVGPanZoom,
  TOOL_NONE,
  fitSelection,
  zoomOnViewerCenter,
  fitToViewer,
} from "react-svg-pan-zoom";
import YatayBolmeAyarla from "./components/YatayBolmeAyarla";
import DikeyBolmeAyarla from "./components/DikeyBolmeAyarla";
import Coordinat from "./components/Coordinat";
import SolYan from "./components/SolYan";
import SagYan from "./components/SagYan";
import Ust from "./components/Ust";
import Baza from "./components/Baza";
import Alt from "./components/Alt";
import Kapak from "./components/Kapak";
import KapakSil from "./components/KapakSil";
import DikeyBolmeSil from "./components/DikeyBolmeSil";
import Bolgeler from "./components/Bolgeler";
import DikeyBolmeEkle from "./components/DikeyBolmeEkle";
import YatayBolmeEkle from "./components/YatayBolmeEkle";
import YatayBolmeSil from "./components/YatayBolmeSil";
import RafEkle from "./components/RafEkle";
import KapakProfil from "./components/KapakProfil";
import CekmeceKapak from "./components/CekmeceKapak";
import CekmeceKasa from "./components/CekmeceKasa";
import KayitEkleDikey from "./components/KayitEkleDikey";
import KayitEkleYatay from "./components/KayitEkleYatay";
import KayitSil from "./components/KayitSil";
import BolgelerUpdate from "./components/BolgelerUpdate";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import DikeyBolmeKalinlik from "./components/DikeyBolmeKalinlik";
import YatayBolmeKalinlik from "./components/YatayBolmeKalinlik";
import SolYanKalinlik from "./components/SolYanKalinlik";
import SagYanKalinlik from "./components/SagYanKalinlik";
import UstKalinlik from "./components/UstKalinlik";
import AltKalinlik from "./components/AltKalinlik";
import EnDegisimi from "./components/EnDegisimi";
import BoyDegisimi from "./components/BoyDegisimi";
import BazaYukseklik from "./components/Baza";
import DerinlikDegisim from "./components/DerinlikDegisim";
//import { Data } from "./components/Data";
import firebase from "firebase/app";
import "firebase/auth";
import db, { auth, provider } from "./firebase";
import "firebase/firestore";
import Login1 from "./components/Login1";
//import { mobilyaContext } from "./Context";
import { MobilyaContext } from "./contexts/MobilyaContext";
import { DataSifirlama } from "./components/DataSifirlama";
import Ekran3d from "./ekranlar/Ekran3d";
import MobilyaContextProvider from "./contexts/MobilyaContext";

import BolgeEnAyarla from "./components/BolgeEnAyarla";
import Ekran2d from "./ekranlar/Ekran2d";
import Nesting from "./ekranlar/Nesting";
import Nest from "./components/Nest";
import Hardwares from "./ekranlar/Hardwares";
import Price from "./ekranlar/Price";

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

//@DataMaterials-----------------------------------------------------------
const DataMaterials = [
  {
    id: 1,
    stock_type: "Sheet Stock", // "Board stock","Banding Stock","Sheet stock"
    company: "starwood",
    name: "Kiraz",
    length: 3660,
    width: 1830,
    thickness: 18,
    cost_per_sheet: 200,
    image: "",
    grain: true,
    single_side: false,
  },
  {
    id: 1,
    stock_type: "Sheet Stock", // "Board stock","Banding Stock","Sheet stock"
    company: "starwood",
    name: "Armut",
    length: 3660,
    width: 1830,
    thickness: 18,
    cost_per_sheet: 200,
    image: "",
    grain: true,
    single_side: false,
  },
];

//@Program----------------------------------------------------------
let bolge_x = -1;
let bolge_y = -1;
const Program = () => {
  //useStateler
  const [user, setUser] = useState(null);

  const [menu, setmenu] = useState(initialState_menu);
  const [solyanId, setsolyanId] = useState("1");
  const [sagyanId, setsagyanId] = useState("1");
  const [ustId, setustId] = useState("1");
  const [altId, setaltId] = useState("1");
  const [secilenBolge, setSecilenBolge] = useState(0);
  const [secilenYatayBolme, setSecilenYatayBolme] = useState(0);
  const [secilenRaf, setSecilenRaf] = useState(0);
  const [secilenDikeyBolme, setSecilenDikeyBolme] = useState(0);
  const [secilenKapak, setSecilenKapak] = useState(0);
  const [secilenKayit, setSecilenKayit] = useState(0);
  const [secilenKayitModel, setSecilenKayitModel] = useState(0);
  const [secilenKapakModel, setSecilenKapakModel] = useState(0);
  const [secilenCekmeceKapak, setSecilenCekmeceKapak] = useState(0);
  const [secilenCekmeceKasa, setSecilenCekmeceKasa] = useState(0);
  const [secilen, setSecilen] = useState({
    bolge: false,
    kapak: false,
    kapak_profil: false,
  });
  //
  const { mobilya, setmobilya } = useContext(MobilyaContext);
  console.log("Program_mobilya=", mobilya);
  //
  // const [aktif, setAktif] = useState({ bolge: false });

  /*
 
  /********* */

  /********* */
  useEffect(() => {
    setmobilya(DataSifirlama(mobilya));
  }, []);

  const initialState_olculer = {
    X: mobilya.X,
    Y: mobilya.Y,
    Z: mobilya.Z,
  };
  const [olculer, setOlculer] = useState(initialState_olculer);
  //@Header-------------------------------------------------------
  const Header = () => {
    return (
      <Menu stackable>
        <Menu.Item
          name="anasayfa"
          onClick={() => {
            setmenu({
              main: true,
              Login: false,
              SignUp: false,
              Ekran3d: false,
              ScreenDikeyBolme: false,
              Nesting: false,
              Price: false,
              Materials: false,
              Hardwares: false,
              ScreenProducts: false,
            });
          }}
        >
          AnaSayfa
        </Menu.Item>

        <Menu.Item
          name="Giriş"
          onClick={() => {
            setmenu({
              main: false,
              Login: true,
              SignUp: false,
              Ekran3d: false,
              ScreenDikeyBolme: false,
              Nesting: false,
              Price: false,
              Materials: false,
              Hardwares: false,
              ScreenProducts: false,
            });
          }}
        >
          Giriş
        </Menu.Item>

        <Menu.Item
          name="Kayıt"
          onClick={() => {
            setmenu({
              main: false,
              Login: false,
              SignUp: true,
              Ekran3d: false,
              ScreenDikeyBolme: false,
              Nesting: false,
              Price: false,
              Materials: false,
              Hardwares: false,
              ScreenProducts: false,
            });
          }}
        >
          Kayıt
        </Menu.Item>
        <Menu.Item
          name="Çizim"
          onClick={() => {
            setmenu({
              main: false,
              Login: false,
              SignUp: false,
              Ekran3d: true,
              ScreenDikeyBolme: false,
              Nesting: false,
              Price: false,
              Materials: false,
              Hardwares: false,
              ScreenProducts: false,
            });
          }}
        >
          Çizim
        </Menu.Item>
        <Menu.Item
          name="2D"
          onClick={() => {
            setmenu({
              main: false,
              Login: false,
              SignUp: false,
              Ekran3d: false,
              ScreenDikeyBolme: true,
              Nesting: false,
              Price: false,
              Materials: false,
              Hardwares: false,
              ScreenProducts: false,
            });
          }}
        >
          2D
        </Menu.Item>
        <Menu.Item
          name="Nesting"
          onClick={() => {
            setmenu({
              main: false,
              Login: false,
              SignUp: false,
              Ekran3d: false,
              ScreenDikeyBolme: false,
              Nesting: true,
              Price: false,
              Materials: false,
              Hardwares: false,
              ScreenProducts: false,
            });
          }}
        >
          Nesting
        </Menu.Item>
        <Menu.Item
          name="Price"
          onClick={() => {
            setmenu({
              main: false,
              Login: false,
              SignUp: false,
              Ekran3d: false,
              ScreenDikeyBolme: false,
              Nesting: false,
              Price: true,
              Materials: false,
              Hardwares: false,
              ScreenProducts: false,
            });
          }}
        >
          Price
        </Menu.Item>
        <Menu.Item
          name="Materials"
          onClick={() => {
            setmenu({
              main: false,
              Login: false,
              SignUp: false,
              Ekran3d: false,
              ScreenDikeyBolme: false,
              Nesting: false,
              Price: false,
              Materials: true,
              Hardwares: false,
              ScreenProducts: false,
            });
          }}
        >
          Materials
        </Menu.Item>
        <Menu.Item
          name="Hardwares"
          onClick={() => {
            setmenu({
              main: false,
              Login: false,
              SignUp: false,
              Ekran3d: false,
              ScreenDikeyBolme: false,
              Nesting: false,
              Price: false,
              Materials: false,
              Hardwares: true,
              ScreenProducts: false,
            });
          }}
        >
          Hardwares
        </Menu.Item>
        <Menu.Item
          name="ScreenProducts"
          onClick={() => {
            setmenu({
              main: false,
              Login: false,
              SignUp: false,
              Ekran3d: false,
              ScreenDikeyBolme: false,
              Nesting: false,
              Price: false,
              Materials: false,
              Hardwares: false,
              ScreenProducts: true,
            });
          }}
        >
          Ürünler
        </Menu.Item>
      </Menu>
    );
  };
  /*******REGISTER******* */
  //@Login-----------------------------------------------------------------
  //Login1----------------
  const Login1 = () => {
    const login = () => {
      auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        console.log("authUser=", authUser);
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      });
    }, []);
    return (
      <div>
        <Button onClick={login} color="blue" fluid size="large">
          Google ile giriş yap
        </Button>

        <h2>user {user} </h2>
      </div>
    );
  };
  //--------------------
  const User = () => {
    const add = () => {
      db.collection("mobilya").add(mobilya);
    };
    return (
      <div>
        <h2>Kullanıcı= {user ? user.email : user} </h2>
        <h2>Girildi</h2>
        <Button onClick={() => auth.signOut()} color="blue" fluid size="large">
          çık
        </Button>
        <Button onClick={add} color="blue" fluid size="large">
          Ekle
        </Button>
      </div>
    );
  };
  //--------------------

  const Login = () => {
    const { register, errors, handleSubmit, setValue } = useForm();
    useEffect(() => {
      register({ name: "email" }, { required: true });
      register({ name: "password" }, { required: true, minLength: 6 });
    }, []);
    const onSubmit = (data, e) => {};
    //------------------

    //---------------------
    return (
      <Grid textAlign="center" verticalAlign="middle" className="container">
        <Grid.Column style={{ maxWidth: 450 }}>
          <h1>
            mobilya
            <span style={{ color: "blue" }}>plan</span>
          </h1>
          <Form size="large" className="form" onSubmit={handleSubmit(onSubmit)}>
            <Segment>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                name="email"
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
                placeholder="email adresi"
                type="email"
                error={errors.email ? true : false}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                name="password"
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
                placeholder="Şifre"
                type="password"
                error={errors.password ? true : false}
              />
              <Button color="blue" fluid size="large">
                Giriş Yap
              </Button>
            </Segment>
          </Form>
          <Message>Yeni misiniz ?_</Message>
        </Grid.Column>
      </Grid>
    );
  };
  //@SignUp------------------------------------------------------------------------
  const SignUp = () => {
    const [fbErrors, setFbErrors] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const { register, errors, handleSubmit, setValue } = useForm();

    useEffect(() => {
      register({ name: "username" }, { required: true });
      register({ name: "email" }, { required: true });
      register({ name: "password" }, { required: true, minLength: 6 });
    }, []);

    const onSubmit = ({ username, email, password }, e) => {
      setSubmitting(true);
      setFbErrors([]);

      const [first, last] = username.split(" ");
    };
    const displayErrors = () =>
      fbErrors.map((error, index) => <p key={index}>{error.message}</p>);

    return (
      <Grid textAlign="center" verticalAlign="middle" className="container">
        <Grid.Column style={{ maxWidth: 450 }}>
          <h1>
            mobilya
            <span style={{ color: "blue" }}>plan</span>
          </h1>
          <Form size="large" className="form" onSubmit={handleSubmit(onSubmit)}>
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                name="username"
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
                placeholder="Kullanıcı Adı"
                type="text"
                error={errors.username ? true : false}
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                name="email"
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
                placeholder="email adresi"
                type="email"
                error={errors.email ? true : false}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                name="password"
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
                placeholder="Şifre"
                type="password"
                error={errors.password ? true : false}
              />

              <Button color="blue" fluid size="large">
                Kaydol
              </Button>
            </Segment>
          </Form>

          <Message>Zaten bir hesabın varmı ?_</Message>
        </Grid.Column>
      </Grid>
    );
  };

  //-----------------------------------------------------------------------------
  /********************** */

  /***PARCALAR */
  const u = 1000;
  const TekParcalar = () => {
    mobilya.sol_yan = SolYan(mobilya);
    mobilya.sag_yan = SagYan(mobilya);
    mobilya.ust = Ust(mobilya);
    mobilya.baza = Baza(mobilya);
    mobilya.alt = Alt(mobilya);
  };

  //secilen bölge------
  const aktifBolge = (index) => {
    mobilya.bolge.map((item) => (item.aktif = false));
    mobilya.bolge[index].aktif = true;
  };
  //-----------------------------
  //@dikey_bolmeUpdate-----------------------------------------------------
  const DikeyBolmeUpdate = () => {
    const kalan_en = mobilya.X - mobilya.sol_yan.x - mobilya.sag_yan.x;
    const kalan_X = olculer.X - mobilya.sol_yan.x - mobilya.sag_yan.x;

    const kalan_boy =
      mobilya.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y;
    const kalan_Y = olculer.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y;

    const OranX = kalan_en / kalan_X;
    const OranY = kalan_boy / kalan_Y;
    const OranZ = mobilya.Z / olculer.Z;
    for (let index = 0; index < mobilya.dikey_bolme.length; index++) {
      mobilya.dikey_bolme[index].dahil = true;
      mobilya.dikey_bolme[index].tip = 3;
      mobilya.dikey_bolme[index].name = "dikey_bolme";
      mobilya.dikey_bolme[index].x0 =
        (mobilya.dikey_bolme[index].x0 / 2) * OranX;
      mobilya.dikey_bolme[index].y0 =
        (mobilya.dikey_bolme[index].y0 / 2) * OranY;
      mobilya.dikey_bolme[index].z0 =
        (mobilya.dikey_bolme[index].z0 / 2) * OranZ;
      mobilya.dikey_bolme[index].x = mobilya.dikey_bolme[index].x * OranX;
      mobilya.dikey_bolme[index].y = mobilya.dikey_bolme[index].y * OranY;
      mobilya.dikey_bolme[index].z = mobilya.dikey_bolme[index].z * OranZ;
    }
    console.log("dikeyBolme=", mobilya.dikey_bolme);
    return mobilya.dikey_bolme;
  };
  //---------------------------------------------
  //@YatayBolmeUpdate-----------------------------------------------------------
  const YatayBolmeUpdate = () => {
    const kalan_en = mobilya.X - mobilya.sol_yan.x - mobilya.sag_yan.x;
    const kalan_X = olculer.X - mobilya.sol_yan.x - mobilya.sag_yan.x;

    const kalan_boy =
      mobilya.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y;
    const kalan_Y = olculer.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y;

    const OranX = kalan_en / kalan_X;
    const OranY = kalan_boy / kalan_Y;
    const OranZ = mobilya.Z / olculer.Z;
    for (let index = 0; index < mobilya.yatay_bolme.length; index++) {
      mobilya.yatay_bolme[index].dahil = true;
      mobilya.yatay_bolme[index].tip = 3;
      mobilya.yatay_bolme[index].name = "yatay_bolme";
      mobilya.yatay_bolme[index].x0 = mobilya.yatay_bolme[index].x0 * OranX;
      mobilya.yatay_bolme[index].y0 = mobilya.yatay_bolme[index].y0 * OranY;
      mobilya.yatay_bolme[index].z0 = mobilya.yatay_bolme[index].z0 * OranZ;
      mobilya.yatay_bolme[index].x = mobilya.yatay_bolme[index].x * OranX;
      mobilya.yatay_bolme[index].y = mobilya.yatay_bolme[index].y * OranY;
      mobilya.yatay_bolme[index].z = mobilya.yatay_bolme[index].z * OranZ;
    }
    return mobilya.yatay_bolme;
  };
  //------------------------------------------------------
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

  //-----------------------------------------------------
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
  //@EKRANLAR -----------------------

  //@SolyanTip----------------------------------
  const SolyanTip = () => {
    return (
      <div>
        <h4>Tipi</h4>
        <form>
          <input
            type="checkbox"
            id="1"
            name="radio1"
            checked={solyanId === "1"}
            onChange={() => {
              mobilya.sol_yan.dahil = true;
              setsolyanId("1");
            }}
          />
          <label>Sol Yan</label>
          <br />
          <input
            type="checkbox"
            id="2"
            name="radio4"
            checked={solyanId === "2"}
            onChange={() => {
              mobilya.sol_yan.dahil = false;
              setsolyanId("2");
            }}
          />
          <label>Yok</label>
        </form>
      </div>
    );
  };
  //@SagyanTip-------------------------------------------------
  const SagyanTip = () => {
    return (
      <div>
        <h4>Tipi</h4>

        <input
          type="checkbox"
          id="1"
          name="radio1"
          checked={sagyanId === "1"}
          onChange={() => {
            mobilya.sag_yan.dahil = true;
            setsagyanId("1");
          }}
        />
        <label>Sağ Yan</label>
        <br />
        <input
          type="checkbox"
          id="2"
          name="radio4"
          checked={sagyanId === "2"}
          onChange={() => {
            mobilya.sag_yan.dahil = false;
            setsagyanId("2");
          }}
        />
        <label>Yok</label>
      </div>
    );
  };
  //-----------------------------------------------------------
  //@UstTip-----------------------------------------------
  const UstTip = () => {
    return (
      <div>
        <h4>Tipi</h4>
        <form>
          <input
            type="checkbox"
            id="1"
            name="radio1"
            checked={ustId === "1"}
            onChange={() => {
              mobilya.ust.dahil = true;
              setustId("1");
            }}
          />
          <label>Tam Ust</label>
          <br />
          <input
            type="checkbox"
            id="2"
            name="radio2"
            checked={ustId === "2"}
            onChange={() => {
              setustId("2");
            }}
          />
          <label>Kuşaklar</label>
          <br />
          <input
            type="checkbox"
            id="3"
            name="radio3"
            checked={ustId === "3"}
            onChange={() => {
              setustId("3");
            }}
          />
          <label>WebFrame</label>
          <br />
          <input
            type="checkbox"
            id="4"
            name="radio4"
            checked={ustId === "4"}
            onChange={() => {
              mobilya.ust.dahil = false;
              setustId("4");
            }}
          />
          <label>Yok</label>
        </form>
      </div>
    );
  };
  //----------------------------------------
  //@AltTip-----------------------------------------------
  const AltTip = () => {
    return (
      <div>
        <h4>Tipi</h4>
        <form>
          <input
            type="checkbox"
            id="1"
            name="radio1"
            checked={altId === "1"}
            onChange={() => {
              mobilya.Alt.dahil = true;
              setaltId("1");
            }}
          />
          <label>Tam Alt</label>
          <br />
          <input
            type="checkbox"
            id="2"
            name="radio2"
            checked={altId === "2"}
            onChange={() => {
              setaltId("2");
            }}
          />
          <label>Kuşaklar</label>
          <br />
          <input
            type="checkbox"
            id="3"
            name="radio3"
            checked={altId === "3"}
            onChange={() => {
              setaltId("3");
            }}
          />
          <label>WebFrame</label>
          <br />
          <input
            type="checkbox"
            id="4"
            name="radio4"
            checked={altId === "4"}
            onChange={() => {
              mobilya.alt.dahil = false;
              setaltId("4");
            }}
          />
          <label>Yok</label>
        </form>
      </div>
    );
  };
  //---------------------------------------
  //@SolyanMalzeme--------------------------------------

  const Malzeme = () => {
    const initialState = DataMaterials;
    const [material, setmaterial] = useState(initialState);
    return (
      <div>
        <form action="">
          <label htmlFor="color">Malzeme</label>

          <select
            id="malzeme"
            onChange={(e) => {
              const selectedMaterial = e.target.value;
              console.log("material=", selectedMaterial);
            }}
          >
            {material.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  };

  //----------------------------------------------
  const panes = [
    //@GenelAyarlar----------------------------------
    {
      menuItem: "Genel Ayarlar",
      render: () => (
        <Tab.Pane>
          <ul className="flex-container">
            <li className="flex-item1">
              <h3>Ölçüler</h3>
              <ul>
                <li className="girinti-block">
                  <label htmlFor="name" className="girinti-label">
                    Yükseklik
                  </label>
                  <input
                    type="number"
                    className="girinti"
                    placeholder={mobilya.Y}
                    id="name"
                    name="name"
                    onChange={(e) => {
                      olculer.Y = Number(e.target.value);
                    }}
                  />
                </li>
                <li className="girinti-block">
                  <label htmlFor="name" className="girinti-label">
                    Genişlik
                  </label>
                  <input
                    type="number"
                    className="girinti"
                    placeholder={mobilya.X}
                    id="name"
                    name="name"
                    onChange={(e) => {
                      olculer.X = Number(e.target.value);
                    }}
                  />
                </li>
                <li className="girinti-block">
                  <label htmlFor="name" className="girinti-label">
                    Derinlik
                  </label>
                  <input
                    type="number"
                    className="girinti"
                    placeholder={mobilya.Z}
                    id="name"
                    name="name"
                    onChange={(e) => {
                      olculer.Z = Number(e.target.value);
                    }}
                  />
                </li>
                <li className="girinti-block">
                  <label htmlFor="name" className="girinti-label">
                    Yükselt
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
            <li className="flex-item1">
              <h4>Sol Üst Birleşim</h4>
              <form>
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Yan</label>
                <img
                  className="image"
                  src="https://i.pinimg.com/236x/aa/c1/41/aac1414fccbb69f6d5f0432b78554fe9.jpg"
                  alt=""
                />
                <br />
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Ust</label>
                <img
                  className="image"
                  src="https://i.pinimg.com/236x/14/b0/26/14b0266237fec8c53ec6a0c01974180f.jpg"
                  alt=""
                />
              </form>
            </li>
            <li className="flex-item1">
              <h4>Sağ Üst Birleşim</h4>
              <form>
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Yan</label>
                <img className="image" src="images/airpods.jpg" alt="" />
                <br />
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Ust</label>
                <img className="image" src="images/airpods.jpg" alt="" />
              </form>
            </li>
            <li className="flex-item1">
              <h4>Sol Alt Birleşim</h4>
              <form>
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Yan</label>
                <img className="image" src="images/airpods.jpg" alt="" />
                <br />
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Ust</label>
                <img className="image" src="images/airpods.jpg" alt="" />
              </form>
            </li>
            <li className="flex-item1">
              <h4>Sağ Alt Birleşim</h4>
              <form>
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Yan</label>
                <img className="image" src="images/airpods.jpg" alt="" />
                <br />
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Ust</label>
                <img className="image" src="images/airpods.jpg" alt="" />
              </form>
            </li>
            <li className="flex-item">
              <Malzeme />
            </li>
            <li className="flex-item1">
              <SolyanTip />
            </li>
          </ul>
        </Tab.Pane>
      ),
    },
    //-----------------------------------------------

    //@SolyanAyarlar-----------------------------------
    {
      menuItem: "Sol Yan",
      render: () => (
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
      ),
    },
    //@SagyanAyarlar-----------------------------------------------------------------------
    {
      menuItem: "Sag Yan",
      render: () => (
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
      ),
    },
    //@UstAyarlar ------------------------------------------------
    {
      menuItem: "Üst",
      render: () => (
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
            {/*------------------------ */}

            <li className="flex-item">
              <Malzeme />
            </li>
            <li className="flex-item1">
              <UstTip />
            </li>
          </ul>
        </Tab.Pane>
      ),
    },
    //@AltAyarlar----------------------------------------------------------
    {
      menuItem: "Alt",
      render: () => (
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
      ),
    },
    //--------------------------------------------------------------------------
  ];

  //@ConstructionSettings----------------------------------------------------------------
  const ConstructionSettings = () => {
    let m = mobilya;
    // console.log('--mobilya=', mobilya)
    console.log("--olculer=", olculer);
    return (
      <div>
        <Tab panes={panes} />
        <button
          onClick={() => {
            if (olculer.X === m.X && olculer.Y === m.Y && olculer.Z === m.Z) {
              /*
               console.log('Ölçüler değişmedi')
              const Bolge = Bolgeler(mobilya, olculer);
              // console.log('Bolge=', Bolge)
              const DikeyBolme1 = BolgelerUpdate(mobilya, olculer);
              const DikeyBolme = DikeyBolmeUpdate(m);
              const YatayBolme = YatayBolmeUpdate(m);
              m.bolge = Bolge;
              m.dikey_bolme = DikeyBolme;
              m.yatay_bolme = YatayBolme;
              setmobilya({ ...mobilya, ...m });
*/
            } else {
              console.log("Ölçüler değişti");
              /*
              const Bolge = Bolgeler(mobilya, olculer);
              // console.log('Bolge=', Bolge)
              const DikeyBolme1 = BolgelerUpdate(mobilya, olculer);
              const DikeyBolme = DikeyBolmeUpdate();
              const YatayBolme = YatayBolmeUpdate();
              m.bolge = Bolge;
              m.dikey_bolme = DikeyBolme;
              m.yatay_bolme = YatayBolme;
              setmobilya({ ...mobilya, ...m });
              const dene = {
                X: m.X,
                Y: m.Y,
                Z: m.Z,
              };
              setOlculer(dene);
              */
            }
            //------------------------------------
            //setOlculer({ X: 2000, Y: 1000, Z: 600 });
            const olcu = { X: 2000, Y: 2500, Z: 300 };
            let yeni;
            if (olculer.X !== mobilya.X) {
              yeni = EnDegisimi(mobilya, olculer);
            }
            if (olculer.Y !== mobilya.Y) {
              yeni = BoyDegisimi(mobilya, olculer);
            }
            if (olculer.Z !== mobilya.Z) {
              yeni = DerinlikDegisim(mobilya, olculer);
            }

            setmobilya({ ...mobilya, ...yeni });

            //---------------------------------
          }}
        >
          Tamam
        </button>
        <button onClick={() => {}}>İptal</button>
      </div>
    );
  };

  //-------------------------------------------------------------------

  //@Materials------------------------------------------------------------------------------
  const Materials = () => {
    //console.log('DataMaterials=', DataMaterials)
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className="adı">Adı</Table.HeaderCell>
              <Table.HeaderCell className="en">En</Table.HeaderCell>
              <Table.HeaderCell className="boy">Boy</Table.HeaderCell>
              <Table.HeaderCell className="kalinlik">Kalınlık</Table.HeaderCell>
              <Table.HeaderCell>Malzeme</Table.HeaderCell>
              <Table.HeaderCell>Fiyat</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {DataMaterials.map((p, index) => (
            <Table.Body key={index}>
              <Table.Row>
                <Table.Cell>{p.name}</Table.Cell>
                <Table.Cell>{p.width}</Table.Cell>
                <Table.Cell>{p.length}</Table.Cell>
                <Table.Cell>{p.thickness}</Table.Cell>
                <Table.Cell>{p.stock_type}</Table.Cell>
                <Table.Cell>{p.cost_per_sheet}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    );
  };

  //@ScreenProducts-----------------------------------------------------------------------------------

  const ScreenProducts = () => (
    <div>
      <h3>yapacagınız ürüne en yakın resmi seçiniz</h3>
      <ul className="flex-container-products">
        <li className="flex-item-products">
          <label htmlFor="male">Yan</label>
          <br />
          <img
            className="image-products"
            src="https://i.pinimg.com/236x/aa/c1/41/aac1414fccbb69f6d5f0432b78554fe9.jpg"
            alt=""
          />
        </li>
        <li className="flex-item-products">
          <label htmlFor="female">Ust</label>
          <br />
          <img
            className="image-products"
            src="https://i.pinimg.com/236x/14/b0/26/14b0266237fec8c53ec6a0c01974180f.jpg"
            alt=""
          />
        </li>
        <li className="flex-item-products">
          <label htmlFor="female">Ust</label>
          <br />
          <img
            className="image-products"
            src="https://i.pinimg.com/236x/14/b0/26/14b0266237fec8c53ec6a0c01974180f.jpg"
            alt=""
          />
        </li>
        <li className="flex-item-products">
          <label htmlFor="male">Yan</label>
          <br />
          <img
            className="image-products"
            src="https://i.pinimg.com/236x/aa/c1/41/aac1414fccbb69f6d5f0432b78554fe9.jpg"
            alt=""
          />
        </li>
        <li className="flex-item-products">
          <label htmlFor="male">Yan</label>
          <br />
          <img
            className="image-products"
            src="https://cdn.decoist.com/wp-content/uploads/2014/05/Trendy-wall-unit-system-for-the-living-room-in-minimalist-white.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
  //@RETURN----------------------------------------------------------------------------------
  /************* */
  return (
    <div className="App">
      <Header menu={menu} />
      {user ? <User /> : <Login1 />}
      {menu.Login && <Login />}
      {menu.SignUp && <SignUp />}
      {menu.Ekran3d && (
        <div>
          <Ekran3d />
          <ConstructionSettings />
        </div>
      )}
      {menu.ScreenDikeyBolme && (
        <div>
          <Ekran2d />
          <ConstructionSettings />
        </div>
      )}
      {menu.Nesting && <Nesting mobilya={mobilya} />}
      {menu.Price && <Price mobilya={mobilya} />}
      {menu.Materials && <Materials />}
      {menu.Hardwares && <Hardwares />}
      {menu.ScreenProducts && <ScreenProducts />}
    </div>
  );
};
export default Program;
