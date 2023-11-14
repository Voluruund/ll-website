import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Clone, Float} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Lights from "./Lights";

export default function Baloon(){

    const model = useGLTF('./models/baloon.glb')
    const { viewport } = useThree()

    const { baloonScale } = useControls('baloon', {
        baloonScale:{
            value: .69,
            step: 0.01,
            min: 0,
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
            value: 1.56,
            step: 0.01,
            min: 0,
            max: 5
        }
    })

    const { perfVisible } = useControls('debug', {
        perfVisible: false
    })
    
    return <>

        { perfVisible && <Perf position="top-left" /> }

       <Lights />

        <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            // floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-.15, .15]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <primitive object={model.scene} scale={baloonScale} rotation-x={1.5} position={[baloonPositionX,baloonPositionY,baloonPositionZ]}/>
        </Float>
    </>
}