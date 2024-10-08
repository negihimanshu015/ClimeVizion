import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

function Earth() {
  const EarthRef = useRef();
  const CloudRef = useRef();
  const [earthTexture, normal] = useLoader(TextureLoader, [
    "/day.jpg",
    "/clouds.jpg",
  ]);

  useFrame(() => {
    if (EarthRef.current) {
      EarthRef.current.rotation.y += 0.001; // Rotate the Earth mesh around the y-axis
    }
  });

  useFrame(() => {
    if (CloudRef.current) {
      CloudRef.current.rotation.y += 0.001; // Rotate the Earth mesh around the y-axis
    }
  });

  return (
    <>
      <Stars radius={600} depth={100} count={20000} factor={1} fade={true} />
      <ambientLight intensity={1} />
      <mesh scale={3} ref={EarthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
      <mesh scale={3} ref={CloudRef}>
        <sphereGeometry args={[1.008, 64, 64]} />
        <meshStandardMaterial map={normal} transparent={true} opacity={0.5} />
      </mesh>
    </>
  );
}

function EarthScene() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={7} position={[1, 0, 0.25]} />
        <Earth />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.1}
        />
      </Canvas>
    </>
  );
}

export default EarthScene;
