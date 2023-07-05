/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public/models/scene.gltf -K -k
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterPosition" position={[-0.108, 0.384, -1.318]} rotation={[2.96, 0.495, -3.053]} scale={1.131}>
          <group name="Armature">
            <primitive object={nodes.Hips} />
            <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials['Wolf3D_Body.002']} skeleton={nodes.Wolf3D_Body.skeleton} />
            <skinnedMesh name="Wolf3D_Glasses" geometry={nodes.Wolf3D_Glasses.geometry} material={materials['Wolf3D_Glasses.002']} skeleton={nodes.Wolf3D_Glasses.skeleton} />
            <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials['Wolf3D_Hair.002']} skeleton={nodes.Wolf3D_Hair.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.002']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials['Wolf3D_Outfit_Footwear.002']} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Wolf3D_Outfit_Top.002']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
            <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.002']} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
            <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.002']} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials['Wolf3D_Skin.002']} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials['Wolf3D_Teeth.002']} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
          </group>
        </group>
        <group name="Plane">
          <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials.Material} />
          <mesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={materials['default']} />
          <mesh name="Plane002_2" geometry={nodes.Plane002_2.geometry} material={materials.Walls} />
        </group>
        <group name="Curtains" position={[-2.665, 0.191, -0.041]} rotation={[-Math.PI / 2, 0, 1.557]}>
          <mesh name="Curtains_Double" geometry={nodes.Curtains_Double.geometry} material={materials.LightMetal} />
          <mesh name="Curtains_Double_1" geometry={nodes.Curtains_Double_1.geometry} material={materials.Couch_Blue} />
        </group>
        <group name="Desk" position={[0.046, 0.178, -2.33]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh name="Cube001_Cube002_BlackCoatSteel" geometry={nodes.Cube001_Cube002_BlackCoatSteel.geometry} material={materials.BlackCoatSteel} />
          <mesh name="Cube001_Cube002_BlackCoatSteel_1" geometry={nodes.Cube001_Cube002_BlackCoatSteel_1.geometry} material={materials.GrayPlastic} />
          <mesh name="Cube001_Cube002_BlackCoatSteel_2" geometry={nodes.Cube001_Cube002_BlackCoatSteel_2.geometry} material={materials.WhiteSteelScrew} />
          <mesh name="Cube001_Cube002_BlackCoatSteel_3" geometry={nodes.Cube001_Cube002_BlackCoatSteel_3.geometry} material={materials.BlackPlastic} />
          <mesh name="Cube001_Cube002_BlackCoatSteel_4" geometry={nodes.Cube001_Cube002_BlackCoatSteel_4.geometry} material={materials.BlackWood} />
        </group>
        <group name="Monitor1" position={[0.658, 0.094, -0.491]}>
          <mesh name="Box20179_1003" geometry={nodes.Box20179_1003.geometry} material={materials['02___Default.004']} />
          <mesh name="Box20179_1003_1" geometry={nodes.Box20179_1003_1.geometry} material={materials.backlight} />
          <mesh name="Box20179_1003_2" geometry={nodes.Box20179_1003_2.geometry} material={materials['_crayfishdiffuse.004']} />
          <mesh name="Box20179_1003_3" geometry={nodes.Box20179_1003_3.geometry} material={materials.screen} />
        </group>
        <group name="Monitor2" position={[1.377, 0.113, -0.392]}>
          <mesh name="Box20179_1004" geometry={nodes.Box20179_1004.geometry} material={materials['02___Default.005']} />
          <mesh name="Box20179_1004_1" geometry={nodes.Box20179_1004_1.geometry} material={materials['backlight.001']} />
          <mesh name="Box20179_1004_2" geometry={nodes.Box20179_1004_2.geometry} material={materials['_crayfishdiffuse.005']} />
          <mesh name="Box20179_1004_3" geometry={nodes.Box20179_1004_3.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="Keyboard" geometry={nodes.Keyboard.geometry} material={materials.lambert3SG} position={[0.093, 1.107, -2.114]} rotation={[0, -0.227, 0]} />
        <mesh name="Mouse" geometry={nodes.Mouse.geometry} material={materials.ComputerMouse_mat1} position={[0.528, 1.111, -1.905]} rotation={[-Math.PI, 0.351, -Math.PI]} />
        <group name="Laptop" position={[0.755, 1.116, -2.302]} rotation={[Math.PI, -0.768, Math.PI]}>
          <mesh name="LapTop_Cube002-Mesh" geometry={nodes['LapTop_Cube002-Mesh'].geometry} material={materials.DarkGray} />
          <mesh name="LapTop_Cube002-Mesh_1" geometry={nodes['LapTop_Cube002-Mesh_1'].geometry} material={materials.lighterGray} />
          <mesh name="LapTop_Cube002-Mesh_2" geometry={nodes['LapTop_Cube002-Mesh_2'].geometry} material={materials.Gray2} />
          <mesh name="LapTop_Cube002-Mesh_3" geometry={nodes['LapTop_Cube002-Mesh_3'].geometry} material={materials.Screen} />
        </group>
        <group name="Headphones" position={[0.661, 1.168, -1.722]} rotation={[0, 0, 1.58]}>
          <mesh name="Headphones_Cube-Mesh" geometry={nodes['Headphones_Cube-Mesh'].geometry} material={materials.GrayTone1} />
          <mesh name="Headphones_Cube-Mesh_1" geometry={nodes['Headphones_Cube-Mesh_1'].geometry} material={materials.GrayTone3} />
          <mesh name="Headphones_Cube-Mesh_2" geometry={nodes['Headphones_Cube-Mesh_2'].geometry} material={materials.GrayTone2} />
        </group>
        <group name="Chair" position={[9.387, 3.099, -9.193]} rotation={[0.062, 0.031, 0.296]}>
          <mesh name="Node-Mesh001" geometry={nodes['Node-Mesh001'].geometry} material={materials['Executive.001']} />
          <mesh name="Node-Mesh001_1" geometry={nodes['Node-Mesh001_1'].geometry} material={materials['Executive__1.001']} />
          <mesh name="Node-Mesh001_2" geometry={nodes['Node-Mesh001_2'].geometry} material={materials['Executive__2.001']} />
          <mesh name="Node-Mesh001_3" geometry={nodes['Node-Mesh001_3'].geometry} material={materials['Executive__3.001']} />
        </group>
        <group name="Shelf" position={[0.025, 1.975, -2.24]} rotation={[Math.PI, -1.562, Math.PI]}>
          <mesh name="Cube-Mesh" geometry={nodes['Cube-Mesh'].geometry} material={materials.WhiteSteelScrew} />
          <mesh name="Cube-Mesh_1" geometry={nodes['Cube-Mesh_1'].geometry} material={materials.Supports} />
        </group>
        <group name="Speakers" position={[0.347, 2.441, -0.213]} rotation={[0.174, 0.426, -0.072]}>
          <mesh name="Box20182_1" geometry={nodes.Box20182_1.geometry} material={materials['_crayfishdiffuse.006']} />
          <mesh name="Box20182_1_1" geometry={nodes.Box20182_1_1.geometry} material={materials['02___Default.006']} />
          <mesh name="Box20182_1_2" geometry={nodes.Box20182_1_2.geometry} material={materials['08___Default']} />
          <mesh name="Box20182_1_3" geometry={nodes.Box20182_1_3.geometry} material={materials['09___Default']} />
          <mesh name="Box20182_1_4" geometry={nodes.Box20182_1_4.geometry} material={materials['_crayfishdiffuse-2']} />
        </group>
        <mesh name="Cat" geometry={nodes.Cat.geometry} material={materials.lambert2SG} position={[-1.805, 0.8, -1.929]} />
        <group name="Catbed" position={[-1.837, 0.154, -2.02]}>
          <mesh name="CatBed_Torus-Mesh" geometry={nodes['CatBed_Torus-Mesh'].geometry} material={materials.WhiteMaterial} />
          <mesh name="CatBed_Torus-Mesh_1" geometry={nodes['CatBed_Torus-Mesh_1'].geometry} material={materials.OtherMat} />
        </group>
        <group name="Table" position={[0.496, 0.616, 1.699]}>
          <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={materials.mat23} />
          <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat24} />
        </group>
        <group name="Art" position={[-0.736, 1.63, -0.405]}>
          <mesh name="Node-Mesh002" geometry={nodes['Node-Mesh002'].geometry} material={materials['mat23.001']} />
          <mesh name="Node-Mesh002_1" geometry={nodes['Node-Mesh002_1'].geometry} material={materials.mat21} />
          <mesh name="Node-Mesh002_2" geometry={nodes['Node-Mesh002_2'].geometry} material={materials.mat16} />
          <mesh name="Node-Mesh002_3" geometry={nodes['Node-Mesh002_3'].geometry} material={materials.mat22} />
          <mesh name="Node-Mesh002_4" geometry={nodes['Node-Mesh002_4'].geometry} material={materials.mat17} />
          <mesh name="Node-Mesh002_5" geometry={nodes['Node-Mesh002_5'].geometry} material={materials.mat15} />
          <mesh name="Node-Mesh002_6" geometry={nodes['Node-Mesh002_6'].geometry} material={materials['mat24.001']} />
          <mesh name="Node-Mesh002_7" geometry={nodes['Node-Mesh002_7'].geometry} material={materials.mat25} />
        </group>
        <mesh name="Coffee" geometry={nodes.Coffee.geometry} material={materials['Material.005']} position={[-0.206, 2.757, -0.518]} />
        <mesh name="Corkboard" geometry={nodes.Corkboard.geometry} material={materials['Material.001']} position={[-1.654, 1.724, -2.772]} />
        <group name="Couch" rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="Couch_Small2" geometry={nodes.Couch_Small2.geometry} material={materials.Couch_BeigeDark} />
          <mesh name="Couch_Small2_1" geometry={nodes.Couch_Small2_1.geometry} material={materials.Couch_Beige} />
        </group>
        <group name="Mic" position={[1.634, 0.217, -2.097]}>
          <mesh name="mic001" geometry={nodes.mic001.geometry} material={materials.Black} />
          <mesh name="mic001_1" geometry={nodes.mic001_1.geometry} material={materials.Metal} />
          <mesh name="mic001_2" geometry={nodes.mic001_2.geometry} material={materials.Glow} />
          <mesh name="mic001_3" geometry={nodes.mic001_3.geometry} material={materials.LightGrey} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
