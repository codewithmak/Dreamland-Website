import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingLogo() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  const goldMaterial = useMemo(() => 
    new THREE.MeshStandardMaterial({
      color: '#f0d06a',
      metalness: 0.7,
      roughness: 0.3,
      emissive: '#f0d06a',
      emissiveIntensity: 0.1,
    }), []
  );

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <Center>
        <mesh ref={meshRef}>
          <torusGeometry args={[2, 0.8, 16, 100]} />
          <primitive object={goldMaterial} />
        </mesh>
        <mesh position={[0, 0, 0.1]}>
          <cylinderGeometry args={[0.3, 0.3, 1.5, 8]} />
          <primitive object={goldMaterial} />
        </mesh>
        <mesh position={[0, 0.5, 0.1]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <primitive object={goldMaterial} />
        </mesh>
      </Center>
    </Float>
  );
}

const Hero3D = () => {
  return (
    <div className="w-full h-64 md:h-80">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#f0d06a" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b12b14" />
        <FloatingLogo />
      </Canvas>
    </div>
  );
};

export default Hero3D;