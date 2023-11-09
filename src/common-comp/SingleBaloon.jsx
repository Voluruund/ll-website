import { Canvas } from "@react-three/fiber"
import { Leva } from "leva"
import { StrictMode } from "react"
import Baloon from "../utils/Baloon"


export default function SingleBaloon(){
    return <>
        <StrictMode>
            <Leva collapsed />
            <Canvas style={{position: 'absolute', zIndex: 800, width: '100vw', left: '-2.5vw', top: '-5vh'}}>
                <Baloon></Baloon>
            </Canvas>
        </StrictMode>
    </>
}