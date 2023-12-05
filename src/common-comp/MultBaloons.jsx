import { Canvas } from "@react-three/fiber"
import { StrictMode } from "react"
import Baloons from "../utils/Baloons"
import { Suspense } from "react"
import { useState } from "react"
import { PerformanceMonitor } from "@react-three/drei"

export default function MultBaloons(){

    const [dpr, setDpr] = useState(1)

    return <>
        <StrictMode>
            <Suspense fallback={null}>
                {/* orthographic camera={{ zoom: 100, position: [0, 0, 30] }} */}
                <Canvas style={{position: 'absolute', zIndex: 800, width: '100vw', left: '-2.5vw', height: '105vh', top: '-5vh'}} dpr={dpr} orthographic camera={{ zoom: 100, position: [0, 0, 30] }}  >
                    <PerformanceMonitor onDecline={() => setDpr(.5)} flipflops={1}/>
                    <Suspense fallback={null}>
                        <Baloons></Baloons>
                    </Suspense>
                </Canvas>
            </Suspense>
        </StrictMode>
    </>
}