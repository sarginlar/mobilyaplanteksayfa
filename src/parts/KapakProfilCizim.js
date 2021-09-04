//-yeni kapak çizimleri-------
import { OrbitControls, useTexture } from "@react-three/drei";

const u = 1000;
function KapakProfilCizim({ mobilya, setmobilya }) {
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
          <planeBufferGeometry attach="geometry" args={[su.x / u, su.y / u]} />
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
          <planeBufferGeometry attach="geometry" args={[so.x / u, so.y / u]} />
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
          <planeBufferGeometry attach="geometry" args={[sa.x / u, sa.y / u]} />
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
          <planeBufferGeometry attach="geometry" args={[ou.x / u, ou.y / u]} />
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
          <planeBufferGeometry attach="geometry" args={[oo.x / u, oo.y / u]} />
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
          <planeBufferGeometry attach="geometry" args={[oa.x / u, oa.y / u]} />
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
export default KapakProfilCizim;
//--------------------------------------------
