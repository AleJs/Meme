import React, { Suspense, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

// import { useLoader } from '@react-three/fiber';
import { useFBX } from "@react-three/drei";
import threeFbxloaderOffical from "three-fbxloader-offical";
// import  Modelo  from "./Scene";

function Scene() {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.5 * delta;
  });
  const fbx = useFBX("/src/assets/img/rat.fbx");
  return <primitive object={fbx} ref={ref} />;
}

const ThreeScene = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [0, 10, 70] }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="#913703" position={[0, 0, 5]} />

        <mesh position={[0, 0, 1]}>
          <Scene />
        </mesh>
      </Canvas>
    </Suspense>
  );
};

export default ThreeScene;
