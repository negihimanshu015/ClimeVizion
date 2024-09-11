import { Canvas, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

function Earth() {
  const scene = useRef();
  const [chessTexture, normal] = useLoader(TextureLoader, [
    "/earth_texture.jpg",
    "/clouds.jpg",
  ]);
  return (
    <Canvas ref={scene}>
      <ambientLight intensity={2} />
      <mesh scale={3}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={chessTexture} />
      </mesh>
      <mesh scale={3}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={normal}
          transparent={true} // Enable transparency
          opacity={0.5} // Adjust opacity for better visual
        />
      </mesh>
    </Canvas>
  );
}

export default Earth;
