import {
  Sky,
  Stars,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../../lib/config";
import Office from "./Office";
import Avatar from "./Avatar";



export default function Experience(props) {

  const { menuOpen } = props;

  const { viewport } = useThree();
  const data = useScroll();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();
  
  useEffect(() => {
    animate(cameraPositionX, menuOpen ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpen ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpen]);
  
  
  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Idle");
    }, 600);
  }, [section]);

   useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z]);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");

    // console.log([euler.x, euler.y, euler.z]);
  });


  return (
    <>
    <ambientLight intensity={0.5} />
    <motion.group 
      position={[1, 0.25, 4.32]}
      rotation={[2.9, 1.35, -2.8]}
      scale={1.05}
      animate={"" + section}
      variants={{
        0: {

        },
        1: {
          y: -viewport.height + 0.2,
          x: 0,
          z: 5,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        }
      }}
      >
      <Avatar animation={characterAnimation} />
    </motion.group>
      <motion.group 
        position={[0, 2, 5]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 3}
        animate={{
          y: section === 0 ? 0 : section === 1 ? -1.5 : -1,
        }}

        >
        <Office section={section}/>
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[-0.108, 0.384, -1.318]}
          rotation={[2.96, 0.495, -3.053]}
          scale={1.12}
        ></group>
      </motion.group>


     {/* <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section}/>
      </motion.group> */}




          {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      </motion.group>
    </>
  );
};