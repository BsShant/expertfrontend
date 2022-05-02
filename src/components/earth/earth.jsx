import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Earth({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/globe.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.MASH1_ReproMesh_lambert2_0.geometry} material={materials.lambert2} />
          <mesh geometry={nodes.MASH1_ReproMesh_lambert2_0_1.geometry} material={materials.lambert2} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/globe.gltf')
