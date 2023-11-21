import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Clone, Float} from "@react-three/drei";
import Lights from "./Lights";
import { StrictMode } from "react";

export default function Baloons(){

    const {nodes, materials} = useGLTF('./models/baloon.glb')
    // const model = useGLTF('./models/untitled.glb')

    const { baloonScale } = useControls('baloons', {
        baloonScale:{
            value: .69,
            step: 0.01,
            min: 0,
            max: 5
        }
    })

    const { baloonPositionX } = useControls('baloons', {
        baloonPositionX:{
            value: 0,
            step: 0.01,
            min: 0,
            max: 5
        }
    })

    const { baloonPositionY } = useControls('baloons', {
        baloonPositionY:{
            value: 1,
            step: 0.01,
            min: 0,
            max: 5
        }
    })

    const { baloonPositionZ } = useControls('baloons', {
        baloonPositionZ:{
            value: 1,
            step: 0.01,
            min: 0,
            max: 5
        }
    })

    return <>
        <StrictMode>
            <Lights />
            <Float
                speed={3}
                rotationIntensity={2}
                floatingRange={[-.15, .15]} // defaults to [-0.1,0.1]
            >
                <group dispose={null}>
                    <mesh castShadow receiveShadow material={materials['Material.001']} dispose={null}>
                        <Clone object={nodes.Scene} scale={baloonScale} rotation-x={1.5} position={[baloonPositionX,baloonPositionY,baloonPositionZ]} dispose={null}/>
                    </mesh>
                </group>
            </Float>
        </StrictMode>
    </>
}