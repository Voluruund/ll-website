import React, { Suspense, forwardRef, useMemo } from 'react'
import { Canvas } from 'react-three-fiber'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import { useControls } from 'leva'

import { HorizontalBlurEffect } from './effects/HorizontalBlur'
import { BadTVEffect } from './effects/BadTV'

import { useState } from 'react'
import { PerformanceMonitor } from '@react-three/drei'

function Effects() {

  const HorizontalBlur = forwardRef(({ strength = 0 }, ref) => {
    const effect = useMemo(() => new HorizontalBlurEffect({ strength }), [strength])
    return <primitive ref={ref} object={effect} dispose={null} />
  })

  const { distortion, distortion2, speed, rollSpeed } = useControls('BadTV', {
    distortion: { value: 0.0, min: 0, max: 50.0 },
    distortion2: { value: 0.0, min: 0, max: 50.0 },
    speed: { value: 0.05, min: 0, max: 5.0 },
    rollSpeed: { value: 0, min: 0, max: 5.0 }
  })

  const BadTV = forwardRef(({ distortion = 0.0, distortion2 = 0.0, speed = 0.2, rollSpeed = 0.1 }, ref) => {
    const effect = useMemo(() => new BadTVEffect({ distortion, distortion2, speed, rollSpeed }), [
      distortion,
      distortion2,
      speed,
      rollSpeed
    ])
    return <primitive ref={ref} object={effect} dispose={null} />
  })

  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      <Noise opacity={1} />
      <BadTV distortion={distortion} distortion2={distortion2} speed={speed} rollSpeed={rollSpeed} />
      <HorizontalBlur />
    </EffectComposer>
  )
}

export default function Distortion() {

    const [dpr, setDpr] = useState(.6)

    return (
        <Suspense>
            <Canvas style={{opacity: '.15', top: '0', left: '0', position: 'fixed', width: '100vw', height: '100vh'}} dpr={dpr} id='tvEffect'>
            <PerformanceMonitor onDecline={() => setDpr(.5)} flipflops={1}/>
            <ambientLight intensity={1} />
            <mesh position={[0, 0, 1]}>
                <planeGeometry args={[400, 250]} />
                <meshStandardMaterial color="#f6f6f4" />
            </mesh>
            <Effects />
            </Canvas>
        </Suspense>
    )
}
