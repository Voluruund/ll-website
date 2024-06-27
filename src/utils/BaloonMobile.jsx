import { useGLTF } from "@react-three/drei";
import { Float} from "@react-three/drei";
import Lights from "./Lights";
import { StrictMode } from "react";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export default function BaloonMobile(){

    const {nodes, materials} = useGLTF('/models/balloon-laura-low-new.gltf')

    var model = nodes.Sphere002.geometry

    // const { perfVisible } = useControls('debug', {
    //     perfVisible: true
    // })

    return <>
        {/* ATTIVA LEVA PERF */}
        {/* { perfVisible && <Perf position="top-left" /> } */}
        <StrictMode>
            <Lights />
            <Float
                speed={2}
                rotationIntensity={.5}
                floatingRange={[-.2, .05]} // defaults to [-0.1,0.1]
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={model}
                    material={materials["Material.001"]}
                    position={[0, -0.2, 1.229]}
                    // 1.262
                    scale={[0.4887, .48, 0.4887]}
                    rotation-x={1.5}
                />
            </Float>
        </StrictMode>
    </>
}

useGLTF.preload("/balloon-laura-low.gltf");