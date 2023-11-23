import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Clone, Float} from "@react-three/drei";
import Lights from "./Lights";
import { StrictMode } from "react";

export default function Baloons(){

    const {nodes, materials} = useGLTF('./models/balloon-laura-low.gltf')
    // const {nodes, materials} = useGLTF('./models/baloon.glb')
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

    var model

    if(window.innerWidth < 1000){
        model = nodes.Sphere002.geometry
    }else{
        model = nodes.Sphere003.geometry
    }

    return <>
        <StrictMode>
            <Lights />
            <Float
                speed={3}
                rotationIntensity={2}
                floatingRange={[-.15, .15]} // defaults to [-0.1,0.1]
            >
                <group dispose={null} scale={baloonScale} rotation-x={1.5} position={[baloonPositionX,baloonPositionY,baloonPositionZ]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={model}
                        material={materials["Material.001"]}
                        position={[0, 0, 1.229]}
                        scale={[0.887, 3.162, 0.887]}
                    />
                </group>
            </Float>
        </StrictMode>
    </>
}

useGLTF.preload("/balloon-laura-low.gltf");