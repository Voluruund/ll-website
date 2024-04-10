import { Canvas } from "@react-three/fiber"
import { Leva } from "leva"
import { StrictMode } from "react"
import Baloon from "../utils/Baloon"
import { Suspense } from "react"
import { PerformanceMonitor, Stats } from "@react-three/drei"
import { useState } from "react"
import BaloonMobile from "../utils/BaloonMobile"


export default function SingleBaloon(){

    const [dpr, setDpr] = useState(1)

    var loaded = 0

    if(window.innerWidth < 1000){
        loaded = 1
    }

    return <>
        <StrictMode>
            <Leva collapsed />
            <Suspense fallback={null}>
                <Canvas style={{position: 'absolute', zIndex: 800, width: '100vw', left: '-2.5vw', top: '-5vh',}} dpr={dpr} orthographic camera={{ zoom: 100, position: [0, 0, 30] }}>
                    <PerformanceMonitor onDecline={() => setDpr(.5)} flipflops={1}/>
                    <Suspense fallback={null}>
                    {loaded === 0 ? <Baloon></Baloon> : <BaloonMobile></BaloonMobile>} 
                    </Suspense>
                </Canvas>
            </Suspense>
        </StrictMode>
    </>
}