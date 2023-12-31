import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

export const projectsArray = [
  {
    title: "Online Store",
    url: "https://lex-online-store.vercel.app",
    image: "projects/online-store.png",
    description: "NextJS E-Commerce Store Front-End",
  },
  {
    title: "ScuttleCrab",
    url: "https://github.com/LexVN-WD/scuttlecrab",
    image: "projects/scuttlecrab.png",
    description: "League of Legends Stats Website",
  },
  {
    title: "Old Portfolio",
    url: "https://lexvnwebdev.vercel.app/",
    image: "projects/portfolio.png",
    description: "NextJS Portfolio",
  },
  {
    title: "WhatsThere?",
    url: "https://github.com/LexVN-WD/whatsThere",
    image: "projects/whatsthere.png",
    description: "NextJS Travel Companion App",
  },
  {
    title: "Scheduler",
    url: "https://github.com/LexVN-WD/scheduler",
    image: "projects/scheduler.png",
    description: "React Scheduler/Appointment App",
  },
];

function Project(props) {
  const { project, highlighted } = props;

  const bg = useRef();

  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4)
  }, [highlighted]);

  useFrame(() => {
    bg.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={bg}
      >
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


export const currentProjectAtom = atom(Math.floor(projectsArray.length / 2));

export default function Projects() {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 600px)").matches;
      const newScale = isMobile ? 0.8 : 1;
      setScale(newScale);
    };

    handleResize(); // Call the function initially

    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <>
      <group position-y={-viewport.height * 2 - 0.5}>
        {projectsArray.map((project, index) => (
          <motion.group
            key={"project_" + index}
            position={[index * 2.5, 0, -3]}
            animate={{
              x: 0 + (index - currentProject) * 3,
              y: currentProject === index ? 0 : -0.1,
              z: currentProject === index ? -2 : -3,
              rotateX: currentProject === index ? 0 : -Math.PI / 3,
              rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
              scale: scale, // Set the scale based on the scale state
            }}
          >
            <Project project={project} highlighted={index === currentProject} />
          </motion.group>
        ))}
      </group>
    </>
  );
}