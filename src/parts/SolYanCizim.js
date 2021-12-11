import React, { useState } from "react";
import SolYanGirinti from "../components/SolYanGirinti";
import { Controls, useControl, withControls } from "react-three-gui";
import { OrbitControls, useTexture } from "@react-three/drei";
import SolYanPopupMenu from "../popupmenu/SolYanPopupMenu";
import { SegmentGroup } from "semantic-ui-react";

const u = 1000;
const SolYanCizim = ({ mobilya, setmobilya, menu, setmenu }) => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([
      "WoodQuarteredChiffon001_COL_3K_1.jpg",
      "WoodQuarteredChiffon001_NRM_3K.jpg",
      "WoodQuarteredChiffon001_REFL_3K.jpg",
    ]);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const posX = useControl("Pos X", { type: "number" });
  const a = SolYanGirinti(mobilya);
  console.log("SolYanGirinti=", a);
  console.log("a=", a);

  // if (active) {
  //   menu.SolYanMenu = true;
  // } else {
  //   menu.SolYanMenu = false;
  // }

  return (
    <>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setActive(!active)}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
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
          <meshStandardMaterial
            attach="material"
            color={hovered ? "hotpink" : "brown"}
          />
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
    </>
  );
};
export default SolYanCizim;
