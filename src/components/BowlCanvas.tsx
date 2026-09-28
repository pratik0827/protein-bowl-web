"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { MathUtils } from "three";

function ProceduralBowl() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Subtle parallax tilt when mouse moves
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Target rotation based on pointer
      const targetX = (state.pointer.y * Math.PI) / 8; // Max tilt up/down
      const targetY = (state.pointer.x * Math.PI) / 8; // Max tilt left/right
      
      // Smoothly interpolate current rotation to target rotation
      groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, targetX, 5 * delta);
      groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, targetY, 5 * delta);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group dispose={null} scale={1.2}>
          {/* Bowl Shell */}
          <mesh receiveShadow castShadow position={[0, -0.5, 0]}>
            <sphereGeometry args={[2, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2.1]} />
            <meshPhysicalMaterial 
              color="#1a1a1a" 
              metalness={0.9} 
              roughness={0.1} 
              clearcoat={1} 
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Base Layer (Quinoa/Rice) */}
          <mesh receiveShadow position={[0, -0.3, 0]}>
            <cylinderGeometry args={[1.7, 1.7, 0.4, 32]} />
            <meshStandardMaterial color="#c2b2a1" roughness={0.9} />
          </mesh>

          {/* Protein Cubes (e.g. Tofu/Paneer) */}
          <mesh castShadow position={[-0.7, 0.2, -0.5]} rotation={[0.1, 0.4, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshStandardMaterial color="#d4a373" roughness={0.6} />
          </mesh>
          <mesh castShadow position={[-1.0, 0.1, 0.3]} rotation={[0.5, 0.1, 0.2]}>
            <boxGeometry args={[0.6, 0.6, 0.6]} />
            <meshStandardMaterial color="#cba37b" roughness={0.7} />
          </mesh>

          {/* Greens (Abstract Spheres) */}
          <mesh castShadow position={[0.7, 0.1, 0.5]} rotation={[0, 0, 0]}>
            <sphereGeometry args={[0.7, 32, 32]} />
            <meshStandardMaterial color="#4CAF50" roughness={0.8} />
          </mesh>
          <mesh castShadow position={[0.2, 0.1, 0.9]}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial color="#45a049" roughness={0.8} />
          </mesh>

          {/* Cherry Tomatoes */}
          <mesh castShadow position={[0.1, 0.3, -0.9]}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color="#ff5252" roughness={0.2} metalness={0.1} clearcoat={0.5} />
          </mesh>
          <mesh castShadow position={[0.6, 0.3, -0.5]}>
            <sphereGeometry args={[0.22, 32, 32]} />
            <meshStandardMaterial color="#ff5252" roughness={0.2} metalness={0.1} clearcoat={0.5} />
          </mesh>
          <mesh castShadow position={[-0.3, 0.4, -0.4]}>
             <sphereGeometry args={[0.2, 32, 32]} />
             <meshStandardMaterial color="#ff5252" roughness={0.2} metalness={0.1} clearcoat={0.5} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export function BowlCanvas() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas shadows camera={{ position: [0, 4, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 10, 5]} angle={0.25} penumbra={1} intensity={2} castShadow shadow-bias={-0.0001} />
        <spotLight position={[-5, 10, -5]} angle={0.25} penumbra={1} intensity={1} color="#ffffff" />
        
        <ProceduralBowl />
        
        {/* Contact Shadow to ground it slightly */}
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false}
          maxPolarAngle={Math.PI / 2 + 0.1} // Prevent going under too much
          minPolarAngle={Math.PI / 4} // Prevent going top-down entirely
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
