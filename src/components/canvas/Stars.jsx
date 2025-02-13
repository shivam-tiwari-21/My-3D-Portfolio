import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const pointsRef = useRef();

  // Optimize sphere creation to prevent unnecessary recalculations
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 }), []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 10;
      pointsRef.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={pointsRef}>
      <points>
        <bufferGeometry attach="geometry">
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
};

const StarsCanvas = () => {
  return (
<div className="absolute top-0 left-0 w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
