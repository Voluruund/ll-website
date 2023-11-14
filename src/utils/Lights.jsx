import { OrbitControls, Clone, Float, AccumulativeShadows, RandomizedLight, Lightformer, Environment } from "@react-three/drei";

export default function Lights(){
    return <>
        
        {/* <OrbitControls makeDefault /> */}

        <directionalLight intensity={15} position={[3,3,2]}></directionalLight>
        <directionalLight intensity={15} position={[-3,-3,2]}></directionalLight>
        <pointLight position={[-2,-1,2]} intensity={10} castShadow />
        <pointLight position={[2,1,4]} intensity={10}/>
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={20} shadow-bias={-0.001}/>
        <ambientLight intensity={10}/>

        <AccumulativeShadows temporal frames={100} scale={10}>
            <RandomizedLight amount={8} position={[5, 5, -10]} />
        </AccumulativeShadows>

        <Environment>
            <color args={ [ '#666666' ] } attach="background" />
            <Lightformer
                position-z={ - 5 }
                scale={ 4 }
                color="#888888"
                intensity={ 5 }
                form={'ring'}
            />
        </Environment>
    </>
}