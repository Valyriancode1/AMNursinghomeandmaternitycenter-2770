import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Float } from "@react-three/drei";
import * as THREE from "three";

function LogoMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture("/logo-3d.png");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.4) * 0.18;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
      <mesh ref={meshRef}>
        <planeGeometry args={[2.2, 2.2]} />
        <meshStandardMaterial
          map={texture}
          transparent
          alphaTest={0.05}
          roughness={0.2}
          metalness={0.15}
        />
      </mesh>
    </Float>
  );
}

export default function Logo3D({ size = 56 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, display: "inline-block" }}>
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[2, 2, 3]} intensity={1.5} color="#7ee8e8" />
        <pointLight position={[-2, -1, 2]} intensity={0.8} color="#E8567A" />
        <pointLight position={[0, 3, 2]} intensity={0.6} color="#ffffff" />
        <LogoMesh />
      </Canvas>
    </div>
  );
}
