import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Clone, Float} from "@react-three/drei";
import Lights from "./Lights";

export default function Baloons(){

    const model = useGLTF('./models/baloon.glb')

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
            <Clone object={model.scene} scale={baloonScale} rotation-x={1.5} position={[baloonPositionX,baloonPositionY,baloonPositionZ]}/>
        </Float>

        <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={.8} // XYZ rotation intensity, defaults to 1
            // floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-.15, .15]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
             <Clone object={model.scene} scale={baloonScale} rotation-x={1.5} position={[-6,2,-3]} className='prova'/>
        </Float>

        <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            // floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-.15, .15]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <Clone object={model.scene} scale={baloonScale} rotation-x={1.5} position={[8,2, -5]} className='prova'/>
        </Float>

        <Float
            speed={2} // Animation speed, defaults to 1
            rotationIntensity={.4} // XYZ rotation intensity, defaults to 1
            // floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-.15, .15]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <Clone object={model.scene} scale={baloonScale} rotation-x={1.5} position={[-16, 10, -12]} className='prova'/>
        </Float>

        <Float
            speed={2} // Animation speed, defaults to 1
            rotationIntensity={.5} // XYZ rotation intensity, defaults to 1
            // floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-.15, .15]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <Clone object={model.scene} scale={baloonScale} rotation-x={1.5} position={[10,-4, -9]} className='prova'/>
        </Float>

        <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={.5} // XYZ rotation intensity, defaults to 1
            // floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-.15, .15]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <Clone object={model.scene} scale={baloonScale} rotation-x={1.5} position={[-18, -6, -12]} className='prova'/>
        </Float>

        <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={.7} // XYZ rotation intensity, defaults to 1
            // floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-.10, .10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <Clone object={model.scene} scale={baloonScale} rotation-x={1.5} position={[11,7, -8]} className='prova'/>
        </Float>
    </>
}