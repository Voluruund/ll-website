import { Lightformer, Environment } from "@react-three/drei";
import { StrictMode } from "react";

export default function Lights(){
    return <>
        
        <StrictMode>
            <directionalLight intensity={10} position={[3,3,2]}></directionalLight>
            <directionalLight intensity={10} position={[-3,-3,2]}></directionalLight>
            <pointLight position={[-2,-1,2]} intensity={6} castShadow />
            <pointLight position={[2,1,4]} intensity={6}/>
            <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={12} shadow-bias={-0.001}/>

            <Environment>
                <color args={ [ '#666666' ] } attach="background" />
                <Lightformer
                    position-z={ - 5 }
                    scale={ 4 }
                    color="#888888"
                    intensity={ 2 }
                    form={'ring'}
                />
            </Environment>
        </StrictMode>
    </>
}