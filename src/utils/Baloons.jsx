import { useGLTF } from "@react-three/drei";
// import { useControls } from "leva";
import { Float} from "@react-three/drei";
import Lights from "./Lights";
import { StrictMode } from "react";
import { Physics } from "@react-three/rapier";
import { RigidBody } from "@react-three/rapier";
import { CuboidCollider } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "react-ogl";
import { useRef } from "react";
import * as THREE from "three"

// function Pointer({ vec = new THREE.Vector3() }) {
//     const ref = useRef()
//     useFrame(({ mouse, viewport }) => {
//       ref.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0))
//     })
//     return (
//       <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
//         <CuboidCollider args={[1]} />
//       </RigidBody>
//     )
// }

export default function Baloons(){

    const {nodes, materials} = useGLTF('./models/balloon-laura-low.gltf')
    // const {nodes, materials} = useGLTF('./models/baloon.glb')
    // const model = useGLTF('./models/untitled.glb')

    // const { baloonScale } = useControls('baloons', {
    //     baloonScale:{
    //         value: .69,
    //         step: 0.01,
    //         min: 0,
    //         max: 5
    //     }
    // })

    // const { baloonPositionX } = useControls('baloons', {
    //     baloonPositionX:{
    //         value: 0,
    //         step: 0.01,
    //         min: 0,
    //         max: 5
    //     }
    // })

    // const { baloonPositionY } = useControls('baloons', {
    //     baloonPositionY:{
    //         value: 1,
    //         step: 0.01,
    //         min: 0,
    //         max: 5
    //     }
    // })

    // const { baloonPositionZ } = useControls('baloons', {
    //     baloonPositionZ:{
    //         value: 1,
    //         step: 0.01,
    //         min: 0,
    //         max: 5
    //     }
    // })

    var model

    if(window.innerWidth < 1000){
        model = nodes.Sphere002.geometry
    }else{
        model = nodes.Sphere003.geometry
    }

    // const ref = useRef()

    // useFrame(({ mouse, viewport }) => {
    //     ref.current?.setNextKinematicTranslation(ref.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0))
    // })

    return <>
        <StrictMode>
            <Lights />  
            <OrbitControls makeDefault />
            {/* <Float
                speed={3}
                rotationIntensity={2}
                floatingRange={[-.15, .15]} // defaults to [-0.1,0.1]
            >
                <group dispose={null} scale={baloonScale} rotation-x={1.5} position={[baloonPositionX,baloonPositionY,baloonPositionZ]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={model}
                        material={materials["Material.001"]}
                        position={[0, 0, 1.229]}
                        scale={[0.887, 3.162, 0.887]}
                    />
                </group>
            </Float> */}
            <Physics debug  gravity={ [ 0,  9.08, 0 ]}>
                <RigidBody colliders="cuboid" >
                    {/* <Float
                        speed={2}
                        rotationIntensity={1}
                        floatingRange={[-.05, .05]} // defaults to [-0.1,0.1]
                    > */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={model}
                            material={materials["Material.001"]}
                            position={[5, -0.6, 1.229]}
                            scale={[0.687, 2.502, 0.687]}
                            rotation-x={1.5}
                        />
                    {/* </Float> */}
                </RigidBody>

                <RigidBody colliders="cuboid">
                    {/* <Float
                        speed={2}
                        rotationIntensity={1}
                        floatingRange={[-.15, .15]} // defaults to [-0.1,0.1]
                    > */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={model}
                            material={materials["Material.001"]}
                            position={[3, 3, 1.229]}
                            scale={[0.687, 2.502, 0.687]}
                            rotation-x={1.5}
                        />
                    {/* </Float> */}
                </RigidBody>

                <RigidBody colliders="cuboid">
                    {/* <Float
                        speed={2}
                        rotationIntensity={1}
                        floatingRange={[-.15, .15]} // defaults to [-0.1,0.1]
                    > */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={model}
                            material={materials["Material.001"]}
                            position={[1.5, -2.6, 1.229]}
                            scale={[0.387, 1.262, 0.387]}
                            rotation-x={1.5}
                        />
                    {/* </Float> */}
                </RigidBody>

                <RigidBody colliders="cuboid">
                    {/* <Float
                        speed={2}
                        rotationIntensity={1}
                        floatingRange={[-.15, .15]} // defaults to [-0.1,0.1]
                    > */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={model}
                            material={materials["Material.001"]}
                            position={[8, 2.2, 1.229]}
                            scale={[0.387, 1.262, 0.387]}
                            rotation-x={1.5}
                        />
                    {/* </Float> */}
                </RigidBody>

                <RigidBody colliders="cuboid">
                    {/* <Float
                        speed={2}
                        rotationIntensity={1}
                        floatingRange={[-.15, .15]} // defaults to [-0.1,0.1]
                    > */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={model}
                            material={materials["Material.001"]}
                            position={[-7, -3, 1.229]}
                            scale={[0.387, 1.262, 0.387]}
                            rotation-x={1.5}
                        />
                    {/* </Float> */}
                </RigidBody>
                
                <RigidBody colliders="cuboid">
                    {/* <Float
                        speed={2}
                        rotationIntensity={1}
                        floatingRange={[-.15, .15]} // defaults to [-0.1,0.1]
                    > */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={model}
                            material={materials["Material.001"]}
                            position={[-7, 2, 1.229]}
                            scale={[0.787, 3.262, 0.787]}
                            rotation-x={1.5}
                        />
                    {/* </Float> */}
                </RigidBody>

                <RigidBody colliders="cuboid">
                    {/* <Float
                        speed={2}
                        rotationIntensity={1}
                        floatingRange={[-.15, .15]} // defaults to [-0.1,0.1]
                    > */}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={model}
                            material={materials["Material.001"]}
                            position={[-3.5, 0, 1.229]}
                            scale={[0.487, 2.362, 0.487]}
                            rotation-x={1.5}
                        />
                    {/* </Float> */}
                </RigidBody>

                <RigidBody type="fixed">
                    <mesh
                        rotation-x={Math.PI * .5}
                        position={[0, -4.5, 1]}
                    >
                        <planeGeometry attach="geometry" args={[20, 20]} />
                    </mesh>
                    <mesh
                        rotation-x={Math.PI * .5}
                        position={[0, 4.5, 1]}
                    >
                        <planeGeometry attach="geometry" args={[20, 20]} />
                    </mesh>
                    {/* sinistra */}
                    <mesh
                        rotation-y={Math.PI * .5}
                        position={[-12, 0, -2]}
                    >
                        <planeGeometry attach="geometry" args={[20, 11]} />
                    </mesh>
                    {/* destra */}
                    <mesh
                        rotation-y={Math.PI * .5}
                        position={[12, 0, -2]}
                    >
                        <planeGeometry attach="geometry" args={[20, 11]} />
                        
                    </mesh>

                    {/* dietro */}
                    <mesh
                        rotation-x={Math.PI}
                        position={[0, 0, 0]}
                    >
                        <planeGeometry attach="geometry" args={[30, 15]} />
                        <meshPhongMaterial color={'green'}/>
                    </mesh>

                    {/* davanti */}
                    <mesh
                        rotation-x={Math.PI}
                        position={[0, 0, 2.3]}
                    >
                        <planeGeometry attach="geometry" args={[30, 15]} />
                        <meshPhongMaterial color={'green'}/>
                    </mesh>
                </RigidBody>

            </Physics>


        </StrictMode>
    </>
}

useGLTF.preload("/balloon-laura-low.gltf");