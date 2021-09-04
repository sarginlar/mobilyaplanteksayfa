const u = 1000;
const SolPervazCizim = ({ mobilya, setmobilya }) => {
  const a = mobilya.sol_pervaz;
  return (
    <mesh
      visible
      userData={{ test: "hello" }}
      rotation={[0, 0, 0]}
      position={[a.x0 / u, a.y0 / u, a.z0 / u]}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[a.x / u, a.y / u, a.z / u]} />
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
export default SolPervazCizim;
