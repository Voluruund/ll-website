import { useGLTF } from "@react-three/drei";
import { Float} from "@react-three/drei";
import Lights from "./Lights";
import { StrictMode } from "react";

export default function BaloonsMobile(){

    const {nodes, materials} = useGLTF('./models/balloon-laura-low-new.gltf')

    var model = nodes.Sphere002.geometry

    return <>
        <StrictMode>
            <Lights />
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
                    position={[0, -0.2, 1.229]}
                    // 1.262
                    scale={[0.1887, .22, 0.1887]}
                    rotation-x={1.5}
                />
            </Float>
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
                    position={[1, .9, 1.229]}
                    // 1.262
                    scale={[0.1387, .22, 0.1387]}
                    rotation-x={1.5}
                />
            </Float>
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
                    position={[1.2, -1.9, 1.229]}
                    // 1.262
                    scale={[0.1387, .22, 0.1387]}
                    rotation-x={1.5}
                />
            </Float>
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
                    position={[-1, 1.6, 1.229]}
                    // 1.262
                    scale={[0.2387, .32, 0.2387]}
                    rotation-x={1.5}
                />
            </Float>
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
                    position={[.2, 2, 1.229]}
                    // 1.262
                    scale={[0.1987, .32, 0.1987]}
                    rotation-x={1.5}
                />
            </Float>
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
                    position={[-.55, -1.6, 1.229]}
                    // 1.262
                    scale={[0.2887, .32, 0.2887]}
                    rotation-x={1.5}
                />
            </Float>
        </StrictMode>
    </>
}

useGLTF.preload("/balloon-laura-low.gltf");