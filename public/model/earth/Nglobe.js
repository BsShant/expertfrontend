/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/nglobe.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI, 0, 0]} scale={100}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.MASH1_ReproMesh_lambert2_0.geometry} material={materials.lambert2} />
          <mesh geometry={nodes.MASH1_ReproMesh_lambert2_0001.geometry} material={materials.lambert2} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/nglobe.gltf')
