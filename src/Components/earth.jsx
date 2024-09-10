import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

function Earth() {
    const scene = useRef();
  return (    
    <Canvas ref={scene} >
      <ambientLight intensity={2} />
      <mesh scale={2.5}>
        <sphereGeometry args={[1, 64, 64]}/>
      </mesh>
    </Canvas>
  );
}

export default Earth;
