import React, { useEffect } from 'react';
import { useGLTF, useTexture, useVideoTexture } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from 'framer-motion';
import { useFrame } from '@react-three/fiber';

export default function Office(props) {
  const {section} = props;
  const { nodes, materials } = useGLTF('models/scene.gltf');
  const texture = useTexture('textures/baked.jpg');
  const textureVSCode = useVideoTexture('textures/vscode.mp4');
  textureVSCode.center.set(0.5, 0.5)
  textureVSCode.rotation = -Math.PI;
  textureVSCode.repeat.x = -1;

  const texturePreview = useVideoTexture('textures/preview.mp4');
  texturePreview.center.set(0.5, 0.5)
  texturePreview.rotation = -Math.PI;
  texturePreview.repeat.x = -1;



  texture.flipY = false;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureOpacity = useMotionValue(0);

  useEffect(() => {
    animate(textureOpacity, section === 0 ? 1 : 0);
  }, [section]);
  
  useFrame(() => {
    textureMaterial.opacity = textureOpacity.get();
  })

  return (
    <group {...props} dispose={null} animate={{scale: section === 0 ? 1 : 0}}>
      <mesh name="Screen2" geometry={nodes.Screen2.geometry} material={materials['Material.002']} position={[1.377, 0.113, -0.392]} >
        <meshBasicMaterial map={textureVSCode} toneMapped={false} rotation={[0, Math.PI, 0]}/>
      </mesh>
      <mesh name="Screen2002" geometry={nodes.Screen2002.geometry} material={materials['Material.002']} position={[1.377, 0.113, -0.392]} >
        <meshBasicMaterial map={texturePreview} toneMapped={false}/>
      </mesh>
      <group name="Curtains" position={[-2.665, 0.191, -0.041]} rotation={[-Math.PI / 2, 0, 1.557]}>
        <mesh name="Curtains_Double" geometry={nodes.Curtains_Double.geometry} material={textureMaterial} />
        <mesh name="Curtains_Double_1" geometry={nodes.Curtains_Double_1.geometry} material={textureMaterial} />
      </group>
      <group name="Desk" position={[0.046, 0.178, -2.33]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh name="Cube001_Cube002_BlackCoatSteel" geometry={nodes.Cube001_Cube002_BlackCoatSteel.geometry} material={textureMaterial} />
        <mesh name="Cube001_Cube002_BlackCoatSteel_1" geometry={nodes.Cube001_Cube002_BlackCoatSteel_1.geometry} material={textureMaterial} />
        <mesh name="Cube001_Cube002_BlackCoatSteel_2" geometry={nodes.Cube001_Cube002_BlackCoatSteel_2.geometry} material={textureMaterial} />
        <mesh name="Cube001_Cube002_BlackCoatSteel_3" geometry={nodes.Cube001_Cube002_BlackCoatSteel_3.geometry} material={textureMaterial} />
        <mesh name="Cube001_Cube002_BlackCoatSteel_4" geometry={nodes.Cube001_Cube002_BlackCoatSteel_4.geometry} material={textureMaterial} />
      </group>
      <group name="Monitor1" position={[0.658, 0.094, -0.491]}>
        <mesh name="Box20179_1003" geometry={nodes.Box20179_1003.geometry} material={textureMaterial} />
        <mesh name="Box20179_1003_1" geometry={nodes.Box20179_1003_1.geometry} material={textureMaterial} />
        <mesh name="Box20179_1003_2" geometry={nodes.Box20179_1003_2.geometry} material={textureMaterial} />
        <mesh name="Box20179_1003_3" geometry={nodes.Box20179_1003_3.geometry} material={textureMaterial} />
      </group>
      <group name="Monitor2" position={[1.377, 0.113, -0.392]}>
        <mesh name="Box20179_1004" geometry={nodes.Box20179_1004.geometry} material={textureMaterial} />
        <mesh name="Box20179_1004_1" geometry={nodes.Box20179_1004_1.geometry} material={textureMaterial} />
        <mesh name="Box20179_1004_2" geometry={nodes.Box20179_1004_2.geometry} material={textureMaterial} />
        <mesh name="Box20179_1004_3" geometry={nodes.Box20179_1004_3.geometry} material={textureMaterial} />
      </group>
      <mesh name="Keyboard" geometry={nodes.Keyboard.geometry} material={materials.lambert3SG} position={[0.093, 1.107, -2.114]} rotation={[0, -0.227, 0]} />
      <mesh name="Mouse" geometry={nodes.Mouse.geometry} material={materials.ComputerMouse_mat1} position={[0.528, 1.111, -1.905]} rotation={[-Math.PI, 0.351, -Math.PI]} />
      <group name="Laptop" position={[0.755, 1.116, -2.302]} rotation={[Math.PI, -0.768, Math.PI]}>
        <mesh name="LapTop_Cube002-Mesh" geometry={nodes['LapTop_Cube002-Mesh'].geometry} material={textureMaterial} />
        <mesh name="LapTop_Cube002-Mesh_1" geometry={nodes['LapTop_Cube002-Mesh_1'].geometry} material={textureMaterial} />
        <mesh name="LapTop_Cube002-Mesh_2" geometry={nodes['LapTop_Cube002-Mesh_2'].geometry} material={textureMaterial} />
        <mesh name="LapTop_Cube002-Mesh_3" geometry={nodes['LapTop_Cube002-Mesh_3'].geometry} material={textureMaterial} />
      </group>
      <group name="Headphones" position={[0.661, 1.168, -1.722]} rotation={[0, 0, 1.58]}>
        <mesh name="Headphones_Cube-Mesh" geometry={nodes['Headphones_Cube-Mesh'].geometry} material={textureMaterial} />
        <mesh name="Headphones_Cube-Mesh_1" geometry={nodes['Headphones_Cube-Mesh_1'].geometry} material={textureMaterial} />
        <mesh name="Headphones_Cube-Mesh_2" geometry={nodes['Headphones_Cube-Mesh_2'].geometry} material={textureMaterial} />
      </group>
      <group name="Chair" position={[9.387, 3.099, -9.193]} rotation={[0.061, 0.03, 0.295]}>
        <mesh name="Node-Mesh001" geometry={nodes['Node-Mesh001'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_1" geometry={nodes['Node-Mesh001_1'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_2" geometry={nodes['Node-Mesh001_2'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_3" geometry={nodes['Node-Mesh001_3'].geometry} material={textureMaterial} />
      </group>
      <group name="Shelf" position={[0.025, 1.975, -2.24]} rotation={[Math.PI, -1.562, Math.PI]}>
        <mesh name="Cube-Mesh" geometry={nodes['Cube-Mesh'].geometry} material={textureMaterial} />
        <mesh name="Cube-Mesh_1" geometry={nodes['Cube-Mesh_1'].geometry} material={textureMaterial} />
      </group>
      <group name="Speakers" position={[0.347, 2.441, -0.213]} rotation={[0.174, 0.426, -0.072]}>
        <mesh name="Box20182_1" geometry={nodes.Box20182_1.geometry} material={textureMaterial} />
        <mesh name="Box20182_1_1" geometry={nodes.Box20182_1_1.geometry} material={textureMaterial} />
        <mesh name="Box20182_1_2" geometry={nodes.Box20182_1_2.geometry} material={textureMaterial} />
        <mesh name="Box20182_1_3" geometry={nodes.Box20182_1_3.geometry} material={textureMaterial} />
        <mesh name="Box20182_1_4" geometry={nodes.Box20182_1_4.geometry} material={textureMaterial} />
      </group>
      <mesh name="Cat" geometry={nodes.Cat.geometry} material={textureMaterial} position={[-1.805, 0.8, -1.929]} />
      <group name="Catbed" position={[-1.837, 0.154, -2.02]}>
        <mesh name="CatBed_Torus-Mesh" geometry={nodes['CatBed_Torus-Mesh'].geometry} material={textureMaterial} />
        <mesh name="CatBed_Torus-Mesh_1" geometry={nodes['CatBed_Torus-Mesh_1'].geometry} material={textureMaterial} />
      </group>
      <group name="Table" position={[0.496, 0.616, 1.699]}>
        <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={textureMaterial} />
      </group>
      <group name="Art" position={[-0.736, 1.63, -0.405]}>
        <mesh name="Node-Mesh002" geometry={nodes['Node-Mesh002'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh002_1" geometry={nodes['Node-Mesh002_1'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh002_2" geometry={nodes['Node-Mesh002_2'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh002_3" geometry={nodes['Node-Mesh002_3'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh002_4" geometry={nodes['Node-Mesh002_4'].geometry} material={textureMaterial} />
      </group>
      <mesh name="Coffee" geometry={nodes.Coffee.geometry} material={textureMaterial} position={[-0.206, 2.757, -0.518]} />
      <mesh name="Corkboard" geometry={nodes.Corkboard.geometry} material={textureMaterial} position={[-1.654, 1.724, -2.772]} />
      <group name="Couch" rotation={[-Math.PI / 2, 0, 0]}>
        <mesh name="Couch_Small2" geometry={nodes.Couch_Small2.geometry} material={textureMaterial} />
        <mesh name="Couch_Small2_1" geometry={nodes.Couch_Small2_1.geometry} material={textureMaterial} />
      </group>
      <group name="Mic" position={[1.634, 0.217, -2.097]}>
        <mesh name="mic001" geometry={nodes.mic001.geometry} material={textureMaterial} />
        <mesh name="mic001_1" geometry={nodes.mic001_1.geometry} material={textureMaterial} />
        <mesh name="mic001_2" geometry={nodes.mic001_2.geometry} material={textureMaterial} />
        <mesh name="mic001_3" geometry={nodes.mic001_3.geometry} material={textureMaterial} />
      </group>
      <motion.mesh name="Plane002" geometry={nodes.Plane002.geometry} material={textureMaterial} />
      <motion.mesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={textureMaterial} />
      <motion.mesh name="Plane002_2" geometry={nodes.Plane002_2.geometry} material={textureMaterial} />
    </group>
  )
}

useGLTF.preload('models/scene.gltf')