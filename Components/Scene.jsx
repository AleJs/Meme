import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "@react-three/drei";
import React from "react";

const Scene = () => {
  const fbx = useLoader(
    FBXLoader,
    "../src/assets/img/CAS-toothless-Dusmic.fbx"
  );
  return <primitive object={fbx} />;
};

export default Scene;
