import {Sphere} from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Background() {

  const material = useRef();

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />

      </Sphere>
    </group>
  )
}