import { Canvas } from "@react-three/fiber"
import { Leva } from "leva"
import { StrictMode } from "react"
import Baloon from "../utils/Baloon"


export default function SingleBaloon(){
    return <>
        <StrictMode>
            <Leva collapsed />
            <Canvas>
                <Baloon></Baloon>
            </Canvas>
        </StrictMode>
    </>
}