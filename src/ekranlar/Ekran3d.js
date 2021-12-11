//@Ekran3d-----------------------------------------------------
// burada iki seçenek sunalım birtanesi texture lu diğeri mtexture suz.
import React, { useState } from "react";
import { useContext, Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { MobilyaContext } from "../contexts/MobilyaContext";
import { MenuContext } from "../contexts/MenuContext";
//import SolYanGirinti from "../components/SolYanGirinti";
//import SagYanGirinti from "../components/SagYanGirinti";
//import UstGirinti from "../components/UstGirinti";
//import AltGirinti from "../components/AltGirinti";
import { Controls, useControl, withControls } from "react-three-gui";
import SolYanCizim from "../parts/SolYanCizim";
import SagYanCizim from "../parts/SagYanCizim";
import UstCizim from "../parts/UstCizim";
import KapakDuzCizim from "../parts/KapakDuzCizim";
import KapakProfilCizim from "../parts/KapakProfilCizim";
import CekmeceKapakCizim from "../parts/CekmeceKapakCizim";
import AltCizim from "../parts/AltCizim";
import BazaCizim from "../parts/BazaCizim";
import SolPervazCizim from "../parts/SolPervazCizim";
import SagPervazCizim from "../parts/SagPervazCizim";
import KayitEkleDikeyCizim from "../parts/KayitEkleDikeyCizim";
import KayitEkleYatayCizim from "../parts/KayitEkleYatayCizim";
import { Button } from "semantic-ui-react";
import SolYanPopupMenu from "../popupmenu/SolYanPopupMenu";

//import { a, config } from "@react-spring/three";

const u = 1000;

const shape = new THREE.Shape();
shape.lineTo(0 / u, 3000 / u);
shape.lineTo(3000 / u, 0 / u);

const Ekran3d = () => {
  const { mobilya, setmobilya } = useContext(MobilyaContext);
  const { menu, setmenu } = useContext(MenuContext);
  console.log("----aranan=", mobilya);
  //TekParcalar();
  //Ust();
  //Baza();
  //Alt();
  //mobilya_sol_yan çizim
  const GROUP = "Extra";

  // const yenimenu = menu;
  // yenimenu.SolYanMenu = true;
  // setmenu(yenimenu);
  // console.log("menu.SolYanMenu=", menu.SolYanMenu);

  function CekmeceKasa1() {
    const a = mobilya.cekmece_kasa;
    console.log("cekmece kasa uğradıııı");
    return a.map((item, index) => {
      return (
        <>
          {/* sol_yan çizim------------------- */}
          <mesh
            key={index}
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[
              item.sol_yan.x0 / u,
              item.sol_yan.y0 / u,
              item.sol_yan.z0 / u,
            ]}
            castShadow
          >
            <boxBufferGeometry
              attach="geometry"
              args={[
                item.sol_yan.x / u,
                item.sol_yan.y / u,
                item.sol_yan.z / u,
              ]}
            />
            <meshStandardMaterial
              attach="material"
              color="white"
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
          {/* sag_yan çizim------------------- */}
          <mesh
            key={index}
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[
              item.sag_yan.x0 / u,
              item.sag_yan.y0 / u,
              item.sag_yan.z0 / u,
            ]}
            castShadow
          >
            <boxBufferGeometry
              attach="geometry"
              args={[
                item.sag_yan.x / u,
                item.sag_yan.y / u,
                item.sag_yan.z / u,
              ]}
            />
            <meshStandardMaterial
              attach="material"
              color="white"
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
          {/* on çizim------------------- */}
          <mesh
            key={index}
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[item.on.x0 / u, item.on.y0 / u, item.on.z0 / u]}
            castShadow
          >
            <boxBufferGeometry
              attach="geometry"
              args={[item.on.x / u, item.on.y / u, item.on.z / u]}
            />
            <meshStandardMaterial
              attach="material"
              color="white"
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
          {/* arka çizim------------------- */}
          <mesh
            key={index}
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[item.arka.x0 / u, item.arka.y0 / u, item.arka.z0 / u]}
            castShadow
          >
            <boxBufferGeometry
              attach="geometry"
              args={[item.arka.x / u, item.arka.y / u, item.arka.z / u]}
            />
            <meshStandardMaterial
              attach="material"
              color="white"
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
          {/* alt çizim------------------- */}
          <mesh
            key={index}
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[item.alt.x0 / u, item.alt.y0 / u, item.alt.z0 / u]}
            castShadow
          >
            <boxBufferGeometry
              attach="geometry"
              args={[item.alt.x / u, item.alt.y / u, item.alt.z / u]}
            />
            <meshStandardMaterial
              attach="material"
              color="white"
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
        </>
      );
    });
  }

  function Arkaliks1() {
    const a = mobilya.arkalik;
    return a.map((item, index) => {
      return (
        <mesh
          key={index}
          visible
          userData={{ test: "hello" }}
          rotation={[0, 0, 0]}
          position={[item.x0 / u, item.y0 / u, item.z0 / u]}
          castShadow
        >
          <boxBufferGeometry
            attach="geometry"
            args={[item.x / u, item.y / u, item.z / u]}
          />
          <meshStandardMaterial
            attach="material"
            color="white"
            transparent
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>
      );
    });
  }

  function DikeyBolmes1() {
    const [colorMap, displacementMap, normalMap, roughnessMap] = useTexture([
      "WoodQuarteredChiffon001_COL_3K.jpg",
      "WoodQuarteredChiffon001_GLOSS_3K.jpg",
      "WoodQuarteredChiffon001_NRM_3K.jpg",
      "WoodQuarteredChiffon001_REFL_3K.jpg",
    ]);
    const a = mobilya.dikey_bolme;
    return a.map((item, index) => {
      return (
        <mesh
          key={index}
          visible
          userData={{ test: "hello" }}
          rotation={[0, 0, 0]}
          position={[item.x0 / u, item.y0 / u, item.z0 / u]}
          castShadow
        >
          <boxBufferGeometry
            attach="geometry"
            args={[item.x / u, item.y / u, item.z / u]}
          />
          <meshStandardMaterial
            displacementScale={0.001}
            map={colorMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
          />
        </mesh>
      );
    });
  }

  function YatayBolmes1() {
    const a = mobilya.yatay_bolme;

    return a.map((item, index) => {
      return (
        <mesh
          key={index}
          visible
          userData={{ test: "hello" }}
          rotation={[0, 0, 0]}
          position={[item.x0 / u, item.y0 / u, item.z0 / u]}
          castShadow
        >
          <boxBufferGeometry
            attach="geometry"
            args={[item.x / u, item.y / u, item.z / u]}
          />
          <meshStandardMaterial
            attach="material"
            color="white"
            transparent
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>
      );
    });
  }

  function Rafs1() {
    const a = mobilya.raf;

    return a.map((item, index) => {
      return (
        <mesh
          key={index}
          visible
          userData={{ test: "hello" }}
          rotation={[0, 0, 0]}
          position={[item.x0 / u, item.y0 / u, item.z0 / u]}
          castShadow
        >
          <boxBufferGeometry
            attach="geometry"
            args={[item.x / u, item.y / u, item.z / u]}
          />
          <meshStandardMaterial
            attach="material"
            color="white"
            transparent
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>
      );
    });
  }

  function GroundPlane() {
    return (
      <mesh
        receiveShadow
        rotation={[5, 0, 0]}
        position={[0 / u, -2000 / u, 0 / u]}
      >
        <planeBufferGeometry attach="geometry" args={[10000 / u, 10000 / u]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    );
  }
  function BackDrop() {
    return (
      <mesh receiveShadow position={[0 / u, 0 / u, -1000 / u]}>
        <planeBufferGeometry attach="geometry" args={[10000 / u, 10000 / u]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    );
  }

  function Box() {
    return mobilya.parca.map((item, index) => {
      return (
        <mesh
          key={index}
          visible
          userData={{ test: "hello" }}
          rotation={[0, 0, 0]}
          position={[item.x0 / u, item.y0 / u, item.z0 / u]}
          castShadow
        >
          <boxBufferGeometry
            attach="geometry"
            args={[item.x / u, item.y / u, item.z / u]}
          />
          <meshStandardMaterial
            attach="material"
            color="white"
            transparent
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>
      );
    });
  }

  // Lights
  function KeyLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3000 / u}
        height={3000 / u}
        color={color}
        intensity={brightness}
        position={[-2000 / u, 0 / u, 5000 / u]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    );
  }
  function FillLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3000 / u}
        height={3000 / u}
        intensity={brightness}
        color={color}
        position={[2000 / u, 1000 / u, 4000 / u]}
        lookAt={[0, 0, 0]}
        penumbra={2}
        castShadow
      />
    );
  }

  function RimLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={2000 / u}
        height={2000 / u}
        intensity={brightness}
        color={color}
        position={[1000 / u, 4000 / u, -2000 / u]}
        rotation={[0, 180, 0]}
        castShadow
      />
    );
  }

  // configure font geometry

  return (
    <>
      <Controls.Provider>
        <Controls.Canvas
          className="canvas"
          camera={{
            zoom: 1,
            position: [0 / u, 0 / u, 5000 / u],
            far: 100000 / u,
          }}
        >
          <Suspense fallback={() => <h1>Loading....</h1>}>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <KeyLight brightness={5.6} color={"#ffbdf4"} />
            <FillLight brightness={2.6} color={"#bdefff"} />
            <RimLight brightness={54} color={"#fff"} />
            <GroundPlane />
            <BackDrop />
            <OrbitControls />
            {mobilya.sol_yan.dahil && (
              <SolYanCizim
                mobilya={mobilya}
                setmobilya={setmobilya}
                menu={menu}
                setmenu={setmenu}
              />
            )}
            {mobilya.sag_yan.dahil && (
              <SagYanCizim mobilya={mobilya} setmobilya={setmobilya} />
            )}
            {mobilya.ust.dahil && (
              <UstCizim mobilya={mobilya} setmobilya={setmobilya} />
            )}
            {mobilya.alt.dahil && (
              <AltCizim mobilya={mobilya} setmobilya={setmobilya} />
            )}
            {mobilya.baza.dahil && (
              <BazaCizim mobilya={mobilya} setmobilya={setmobilya} />
            )}
            {mobilya.arkalik.dahil && <Arkaliks1 />}
            <KapakDuzCizim mobilya={mobilya} setmobilya={setmobilya} />
            <KapakProfilCizim mobilya={mobilya} setmobilya={setmobilya} />
            <CekmeceKapakCizim mobilya={mobilya} setmobilya={setmobilya} />
            <KayitEkleDikeyCizim mobilya={mobilya} setmobilya={setmobilya} />
            <KayitEkleYatayCizim mobilya={mobilya} setmobilya={setmobilya} />
            <CekmeceKasa1 />
            <DikeyBolmes1 />
            <YatayBolmes1 />
            <Rafs1 />
            {mobilya.sol_pervaz.dahil && (
              <SolPervazCizim mobilya={mobilya} setmobilya={setmobilya} />
            )}
            {mobilya.sag_pervaz.dahil && (
              <SagPervazCizim mobilya={mobilya} setmobilya={setmobilya} />
            )}
          </Suspense>
        </Controls.Canvas>
        <Controls />
      </Controls.Provider>
    </>
  );
};
export default Ekran3d;
