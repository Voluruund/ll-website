import { Canvas } from "@react-three/fiber"
import { Leva } from "leva"
import { StrictMode } from "react"
import Baloon from "../utils/Baloon"


export default function SingleBaloon(){
    return <>
        <StrictMode>
            <Leva collapsed />
            <Canvas
                // camera={
                //     {
                //         fov: 90,
                //         near: 100,
                //         far: 200,
                //         position: [0,0,0]
                //     }
                // }
            >
                <Baloon></Baloon>
            </Canvas>
        </StrictMode>
    </>
}