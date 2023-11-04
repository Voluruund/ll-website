// import { OrbitControls } from "drei";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";

export default function Baloon(){

    const model = useGLTF('./models/balloon-laura.gltf')

    const { baloonScale } = useControls('baloon', {
        baloonScale:{
            value: .5,
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
            value: 2,
            // step: 0.01,
            // min: 0,
            // max: 5
        }
    })

    const { perfVisible } = useControls('debug', {
        perfVisible: false
    })
    
    return <>

        { perfVisible && <Perf position="top-left" /> }

        {/* <OrbitControls makeDefault /> */}
        <directionalLight intensity={5.5} position={[1,2,3]}></directionalLight>
        <ambientLight intensity={5.5}></ambientLight>

        <primitive object={model.scene} scale={baloonScale} rotation-x={1.5} position={[baloonPositionX,baloonPositionY,baloonPositionZ]} className='prova'/>
    </>
}