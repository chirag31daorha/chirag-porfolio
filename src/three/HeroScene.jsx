import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function StarField() {
  const ref = useRef();
  const sphere = useMemo(() => {
    const positions = new Float32Array(6000);
    for (let i = 0; i < 6000; i += 3) {
      const r = Math.random() * 80 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.04;
      ref.current.rotation.y -= delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent color="#00F5FF" size={0.12}
        sizeAttenuation depthWrite={false} opacity={0.7}
      />
    </Points>
  );
}

function FloatingIcosahedron() {
  const meshRef = useRef();
  const edgesRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.5;
      meshRef.current.position.y = Math.sin(t * 0.6) * 0.4;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x = t * 0.3;
      edgesRef.current.rotation.y = t * 0.5;
      edgesRef.current.position.y = Math.sin(t * 0.6) * 0.4;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial
          color="#00F5FF"
          transparent opacity={0.06}
          wireframe={false}
        />
      </mesh>
      <lineSegments ref={edgesRef} position={[0, 0, 0]}>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(2.2, 1)]} />
        <lineBasicMaterial color="#00F5FF" transparent opacity={0.45} />
      </lineSegments>
    </group>
  );
}

function SmallOrbs() {
  const group = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.children.forEach((child, i) => {
        const speed = 0.3 + i * 0.1;
        const radius = 4 + i * 1.5;
        child.position.x = Math.cos(t * speed + i) * radius;
        child.position.z = Math.sin(t * speed + i) * radius;
        child.position.y = Math.sin(t * 0.5 + i * 1.2) * 1.5;
      });
    }
  });

  const colors = ["#FF006E", "#FFB800", "#7C3AED", "#00F5FF"];
  return (
    <group ref={group}>
      {colors.map((color, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "radial-gradient(ellipse at 50% 40%, rgba(0,245,255,0.04) 0%, transparent 70%)",
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00F5FF" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#FF006E" />
        <StarField />
        <FloatingIcosahedron />
        <SmallOrbs />
      </Canvas>
    </div>
  );
}