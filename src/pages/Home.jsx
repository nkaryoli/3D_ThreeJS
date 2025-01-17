import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';

import Forest from "../models/Forest";

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    
    const adjustForestForScreenSize = () => {
        let screenScale = null;
        let ScreenPosition = [0, -250, -605];
        let rotation = [0.1, 4.7, 0];

        if(window.innerWidth < 768) {
            screenScale = [0.5, 0.5, 0.5];
        }else {
            screenScale = [0.7, 0.7, 0.7];
        }

        return [screenScale, ScreenPosition, rotation]
    }
    
    const [forestScale, forestPosition, forestRotation] = adjustForestForScreenSize();
    
    return (
        <section className="w-full h-screen relative bg-[#010123]">
            <Canvas 
                className={`w-full h-screen bg-transparent 
                    ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                    camera={{ near: 0.1, far: 1000 }}
                    >
                <Suspense  fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

                    <Forest 
                        position={forestPosition}
                        scale={forestScale}
                        rotation={forestRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                </Suspense>
            </Canvas>
        </section>

    )
}

export default Home