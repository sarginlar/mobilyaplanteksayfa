import { Controls, useControl, withControls } from "react-three-gui";
import { OrbitControls, useTexture } from "@react-three/drei";
import SagYanGirinti from "../components/SagYanGirinti";

const u = 1000;
const SagYanCizim = ({ mobilya, setmobilya }) => {
  const [colorMap, displacementMap, normalMap, roughnessMap] = useTexture([
    "WoodQuarteredChiffon001_COL_3K.jpg",
    "WoodQuarteredChiffon001_GLOSS_3K.jpg",
    "WoodQuarteredChiffon001_NRM_3K.jpg",
    "WoodQuarteredChiffon001_REFL_3K.jpg",
  ]);
  const b = SagYanGirinti(mobilya);
  console.log("SagYanGirinti=", b);

  return (
    <mesh
      visible
      userData={{ test: "hello" }}
      rotation={[0, 0, 0]}
      position={[b.x0 / u, b.y0 / u, b.z0 / u]}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[b.x / u, b.y / u, b.z / u]} />
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
export default SagYanCizim;
