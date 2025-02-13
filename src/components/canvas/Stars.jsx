import {useState, useRef, Suspense} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 });
const pointsRef = useRef();
const geometryRef = useRef();

useFrame((state, delta) => {
  if (pointsRef.current) {
    pointsRef.current.rotation.x -= delta / 10;
    pointsRef.current.rotation.y -= delta / 15;
  }
});

return (
  <group ref={pointsRef} rotation={[0, 0, Math.PI / 4]}>
    <points>
      <bufferGeometry attach="geometry" ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          array={sphere}
          count={sphere.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#f272c8"
        size={0.002}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  </group>
);
}
const StarsCanvas = () => {
  return (
    <div className="w-full h-full fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas
