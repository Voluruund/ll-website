import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Float} from "@react-three/drei";
import Lights from "./Lights";
import { StrictMode, useRef } from "react";
import { Physics } from "@react-three/rapier";
import { RigidBody } from "@react-three/rapier";
import { generateImpulseX } from "./math";
import { generateImpulseY } from "./math";
import { CuboidCollider } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";

export default function Baloon(){

    const {nodes, materials} = useGLTF('./models/balloon-laura-low-new.gltf')

    const first = useRef()

    // const { perfVisible } = useControls('debug', {
    //     perfVisible: false
    // })
    
    var model

    if(window.innerWidth < 1000){
        model = nodes.Sphere002.geometry
    }else{
        model = nodes.Sphere003.geometry
    }


    // position={[0, 0, 1.229]}
    // scale={[0.887, 3.162, 0.887]}

    return <>
        {/* ATTIVA LEVA PERF */}
        {/* { perfVisible && <Perf position="top-left" /> } */}
        <StrictMode>
            <Lights />
            {/* <OrbitControls makeDefault/> */}
            <Physics gravity={ [ 0,  0, 0 ]}>

{/* scale={[0.887, 3.162, 0.887]} */}

            <RigidBody colliders="hull" lockRotations restitution={ .5 } ref={first}>
                    <Float
                        speed={2}
                        rotationIntensity={.5}
                        floatingRange={[-.05, .05]} // defaults to [-0.1,0.1]
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={model}
                            material={materials["Material.001"]}
                            position={[0, 0, 1.229]}
                            //2.502
                            scale={[0.687, 1.32, 0.687]}
                            rotation-x={1.5}
                            onPointerEnter={() => {
                                first.current.applyImpulse({ x: generateImpulseX() * 2, y: generateImpulseY() * 2, z: 0 }, true)
                            }}
                        />
                    </Float>
                </RigidBody>
                <RigidBody type="fixed" linearDamping={4} angularDamping={1}>
                    {/* 3 -2      2.3 .5 */}
                    <CuboidCollider args={ [ 10, 5, .5 ] } position={ [ 0, 0, 2.3] } />
                    <CuboidCollider args={ [ 10, 5, .5 ] } position={ [ 0, 0, -1 ] } />
                    <CuboidCollider args={ [ 0.5, 5, 3.5 ] } position={ [ 10, 0, 0 ] } />
                    <CuboidCollider args={ [ 0.5, 5, 3.5 ] } position={ [ - 10, 0, 0 ] } />
                </RigidBody>

                <RigidBody type="fixed" linearDamping={4} angularDamping={1}>
                    <mesh
                        rotation-x={Math.PI * .5}
                        position={[0, -3, 1]}
                    >
                        <planeGeometry attach="geometry" args={[22, 7.7]} />
                    </mesh>
                    <mesh
                        rotation-x={Math.PI * .5}
                        position={[0, 3, 1]}
                    >
                        <planeGeometry attach="geometry" args={[22, 7.7]} />
                    </mesh>
                </RigidBody>
            </Physics>
        </StrictMode>
    </>
}


useGLTF.preload("/balloon-laura-low.gltf");