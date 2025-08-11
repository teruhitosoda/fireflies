import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

export default function Fireflies({ count = 50 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = THREE.MathUtils.randFloat(0, 100);
      const factor = THREE.MathUtils.randFloat(2, 12);
      const speed = THREE.MathUtils.randFloat(0.001, 0.002);

      const x = THREE.MathUtils.randFloat(-5, 5);
      const y = THREE.MathUtils.randFloat(-3, 5);
      const z = THREE.MathUtils.randFloat(-4, 4);

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) {
      return;
    }

    const positions = pointsRef.current.geometry.attributes.position.array;

    particles.forEach((particle, i) => {
      const { factor, speed, x, y, z } = particle;
      let { time } = particle;
      time += speed;

      positions[i * 3] = x + Math.cos((time / 10) * factor) + (Math.sin(time * 1) * factor) / 10;
      positions[i * 3 + 1] =
        y + Math.sin((time / 10) * factor) + (Math.cos(time * 2) * factor) / 10;
      positions[i * 3 + 2] =
        z + Math.sin((time / 10) * factor) + (Math.sin(time * 3) * factor) / 10;

      particle.time = time;
    });

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  const initialPositions = useMemo(
    () => new Float32Array(particles.flatMap((p) => [p.x, p.y, p.z])),
    [particles]
  );

  return (
    <Points
      ref={pointsRef}
      positions={initialPositions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#fb923c"
        size={0.16}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}
