import { useScroll, } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../../lib/config";
import Office from "./Office";
import Avatar from "./Avatar";
import Projects from "./Projects";
import Background from "./Background";



export default function Experience(props) {

  const { menuOpen } = props;

  const { viewport } = useThree();

  const data = useScroll();

  const isMobile = window.innerWidth < 768;

  const respRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * respRatio, 0.9));

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
      }, 300);
    }, [section]);

  const characterGroup = useRef();

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

    if (section === 0) {
      characterContainerAboutRef.current.getWorldPosition(characterGroup.current.position);
    }

  });


  return (
    <>
      <Background />
      {/* <ambientLight intensity={0.4} /> */}
      <pointLight position={[3, 2, 5]}  intensity={1} color="#3a0da8"/>
      <pointLight position={[100, 30, 5]}  intensity={0.7}/>
        <motion.group 
          ref={characterGroup}
          position={[1, 0.25, 4.32]}
          rotation={[2.9, 1.35, -2.8]}
          scale={1.2}
          animate={"" + section}
          transition={{
            duration: 0.5
          }}
          variants={{
            0: {
              positionY: 4,
              scaleX: officeScaleRatio * 1.25,
              scaleY: officeScaleRatio * 1.02,
              scaleZ: officeScaleRatio * 1.25,

            },
            1: {
              x: isMobile ? 0.1 : 0,
              y: isMobile? -viewport.height - 0.8 : -viewport.height - 0.1,
              z: isMobile ? 2.5 : 4,
              rotateX: 0,
              rotateY: isMobile ? -Math.PI / 2 : 0,
              rotateZ: 0,
              scaleX: isMobile ? 1.3 : 1,
              scaleY: isMobile ? 1.3 : 1,
              scaleZ: isMobile ? 1.3 : 1,
            },
            2: {
              x: isMobile ? -0.8 : -2,
              y: isMobile ? -viewport.height * 2 - 1 : -viewport.height * 2 - 0.3 ,
              z: 0,
              rotateX: 0,
              rotateY: Math.PI / 2,
              rotateZ: 0,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
              },
            3: {
              x: isMobile ? 0.08 : 0.1,
              y: isMobile ? -viewport.height * 3 - 0.1 : -viewport.height * 3 - 0.3,
              z: isMobile ? 6.3 : 6.3,
              rotateX: 0,
              rotateY: -Math.PI / 6,
              rotateZ: 0,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
              },
            
          }}
          >
          <Avatar animation={characterAnimation} />
        </motion.group>
      
      {/* OFFICE */}
      
      <motion.group 
        position={[
          isMobile ? -0.85 : 0 * officeScaleRatio, 
          isMobile ? -viewport.height / 2  : 2,
          isMobile ? 5 : 4,
        ]}
        scale={[
          officeScaleRatio,
          officeScaleRatio,
          officeScaleRatio,
        ]}
        rotation-y={-Math.PI / 3}
        animate={{
          y: isMobile ? viewport.height / 9 : 0,
          // y: section === 0 ? 0 : section === 1 ? -1.5 : -1,
        }}
        transition={{
          duration: 0.8,
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


      {/* SKILLS */}
      <motion.group
        position={[0, isMobile ? -viewport.height : -1.5 * officeScaleRatio, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : (isMobile ? -viewport.height : -1.5 * officeScaleRatio),
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      </motion.group>
      <Projects />
    </>
  );
};