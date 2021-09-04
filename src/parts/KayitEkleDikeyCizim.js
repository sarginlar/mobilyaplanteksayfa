const u = 1000;

function KayitEkleDikeyDikey({ mobilya, setmobilya }) {
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
export default KayitEkleDikeyDikey;
