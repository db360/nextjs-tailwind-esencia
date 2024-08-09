import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/3dmodel/1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Material.001']}
        position={[-6, -3, 1]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.316*6, 1.223*6, 1.254*6]}
      />
    </group>
  )
}

useGLTF.preload('/3dmodel/1.glb')