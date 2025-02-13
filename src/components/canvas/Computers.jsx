import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf'); // ✅ Corrected path

  return (
    <>
      {/* Lighting for the model */}
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1.4} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.4}
        castShadow
        shadow-mapSize={{ width: 1024, height: 1024 }} // ✅ Fixed syntax
      />
      {/* 3D Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.25}
        position={isMobile ? [0, -2.5, -0.5] : [0, -1.35, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateSize = () => setIsMobile(mediaQuery.matches);
    updateSize(); // ✅ Set initial state

    mediaQuery.addListener(updateSize); // ✅ Better compatibility

    return () => {
      mediaQuery.removeListener(updateSize);
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh', // ✅ Truly responsive without blank space
      }}
    >
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={2}
            maxPolarAngle={Math.PI - 0.1} // ✅ Allows vertical movement
            minPolarAngle={0.1}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
