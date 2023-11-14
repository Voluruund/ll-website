import { Canvas } from "@react-three/fiber"
import { Leva } from "leva"
import { StrictMode } from "react"
import Baloon from "../utils/Baloon"
import { Suspense } from "react"


export default function SingleBaloon(){
    return <>
        <StrictMode>
            <Leva collapsed />
            <Canvas style={{position: 'absolute', zIndex: 800, width: '100vw', left: '-2.5vw', top: '-5vh'}}>
                <Suspense>
                    <Baloon></Baloon>
                </Suspense>
            </Canvas>
        </StrictMode>
    </>
}