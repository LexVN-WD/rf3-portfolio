import {
  Sky,
  Stars,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { framerMotionConfig } from "../../lib/config";
import Office from "./Office";
import Avatar from "./Avatar";



export default function Experience(props) {

  const { section, menuOpen } = props;
  const { viewport } = useThree();

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

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
    <ambientLight intensity={0.5} />
      <motion.group 
        position={[0, 2, 5]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 3}
        animate={{
          y: section === 0 ? 0 : -1,
        }}

        >
        <Office section={section}/>
        <group name="CharacterPosition" position={[-0.108, 0.384, -1.318]} rotation={[2.96, 0.495, -3.053]} scale={1.12}>
          <Avatar animation={section === 0 ? "Typing" : "Falling"} />
        </group>
      </motion.group>
          {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -20]}
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