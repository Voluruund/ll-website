import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Clone, Float} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Lights from "./Lights";
import { StrictMode } from "react";

export default function Baloon(){

    const {nodes, materials} = useGLTF('./models/balloon-laura-low.gltf')
    // const {nodes, materials} = useGLTF('./models/baloon.glb')

    console.log(nodes)
    console.log(materials)
    // const { viewport } = useThree()

    const { baloonScale } = useControls('baloon', {
        baloonScale:{
            value: .69,
            step: 0.01,
            min: -20,
            max: 5
        }
    })

    const { baloonPositionX } = useControls('baloon', {
        baloonPositionX:{
            value: 0,
            step: 0.01,
            min: 0,
            max: 5
        }
    })

    const { baloonPositionY } = useControls('baloon', {
        baloonPositionY:{
            value: 1,
            step: 0.01,
            min: 0,
            max: 5
        }
    })

    const { baloonPositionZ } = useControls('baloon', {
        baloonPositionZ:{
            value: 1,
            step: 0.01,
            min: 0,
            max: 5
        }
    })

    const { perfVisible } = useControls('debug', {
        perfVisible: false
    })
    
    var model

    if(window.innerWidth < 1000){
        model = nodes.Sphere002.geometry
    }else{
        model = nodes.Sphere003.geometry
    }


    return <>

        { perfVisible && <Perf position="top-left" /> }
        <StrictMode>
            <Lights />
            <Float dispose={null}
                speed={2}
                rotationIntensity={1.4}
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