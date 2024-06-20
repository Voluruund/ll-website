import { Canvas } from "@react-three/fiber"
import { StrictMode } from "react"
import Baloons from "../utils/Baloons"
import { Suspense } from "react"
import { useState } from "react"
import { PerformanceMonitor } from "@react-three/drei"
import BaloonsMobile from "../utils/BaloonsMobile"

export default function MultBaloons(){

    const [dpr, setDpr] = useState(1)

    var loaded = 0

    if(window.innerWidth < 1000){
        loaded = 1
    }

    return <>
        <StrictMode>
            <Suspense fallback={null}>
                <Canvas style={{position: 'absolute', zIndex: 800, width: '100vw', left: '-1.5vw', height: '105vh', top: '-5vh'}} dpr={dpr} orthographic camera={{ zoom: 105, position: [0, 0, 30] }}  >
                    <PerformanceMonitor onDecline={() => setDpr(1)} flipflops={1}/>
                    <Suspense fallback={null}>
                        {loaded === 0 ? <Baloons></Baloons> : <BaloonsMobile></BaloonsMobile>} 
                    </Suspense>
                </Canvas>
            </Suspense>
        </StrictMode>
    </>
}