import { Lightformer, Environment } from "@react-three/drei";
import { StrictMode } from "react";

export default function Lights(){
    return <>
        
        <StrictMode>
            <ambientLight intensity={2}/>
            <directionalLight intensity={2} position={[0,3,4]} />
            {/* <directionalLight intensity={10} position={[-3,-3,2]}></directionalLight> */}
            {/* <pointLight position={[-2,-1,2]} intensity={6} castShadow /> */}
            {/* <pointLight position={[2,1,4]} intensity={6}/> */}
            {/* <spotLight position={[10, 3, 9]} angle={-0.7} penumbra={0.3} intensity={20} shadow-bias={-0.001}/>
            <spotLight position={[-10, 2, 9]} angle={-0.7} penumbra={0.3} intensity={20} shadow-bias={-0.001}/> */}
            <spotLight position={[1, 1, 30]} penumbra={0.3} intensity={400} shadow-bias={-0.001}/>

            <Environment>
                <color args={ [ '#666666' ] } attach="background" />
                <Lightformer
                    position-z={ -3 }
                    scale={ 8 }
                    color="#888888"
                    intensity={ 20 }
                    form={'ring'}
                />
            </Environment>
        </StrictMode>
    </>
}