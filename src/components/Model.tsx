import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { nodes, materials } = useGLTF("/models/model.glb");
  return (
    <group
      position={[0, -2, 0]}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane_1 as THREE.Mesh).geometry}
        material={materials.BEF264}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane_2 as THREE.Mesh).geometry}
        material={materials.CA8A04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane_3 as THREE.Mesh).geometry}
        material={materials["22C55E"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane_4 as THREE.Mesh).geometry}
        material={materials["78350F"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane_5 as THREE.Mesh).geometry}
        material={materials.F5F5F4}
      />
    </group>
  );
}

useGLTF.preload("/models/model.gltf");
