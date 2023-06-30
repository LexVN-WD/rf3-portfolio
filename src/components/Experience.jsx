import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {

  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Idle"],
    },
  });

  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <Avatar animation={animation}/>
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.20}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )}
        <mesh
        receiveShadow
        scale={5}
        rotation-x={-Math.PI * 0.5}>
          <planeGeometry />
        </mesh>
      </group>
    </>
  );
};
