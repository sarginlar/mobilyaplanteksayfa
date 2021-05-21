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
//@ScreenDikme  //@DikmeUpdate  //@RafUpdate  //@BolgesUpdate
//@ScreenCabinet
//@Nest
//@Nesting
//@Price
//@Materials
//@Hardwares
//@ScreenProducts
//@RETURN
//@ConstructionSettings   //@SolyanTip   //@SagyanTip  //@UstTip  //@UstAyarlar
//@GenelAyarlar
import React, { useState, useEffect, useReducer, useRef, Suspense } from 'react'
import { Form, Segment, Button, Grid, Message, Menu, Table, Divider, Card, Tab, Container, Input, Image, Checkbox, Dropdown } from 'semantic-ui-react'
import Path, { Rect } from 'react-svg-path'
import { UncontrolledReactSVGPanZoom, ControlledReactSVGPanZoom } from 'react-svg-pan-zoom'
import { useForm } from 'react-hook-form'
import * as THREE from 'three'
import { Canvas, extend, useLoader } from 'react-three-fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { Text } from 'troika-three-text'
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE, fitSelection, zoomOnViewerCenter, fitToViewer } from 'react-svg-pan-zoom'
import RafAyarla from './components/RafAyarla'
import DikmeAyarla from './components/DikmeAyarla'
import Coordinat from './components/Coordinat'
import Kapak from './components/Kapak'
import CekmeceKapak from './components/CekmeceKapak'
import CekmeceKasa from './components/CekmeceKasa'
import KayitEkleDikey from './components/KayitEkleDikey'
import KayitEkleYatay from './components/KayitEkleYatay'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
const initialState_menu = {
  main: false,
  Login: false,
  SignUp: false,
  ScreenCabinet: false,
  ScreenDikme: false,
  Nesting: false,
  Price: false,
  Materials: false,
  Hardwares: false,
  ScreenProducts: false,
}

//@DataMaterials-----------------------------------------------------------
const DataMaterials = [
  {
    id: 1,
    stock_type: 'Sheet Stock', // "Board stock","Banding Stock","Sheet stock"
    company: 'starwood',
    name: 'Kiraz',
    length: 3660,
    width: 1830,
    thickness: 18,
    cost_per_sheet: 200,
    image: '',
    grain: true,
    single_side: false,
  },
  {
    id: 1,
    stock_type: 'Sheet Stock', // "Board stock","Banding Stock","Sheet stock"
    company: 'starwood',
    name: 'Armut',
    length: 3660,
    width: 1830,
    thickness: 18,
    cost_per_sheet: 200,
    image: '',
    grain: true,
    single_side: false,
  },
]
//@DataHardware---------------------------------------------------------
const DataHardware = {
  hinge: [{ manufacturer: 'samet', product_code: '', description: '', price: 100 }],
  hinge_mount: [{ manufacturer: 'samet' }],
  kd_hardware: [{ manufacturer: 'samet' }],
  molding: [{ manufacturer: 'samet' }],
  pocket_screw: [{ manufacturer: 'samet' }],
  pull: [{ manufacturer: 'samet' }],
  slide: [{ manufacturer: 'samet' }],
  slide_mount: [{ manufacturer: 'samet' }],
  user_defined_hardware: [{ manufacturer: 'samet' }],
  wood_component: [{ manufacturer: 'samet' }],
}
//@Program----------------------------------------------------------
let bolge_x = -1
let bolge_y = -1
const Program = () => {
  //useStateler

  const [menu, setmenu] = useState(initialState_menu)
  const [solyanId, setsolyanId] = useState('1')
  const [sagyanId, setsagyanId] = useState('1')
  const [ustId, setustId] = useState('1')
  const [altId, setaltId] = useState('1')
  const [secilenBolge, setSecilenBolge] = useState(0)
  const [secilenRaf, setSecilenRaf] = useState(0)
  const [secilenDikme, setSecilenDikme] = useState(0)
  const [secilenKapak, setSecilenKapak] = useState(0)
  const [secilenCekmeceKapak, setSecilenCekmeceKapak] = useState(0)
  const [secilenCekmeceKasa, setSecilenCekmeceKasa] = useState(0)

  /*
  //REDUCER-------------------------------
  const initialState = {
    id: 1,
    model_no: '101',
    image: 'images/img_1.jpg',
    name: 'gardrop',
    oda_tipi: 'yatak odası',
    model_tipi: 'modern',
    kapak_tipi: 'düz',
    kapak_modeli: '101',
    kapak_firması: 'dekodoor',
    dolap_sekli: 'düz',
    hesap_prg: 'cabinet_calculation',
    tip: 1,
    X0: 0,
    Y0: 0,
    Z0: 0,
    X: 1800,
    Y: 2500,
    Z: 600,
    description: 'e ',
    brand: 'Apple',
    category: 'Electronics',
    Price: 89.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
    sol_yan: { dahil: true, tip: 1, name: 'Sol Yan', material_id: 18, x0: -991, y0: 0, z0: 0, x: 36, y: 2100, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
    sag_yan: { dahil: true, tip: 2, name: 'Sağ Yan', material_id: 18, x0: 991, y0: 0, z0: 300, x: 18, y: 2100, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
    alt: { dahil: true, tip: 2, name: 'Alt', material_id: 36, x0: 0, y0: -996, z0: 0, x: 1964, y: 18, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
    ust: { dahil: true, tip: 3, name: 'Üst', material_id: 36, x0: 0, y0: 1041, z0: 0, x: 1964, y: 18, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
    baza: { dahil: true, tip: 3, name: 'Baza', material_id: 18, x0: 0, y0: -1041, z0: 0, x: 1964, y: 100, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
    kapak: [{ dahil: true, tip: 3, name: 'Kapak', material_id: 18, x0: 0, y0: 0, z0: 0, x: 1000, y: 100, z: 18, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],
    sol_pervaz: { dahil: false, tip: 3, name: 'Sol Pervaz', material_id: 18, x0: 0, y0: 0, z0: 0, x: 100, y: 500, z: 18, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
    sag_pervaz: { dahil: false, tip: 3, name: 'Sag Pervaz', material_id: 18, x0: 0, y0: 0, z0: 0, x: 100, y: 1000, z: 18, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
    dikme: [{ dahil: true, tip: 3, name: 'Dikme', material_id: 18, x0: 0, y0: 0, z0: 0, x: 18, y: 1628, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],
    raf: [
      { dahil: true, tip: 3, name: 'Raf', material_id: 18, x0: -495, y0: 0, z0: 0, x: 973, y: 18, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
      { dahil: true, tip: 3, name: 'Raf', material_id: 18, x0: 495, y0: 0, z0: 0, x: 973, y: 18, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
    ],
    arkalik: [{ dahil: true, tip: 3, name: 'Arkalık', material_id: 18, x0: 0, y0: 0, z0: 0, x: 1000, y: 1000, z: 18, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],
    bolge: [],
    parca: [
      { tip: 1, name: 'Sol Yan', material_id: 1, u1: 0, u2: 0, x0: -991, y0: 0, z0: 0, x: 18, y: 2100, z: 600 }, //sol_yan
      { tip: 2, name: 'Alt', material_id: 1, u1: 1, u2: 1, x0: 0, y0: -1041, z0: 0, x: 1964, y: 18, z: 600 }, //alt
      { tip: 2, name: 'Üst', material_id: 1, u1: 1, u2: 1, x0: 0, y0: 1041, z0: 0, x: 1964, y: 18, z: 600 }, //üst
      { tip: 1, name: 'Sağ Yan', material_id: 1, u1: 0, u2: 0, x0: 991, y0: 0, z0: 0, x: 18, y: 2100, z: 600 }, //sag_yan
      { tip: 1, name: 'Dikme', material_id: 1, u1: 0, u2: 0, x0: 0, y0: 0, z0: 0, x: 18, y: 2064, z: 600 }, //Dikme
      { tip: 3, name: 'kapak', material_id: 1, u1: 0, u2: 0, x0: 0, y0: 0, z0: 291, x: 1000, y: 2064, z: 18 }, //Kapak
    ],
  }
  // reducer fonksiyonu----------------------
  const reducer = (state, action) => {
    switch (action.type) {
      case 'MOBILYA_UPDATE':
        return { numGuitar: state.numBuitar + 1 }
      default:
        return state
    }
  }

  const [mobilya, dispatch] = useReducer(reducer, initialState)
*/
  //----------------------------

  /********* */
  //@DataSifirlama-------------------------------------------------
  const DataSifirlama = (props) => {
    const b = props
    if (b.sol_yan.dahil) {
    } else {
      b.sol_yan = { dahil: false, tip: 1, name: 'Sol Yan-yok', material_id: 0, x0: 0, y0: 0, z0: 0, x: 0, y: 0, z: 0, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }
    }
    if (b.sag_yan.dahil) {
    } else {
      b.sag_yan = { dahil: false, tip: 1, name: 'Sag Yan-yok', material_id: 0, x0: 0, y0: 0, z0: 0, x: 0, y: 0, z: 0, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }
    }
    if (b.ust.dahil) {
    } else {
      b.ust = { dahil: false, tip: 1, name: 'Ust-yok', material_id: 0, x0: 0, y0: 0, z0: 0, x: 0, y: 0, z: 0, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }
    }
    if (b.alt.dahil) {
    } else {
      b.alt = { dahil: false, tip: 1, name: 'Alt-yok', material_id: 0, x0: 0, y0: 0, z0: 0, x: 0, y: 0, z: 0, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }
    }
    if (b.baza) {
    } else {
      b.baza = { dahil: false, tip: 1, name: 'Baza-yok', material_id: 0, x0: 0, y0: 0, z0: 0, x: 0, y: 0, z: 0, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }
    }
    if (b.sol_pervaz.dahil) {
    } else {
      b.sol_pervaz = { dahil: false, tip: 1, name: 'Sol Pervaz-yok', material_id: 0, x0: 0, y0: 0, z0: 0, x: 0, y: 0, z: 0, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }
    }
    if (b.sag_pervaz.dahil) {
    } else {
      b.sag_pervaz = { dahil: false, tip: 1, name: 'Sag Pervaz-yok', material_id: 0, x0: 0, y0: 0, z0: 0, x: 0, y: 0, z: 0, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }
    }
    return b
  }
  /********* */
  const [mobilya, setmobilya] = useState(
    DataSifirlama({
      id: 1,
      model_no: '101',
      image: 'images/img_1.jpg',
      name: 'gardrop',
      oda_tipi: 'yatak odası',
      model_tipi: 'modern',
      kapak_tipi: 'düz',
      kapak_modeli: '101',
      kapak_firması: 'dekodoor',
      dolap_sekli: 'düz',
      hesap_prg: 'cabinet_calculation',
      tip: 1,
      X0: 0,
      Y0: 0,
      Z0: 0,
      X: 1800,
      Y: 2000,
      Z: 600,
      description: 'e ',
      brand: 'Apple',
      category: 'Electronics',
      Price: 89.99,
      countInStock: 3,
      rating: 0,
      numReviews: 0,
      sol_yan: { dahil: true, tip: 1, name: 'Sol Yan', material_id: 18, x0: -991, y0: 0, z0: 0, x: 36, y: 2100, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
      sol_pervaz: { dahil: false, tip: 3, name: 'Sol Pervaz', material_id: 18, x0: 0, y0: 0, z0: 0, x: 100, y: 500, z: 18, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
      sag_yan: { dahil: true, tip: 2, name: 'Sağ Yan', material_id: 18, x0: 991, y0: 0, z0: 300, x: 18, y: 2100, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
      alt: { dahil: true, tip: 2, name: 'Alt', material_id: 36, x0: 0, y0: -996, z0: 0, x: 1964, y: 18, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
      ust: { dahil: true, tip: 3, name: 'Üst', material_id: 36, x0: 0, y0: 1041, z0: 0, x: 1964, y: 18, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
      baza: { dahil: true, tip: 3, name: 'Baza', material_id: 18, x0: 0, y0: -1041, z0: 0, x: 1964, y: 100, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
      kapak: [],
      cekmece_kapak: [],
      cekmece_kasa: [],
      kayit_ekle_dikey: [],
      kayit_ekle_yatay: [],
      sag_pervaz: { dahil: false, tip: 3, name: 'Sag Pervaz', material_id: 18, x0: 0, y0: 0, z0: 0, x: 100, y: 1000, z: 18, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 },
      dikme: [],
      raf: [],
      arkalik: [{ dahil: true, tip: 3, name: 'Arkalık', material_id: 18, x0: 0, y0: 0, z0: 0, x: 1000, y: 1000, z: 18, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],
      bolge: [],
      parca: [
        { tip: 1, name: 'Sol Yan', material_id: 1, u1: 0, u2: 0, x0: -991, y0: 0, z0: 0, x: 18, y: 2100, z: 600 }, //sol_yan
        { tip: 2, name: 'Alt', material_id: 1, u1: 1, u2: 1, x0: 0, y0: -1041, z0: 0, x: 1964, y: 18, z: 600 }, //alt
        { tip: 2, name: 'Üst', material_id: 1, u1: 1, u2: 1, x0: 0, y0: 1041, z0: 0, x: 1964, y: 18, z: 600 }, //üst
        { tip: 1, name: 'Sağ Yan', material_id: 1, u1: 0, u2: 0, x0: 991, y0: 0, z0: 0, x: 18, y: 2100, z: 600 }, //sag_yan
        { tip: 1, name: 'Dikme', material_id: 1, u1: 0, u2: 0, x0: 0, y0: 0, z0: 0, x: 18, y: 2064, z: 600 }, //Dikme
        { tip: 3, name: 'kapak', material_id: 1, u1: 0, u2: 0, x0: 0, y0: 0, z0: 291, x: 1000, y: 2064, z: 18 }, //Kapak
      ],
    })
  )

  const initialState_olculer = {
    X: mobilya.X,
    Y: mobilya.Y,
    Z: mobilya.Z,
  }
  const [olculer, setOlculer] = useState(initialState_olculer)
  //@Header-------------------------------------------------------
  const Header = () => {
    return (
      <Menu stackable>
        <Menu.Item
          name='anasayfa'
          onClick={() => {
            setmenu({ main: true, Login: false, SignUp: false, ScreenCabinet: false, ScreenDikme: false, Nesting: false, Price: false, Materials: false, Hardwares: false, ScreenProducts: false })
          }}
        >
          AnaSayfa
        </Menu.Item>

        <Menu.Item
          name='Giriş'
          onClick={() => {
            setmenu({ main: false, Login: true, SignUp: false, ScreenCabinet: false, ScreenDikme: false, Nesting: false, Price: false, Materials: false, Hardwares: false, ScreenProducts: false })
          }}
        >
          Giriş
        </Menu.Item>

        <Menu.Item
          name='Kayıt'
          onClick={() => {
            setmenu({ main: false, Login: false, SignUp: true, ScreenCabinet: false, ScreenDikme: false, Nesting: false, Price: false, Materials: false, Hardwares: false, ScreenProducts: false })
          }}
        >
          Kayıt
        </Menu.Item>
        <Menu.Item
          name='Çizim'
          onClick={() => {
            setmenu({ main: false, Login: false, SignUp: false, ScreenCabinet: true, ScreenDikme: false, Nesting: false, Price: false, Materials: false, Hardwares: false, ScreenProducts: false })
          }}
        >
          Çizim
        </Menu.Item>
        <Menu.Item
          name='2D'
          onClick={() => {
            setmenu({ main: false, Login: false, SignUp: false, ScreenCabinet: false, ScreenDikme: true, Nesting: false, Price: false, Materials: false, Hardwares: false, ScreenProducts: false })
          }}
        >
          2D
        </Menu.Item>
        <Menu.Item
          name='Nesting'
          onClick={() => {
            setmenu({ main: false, Login: false, SignUp: false, ScreenCabinet: false, ScreenDikme: false, Nesting: true, Price: false, Materials: false, Hardwares: false, ScreenProducts: false })
          }}
        >
          Nesting
        </Menu.Item>
        <Menu.Item
          name='Price'
          onClick={() => {
            setmenu({ main: false, Login: false, SignUp: false, ScreenCabinet: false, ScreenDikme: false, Nesting: false, Price: true, Materials: false, Hardwares: false, ScreenProducts: false })
          }}
        >
          Price
        </Menu.Item>
        <Menu.Item
          name='Materials'
          onClick={() => {
            setmenu({ main: false, Login: false, SignUp: false, ScreenCabinet: false, ScreenDikme: false, Nesting: false, Price: false, Materials: true, Hardwares: false, ScreenProducts: false })
          }}
        >
          Materials
        </Menu.Item>
        <Menu.Item
          name='Hardwares'
          onClick={() => {
            setmenu({ main: false, Login: false, SignUp: false, ScreenCabinet: false, ScreenDikme: false, Nesting: false, Price: false, Materials: false, Hardwares: true, ScreenProducts: false })
          }}
        >
          Hardwares
        </Menu.Item>
        <Menu.Item
          name='ScreenProducts'
          onClick={() => {
            setmenu({ main: false, Login: false, SignUp: false, ScreenCabinet: false, ScreenDikme: false, Nesting: false, Price: false, Materials: false, Hardwares: false, ScreenProducts: true })
          }}
        >
          Ürünler
        </Menu.Item>
      </Menu>
    )
  }
  /*******REGISTER******* */
  //@Login-----------------------------------------------------------------
  const Login = () => {
    const { register, errors, handleSubmit, setValue } = useForm()
    useEffect(() => {
      register({ name: 'email' }, { required: true })
      register({ name: 'password' }, { required: true, minLength: 6 })
    }, [])
    const onSubmit = (data, e) => {}

    return (
      <Grid textAlign='center' verticalAlign='middle' className='container'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <h1>
            mobilya
            <span style={{ color: 'blue' }}>plan</span>
          </h1>
          <Form size='large' className='form' onSubmit={handleSubmit(onSubmit)}>
            <Segment>
              <Form.Input
                fluid
                icon='mail'
                iconPosition='left'
                name='email'
                onChange={(event, { name, value }) => {
                  setValue(name, value)
                }}
                placeholder='email adresi'
                type='email'
                error={errors.email ? true : false}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='password'
                onChange={(event, { name, value }) => {
                  setValue(name, value)
                }}
                placeholder='Şifre'
                type='password'
                error={errors.password ? true : false}
              />
              <Button color='blue' fluid size='large'>
                Giriş Yap
              </Button>
            </Segment>
          </Form>
          <Message>Yeni misiniz ?_</Message>
        </Grid.Column>
      </Grid>
    )
  }
  //@SignUp------------------------------------------------------------------------
  const SignUp = () => {
    const [fbErrors, setFbErrors] = useState([])
    const [submitting, setSubmitting] = useState(false)

    const { register, errors, handleSubmit, setValue } = useForm()

    useEffect(() => {
      register({ name: 'username' }, { required: true })
      register({ name: 'email' }, { required: true })
      register({ name: 'password' }, { required: true, minLength: 6 })
    }, [])

    const onSubmit = ({ username, email, password }, e) => {
      setSubmitting(true)
      setFbErrors([])

      const [first, last] = username.split(' ')
    }
    const displayErrors = () => fbErrors.map((error, index) => <p key={index}>{error.message}</p>)

    return (
      <Grid textAlign='center' verticalAlign='middle' className='container'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <h1>
            mobilya
            <span style={{ color: 'blue' }}>plan</span>
          </h1>
          <Form size='large' className='form' onSubmit={handleSubmit(onSubmit)}>
            <Segment>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                name='username'
                onChange={(event, { name, value }) => {
                  setValue(name, value)
                }}
                placeholder='Kullanıcı Adı'
                type='text'
                error={errors.username ? true : false}
              />
              <Form.Input
                fluid
                icon='mail'
                iconPosition='left'
                name='email'
                onChange={(event, { name, value }) => {
                  setValue(name, value)
                }}
                placeholder='email adresi'
                type='email'
                error={errors.email ? true : false}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='password'
                onChange={(event, { name, value }) => {
                  setValue(name, value)
                }}
                placeholder='Şifre'
                type='password'
                error={errors.password ? true : false}
              />

              <Button color='blue' fluid size='large'>
                Kaydol
              </Button>
            </Segment>
          </Form>

          <Message>Zaten bir hesabın varmı ?_</Message>
        </Grid.Column>
      </Grid>
    )
  }

  //-----------------------------------------------------------------------------
  /********************** */

  /***PARCALAR */
  const u = 1000
  //@SolYan---------------------------------------------------------------------------------
  const SolYan = () => {
    switch (mobilya.tip) {
      case 1: //1 nolu kasa tipi,tutma yeri modul merkezi
        mobilya.sol_yan.x0 = mobilya.X0 - mobilya.X / 2 + mobilya.sol_yan.xg0 / 2 + mobilya.sol_yan.material_id / 2
        mobilya.sol_yan.y0 = mobilya.Y0 - mobilya.sol_yan.yg0 / 2 + mobilya.sol_yan.yg1 / 2
        mobilya.sol_yan.z0 = mobilya.Z0 - mobilya.sol_pervaz.material_id / 2 + mobilya.sol_yan.zg0 / 2 - mobilya.sol_yan.zg1 / 2
        mobilya.sol_yan.x = mobilya.sol_yan.material_id
        mobilya.sol_yan.y = mobilya.Y - mobilya.sol_yan.yg0 - mobilya.sol_yan.yg1
        mobilya.sol_yan.z = mobilya.Z - mobilya.sol_pervaz.material_id - mobilya.sol_yan.zg0 - mobilya.sol_yan.zg1
        break
      case 2:
        break
      default:
        break
    }
  }
  //@SagYan---------------------------------------------------------------------------------
  const SagYan = () => {
    switch (mobilya.tip) {
      case 1: //1 nolu kasa tipi merkez odaklamalı
        mobilya.sag_yan.x0 = mobilya.X0 + mobilya.X / 2 - mobilya.sag_yan.xg0 / 2 - mobilya.sag_yan.material_id / 2
        mobilya.sag_yan.y0 = mobilya.Y0 - mobilya.sag_yan.yg0 / 2 + mobilya.sag_yan.yg1 / 2
        mobilya.sag_yan.z0 = mobilya.Z0 - mobilya.sag_pervaz.material_id / 2 + mobilya.sag_yan.zg0 / 2 - mobilya.sag_yan.zg1 / 2
        mobilya.sag_yan.x = mobilya.sag_yan.material_id
        mobilya.sag_yan.y = mobilya.Y - mobilya.sag_yan.yg0 - mobilya.sag_yan.yg1
        mobilya.sag_yan.z = mobilya.Z - mobilya.sag_pervaz.material_id - mobilya.sag_yan.zg0 - mobilya.sag_yan.zg1
        break
      case 2:
        break
      default:
        break
    }
  }
  //@Ust-----------------------------------------------------------------------------
  const Ust = () => {
    switch (mobilya.tip) {
      case 1: //1 nolu kasa tipi merkez odaklamalı
        mobilya.ust.x0 = mobilya.X0 + mobilya.ust.xg0 / 2 - mobilya.ust.xg1 / 2 + mobilya.sol_yan.material_id / 2 - mobilya.sag_yan.material_id / 2
        mobilya.ust.y0 = mobilya.Y0 + (mobilya.Y / 2 - mobilya.ust.material_id / 2 - mobilya.ust.yg0)
        mobilya.ust.z0 = mobilya.Z0 + mobilya.ust.zg0 / 2 - mobilya.ust.zg1 / 2
        mobilya.ust.x = mobilya.X - mobilya.sol_yan.material_id - mobilya.sag_yan.material_id - mobilya.ust.xg0 - mobilya.ust.xg1
        mobilya.ust.y = mobilya.ust.material_id
        mobilya.ust.z = mobilya.Z - mobilya.ust.zg0 - mobilya.ust.zg1
        break
      case 2:
        break
      default:
        break
    }
  }
  //@Baza---------------------------------------------------------------------------------
  const Baza = () => {
    switch (mobilya.tip) {
      case 1: //1 nolu kasa tipi merkez odaklamalı
        mobilya.baza.x0 = mobilya.X0
        mobilya.baza.y0 = -200
        mobilya.baza.y0 = mobilya.Y0 - (mobilya.Y / 2 - mobilya.baza.y / 2)
        mobilya.baza.z0 = mobilya.Z0 + mobilya.Z / 2 - mobilya.baza.material_id / 2 - 10
        mobilya.baza.x = mobilya.X - (mobilya.sol_yan.x + mobilya.sag_yan.x)
        mobilya.baza.y = 100
        mobilya.baza.z = 18
        break
      case 2:
        break
      default:
        break
    }
  }
  //@Alt--------------------------------------------------------------------------
  const Alt = () => {
    switch (mobilya.tip) {
      case 1: //1 nolu kasa tipi merkez odaklamalı
        mobilya.alt.x0 = mobilya.X0 + mobilya.alt.xg0 / 2 - mobilya.alt.xg1 / 2 + mobilya.sol_yan.material_id / 2 - mobilya.sag_yan.material_id / 2
        mobilya.alt.y0 = mobilya.Y0 - mobilya.Y / 2 - mobilya.alt.yg0 / 2 + mobilya.alt.yg1 / 2 + mobilya.alt.material_id / 2 + mobilya.baza.y
        mobilya.alt.z0 = mobilya.Z0 - mobilya.alt.zg0 / 2 + mobilya.alt.zg1 / 2
        mobilya.alt.x = mobilya.X - mobilya.sol_yan.material_id - mobilya.sag_yan.material_id - mobilya.alt.xg0 - mobilya.alt.xg1
        mobilya.alt.y = mobilya.alt.material_id
        mobilya.alt.z = mobilya.Z - mobilya.alt.zg0 - mobilya.alt.zg1
        break
      case 2:
        break
      default:
        break
    }
  }
  //@Bolges----------------------------------------------------------------------------------
  const renk = 'yellow'
  let action = 'yaz'

  /*
  const Bolges = () => {
    //-----
    switch (action) {
      case 'yaz':
        if (mobilya.bolge.length === 0) {
          const kalan_en = mobilya.X - mobilya.sol_yan.x - mobilya.sag_yan.x
          const kalan_boy = mobilya.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y
          const mcx = mobilya.X0
          const mcy = mobilya.Y0 + mobilya.alt.y / 2 + mobilya.baza.y / 2 - mobilya.ust.y / 2
          mobilya.bolge[0] = { dahil: true, tip: 3, name: 'Bolge', cx: mcx, cy: mcy, x: kalan_en, y: kalan_boy }
        }

        break

      case 'ekle':
        console.log('ekleye geldi')
        const a = mobilya.bolge[secilenBolge]
        const a1 = { dahil: true, tip: 3, name: 'Bolge', cx: a.cx - a.x / 4, cy: a.cy, x: a.x / 2, y: a.y }
        const a2 = { dahil: true, tip: 3, name: 'Bolge', cx: a.cx + a.x / 4, cy: a.cy, x: a.x / 2, y: a.y }
        mobilya.bolge[secilenBolge] = a1
        mobilya.bolge[mobilya.bolge.length] = a2

        break
      default:
        break
    }
    setmobilya(mobilya)
  }
  */
  //--------------------------------------------------------------------------------
  /*********** */
  //@BolgesUpdate-----------------------------------
  const BolgesUpdate = () => {
    //console.log('mobilya=', mobilya)
    //console.log('mobilya=', mobilya)
    const kalan_en = mobilya.X - mobilya.sol_yan.x - mobilya.sag_yan.x
    const kalan_X = olculer.X - mobilya.sol_yan.x - mobilya.sag_yan.x
    const kalan_boy = mobilya.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y
    const kalan_Y = olculer.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y
    const kalan_cx = mobilya.X0
    const kalan_x = mobilya.X0
    console.log('kalan_cx=', kalan_cx, 'kalan_x=', kalan_x)
    const kalan_cy = mobilya.Y0 + mobilya.alt.y / 2 + mobilya.baza.y / 2 - mobilya.ust.y / 2
    const kalan_y = mobilya.Y0 + mobilya.alt.y / 2 + mobilya.baza.y / 2 - mobilya.ust.y / 2
    const Oranx = (kalan_en - kalan_X) / 2
    const Orany = (olculer.Y - mobilya.Y) / 4
    console.log(Oranx, Orany)
    const OranX = kalan_en / kalan_X
    const OranY = kalan_boy / kalan_Y
    const OranZ = mobilya.Z / olculer.Z
    console.log(OranX, OranY, OranZ)
    for (let index = 0; index < mobilya.bolge.length; index++) {
      mobilya.bolge[index].dahil = true
      mobilya.bolge[index].tip = 3
      mobilya.bolge[index].name = 'Bolge'
      mobilya.bolge[index].cx = mobilya.bolge[index].cx * OranX
      mobilya.bolge[index].cy = mobilya.bolge[index].cy - Orany
      mobilya.bolge[index].x = mobilya.bolge[index].x * OranX
      mobilya.bolge[index].y = mobilya.bolge[index].y * OranY
    }
    //console.log('mobilya.bolge=', mobilya.bolge)
    return mobilya.bolge
  }

  //-----------------------------------------------

  //@DikmeUpdate-----------------------------------------------------
  const DikmeUpdate = () => {
    const kalan_en = mobilya.X - mobilya.sol_yan.x - mobilya.sag_yan.x
    const kalan_X = olculer.X - mobilya.sol_yan.x - mobilya.sag_yan.x

    const kalan_boy = mobilya.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y
    const kalan_Y = olculer.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y

    const OranX = kalan_en / kalan_X
    const OranY = kalan_boy / kalan_Y
    const OranZ = mobilya.Z / olculer.Z
    for (let index = 0; index < mobilya.dikme.length; index++) {
      mobilya.dikme[index].dahil = true
      mobilya.dikme[index].tip = 3
      mobilya.dikme[index].name = 'dikme'
      mobilya.dikme[index].x0 = (mobilya.dikme[index].x0 / 2) * OranX
      mobilya.dikme[index].y0 = (mobilya.dikme[index].y0 / 2) * OranY
      mobilya.dikme[index].z0 = (mobilya.dikme[index].z0 / 2) * OranZ
      mobilya.dikme[index].x = mobilya.dikme[index].x * OranX
      mobilya.dikme[index].y = mobilya.dikme[index].y * OranY
      mobilya.dikme[index].z = mobilya.dikme[index].z * OranZ
    }

    return mobilya.dikme
  }
  //---------------------------------------------
  //@RafUpdate-----------------------------------------------------------
  const RafUpdate = () => {
    const kalan_en = mobilya.X - mobilya.sol_yan.x - mobilya.sag_yan.x
    const kalan_X = olculer.X - mobilya.sol_yan.x - mobilya.sag_yan.x

    const kalan_boy = mobilya.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y
    const kalan_Y = olculer.Y - mobilya.ust.y - mobilya.alt.y - mobilya.baza.y

    const OranX = kalan_en / kalan_X
    const OranY = kalan_boy / kalan_Y
    const OranZ = mobilya.Z / olculer.Z
    for (let index = 0; index < mobilya.raf.length; index++) {
      mobilya.raf[index].dahil = true
      mobilya.raf[index].tip = 3
      mobilya.raf[index].name = 'raf'
      mobilya.raf[index].x0 = mobilya.raf[index].x0 * OranX
      mobilya.raf[index].y0 = mobilya.raf[index].y0 * OranY
      mobilya.raf[index].z0 = mobilya.raf[index].z0 * OranZ
      mobilya.raf[index].x = mobilya.raf[index].x * OranX
      mobilya.raf[index].y = mobilya.raf[index].y * OranY
      mobilya.raf[index].z = mobilya.raf[index].z * OranZ
    }
    return mobilya.raf
  }
  //------------------------------------------------------
  //@kapak----------------------------------------------
  const kapak = () => {
    const sonuc = Kapak(mobilya, secilenBolge)
    setmobilya({ ...mobilya, ...sonuc })
    return <div>{/*<button>kapak</button>*/}</div>
  }

  //-----------------------------------------------------

  //@cekmece_kapak----------------------------------------------
  const cekmece_kapak = () => {
    const sonuc = CekmeceKapak(mobilya, secilenBolge)
    setmobilya({ ...mobilya, ...sonuc })
    return (
      <div>
        <button>CekmeceKapak</button>
      </div>
    )
  }

  //-----------------------------------------------------

  //@cekmece_kasa----------------------------------------------
  const cekmece_kasa = () => {
    const sonuc = CekmeceKasa(mobilya, secilenBolge)
    setmobilya({ ...mobilya, ...sonuc })
    return (
      <div>
        <button>CekmeceKasa</button>
      </div>
    )
  }

  //-----------------------------------------------------

  //@kayit_ekle_dikey----------------------------------------------
  const kayit_ekle_dikey = () => {
    const sonuc = KayitEkleDikey(mobilya, secilenBolge)
    setmobilya({ ...mobilya, ...sonuc })
    return (
      <div>
        <button>KayıtEkleDikey</button>
      </div>
    )
  }
  //-----------------------------------------------------

  //@kayit_ekle_yatay----------------------------------------------
  const kayit_ekle_yatay = () => {
    const sonuc = KayitEkleYatay(mobilya, secilenBolge)
    setmobilya({ ...mobilya, ...sonuc })
    return (
      <div>
        <button>KayıtEkleYatay</button>
      </div>
    )
  }
  //-----------------------------------------------------
  //@EKRANLAR -----------------------

  //@SolyanTip----------------------------------
  const SolyanTip = () => {
    return (
      <div>
        <h4>Tipi</h4>
        <form>
          <input
            type='checkbox'
            id='1'
            name='radio1'
            checked={solyanId === '1'}
            onChange={() => {
              mobilya.sol_yan.dahil = true
              setsolyanId('1')
            }}
          />
          <label>Sol Yan</label>
          <br />
          <input
            type='checkbox'
            id='2'
            name='radio4'
            checked={solyanId === '2'}
            onChange={() => {
              mobilya.sol_yan.dahil = false
              setsolyanId('2')
            }}
          />
          <label>Yok</label>
        </form>
      </div>
    )
  }
  //@SagyanTip-------------------------------------------------
  const SagyanTip = () => {
    return (
      <div>
        <h4>Tipi</h4>

        <input
          type='checkbox'
          id='1'
          name='radio1'
          checked={sagyanId === '1'}
          onChange={() => {
            mobilya.sag_yan.dahil = true
            setsagyanId('1')
          }}
        />
        <label>Sağ Yan</label>
        <br />
        <input
          type='checkbox'
          id='2'
          name='radio4'
          checked={sagyanId === '2'}
          onChange={() => {
            mobilya.sag_yan.dahil = false
            setsagyanId('2')
          }}
        />
        <label>Yok</label>
      </div>
    )
  }
  //-----------------------------------------------------------
  //@UstTip-----------------------------------------------
  const UstTip = () => {
    return (
      <div>
        <h4>Tipi</h4>
        <form>
          <input
            type='checkbox'
            id='1'
            name='radio1'
            checked={ustId === '1'}
            onChange={() => {
              mobilya.ust.dahil = true
              setustId('1')
            }}
          />
          <label>Tam Ust</label>
          <br />
          <input
            type='checkbox'
            id='2'
            name='radio2'
            checked={ustId === '2'}
            onChange={() => {
              setustId('2')
            }}
          />
          <label>Kuşaklar</label>
          <br />
          <input
            type='checkbox'
            id='3'
            name='radio3'
            checked={ustId === '3'}
            onChange={() => {
              setustId('3')
            }}
          />
          <label>WebFrame</label>
          <br />
          <input
            type='checkbox'
            id='4'
            name='radio4'
            checked={ustId === '4'}
            onChange={() => {
              mobilya.ust.dahil = false
              setustId('4')
            }}
          />
          <label>Yok</label>
        </form>
      </div>
    )
  }
  //----------------------------------------
  //@AltTip-----------------------------------------------
  const AltTip = () => {
    return (
      <div>
        <h4>Tipi</h4>
        <form>
          <input
            type='checkbox'
            id='1'
            name='radio1'
            checked={altId === '1'}
            onChange={() => {
              mobilya.Alt.dahil = true
              setaltId('1')
            }}
          />
          <label>Tam Alt</label>
          <br />
          <input
            type='checkbox'
            id='2'
            name='radio2'
            checked={altId === '2'}
            onChange={() => {
              setaltId('2')
            }}
          />
          <label>Kuşaklar</label>
          <br />
          <input
            type='checkbox'
            id='3'
            name='radio3'
            checked={altId === '3'}
            onChange={() => {
              setaltId('3')
            }}
          />
          <label>WebFrame</label>
          <br />
          <input
            type='checkbox'
            id='4'
            name='radio4'
            checked={altId === '4'}
            onChange={() => {
              mobilya.alt.dahil = false
              setaltId('4')
            }}
          />
          <label>Yok</label>
        </form>
      </div>
    )
  }
  //---------------------------------------
  //@SolyanMalzeme--------------------------------------

  const Malzeme = () => {
    const initialState = DataMaterials
    const [material, setmaterial] = useState(initialState)
    return (
      <div>
        <form action=''>
          <label htmlFor='color'>Malzeme</label>

          <select
            id='malzeme'
            onChange={(e) => {
              const selectedMaterial = e.target.value
              console.log('material=', selectedMaterial)
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
    )
  }

  //----------------------------------------------
  const panes = [
    //@GenelAyarlar----------------------------------
    {
      menuItem: 'Genel Ayarlar',
      render: () => (
        <Tab.Pane>
          <ul className='flex-container'>
            <li className='flex-item1'>
              <h3>Ölçüler</h3>
              <ul>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Yükseklik
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.Y}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.Y = Number(e.target.value)
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Genişlik
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.X}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.X = Number(e.target.value)
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Derinlik
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.Z}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.Z = Number(e.target.value)
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Yükselt
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sol_yan.yg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sol_yan.yg1 = e.target.value
                    }}
                  />
                </li>
              </ul>
            </li>
            <li className='flex-item1'>
              <h4>Sol Üst Birleşim</h4>
              <form>
                <input type='radio' id='male' name='gender' value='male' />
                <label htmlFor='male'>Yan</label>
                <img className='image' src='https://i.pinimg.com/236x/aa/c1/41/aac1414fccbb69f6d5f0432b78554fe9.jpg' alt='' />
                <br />
                <input type='radio' id='female' name='gender' value='female' />
                <label htmlFor='female'>Ust</label>
                <img className='image' src='https://i.pinimg.com/236x/14/b0/26/14b0266237fec8c53ec6a0c01974180f.jpg' alt='' />
              </form>
            </li>
            <li className='flex-item1'>
              <h4>Sağ Üst Birleşim</h4>
              <form>
                <input type='radio' id='male' name='gender' value='male' />
                <label htmlFor='male'>Yan</label>
                <img className='image' src='images/airpods.jpg' alt='' />
                <br />
                <input type='radio' id='female' name='gender' value='female' />
                <label htmlFor='female'>Ust</label>
                <img className='image' src='images/airpods.jpg' alt='' />
              </form>
            </li>
            <li className='flex-item1'>
              <h4>Sol Alt Birleşim</h4>
              <form>
                <input type='radio' id='male' name='gender' value='male' />
                <label htmlFor='male'>Yan</label>
                <img className='image' src='images/airpods.jpg' alt='' />
                <br />
                <input type='radio' id='female' name='gender' value='female' />
                <label htmlFor='female'>Ust</label>
                <img className='image' src='images/airpods.jpg' alt='' />
              </form>
            </li>
            <li className='flex-item1'>
              <h4>Sağ Alt Birleşim</h4>
              <form>
                <input type='radio' id='male' name='gender' value='male' />
                <label htmlFor='male'>Yan</label>
                <img className='image' src='images/airpods.jpg' alt='' />
                <br />
                <input type='radio' id='female' name='gender' value='female' />
                <label htmlFor='female'>Ust</label>
                <img className='image' src='images/airpods.jpg' alt='' />
              </form>
            </li>
            <li className='flex-item'>
              <Malzeme />
            </li>
            <li className='flex-item1'>
              <SolyanTip />
            </li>
          </ul>
        </Tab.Pane>
      ),
    },
    //-----------------------------------------------

    //@SolyanAyarlar-----------------------------------
    {
      menuItem: 'Sol Yan',
      render: () => (
        <Tab.Pane>
          <ul className='flex-container'>
            {/*GİRİNTİ */}
            <li className='flex-item1'>
              <h3>Girinti</h3>
              <ul>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ön
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sol_yan.zg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sol_yan.zg1 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Arka
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sol_yan.zg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sol_yan.zg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ust
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sol_yan.yg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sol_yan.yg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Alt
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sol_yan.yg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sol_yan.yg1 = e.target.value
                    }}
                  />
                </li>
              </ul>
            </li>
            {/*BANT------------------------------------ */}
            <li className='flex-item1'>
              <h3>Kenar Bandı</h3>
              <ul>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ön
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sol_yan.zg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sol_yan.zg1 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Arka
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sol_yan.zg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sol_yan.zg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ust
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sol_yan.yg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sol_yan.yg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Alt
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sol_yan.yg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sol_yan.yg1 = e.target.value
                    }}
                  />
                </li>
              </ul>
            </li>
            {/*------------------- */}

            <li className='flex-item'>
              <Malzeme />
            </li>

            <li className='flex-item1'>
              <SolyanTip />
            </li>
          </ul>
        </Tab.Pane>
      ),
    },
    //@SagyanAyarlar-----------------------------------------------------------------------
    {
      menuItem: 'Sag Yan',
      render: () => (
        <Tab.Pane>
          <ul className='flex-container'>
            {/*GIRINTI-----------------------------------------  */}
            <li className='flex-item1'>
              <h3>Girinti</h3>
              <ul>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ön
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sag_yan.zg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sag_yan.zg1 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Arka
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sag_yan.zg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sag_yan.zg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ust
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sag_yan.yg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sag_yan.yg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Alt
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sag_yan.yg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sag_yan.yg1 = e.target.value
                    }}
                  />
                </li>
              </ul>
            </li>
            {/*BANT------------------------------------------------    */}

            <li className='flex-item1'>
              <h3>Kenar Bantı</h3>
              <ul>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ön
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sag_yan.zg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sag_yan.zg1 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Arka
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sag_yan.zg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sag_yan.zg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ust
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sag_yan.yg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sag_yan.yg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Alt
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.sag_yan.yg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.sag_yan.yg1 = e.target.value
                    }}
                  />
                </li>
              </ul>
            </li>

            {/* --------------------------------------------------------- */}

            <li className='flex-item'>
              <Malzeme />
            </li>
            <li className='flex-item1'>
              <SagyanTip />
            </li>
          </ul>
        </Tab.Pane>
      ),
    },
    //@UstAyarlar ------------------------------------------------
    {
      menuItem: 'Üst',
      render: () => (
        <Tab.Pane>
          <ul className='flex-container'>
            <li className='flex-item1'>
              <h3>Girinti</h3>
              <ul>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Üst
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.yg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.yg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ön
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.zg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.zg1 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Arka
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.zg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.zg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Sol
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.xg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.xg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Sağ
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.xg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.xg1 = e.target.value
                    }}
                  />
                </li>
              </ul>
            </li>
            {/*BANT-------------------- */}
            <li className='flex-item1'>
              <h3>Kenar Bantı</h3>
              <ul>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ön
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.zg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.zg1 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Arka
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.zg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.zg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Sol
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.xg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.xg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Sağ
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.xg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.xg1 = e.target.value
                    }}
                  />
                </li>
              </ul>
            </li>
            {/*------------------------ */}

            <li className='flex-item'>
              <Malzeme />
            </li>
            <li className='flex-item1'>
              <UstTip />
            </li>
          </ul>
        </Tab.Pane>
      ),
    },
    //@AltAyarlar----------------------------------------------------------
    {
      menuItem: 'Alt',
      render: () => (
        <Tab.Pane>
          <ul className='flex-container'>
            <li className='flex-item1'>
              <h3>Girinti</h3>
              <ul>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Üst
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.alt.yg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.alt.yg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ön
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.alt.zg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.alt.zg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Arka
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.alt.zg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.alt.zg1 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Sol
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.alt.xg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.alt.xg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Sağ
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.alt.xg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.alt.xg1 = e.target.value
                    }}
                  />
                </li>
              </ul>
            </li>
            {/*ALT_BANT------------------------------    */}
            <li className='flex-item1'>
              <h3>Kenar Bantı</h3>
              <ul>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Ön
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.zg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.zg1 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Arka
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.zg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.zg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Sol
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.xg0}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.xg0 = e.target.value
                    }}
                  />
                </li>
                <li className='girinti-block'>
                  <label htmlFor='name' className='girinti-label'>
                    Sağ
                  </label>
                  <input
                    type='number'
                    className='girinti'
                    placeholder={mobilya.ust.xg1}
                    id='name'
                    name='name'
                    onChange={(e) => {
                      mobilya.ust.xg1 = e.target.value
                    }}
                  />
                </li>
              </ul>
            </li>
            {/*--------------------------------------------*/}

            <li className='flex-item'>
              <Malzeme />
            </li>
            <li className='flex-item1'>
              <AltTip />
            </li>
          </ul>
        </Tab.Pane>
      ),
    },
    //--------------------------------------------------------------------------
  ]

  //@ConstructionSettings----------------------------------------------------------------
  const ConstructionSettings = () => {
    let m = mobilya
    // console.log('--mobilya=', mobilya)
    // console.log('--olculer=', olculer)
    return (
      <div>
        <Tab panes={panes} />
        <button
          onClick={() => {
            if (olculer.X === m.X && olculer.Y === m.Y && olculer.Z === m.Z) {
              // console.log('normal uğradı')
              const Bolge = BolgesUpdate()
              // console.log('Bolge=', Bolge)
              const Dikme = DikmeUpdate(m)
              const Raf = RafUpdate(m)
              m.bolge = Bolge
              m.dikme = Dikme
              m.raf = Raf
              setmobilya({ ...mobilya, ...m })
            } else {
              console.log('elseya uğradı')
              const Bolge = BolgesUpdate()
              // console.log('Bolge=', Bolge)
              const Dikme = DikmeUpdate()
              const Raf = RafUpdate()
              m.bolge = Bolge
              m.dikme = Dikme
              m.raf = Raf
              setmobilya({ ...mobilya, ...m })
              const dene = {
                X: m.X,
                Y: m.Y,
                Z: m.Z,
              }
              setOlculer(dene)
            }
          }}
        >
          Tamam
        </button>
        <button onClick={() => {}}>İptal</button>
      </div>
    )
  }

  //@ScreenDikme------------------------------------------------
  const ScreenDikme = () => {
    let m = mobilya
    SolYan()
    SagYan()
    Ust()
    Alt()
    Baza()
    //Bolges()
    const Viewer = useRef(null)

    useEffect(() => {
      Viewer.current.fitToViewer()
    }, [])

    /* Read all the available methods in the documentation */
    const _zoomOnViewerCenter = () => Viewer.current.zoomOnViewerCenter(1.1)
    const _fitSelection = () => Viewer.current.fitSelection(40, 40, 500, 500)
    const _fitToViewer = () => Viewer.current.fitToViewer()

    if (m.bolge.length === 0) {
      const kalan_en = m.X - m.sol_yan.x - m.sag_yan.x
      const kalan_boy = m.Y - m.ust.y - m.alt.y - m.baza.y
      const mcx = m.X0
      const mcy = m.Y0 + m.alt.y / 2 + m.baza.y / 2 - m.ust.y / 2
      m.bolge[0] = { dahil: true, tip: 3, name: 'Bolge', cx: mcx, cy: mcy, x: kalan_en, y: kalan_boy }
    }
    return (
      <>
        <h1>UncontrolledReactSVGPanZoom</h1>
        <hr />

        <button className='btn' onClick={() => _zoomOnViewerCenter()}>
          Zoom on center
        </button>
        <button className='btn' onClick={() => _fitSelection()}>
          Zoom area 200x200
        </button>
        <button className='btn' onClick={() => _fitToViewer()}>
          Fit
        </button>
        <hr />
        <h4>ScreenDikme</h4>
        <button
          onClick={() => {
            const a = m.bolge[secilenBolge]
            const a1 = { dahil: true, tip: 3, name: 'Bolge', cx: a.cx - (a.x + 18) / 4, cy: a.cy, x: (a.x - 18) / 2, y: a.y }
            const a2 = { dahil: true, tip: 3, name: 'Bolge', cx: a.cx + (a.x + 18) / 4, cy: a.cy, x: (a.x - 18) / 2, y: a.y }
            m.bolge[secilenBolge] = a1
            m.bolge[m.bolge.length] = a2
            /*  dikme: [{ dahil: true, tip: 3, name: 'Dikme', material_id: 18, x0: 0, y0: 0, z0: 0, x: 18, y: 1628, z: 600, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],*/
            let dikme_sayısı = m.dikme.length
            m.dikme[m.dikme.length] = {
              dahil: true,
              tip: 3,
              name: 'Dikme',
              material_id: 18,
              x0: a.cx,
              y0: a.cy,
              z0: 0,
              x: 18,
              y: a.y,
              z: 600,
              xg0: 0,
              xg1: 0,
              zg0: 0,
              zg1: 0,
              yg0: 0,
              yg1: 0,
            }
            console.log('dikme=', m.dikme[dikme_sayısı])
            setmobilya({ ...mobilya, ...m })
          }}
        >
          dikme ekle
        </button>
        <button
          onClick={() => {
            const a = m.bolge[secilenBolge]
            const a1 = { dahil: true, tip: 3, name: 'Bolge', cx: a.cx, cy: a.cy - (a.y + 18) / 4, x: a.x, y: (a.y - 18) / 2 }
            const a2 = { dahil: true, tip: 3, name: 'Bolge', cx: a.cx, cy: a.cy + (a.y + 18) / 4, x: a.x, y: (a.y - 18) / 2 }
            m.bolge[secilenBolge] = a1
            m.bolge[m.bolge.length] = a2

            let raf_sayisi = m.raf.length
            m.raf[m.raf.length] = {
              dahil: true,
              tip: 3,
              name: 'raf',
              material_id: 18,
              x0: a.cx,
              y0: a.cy,
              z0: 0,
              x: a.x,
              y: 18,
              z: 600,
              xg0: 0,
              xg1: 0,
              zg0: 0,
              zg1: 0,
              yg0: 0,
              yg1: 0,
            }
            console.log('raf=', m.raf[raf_sayisi])

            setmobilya({ ...mobilya, ...m })
          }}
        >
          Raf ekle
        </button>
        <input
          type='number'
          className='girinti'
          placeholder={mobilya.bolge[secilenBolge].x}
          id='name'
          name='name'
          onChange={(e) => {
            bolge_x = Number(e.target.value)
          }}
        />
        <input
          type='number'
          className='girinti'
          placeholder={mobilya.bolge[secilenBolge].y}
          id='name'
          name='name'
          onChange={(e) => {
            bolge_y = Number(e.target.value)
          }}
        />
        <button onClick={kapak}>kapak ekle</button>
        <button onClick={cekmece_kapak}>cekmece_kapak_ekle</button>
        <button onClick={cekmece_kasa}>cekmece_kasa_ekle</button>
        <button onClick={kayit_ekle_dikey}>kayit_ekle_dikey</button>
        <button onClick={kayit_ekle_yatay}>kayit_ekle_yatay</button>

        <BolgeEnAyarla />
        <button>yukseklik</button>
        <div></div>
        <div> KayıtEkle</div>
        {/*kayit_ekle 2d çizimi---------*/}
        {mobilya.kayit_ekle_dikey.length > 0 && (
          <svg width={300} height={300} viewBox={`${-10} ${-10} ${mobilya.bolge[secilenBolge].x + 100} ${mobilya.bolge[secilenBolge].y + 100} `}>
            <rect x={0} y={0} height={mobilya.bolge[secilenBolge].y} width={mobilya.Z} fill='none' stroke='black' strokeWidth='2' />
            {mobilya.kayit_ekle_dikey
              .filter((o) => o.bolge === secilenBolge)
              .map((o, index) => {
                return (
                  <rect
                    x={mobilya.kayit_ekle_dikey[index].xg1}
                    y={mobilya.kayit_ekle_dikey[index].yg1}
                    height={mobilya.kayit_ekle_dikey[index].y}
                    width={18}
                    fill='lightblue'
                    stroke='black'
                    strokeWidth='1'
                  />
                )
              })}
          </svg>
        )}
        {/** -----------------------------------*/}
        <UncontrolledReactSVGPanZoom
          ref={Viewer}
          width={600}
          height={600}
          //onZoom={(e) => console.log('zoom')}
          //onPan={(e) => console.log('pan')}
          //onClick={(event) => console.log('click', event.x, event.y, event.originalEvent)}
        >
          <svg viewBox='-1500 -1500 3000 3000'>
            {mobilya.sol_yan.dahil && (
              <Rect centerEnd={true} cx={mobilya.sol_yan.x0} cy={-mobilya.sol_yan.y0} height={mobilya.sol_yan.y} width={mobilya.sol_yan.x} fill='lightblue' stroke='black' strokeWidth='5' />
            )}
            {mobilya.sag_yan.dahil && (
              <Rect centerEnd={true} cx={mobilya.sag_yan.x0} cy={-mobilya.sag_yan.y0} height={mobilya.sag_yan.y} width={mobilya.sag_yan.x} fill='lightblue' stroke='black' strokeWidth='5' />
            )}
            {mobilya.ust.dahil && <Rect centerEnd={true} cx={mobilya.ust.x0} cy={-mobilya.ust.y0} height={mobilya.ust.y} width={mobilya.ust.x} fill='lightblue' stroke='black' strokeWidth='5' />}

            {mobilya.alt.dahil && <Rect centerEnd={true} cx={mobilya.alt.x0} cy={-mobilya.alt.y0} height={mobilya.alt.y} width={mobilya.alt.x} fill='lightblue' stroke='black' strokeWidth='5' />}

            {mobilya.baza.dahil && <Rect centerEnd={true} cx={mobilya.baza.x0} cy={-mobilya.baza.y0} height={mobilya.baza.y} width={mobilya.baza.x} fill='lightblue' stroke='black' strokeWidth='5' />}

            {mobilya.bolge.map((item, index) => {
              return (
                <Rect
                  className='on'
                  key={index}
                  centerEnd={true}
                  cx={item.cx}
                  cy={-item.cy}
                  height={item.y}
                  width={item.x}
                  fill={'yellow'}
                  stroke='black'
                  strokeWidth='5'
                  fillOpacity='0.5'
                  onClick={() => {
                    setSecilenBolge(index)
                    console.log('--seçilen_bölge=', secilenBolge)
                    console.warn('onPress ***')
                  }}
                />
              )
            })}

            {mobilya.dikme.map((item, index) => {
              return (
                <Rect
                  className='on'
                  key={index}
                  centerEnd={true}
                  cx={item.x0}
                  cy={-item.y0}
                  height={item.y}
                  width={item.x}
                  fill={'blue'}
                  stroke='black'
                  strokeWidth='5'
                  fillOpacity='0.5'
                  onClick={() => {
                    setSecilenDikme(index)
                    console.log('seçilen_dikme=', secilenDikme)
                    console.warn('onPress ***')
                  }}
                />
              )
            })}
            {mobilya.raf.map((item, index) => {
              return (
                <Rect
                  className='on'
                  key={index}
                  centerEnd={true}
                  cx={item.x0}
                  cy={-item.y0}
                  height={item.y}
                  width={item.x}
                  fill={'red'}
                  stroke='black'
                  strokeWidth='5'
                  fillOpacity='0.5'
                  onClick={() => {
                    setSecilenRaf(index)
                    console.log('seçilen_raf=', mobilya.raf[index])

                    console.warn('onPress ***')
                  }}
                />
              )
            })}
            {/***mobilya kapak çizimi---------------------- */}
            {mobilya.kapak.map((item, index) => {
              return (
                <Rect
                  className='on'
                  key={index}
                  centerEnd={true}
                  cx={item.x0}
                  cy={-item.y0}
                  height={item.y}
                  width={item.x}
                  fill={'red'}
                  stroke='black'
                  strokeWidth='5'
                  fillOpacity='0.5'
                  onClick={() => {
                    setSecilenKapak(index)
                    console.log('seçilen_kapak=', mobilya.kapak[index])

                    console.warn('onPress ***')
                  }}
                />
              )
            })}
            {/**------------------------------------- */}

            {/***kayit_ekle_dikey çizimi---------------------- */}
            {mobilya.kayit_ekle_dikey.map((item, index) => {
              return (
                <Rect
                  className='on'
                  key={index}
                  centerEnd={true}
                  cx={item.x0}
                  cy={-item.y0}
                  height={item.y}
                  width={item.x}
                  fill={'red'}
                  stroke='black'
                  strokeWidth='5'
                  fillOpacity='0.5'
                  onClick={() => {
                    setSecilenKapak(index)
                    console.log('seçilen_kayit_ekle_dikey=', mobilya.kayit_ekle_dikey[index])

                    console.warn('onPress ***')
                  }}
                />
              )
            })}
            {/**------------------------------------- */}
            {/***kayit_ekle_yatay çizimi---------------------- */}
            {mobilya.kayit_ekle_yatay.map((item, index) => {
              return (
                <Rect
                  className='on'
                  key={index}
                  centerEnd={true}
                  cx={item.x0}
                  cy={-item.y0}
                  height={item.y}
                  width={item.x}
                  fill={'red'}
                  stroke='black'
                  strokeWidth='5'
                  fillOpacity='0.5'
                  onClick={() => {
                    setSecilenKapak(index)
                    console.log('seçilen_kayit_ekle_yatay=', mobilya.kayit_ekle_yatay[index])

                    console.warn('onPress ***')
                  }}
                />
              )
            })}
            {/**------------------------------------- */}

            {mobilya.cekmece_kapak.map((item, index) => {
              return (
                <Rect
                  className='on'
                  key={index}
                  centerEnd={true}
                  cx={item.x0}
                  cy={-item.y0}
                  height={item.y}
                  width={item.x}
                  fill={'red'}
                  stroke='black'
                  strokeWidth='5'
                  fillOpacity='0.5'
                  onClick={() => {
                    setSecilenCekmeceKapak(index)
                    console.log('seçilen_cekmece_kapak=', mobilya.cekmece_kapak[index])

                    console.warn('onPress ***')
                  }}
                />
              )
            })}

            {mobilya.cekmece_kasa.map((item, index) => {
              return (
                <g>
                  {/*on cizim ------------------------*/}
                  <Rect
                    className='on'
                    key={index}
                    centerEnd={true}
                    cx={item.on.x0}
                    cy={-item.on.y0}
                    height={item.on.y}
                    width={item.on.x}
                    fill={'red'}
                    stroke='black'
                    strokeWidth='5'
                    fillOpacity='0.5'
                    onClick={() => {
                      setSecilenCekmeceKasa(index)
                      console.log('seçilen_cekmece_kasa=', mobilya.cekmece_kasa[index])
                      console.warn('onPress ***')
                    }}
                  />
                  {/*sol_yan cizim ------------------------*/}
                  <Rect
                    className='on'
                    key={index}
                    centerEnd={true}
                    cx={item.sol_yan.x0}
                    cy={-item.sol_yan.y0}
                    height={item.sol_yan.y}
                    width={item.sol_yan.x}
                    fill={'red'}
                    stroke='black'
                    strokeWidth='5'
                    fillOpacity='0.5'
                    onClick={() => {
                      setSecilenCekmeceKasa(index)
                      console.log('seçilen_cekmece_kasa=', mobilya.cekmece_kasa[index])
                      console.warn('onPress ***')
                    }}
                  />
                  {/*sag_yan cizim ------------------------*/}
                  <Rect
                    className='on'
                    key={index}
                    centerEnd={true}
                    cx={item.sag_yan.x0}
                    cy={-item.sag_yan.y0}
                    height={item.sag_yan.y}
                    width={item.sag_yan.x}
                    fill={'red'}
                    stroke='black'
                    strokeWidth='5'
                    fillOpacity='0.5'
                    onClick={() => {
                      setSecilenCekmeceKasa(index)
                      console.log('seçilen_cekmece_kasa=', mobilya.cekmece_kasa[index])
                      console.warn('onPress ***')
                    }}
                  />

                  {/*arka cizim ------------------------*/}
                  <Rect
                    className='on'
                    key={index}
                    centerEnd={true}
                    cx={item.arka.x0}
                    cy={-item.arka.y0}
                    height={item.arka.y}
                    width={item.arka.x}
                    fill={'green'}
                    stroke='black'
                    strokeWidth='5'
                    fillOpacity='0.5'
                    onClick={() => {
                      setSecilenCekmeceKasa(index)
                      console.log('seçilen_cekmece_kasa=', mobilya.cekmece_kasa[index])
                      console.warn('onPress ***')
                    }}
                  />
                  {/*arka cizim ------------------------*/}
                  <Rect
                    className='on'
                    key={index}
                    centerEnd={true}
                    cx={item.alt.x0}
                    cy={-item.alt.y0}
                    height={item.alt.y}
                    width={item.alt.x}
                    fill={'green'}
                    stroke='black'
                    strokeWidth='5'
                    fillOpacity='0.5'
                    onClick={() => {
                      setSecilenCekmeceKasa(index)
                      console.log('seçilen_cekmece_kasa=', mobilya.cekmece_kasa[index])
                      console.warn('onPress ***')
                    }}
                  />
                </g>
              )
            })}
          </svg>
        </UncontrolledReactSVGPanZoom>
      </>
    )
  }

  //@BolgeEnAyarla----------------------------------------------------------
  const BolgeEnAyarla = () => {
    //const sonuc = {}
    return (
      <div>
        <button
          onClick={() => {
            const islem = 'alt_raf'
            const sonuc = RafAyarla(mobilya, bolge_x, bolge_y, secilenBolge, islem)
            setmobilya({ ...mobilya, ...sonuc })
            bolge_y = -1
            bolge_x = -1
          }}
        >
          alt_raf
        </button>
        <button
          onClick={() => {
            const islem = 'ust_raf'
            const sonuc = RafAyarla(mobilya, bolge_x, bolge_y, secilenBolge, islem)
            setmobilya({ ...mobilya, ...sonuc })
            bolge_y = -1
            bolge_x = -1
          }}
        >
          ust_raf
        </button>

        <button
          onClick={() => {
            const islem = 'sag_dikme'
            const sonuc = DikmeAyarla(mobilya, bolge_x, bolge_y, secilenBolge, islem)
            setmobilya({ ...mobilya, ...sonuc })
            bolge_y = -1
            bolge_x = -1
          }}
        >
          sag_dikme
        </button>
        <button
          onClick={() => {
            const islem = 'sol_dikme'
            const sonuc = DikmeAyarla(mobilya, bolge_x, bolge_y, secilenBolge, islem)
            setmobilya({ ...mobilya, ...sonuc })
            bolge_y = -1
            bolge_x = -1
          }}
        >
          sol_dikme
        </button>
      </div>
    )
  }

  //-------------------------------------------------------------------
  //@ScreenCabinet-----------------------------------------------------

  const ucBoyut = true

  const shape = new THREE.Shape()
  shape.lineTo(0 / u, 3000 / u)
  shape.lineTo(3000 / u, 0 / u)

  extend({ Text })

  const text = '@tchayen'

  const ScreenCabinet = () => {
    SolYan()
    SagYan()
    Ust()
    Baza()
    Alt()

    const SolYan1 = () => {
      const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useTexture([
        'WoodQuarteredChiffon001_COL_3K_1.jpg',
        'WoodQuarteredChiffon001_GLOSS_3K.jpg',
        'WoodQuarteredChiffon001_NRM_3K.jpg',
        'WoodQuarteredChiffon001_REFL_3K.jpg',
      ])

      const a = mobilya.sol_yan
      return (
        <mesh visible rotation={[0, 0, 0]} position={[a.x0 / u, a.y0 / u, a.z0 / u]} castShadow>
          <boxBufferGeometry attach='geometry' args={[a.x / u, a.y / u, a.z / u]} />
          <meshStandardMaterial displacementScale={0.001} map={colorMap} displacementMap={displacementMap} normalMap={normalMap} roughnessMap={roughnessMap} />
        </mesh>
      )
    }

    const SagYan1 = () => {
      const [colorMap, displacementMap, normalMap, roughnessMap] = useTexture([
        'WoodQuarteredChiffon001_COL_3K.jpg',
        'WoodQuarteredChiffon001_GLOSS_3K.jpg',
        'WoodQuarteredChiffon001_NRM_3K.jpg',
        'WoodQuarteredChiffon001_REFL_3K.jpg',
      ])
      const a = mobilya.sag_yan
      return (
        <mesh visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[a.x0 / u, a.y0 / u, a.z0 / u]} castShadow>
          <boxBufferGeometry attach='geometry' args={[a.x / u, a.y / u, a.z / u]} />
          <meshStandardMaterial displacementScale={0.001} map={colorMap} displacementMap={displacementMap} normalMap={normalMap} roughnessMap={roughnessMap} />
        </mesh>
      )
    }

    const Ust1 = () => {
      const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useTexture([
        'WoodQuarteredChiffon001_COL_3K_2.jpg',
        'PavingStones092_1K_Displacement.jpg',
        'PavingStones092_1K_Normal.jpg',
        'PavingStones092_1K_Roughness.jpg',
        'PavingStones092_1K_AmbientOcclusion.jpg',
      ])
      const a = mobilya.ust

      return (
        <mesh visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[a.x0 / u, a.y0 / u, a.z0 / u]} castShadow>
          <boxBufferGeometry attach='geometry' args={[a.x / u, a.y / u, a.z / u]} />
          <meshStandardMaterial displacementScale={0.001} map={colorMap} />
        </mesh>
      )
    }
    function GroundPlane() {
      return (
        <mesh receiveShadow rotation={[5, 0, 0]} position={[0 / u, -2000 / u, 0 / u]}>
          <planeBufferGeometry attach='geometry' args={[10000 / u, 10000 / u]} />
          <meshStandardMaterial attach='material' color='white' />
        </mesh>
      )
    }
    function BackDrop() {
      return (
        <mesh receiveShadow position={[0 / u, 0 / u, -1000 / u]}>
          <planeBufferGeometry attach='geometry' args={[10000 / u, 10000 / u]} />
          <meshStandardMaterial attach='material' color='white' />
        </mesh>
      )
    }

    function Box() {
      return mobilya.parca.map((item, index) => {
        return (
          <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.x0 / u, item.y0 / u, item.z0 / u]} castShadow>
            <boxBufferGeometry attach='geometry' args={[item.x / u, item.y / u, item.z / u]} />
            <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
          </mesh>
        )
      })
    }

    function Kapaks1() {
      const a = mobilya.kapak
      console.log('kapak uğradıııı')
      return a.map((item, index) => {
        return (
          <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.x0 / u, item.y0 / u, item.z0 / u]} castShadow>
            <boxBufferGeometry attach='geometry' args={[item.x / u, item.y / u, item.z / u]} />
            <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
          </mesh>
        )
      })
    }

    function CekmeceKapak1() {
      const a = mobilya.cekmece_kapak
      console.log('cekmece kapak uğradıııı')
      return a.map((item, index) => {
        return (
          <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.x0 / u, item.y0 / u, item.z0 / u]} castShadow>
            <boxBufferGeometry attach='geometry' args={[item.x / u, item.y / u, item.z / u]} />
            <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
          </mesh>
        )
      })
    }

    function KayitEkleDikey1() {
      const a = mobilya.kayit_ekle_dikey
      console.log('kayit_ekle_dikey uğradı')
      return a.map((item, index) => {
        return (
          <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.x0 / u, item.y0 / u, item.z0 / u]} castShadow>
            <boxBufferGeometry attach='geometry' args={[item.x / u, item.y / u, item.z / u]} />
            <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
          </mesh>
        )
      })
    }

    function KayitEkleYatay1() {
      const a = mobilya.kayit_ekle_yatay
      console.log('kayit_ekle_yatay uğradı')
      return a.map((item, index) => {
        return (
          <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.x0 / u, item.y0 / u, item.z0 / u]} castShadow>
            <boxBufferGeometry attach='geometry' args={[item.x / u, item.y / u, item.z / u]} />
            <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
          </mesh>
        )
      })
    }

    function CekmeceKasa1() {
      const a = mobilya.cekmece_kasa
      console.log('cekmece kasa uğradıııı')
      return a.map((item, index) => {
        return (
          <>
            {/* sol_yan çizim------------------- */}
            <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.sol_yan.x0 / u, item.sol_yan.y0 / u, item.sol_yan.z0 / u]} castShadow>
              <boxBufferGeometry attach='geometry' args={[item.sol_yan.x / u, item.sol_yan.y / u, item.sol_yan.z / u]} />
              <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
            </mesh>
            {/* sag_yan çizim------------------- */}
            <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.sag_yan.x0 / u, item.sag_yan.y0 / u, item.sag_yan.z0 / u]} castShadow>
              <boxBufferGeometry attach='geometry' args={[item.sag_yan.x / u, item.sag_yan.y / u, item.sag_yan.z / u]} />
              <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
            </mesh>
            {/* on çizim------------------- */}
            <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.on.x0 / u, item.on.y0 / u, item.on.z0 / u]} castShadow>
              <boxBufferGeometry attach='geometry' args={[item.on.x / u, item.on.y / u, item.on.z / u]} />
              <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
            </mesh>
            {/* arka çizim------------------- */}
            <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.arka.x0 / u, item.arka.y0 / u, item.arka.z0 / u]} castShadow>
              <boxBufferGeometry attach='geometry' args={[item.arka.x / u, item.arka.y / u, item.arka.z / u]} />
              <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
            </mesh>
            {/* alt çizim------------------- */}
            <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.alt.x0 / u, item.alt.y0 / u, item.alt.z0 / u]} castShadow>
              <boxBufferGeometry attach='geometry' args={[item.alt.x / u, item.alt.y / u, item.alt.z / u]} />
              <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
            </mesh>
          </>
        )
      })
    }

    function Arkaliks1() {
      const a = mobilya.arkalik
      return a.map((item, index) => {
        return (
          <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.x0 / u, item.y0 / u, item.z0 / u]} castShadow>
            <boxBufferGeometry attach='geometry' args={[item.x / u, item.y / u, item.z / u]} />
            <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
          </mesh>
        )
      })
    }

    function Dikmes1() {
      const [colorMap, displacementMap, normalMap, roughnessMap] = useTexture([
        'WoodQuarteredChiffon001_COL_3K.jpg',
        'WoodQuarteredChiffon001_GLOSS_3K.jpg',
        'WoodQuarteredChiffon001_NRM_3K.jpg',
        'WoodQuarteredChiffon001_REFL_3K.jpg',
      ])
      const a = mobilya.dikme
      return a.map((item, index) => {
        return (
          <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.x0 / u, item.y0 / u, item.z0 / u]} castShadow>
            <boxBufferGeometry attach='geometry' args={[item.x / u, item.y / u, item.z / u]} />
            <meshStandardMaterial displacementScale={0.001} map={colorMap} displacementMap={displacementMap} normalMap={normalMap} roughnessMap={roughnessMap} />
          </mesh>
        )
      })
    }

    function Rafs1() {
      const a = mobilya.raf

      return a.map((item, index) => {
        return (
          <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[item.x0 / u, item.y0 / u, item.z0 / u]} castShadow>
            <boxBufferGeometry attach='geometry' args={[item.x / u, item.y / u, item.z / u]} />
            <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
          </mesh>
        )
      })
    }

    const Alt1 = () => {
      const a = mobilya.alt
      return (
        <mesh visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[a.x0 / u, a.y0 / u, a.z0 / u]} castShadow>
          <boxBufferGeometry attach='geometry' args={[a.x / u, a.y / u, a.z / u]} />
          <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
        </mesh>
      )
    }
    const Baza1 = () => {
      const a = mobilya.baza
      return (
        <mesh visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[a.x0 / u, a.y0 / u, a.z0 / u]} castShadow>
          <boxBufferGeometry attach='geometry' args={[a.x / u, a.y / u, a.z / u]} />
          <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
        </mesh>
      )
    }
    const SolPervaz1 = () => {
      const a = mobilya.sol_pervaz
      return (
        <mesh visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[a.x0 / u, a.y0 / u, a.z0 / u]} castShadow>
          <boxBufferGeometry attach='geometry' args={[a.x / u, a.y / u, a.z / u]} />
          <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
        </mesh>
      )
    }
    const SagPervaz1 = () => {
      const a = mobilya.sag_pervaz
      return (
        <mesh visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[a.x0 / u, a.y0 / u, a.z0 / u]} castShadow>
          <boxBufferGeometry attach='geometry' args={[a.x / u, a.y / u, a.z / u]} />
          <meshStandardMaterial attach='material' color='white' transparent roughness={0.1} metalness={0.1} />
        </mesh>
      )
    }

    // Lights
    function KeyLight({ brightness, color }) {
      return <rectAreaLight width={3000 / u} height={3000 / u} color={color} intensity={brightness} position={[-2000 / u, 0 / u, 5000 / u]} lookAt={[0, 0, 0]} penumbra={1} castShadow />
    }
    function FillLight({ brightness, color }) {
      return <rectAreaLight width={3000 / u} height={3000 / u} intensity={brightness} color={color} position={[2000 / u, 1000 / u, 4000 / u]} lookAt={[0, 0, 0]} penumbra={2} castShadow />
    }

    function RimLight({ brightness, color }) {
      return <rectAreaLight width={2000 / u} height={2000 / u} intensity={brightness} color={color} position={[1000 / u, 4000 / u, -2000 / u]} rotation={[0, 180, 0]} castShadow />
    }

    // configure font geometry

    return (
      <div>
        <Canvas className='canvas' camera={{ zoom: 1, position: [0 / u, 0 / u, 5000 / u], far: 100000 / u }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <directionalLight />

            <KeyLight brightness={5.6} color={'#ffbdf4'} />
            <FillLight brightness={2.6} color={'#bdefff'} />
            <RimLight brightness={54} color={'#fff'} />
            <GroundPlane />
            <BackDrop />
            <OrbitControls />

            {mobilya.sol_yan.dahil && <SolYan1 />}
            {mobilya.sag_yan.dahil && <SagYan1 />}
            {mobilya.ust.dahil && <Ust1 />}
            {mobilya.alt.dahil && <Alt1 />}
            {mobilya.baza.dahil && <Baza1 />}

            {mobilya.arkalik.dahil && <Arkaliks1 />}
            {/* <Kapaks1 /> */}
            <CekmeceKapak1 />
            <KayitEkleDikey1 />
            <KayitEkleYatay1 />
            <CekmeceKasa1 />
            <Dikmes1 />
            <Rafs1 />
            {mobilya.sol_pervaz.dahil && <SolPervaz1 />}
            {mobilya.sag_pervaz.dahil && <SagPervaz1 />}
          </Suspense>
        </Canvas>
      </div>
    )
  }
  //@Nest----------------------------------------------------------------------------------
  const Nest = (props) => {
    const b = []
    const a = props

    if (a.sol_yan.dahil) {
      b.push({ name: a.sol_yan.name, kalinlik: a.sol_yan.x, boy: a.sol_yan.y, en: a.sol_yan.z })
    }
    if (a.sag_yan.dahil) {
      b.push({ name: a.sag_yan.name, kalinlik: a.sag_yan.x, boy: a.sag_yan.y, en: a.sag_yan.z })
    }
    if (a.ust.dahil) {
      b.push({ name: a.ust.name, boy: a.ust.x, kalinlik: a.ust.y, en: a.ust.z })
    }
    if (a.alt.dahil) {
      b.push({ name: a.alt.name, boy: a.alt.x, kalinlik: a.alt.y, en: a.alt.z })
    }
    if (a.sol_pervaz.dahil) {
      b.push({ name: a.sol_pervaz.name, boy: a.sol_pervaz.y, kalinlik: a.sag_pervaz.z, en: a.sol_pervaz.x })
    }
    if (a.sag_pervaz.dahil) {
      b.push({ name: a.sag_pervaz.name, boy: a.sag_pervaz.y, kalinlik: a.sag_pervaz.z, en: a.sag_pervaz.x })
    }
    if (a.raf.length > 0) {
      for (let index = 0; index < a.raf.length; index++) {
        b.push({ name: a.raf[index].name, boy: a.raf[index].x, kalinlik: a.raf[index].y, en: a.raf[index].z })
      }
    }
    if (a.dikme.length > 0) {
      for (let index = 0; index < a.dikme.length; index++) {
        b.push({ name: a.dikme[index].name, boy: a.dikme[index].y, kalinlik: a.dikme[index].x, en: a.dikme[index].z })
      }
    }
    //console.log('b=', b)
    return b
  }
  //@Nesting---------------------------------------------------------------------------------------
  const Nesting = ({ mobilya }) => {
    const a = Nest(mobilya)
    //console.log('--a=', a)

    return (
      <div className='Nesting'>
        <h1>Malzeme kesim listesi</h1>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className='adı'>Adı</Table.HeaderCell>
              <Table.HeaderCell className='en'>En</Table.HeaderCell>
              <Table.HeaderCell className='boy'>Boy</Table.HeaderCell>
              <Table.HeaderCell className='kalinlik'>Kalınlık</Table.HeaderCell>
              <Table.HeaderCell>Malzeme</Table.HeaderCell>
              <Table.HeaderCell>Fiyat</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {a.map((p, index) => (
            <Table.Body key={index}>
              <Table.Row>
                <Table.Cell>{p.name}</Table.Cell>
                <Table.Cell textAlign='right'>{p.en}</Table.Cell>
                <Table.Cell textAlign='right'>{p.boy}</Table.Cell>
                <Table.Cell textAlign='right'>{p.kalinlik}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    )
  }

  //@Price---------------------------------------------------------------------------------
  const Price = ({ mobilya }) => {
    const a = Nest(mobilya)
    // console.log('--a=', a)

    return (
      <div className='Price'>
        <h1>Malzeme kesim listesi</h1>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className='adı'>Adı</Table.HeaderCell>
              <Table.HeaderCell className='en'>En</Table.HeaderCell>
              <Table.HeaderCell className='boy'>Boy</Table.HeaderCell>
              <Table.HeaderCell className='kalinlik'>Kalınlık</Table.HeaderCell>
              <Table.HeaderCell>Malzeme</Table.HeaderCell>
              <Table.HeaderCell>Fiyat</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {a.map((p, index) => (
            <Table.Body key={index}>
              <Table.Row>
                <Table.Cell>{p.name}</Table.Cell>
                <Table.Cell>{p.en}</Table.Cell>
                <Table.Cell>{p.boy}</Table.Cell>
                <Table.Cell>{p.kalinlik}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    )
  }
  //@Materials------------------------------------------------------------------------------
  const Materials = () => {
    //console.log('DataMaterials=', DataMaterials)
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className='adı'>Adı</Table.HeaderCell>
              <Table.HeaderCell className='en'>En</Table.HeaderCell>
              <Table.HeaderCell className='boy'>Boy</Table.HeaderCell>
              <Table.HeaderCell className='kalinlik'>Kalınlık</Table.HeaderCell>
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
    )
  }

  //@Hardwares---------------------------------------------------------------------------------

  const Hardwares = () => {
    const initialState = { hinge: false, hinge_mount: false, kd_hardware: false, molding: false, pocket_screw: false, pull: false, slide: false, wood_component: false, user_defined_hardware: false }
    const [menu, setmenu] = useState(initialState)

    return (
      <div>
        <Button.Group widths='7'>
          <Button
            onClick={() => {
              setmenu({ hinge: true, hinge_mount: false, kd_hardware: false, molding: false, pocket_screw: false, pull: false, slide: false, wood_component: false, user_defined_hardware: false })
            }}
          >
            Menteşe
          </Button>
          <Button
            onClick={() => {
              setmenu({ hinge: false, hinge_mount: true, kd_hardware: false, molding: false, pocket_screw: false, pull: false, slide: false, wood_component: false, user_defined_hardware: false })
            }}
          >
            M Papuc
          </Button>
          <Button
            onClick={() => {
              setmenu({ hinge: false, hinge_mount: false, kd_hardware: true, molding: false, pocket_screw: false, pull: false, slide: false, wood_component: false, user_defined_hardware: false })
            }}
          >
            Ayak
          </Button>
          <Button>molding</Button>
          <Button>pocket_screw</Button>
          <Button>kulp</Button>
          <Button>ray</Button>
        </Button.Group>
        <Divider />
        <Button.Group widths='3'>
          <Button>woodComponenets</Button>
          <Button>Userdefinet hardware</Button>
          <Button>Support</Button>
        </Button.Group>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className='adı'>İmalatçı</Table.HeaderCell>
              <Table.HeaderCell className='en'>En</Table.HeaderCell>
              <Table.HeaderCell className='boy'>Boy</Table.HeaderCell>
              <Table.HeaderCell className='kalinlik'>Kalınlık</Table.HeaderCell>
              <Table.HeaderCell>Malzeme</Table.HeaderCell>
              <Table.HeaderCell>Fiyat</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {menu.hinge &&
            DataHardware.hinge.map((p, index) => (
              <Table.Body key={index}>
                <Table.Row>
                  <Table.Cell>{p.manufacturer}</Table.Cell>
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
    )
  }
  //@ScreenProducts-----------------------------------------------------------------------------------

  const ScreenProducts = () => (
    <div>
      <h3>yapacagınız ürüne en yakın resmi seçiniz</h3>
      <ul className='flex-container-products'>
        <li className='flex-item-products'>
          <label htmlFor='male'>Yan</label>
          <br />
          <img className='image-products' src='https://i.pinimg.com/236x/aa/c1/41/aac1414fccbb69f6d5f0432b78554fe9.jpg' alt='' />
        </li>
        <li className='flex-item-products'>
          <label htmlFor='female'>Ust</label>
          <br />
          <img className='image-products' src='https://i.pinimg.com/236x/14/b0/26/14b0266237fec8c53ec6a0c01974180f.jpg' alt='' />
        </li>
        <li className='flex-item-products'>
          <label htmlFor='female'>Ust</label>
          <br />
          <img className='image-products' src='https://i.pinimg.com/236x/14/b0/26/14b0266237fec8c53ec6a0c01974180f.jpg' alt='' />
        </li>
        <li className='flex-item-products'>
          <label htmlFor='male'>Yan</label>
          <br />
          <img className='image-products' src='https://i.pinimg.com/236x/aa/c1/41/aac1414fccbb69f6d5f0432b78554fe9.jpg' alt='' />
        </li>
        <li className='flex-item-products'>
          <label htmlFor='male'>Yan</label>
          <br />
          <img className='image-products' src='https://cdn.decoist.com/wp-content/uploads/2014/05/Trendy-wall-unit-system-for-the-living-room-in-minimalist-white.jpg' alt='' />
        </li>
      </ul>
    </div>
  )
  //@RETURN----------------------------------------------------------------------------------
  /************* */
  return (
    <div className='App'>
      <Header menu={menu} />
      {menu.Login && <Login />}
      {menu.SignUp && <SignUp />}
      {menu.ScreenCabinet && (
        <div>
          <ScreenCabinet className='ScreenCabinet' />
          <ConstructionSettings />
        </div>
      )}
      {menu.ScreenDikme && (
        <div>
          <ScreenDikme mobilya={mobilya} />
          <ConstructionSettings />
        </div>
      )}
      {menu.Nesting && <Nesting mobilya={mobilya} />}
      {menu.Price && <Price mobilya={mobilya} />}
      {menu.Materials && <Materials />}
      {menu.Hardwares && <Hardwares />}
      {menu.ScreenProducts && <ScreenProducts />}
    </div>
  )
}
export default Program
