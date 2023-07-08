import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
// import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
// import { atom, useAtom } from "jotai";
// import { useEffect, useRef } from "react";

export const projectsArray = [
  {
    title: "Online Store",
    url: "https://lex-online-store.vercel.app",
    image: "projects/online-store.png",
    description: "NextJS E-Commerce Store Front-End",
  },
  {
    title: "Old Portfolio",
    url: "https://lexvnwebdev.vercel.app/",
    image: "projects/portfolio.png",
    description: "NextJS Portfolio",
  },
];

function Project(props) {
  const { project } = props;
  return (
    <group {...props}>
      <mesh position-z={-0.001} onClick={() => window.open(project.url, "_blank")}>
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image 
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
       <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  )
}


export default function Projects() {

  const { viewport } = useThree();


  return (
    <>
    <group position-y={-viewport.height * 2 + 1}>
      {
        projectsArray.map((project, index) => (
          <motion.group 
            key={"project_" + index}
            position={[index * 2.5, 0, -3]}
          >
            <Project project={project} />
          </motion.group>
        ))
      }
    </group>;
    </>
  );
}