import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import Fireflies from "./Fireflies";

export default function World() {
  return (
    <>
      <ambientLight
        intensity={0.1}
        color={"#eff6ff"}
      />
      <directionalLight
        castShadow
        position={[-10, 4, 7]}
        intensity={0.25}
        color={"#eff6ff"}
        shadow-bias={-0.0003}
      />
      <directionalLight
        castShadow
        position={[5, 1, 10]}
        intensity={0.4}
        color={"#fb923c"}
        shadow-bias={-0.0003}
      />
      <pointLight
        position={[2.5, 0, 2.5]}
        intensity={1.2}
        color={"#fb923c"}
      />
      <OrbitControls />
      <color
        args={["#0a0a0a"]}
        attach="background"
      />
      <Suspense>
        <Model />
      </Suspense>
      <Suspense>
        <Fireflies count={50} />
      </Suspense>
    </>
  );
}
