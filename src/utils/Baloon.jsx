import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Clone, Float} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Lights from "./Lights";
import { BoxGeometry } from "three";
import { StrictMode } from "react";

export default function Baloon(){

    const {nodes, materials} = useGLTF('./models/baloon.glb')
    // const model = useGLTF('./models/untitled.glb')

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
    
    useGLTF.preload("./models/untitled.glb");

    return <>

        { perfVisible && <Perf position="top-left" /> }
        <StrictMode>
            <Lights />
            <Float dispose={null}
                speed={3}
                rotationIntensity={2}
                floatingRange={[-.15, .15]} // defaults to [-0.1,0.1]
            >
                <group dispose={null}>
                    <mesh castShadow receiveShadow material={materials['Material.001']} dispose={null}>
                        <primitive object={nodes.Scene} scale={baloonScale} rotation-x={1.5} position={[baloonPositionX,baloonPositionY,baloonPositionZ]} dispose={null}/>
                    </mesh>
                </group>
                {/* <primitive object={model.scene} scale={baloonScale} rotation-x={1.5} position={[baloonPositionX,baloonPositionY,baloonPositionZ]}/> */}
            </Float>
        </StrictMode>
    </>
}