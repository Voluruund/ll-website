import { Canvas } from "@react-three/fiber"
import { StrictMode } from "react"
import Baloons from "../utils/Baloons"
import { Suspense } from "react"


export default function MultBaloons(){


    return <>
        <StrictMode>
            <Canvas style={{position: 'absolute', zIndex: 800, width: '100vw', left: '-2.5vw', height: '100vh'}}>
                <Suspense>
                    <Baloons></Baloons>
                </Suspense>
            </Canvas>
        </StrictMode>
    </>
}