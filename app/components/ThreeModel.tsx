'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Model() {
  const gltf = useGLTF('/models/pc-on-desk.glb');
  return <primitive object={gltf.scene} scale={1.3} position={[0, -1.5, 0]} />

}

export default function ThreeModelCanvas() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [20, 5, 1], fov: 70 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}
