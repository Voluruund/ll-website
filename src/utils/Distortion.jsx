import { Canvas } from "@react-three/fiber";
import { StrictMode } from "react";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

export default function Distortion(){

    return <>
        <StrictMode>
            <Canvas style={{position: 'absolute', zIndex: 700, width: '100vw', height: '100vh'}}>
                    <mesh scale={10} position={[0,0,-10]}>
                        <planeGeometry attach="geometry" args={[1000, 1000]}/>
                        {/* <meshPhongMaterial attach="material" color="green" /> */}
                        <EffectComposer>
                            <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
                            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                            <Noise opacity={0.01} />
                            <Vignette eskil={false} offset={0.1} darkness={1.1} />
                        </EffectComposer>
                    </mesh>
            </Canvas>
        </StrictMode>
    </>
}