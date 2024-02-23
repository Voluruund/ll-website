import { useGLTF } from "@react-three/drei";
import { Float} from "@react-three/drei";
import Lights from "./Lights";
import { StrictMode } from "react";
import { Physics } from "@react-three/rapier";
import { RigidBody } from "@react-three/rapier";
import { CuboidCollider } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { generateImpulseX } from "./math";
import { generateImpulseY } from "./math";

export default function Baloons(){

    const {nodes, materials} = useGLTF('./models/balloon-laura-low-new.gltf')

    const first = useRef()
    const second = useRef()
    const third = useRef()
    const fourth = useRef()
    const fifth = useRef()
    const sixth = useRef()
    const seventh = useRef()

    var model

    if(window.innerWidth < 1000){
        model = nodes.Sphere002.geometry
    }else{
        model = nodes.Sphere003.geometry
    }

    return <>
        <StrictMode>
            
            <Lights />  
            {/* <OrbitControls makeDefault/> */}

            <Physics gravity={ [ 0,  0, 0 ]}>
                
                {/* <RigidBody colliders="hull" lockRotations restitution={ .5 } ref={first}>
                    <Float
                        speed={2}
                        rotationIntensity={1.2}
                        floatingRange={[-.05, .05]} // defaults to [-0.1,0.1]
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={model}
                            material={materials["Material.001"]}
                            position={[5, -0.6, 1.229]}
                            // scale y 2.502
                            // old scale .502
                            scale={[0.687, 1.32, 0.687]}
                            rotation-x={1.5}
                            onPointerEnter={() => {
                                first.current.applyImpulse({ x: generateImpulseX() * 20, y: generateImpulseY() * 20, z: 0 }, true)
                            }}
                        />
                    </Float>
                </RigidBody> */}

                <RigidBody colliders="hull" lockRotations restitution={ .5 } ref={second}>
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
                            // 2.502
                            scale={[0.687, 1.32, 0.687]}
                            rotation-x={1.5}
                            onPointerEnter={() => {
                                second.current.applyImpulse({ x: generateImpulseX() * 3, y: generateImpulseY() * 3, z: 0 }, true)
                            }}
                        />
                    </Float>
                </RigidBody>

                <RigidBody colliders="hull" ref={third} lockRotations restitution={ .5 }>
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
                            // 1.262
                            scale={[0.687, 1.32, 0.687]}
                            rotation-x={1.5}
                            onPointerEnter={() => {
                                third.current.applyImpulse({ x: generateImpulseX() * 3, y: generateImpulseY() * 3, z: 0 }, true)
                            }}
                        />
                    </Float>
                </RigidBody>

                <RigidBody colliders="hull" restitution={ .5 } lockRotations ref={fourth}>
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
                            position={[7, .4, 1.229]}
                            // 1.262
                            scale={[0.687, 1.32, 0.687]}
                            rotation-x={1.5}
                            onPointerEnter={() => {
                                fourth.current.applyImpulse({ x: generateImpulseX() * 3, y: generateImpulseY() * 3, z: 0 }, true)
                            }}
                        />
                    </Float>
                </RigidBody>

                <RigidBody colliders="hull" restitution={ .5 } lockRotations ref={fifth}>
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
                            // 1.262
                            scale={[0.687, 1.32, 0.687]}
                            rotation-x={1.5}
                            onPointerEnter={() => {
                                fifth.current.applyImpulse({ x: generateImpulseX() * 3, y: generateImpulseY() * 3, z: 0 }, true)
                            }}
                        />
                    </Float>
                </RigidBody>
                
                <RigidBody colliders="hull" restitution={ .5 } lockRotations ref={sixth}>
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
                            // 3.262
                            scale={[0.787, 1.32, 0.787]}
                            rotation-x={1.5}
                            onPointerEnter={() => {
                                sixth.current.applyImpulse({ x: generateImpulseX() * 1, y: generateImpulseY() * 1, z: 0 }, true)
                            }}
                        />
                    </Float>
                </RigidBody>

                <RigidBody colliders="hull" restitution={ .5 } lockRotations ref={seventh}>
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
                            // 2.362
                            scale={[0.687, 1.32, 0.687]}
                            rotation-x={1.5}
                            onPointerEnter={() => {
                                seventh.current.applyImpulse({ x: generateImpulseX() * 3, y: generateImpulseY() * 3, z: 0 }, true)
                            }}
                        />
                    </Float>
                </RigidBody>

                <RigidBody type="fixed" linearDamping={4} angularDamping={1}>
                    {/* 3 -2      2.3 .5 */}
                    <CuboidCollider args={ [ 10, 5, .5 ] } position={ [ 0, 0, 2.1] } />
                    <CuboidCollider args={ [ 10, 5, .5 ] } position={ [ 0, 0, 0 ] } />
                    <CuboidCollider args={ [ 0.5, 5, 3.5 ] } position={ [ 10, 0, 0 ] } />
                    <CuboidCollider args={ [ 0.5, 5, 3.5 ] } position={ [ - 10, 0, 0 ] } />
                </RigidBody>

                <RigidBody type="fixed" linearDamping={4} angularDamping={1}>
                    <mesh
                        rotation-x={Math.PI * .5}
                        position={[0, -4.5, 1]}
                    >
                        <planeGeometry attach="geometry" args={[22, 7.7]} />
                    </mesh>
                    <mesh
                        rotation-x={Math.PI * .5}
                        position={[0, 4.5, 1]}
                    >
                        <planeGeometry attach="geometry" args={[22, 7.7]} />
                    </mesh>
                </RigidBody>

            </Physics>


        </StrictMode>
    </>
}

useGLTF.preload("/balloon-laura-low.gltf");