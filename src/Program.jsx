import React, { useState, useEffect, useContext } from "react";
import { Form, Segment, Button, Grid, Message, Tab } from "semantic-ui-react";

import { useForm } from "react-hook-form";

import KayitSil from "./components/KayitSil";

import EnDegisimi from "./components/EnDegisimi";
import BoyDegisimi from "./components/BoyDegisimi";

import DerinlikDegisim from "./components/DerinlikDegisim";
//import { Data } from "./components/Data";
import firebase from "firebase/app";
import "firebase/auth";
import db, { auth, provider } from "./firebase";
import "firebase/firestore";
import Login1 from "./components/Login1";

import { MobilyaContext } from "./contexts/MobilyaContext";
import { MenuContext } from "./contexts/MenuContext";
import { DataSifirlama } from "./components/DataSifirlama";
import Ekran3d from "./ekranlar/Ekran3d";

import Ekran2d from "./ekranlar/Ekran2d";
import Nesting from "./ekranlar/Nesting";

import Hardwares from "./ekranlar/Hardwares";
import Price from "./ekranlar/Price";
import Materials from "./ekranlar/Materials";

import Header from "./ekranlar/Header";
import ScreenProducts from "./ekranlar/ScreenProducts";
import GenelAyarlar from "./tab/GenelAyarlar";

import SolyanAyarlar from "./tab/SolyanAyarlar";
import SagyanAyarlar from "./tab/SagyanAyarlar";
import UstAyarlar from "./tab/UstAyarlar";
import AltAyarlar from "./tab/AltAyarlar";
import KayitliDolapListesi from "./ekranlar/KayitliDolapListesi";
import SolYanPopupMenu from "./popupmenu/SolYanPopupMenu";

//@Program----------------------------------------------------------
let bolge_x = -1;
let bolge_y = -1;
const Program = () => {
  //useStateler
  const [user, setUser] = useState(null);

  //const [menu, setmenu] = useState(initialState_menu);

  const [secilenBolge, setSecilenBolge] = useState(0);
  const [secilenKayit, setSecilenKayit] = useState(0);
  const [secilenKayitModel, setSecilenKayitModel] = useState(0);
  const [secilen, setSecilen] = useState({
    bolge: false,
    kapak: false,
    kapak_profil: false,
  });
  //
  const { mobilya, setmobilya } = useContext(MobilyaContext);
  const { menu, setmenu } = useContext(MenuContext);
  console.log("Program_mobilya=", mobilya);

  /********* */
  useEffect(() => {
    setmobilya(DataSifirlama(mobilya));
  }, []);
  /********* */

  const initialState_olculer = {
    X: mobilya.X,
    Y: mobilya.Y,
    Z: mobilya.Z,
  };
  const [olculer, setOlculer] = useState(initialState_olculer);

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
    //mobilya.sol_yan = SolYan(mobilya);
    //mobilya.sag_yan = SagYan(mobilya);
    // mobilya.ust = Ust(mobilya);
    //  mobilya.baza = Baza(mobilya);
    // mobilya.alt = Alt(mobilya);
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

  //@EKRANLAR -----------------------

  const panes = [
    //@GenelAyarlar----------------------------------
    {
      menuItem: "Genel Ayarlar",
      render: () => <GenelAyarlar mobilya={mobilya} olculer={olculer} />,
    },
    //-----------------------------------------------

    //@SolyanAyarlar-----------------------------------
    {
      menuItem: "Sol Yan",
      render: () => <SolyanAyarlar mobilya={mobilya} />,
    },
    //@SagyanAyarlar-----------------------------------------------------------------------
    {
      menuItem: "Sag Yan",
      render: () => <SagyanAyarlar mobilya={mobilya} />,
    },
    //@UstAyarlar ------------------------------------------------
    {
      menuItem: "Üst",
      render: () => <UstAyarlar mobilya={mobilya} />,
    },
    //@AltAyarlar----------------------------------------------------------
    {
      menuItem: "Alt",
      render: () => <AltAyarlar mobilya={mobilya} />,
      //--------------------------------------------------------------------------
    },
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
            } else {
              console.log("Ölçüler değişti");
            }
            //------------------------------------
            //setOlculer({ X: 2000, Y: 1000, Z: 600 });
            const olcu = { X: 2000, Y: 2000, Z: 300 };
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

  //@RETURN----------------------------------------------------------------------------------
  /************* */
  return (
    <div className="App">
      <Header menu={(menu, setmenu)} />
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
      {menu.KayitliDolapListesi && <KayitliDolapListesi />}
    </div>
  );
};
export default Program;
