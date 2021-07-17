//@Ekran3d-----------------------------------------------------
// burada iki seçenek sunalım birtanesi texture lu diğeri mtexture suz.
import { useContext, Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { MobilyaContext } from "../contexts/MobilyaContext";

const u = 1000;

const shape = new THREE.Shape();
shape.lineTo(0 / u, 3000 / u);
shape.lineTo(3000 / u, 0 / u);

const Ekran3d = () => {
  const { mobilya, setmobilya } = useContext(MobilyaContext);
  //TekParcalar();
  //Ust();
  //Baza();
  //Alt();

  const SolYan1 = () => {
    const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
      useTexture([
        "WoodQuarteredChiffon001_COL_3K_1.jpg",
        "WoodQuarteredChiffon001_GLOSS_3K.jpg",
        "WoodQuarteredChiffon001_NRM_3K.jpg",
        "WoodQuarteredChiffon001_REFL_3K.jpg",
      ]);

    const a = mobilya.sol_yan;
    return (
      <mesh
        visible
        rotation={[0, 0, 0]}
        position={[a.x0 / u, a.y0 / u, a.z0 / u]}
        castShadow
      >
        <boxBufferGeometry
          attach="geometry"
          args={[a.x / u, a.y / u, a.z / u]}
        />
        {true ? (
          <meshStandardMaterial attach="material" color="brown" />
        ) : (
          <meshStandardMaterial
            displacementScale={0.001}
            map={colorMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
          />
        )}
      </mesh>
    );
  };

  const SagYan1 = () => {
    const [colorMap, displacementMap, normalMap, roughnessMap] = useTexture([
      "WoodQuarteredChiffon001_COL_3K.jpg",
      "WoodQuarteredChiffon001_GLOSS_3K.jpg",
      "WoodQuarteredChiffon001_NRM_3K.jpg",
      "WoodQuarteredChiffon001_REFL_3K.jpg",
    ]);
    const a = mobilya.sag_yan;
    return (
      <mesh
        visible
        userData={{ test: "hello" }}
        rotation={[0, 0, 0]}
        position={[a.x0 / u, a.y0 / u, a.z0 / u]}
        castShadow
      >
        <boxBufferGeometry
          attach="geometry"
          args={[a.x / u, a.y / u, a.z / u]}
        />
        {true ? (
          <meshStandardMaterial attach="material" color="brown" />
        ) : (
          <meshStandardMaterial
            displacementScale={0.001}
            map={colorMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
          />
        )}
      </mesh>
    );
  };

  const Ust1 = () => {
    const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
      useTexture([
        "WoodQuarteredChiffon001_COL_3K_2.jpg",
        "PavingStones092_1K_Displacement.jpg",
        "PavingStones092_1K_Normal.jpg",
        "PavingStones092_1K_Roughness.jpg",
        "PavingStones092_1K_AmbientOcclusion.jpg",
      ]);
    const a = mobilya.ust;

    return (
      <mesh
        visible
        userData={{ test: "hello" }}
        rotation={[0, 0, 0]}
        position={[a.x0 / u, a.y0 / u, a.z0 / u]}
        castShadow
      >
        <boxBufferGeometry
          attach="geometry"
          args={[a.x / u, a.y / u, a.z / u]}
        />
        {true ? (
          <meshStandardMaterial attach="material" color="brown" />
        ) : (
          <meshStandardMaterial displacementScale={0.001} map={colorMap} />
        )}
      </mesh>
    );
  };
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

  function Kapaks1() {
    const a = mobilya.kapak;
    console.log("kapak uğradıııı");
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
  //-yeni kapak çizimleri-------

  function KapakProfil() {
    /* const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useTexture([
        'WoodQuarteredChiffon001_COL_3K_1.jpg',
        'PavingStones092_1K_Displacement.jpg',
        'n1kapak.png',
        'PavingStones092_1K_Roughness.jpg',
        'PavingStones092_1K_AmbientOcclusion.jpg',
      ])
*/
    //normalMap ler------------
    const [
      sol_ust_kose,
      sol_duz,
      sol_alt_kose,
      ust_duz,
      orta,
      alt_duz,
      sag_ust_kose,
      sag_duz,
      sag_alt_kose,
    ] = useTexture([
      "sol_ust_kose.png",
      "sol_duz.png",
      "sol_alt_kose.png",
      "ust_duz.png",
      "orta.png",
      "alt_duz.png",
      "sag_ust_kose.png",
      "sag_duz.png",
      "sag_alt_kose.png",
    ]);
    const color1 = "rgb(96, 107, 122)";

    // console.log('normalMap=', normalMap)
    const a = mobilya.kapak_profil;
    return a.map((item, index) => {
      const su = item.sol_ust_kose;
      const so = item.sol_duz;
      const sa = item.sol_alt_kose;
      const ou = item.orta_ust;
      const oo = item.orta_orta;
      const oa = item.orta_alt;
      const suk = item.sag_ust_kose;
      const sao = item.sag_duz;
      const sak = item.sag_alt_kose;

      const sagYan = item.sag_yan;
      const solYan = item.sol_yan;
      const ustYan = item.ust_yan;
      const altYan = item.alt_yan;
      const arka = item.arka;
      console.log("altYan=", altYan);
      const x0 = item.x0 / u;
      const y0 = item.y0 / u;
      const z0 = item.z0 / u;
      const x = item.x / u;
      const y = item.y / u;
      const z = item.z / u;
      const x1 = x0 - x / 2 + 0.1 / 2;
      const x2 = x0 + x / 2 - 0.1 / 2;
      const y1 = y0 + y / 2 - 0.1 / 2;
      const y2 = y0;
      const y3 = y0 - y / 2 + 0.1 / 2;
      return (
        <mesh key={index}>
          {/* <mesh key={index} visible userData={{ test: 'hello' }} rotation={[0, 0, 0]} position={[x0, y0, z0]} castShadow>
              <planeBufferGeometry attach='geometry' args={[x, y]} />
              <meshStandardMaterial attach='material' color='green' transparent roughness={0.1} metalness={0.1} normalMap={normalMap} />
            </mesh>*/}
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[su.x0 / u, su.y0 / u, su.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[su.x / u, su.y / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
              normalMap={sol_ust_kose}
            />
          </mesh>
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[so.x0 / u, so.y0 / u, so.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[so.x / u, so.y / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
              normalMap={sol_duz}
            />
          </mesh>
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[sa.x0 / u, sa.y0 / u, sa.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[sa.x / u, sa.y / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
              normalMap={sol_alt_kose}
            />
          </mesh>
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[ou.x0 / u, ou.y0 / u, ou.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[ou.x / u, ou.y / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
              normalMap={ust_duz}
            />
          </mesh>
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[oo.x0 / u, oo.y0 / u, oo.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[oo.x / u, oo.y / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
              normalMap={orta}
            />
          </mesh>
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[oa.x0 / u, oa.y0 / u, oa.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[oa.x / u, oa.y / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
              normalMap={alt_duz}
            />
          </mesh>
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[suk.x0 / u, suk.y0 / u, suk.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[suk.x / u, suk.y / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
              normalMap={sag_ust_kose}
            />
          </mesh>
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[sao.x0 / u, sao.y0 / u, sao.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[sao.x / u, sao.y / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
              normalMap={sag_duz}
            />
          </mesh>
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[0, 0, 0]}
            position={[sak.x0 / u, sak.y0 / u, sak.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[sak.x / u, sak.y / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
              normalMap={sag_alt_kose}
            />
          </mesh>
          {/**profil kapak sağ  yan çizimi */}
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            position={[sagYan.x0 / u, sagYan.y0 / u, sagYan.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[sagYan.y / u, sagYan.z / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
          {/**profil kapak sol  yan çizimi */}
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            position={[solYan.x0 / u, solYan.y0 / u, solYan.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[solYan.y / u, solYan.z / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
          {/**profil ust yan çizimi */}
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[ustYan.x0 / u, ustYan.y0 / u, ustYan.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[ustYan.x / u, ustYan.z / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
          {/**profil alt yan çizimi */}
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[Math.PI / 2, 0, 0]}
            position={[altYan.x0 / u, altYan.y0 / u, altYan.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[altYan.x / u, altYan.z / u]}
            />
            {/*normalMap={sag_alt_kose}*/}
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>

          {/**profil arka çizimi */}
          <mesh
            visible
            userData={{ test: "hello" }}
            rotation={[0, Math.PI, 0]}
            position={[arka.x0 / u, arka.y0 / u, arka.z0 / u]}
            castShadow
          >
            <planeBufferGeometry
              attach="geometry"
              args={[arka.x / u, arka.y / u]}
            />
            <meshStandardMaterial
              attach="material"
              color={color1}
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
        </mesh>
      );
    });
  }
  //--------------------------------------------

  function CekmeceKapak1() {
    const a = mobilya.cekmece_kapak;
    console.log("cekmece kapak uğradıııı");
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

  function KayitEkleDikey1() {
    const a = mobilya.kayit_ekle_dikey;
    console.log("kayit_ekle_dikey uğradı");
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

  function KayitEkleYatay1() {
    const a = mobilya.kayit_ekle_yatay;
    console.log("kayit_ekle_yatay uğradı");
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

  const Alt1 = () => {
    const a = mobilya.alt;
    return (
      <mesh
        visible
        userData={{ test: "hello" }}
        rotation={[0, 0, 0]}
        position={[a.x0 / u, a.y0 / u, a.z0 / u]}
        castShadow
      >
        <boxBufferGeometry
          attach="geometry"
          args={[a.x / u, a.y / u, a.z / u]}
        />
        <meshStandardMaterial
          attach="material"
          color="red"
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    );
  };
  const Baza1 = () => {
    const a = mobilya.baza;
    console.log("test");
    return (
      <mesh
        visible
        userData={{ test: "hello" }}
        rotation={[0, 0, 0]}
        position={[a.x0 / u, a.y0 / u, a.z0 / u]}
        castShadow
      >
        <boxBufferGeometry
          attach="geometry"
          args={[a.x / u, a.y / u, a.z / u]}
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
  };
  const SolPervaz1 = () => {
    const a = mobilya.sol_pervaz;
    return (
      <mesh
        visible
        userData={{ test: "hello" }}
        rotation={[0, 0, 0]}
        position={[a.x0 / u, a.y0 / u, a.z0 / u]}
        castShadow
      >
        <boxBufferGeometry
          attach="geometry"
          args={[a.x / u, a.y / u, a.z / u]}
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
  };
  const SagPervaz1 = () => {
    const a = mobilya.sag_pervaz;
    return (
      <mesh
        visible
        userData={{ test: "hello" }}
        rotation={[0, 0, 0]}
        position={[a.x0 / u, a.y0 / u, a.z0 / u]}
        castShadow
      >
        <boxBufferGeometry
          attach="geometry"
          args={[a.x / u, a.y / u, a.z / u]}
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
  };

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
    <div>
      <Canvas
        className="canvas"
        camera={{
          zoom: 1,
          position: [0 / u, 0 / u, 5000 / u],
          far: 100000 / u,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight />
          <KeyLight brightness={5.6} color={"#ffbdf4"} />
          <FillLight brightness={2.6} color={"#bdefff"} />
          <RimLight brightness={54} color={"#fff"} />
          <GroundPlane />
          <BackDrop />
          <OrbitControls />
          {mobilya.sol_yan.dahil && <SolYan1 />}
          {mobilya.sag_yan.dahil && <SagYan1 />}
          {mobilya.ust.dahil && <Ust1 />}
          {mobilya.alt.dahil && <Alt1 />}
          {mobilya.baza.dahil && <Baza1 />}
          {mobilya.arkalik.dahil && <Arkaliks1 />}
          <Kapaks1 />
          <KapakProfil />
          <CekmeceKapak1 />
          <KayitEkleDikey1 />
          <KayitEkleYatay1 />
          <CekmeceKasa1 />
          <DikeyBolmes1 />
          <YatayBolmes1 />
          <Rafs1 />
          {mobilya.sol_pervaz.dahil && <SolPervaz1 />}
          {mobilya.sag_pervaz.dahil && <SagPervaz1 />}
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Ekran3d;
