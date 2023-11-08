import { Canvas } from "@react-three/fiber"
import { StrictMode } from "react"
import Baloons from "../utils/Baloons"


export default function MultBaloons(){


    return <>
        <StrictMode>
            <Canvas style={{position: 'absolute', zIndex: 800, width: '100vw', left: '-2.5vw', height: '100vh'}}>
                <Baloons></Baloons>
            </Canvas>
        </StrictMode>
    </>
}