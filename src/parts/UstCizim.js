import { Controls, useControl, withControls } from "react-three-gui";
import { OrbitControls, useTexture } from "@react-three/drei";
import UstGirinti from "../components/UstGirinti";

const u = 1000;
const UstCizim = ({ mobilya, setmobilya }) => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([
      "WoodQuarteredChiffon001_COL_3K_2.jpg",
      "PavingStones092_1K_Displacement.jpg",
      "PavingStones092_1K_Normal.jpg",
      "PavingStones092_1K_Roughness.jpg",
      "PavingStones092_1K_AmbientOcclusion.jpg",
    ]);
  const a = UstGirinti(mobilya);
  console.log("ust_girinti=", a);
  return (
    <mesh
      visible
      userData={{ test: "hello" }}
      rotation={[0, 0, 0]}
      position={[a.x0 / u, a.y0 / u, a.z0 / u]}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[a.x / u, a.y / u, a.z / u]} />
      {true ? (
        <meshStandardMaterial attach="material" color="brown" />
      ) : (
        <meshStandardMaterial displacementScale={0.001} map={colorMap} />
      )}
    </mesh>
  );
};
export default UstCizim;
