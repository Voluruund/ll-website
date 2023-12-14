import { useGLTF } from "@react-three/drei";
import { Float} from "@react-three/drei";
import Lights from "./Lights";
import { StrictMode } from "react";
import { Physics } from "@react-three/rapier";
import { RigidBody } from "@react-three/rapier";
import { CuboidCollider } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useState } from "react";

export default function Baloons(){

    const {nodes, materials} = useGLTF('./models/balloon-laura-low.gltf')

    const provaref = useRef()
    console.log(provaref)
    const meshref = useRef()
    const api = useRef()

    const [isHovered, setIsHovered] = useState(false);

    useFrame((mouse, delta) => {
      if(isHovered){
        provaref.current.applyImpulse({ x: .5, y: -.5, z: 0 })
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
            <OrbitControls makeDefault/>

            <Physics gravity={ [ 0,  0, 0 ]}>
                <RigidBody colliders="hull" restitution={ 1 }>
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
                            position={[5, -0.6, 1.229]}
                            scale={[0.687, 2.502, 0.687]}
                            rotation-x={1.5}
                        />
                    </Float>
                </RigidBody>

                <RigidBody colliders="hull" restitution={ 1 }>
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
                            position={[3, 3, 1.229]}
                            scale={[0.687, 2.502, 0.687]}
                            rotation-x={1.5}
                        />
                    </Float>
                </RigidBody>

                <RigidBody colliders="hull" ref={provaref}>
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
                            position={[1.5, -2.6, 1.229]}
                            scale={[0.387, 1.262, 0.387]}
                            rotation-x={1.5}
                            ref={meshref}
                            onPointerOver={() => setIsHovered(true)}
                            onPointerOut={() => setIsHovered(false)}
                        />
                    </Float>
                </RigidBody>

                <RigidBody colliders="hull" restitution={ 1 }>
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
                            position={[8, 2.2, 1.229]}
                            scale={[0.387, 1.262, 0.387]}
                            rotation-x={1.5}
                        />
                    </Float>
                </RigidBody>

                <RigidBody colliders="hull" restitution={ 1 }>
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
                            position={[-7, -3, 1.229]}
                            scale={[0.387, 1.262, 0.387]}
                            rotation-x={1.5}
                        />
                    </Float>
                </RigidBody>
                
                <RigidBody colliders="hull" restitution={ 1 }>
                    <Float
                        speed={2}
                        rotationIntensity={1}
                        floatingRange={[-.05, .05]} // defaults to [-0.1,0.1]
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={model}
                            material={materials["Material.001"]}
                            position={[-7, 2, 1.229]}
                            scale={[0.787, 3.262, 0.787]}
                            rotation-x={1.5}
                        />
                    </Float>
                </RigidBody>

                <RigidBody colliders="hull" restitution={ 1 }>
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
                            position={[-3.5, 0, 1.229]}
                            scale={[0.487, 2.362, 0.487]}
                            rotation-x={1.5}
                        />
                    </Float>
                </RigidBody>

                <RigidBody type="fixed" linearDamping={4} angularDamping={1} friction={0.1} ref={api}>
                    <CuboidCollider args={ [ 10, 4.5, .5 ] } position={ [ 0, 0, 2.3] } />
                    <CuboidCollider args={ [ 10, 4.5, .5 ] } position={ [ 0, 0, -.5 ] } />
                    <CuboidCollider args={ [ 0.5, 4.5, 2.5 ] } position={ [ 10, 0, 0 ] } />
                    <CuboidCollider args={ [ 0.5, 4.5, 2.5 ] } position={ [ - 10, 0, 0 ] } />
                </RigidBody>

                <RigidBody type="fixed" linearDamping={4} angularDamping={1} friction={0.1}>
                    <mesh
                        rotation-x={Math.PI * .5}
                        position={[0, -4.5, 1]}
                    >
                        <planeGeometry attach="geometry" args={[22, 3.7]} />
                    </mesh>
                    <mesh
                        rotation-x={Math.PI * .5}
                        position={[0, 4.5, 1]}
                    >
                        <planeGeometry attach="geometry" args={[22, 3.7]} />
                    </mesh>
                </RigidBody>

            </Physics>


        </StrictMode>
    </>
}

useGLTF.preload("/balloon-laura-low.gltf");