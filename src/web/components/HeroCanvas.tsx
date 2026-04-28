import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 2200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.03;
      ref.current.rotation.x = Math.sin(t * 0.02) * 0.06;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#7ee8e8" size={0.04} sizeAttenuation depthWrite={false} opacity={0.45} />
    </Points>
  );
}

function FloatingRings() {
  const r1 = useRef<THREE.Mesh>(null!);
  const r2 = useRef<THREE.Mesh>(null!);
  const r3 = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (r1.current) { r1.current.rotation.x = t * 0.25; r1.current.rotation.y = t * 0.18; }
    if (r2.current) { r2.current.rotation.x = -t * 0.2; r2.current.rotation.z = t * 0.12; }
    if (r3.current) { r3.current.rotation.y = t * 0.15; r3.current.rotation.x = t * 0.1; }
  });

  return (
    <>
      <mesh ref={r1} position={[4, 0.5, -3]}>
        <torusGeometry args={[2.4, 0.022, 16, 90]} />
        <meshStandardMaterial color="#1D4ED8" transparent opacity={0.3} />
      </mesh>
      <mesh ref={r2} position={[-3.5, 1.5, -2]}>
        <torusGeometry args={[1.6, 0.018, 16, 70]} />
        <meshStandardMaterial color="#E8567A" transparent opacity={0.25} />
      </mesh>
      <mesh ref={r3} position={[1, -2, -1]}>
        <torusGeometry args={[1.0, 0.016, 16, 55]} />
        <meshStandardMaterial color="#7ee8e8" transparent opacity={0.35} />
      </mesh>
    </>
  );
}

function Spheres() {
  const group = useRef<THREE.Group>(null!);

  const data = useMemo(() => [
    { x: 5, y: 2, z: -1, r: 0.2, color: "#E8567A", speed: 0.5 },
    { x: -4.5, y: -1, z: -0.5, r: 0.14, color: "#1D4ED8", speed: 0.7 },
    { x: 3, y: -2.5, z: 0.5, r: 0.25, color: "#7ee8e8", speed: 0.4 },
    { x: -2.5, y: 2.5, z: -1.5, r: 0.16, color: "#FDE8EE", speed: 0.6 },
    { x: 0.5, y: 3, z: 1, r: 0.12, color: "#E8567A", speed: 0.8 },
    { x: -1.5, y: -3, z: -0.5, r: 0.18, color: "#1D4ED8", speed: 0.5 },
  ], []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current?.children.forEach((child, i) => {
      child.position.y = data[i].y + Math.sin(t * data[i].speed + i) * 0.5;
    });
  });

  return (
    <group ref={group}>
      {data.map((d, i) => (
        <mesh key={i} position={[d.x, d.y, d.z]}>
          <sphereGeometry args={[d.r, 24, 24]} />
          <meshStandardMaterial color={d.color} transparent opacity={0.65} roughness={0.1} metalness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#7ee8e8" />
      <pointLight position={[-5, -3, 3]} intensity={1} color="#E8567A" />
      <ParticleField />
      <FloatingRings />
      <Spheres />
    </Canvas>
  );
}
