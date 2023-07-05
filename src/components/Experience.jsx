import { Environment, OrbitControls, Sky, ContactShadows, } from "@react-three/drei";

import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import Avatar from "./Avatar";
import Office from "./Office";

export default function Experience(props) {

  const { section } = props;

  // const { animation } = useControls({
  //   animation: {
  //     value: "Typing",
  //     options: ["Typing", "Falling", "Idle"],
  //   },
  // });

  return (
    <>
    <ambientLight intensity={0.5} />
      <motion.group 
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}

        >
        <Office section={section}/>
      </motion.group>
    </>
  );
};


//  <ContactShadows opacity={0.55} scale={10} blur={1} far={10} resolution={256} color="#000000" />
//         <Avatar animation={animation}/>
//         {animation === "Typing" && (
//           <mesh scale={[0.8, 0.5, 0.8]} position-y={0.20}>
//             <boxGeometry />
//             <meshStandardMaterial color="white" />
//           </mesh>
//         )}
//         <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
//           <planeGeometry />
//           <meshStandardMaterial color="white" />
//         </mesh>