import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { MotionConfig } from "framer-motion";



import Experience  from "./components/Experience";
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";

function App() {

  const [section, setSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <MotionConfig transition={{
      type: "spring",
      mass: 5,
      stiffness: 500,
      damping: 50,
      restDelta: 0.0001,

    }}>
      <Canvas shadows camera={{ position: [2, 2.5, 8], fov: 40 }}>
        <ScrollControls pages={4} damping={0.1} >
          <ScrollManager section={section} onSectionChange={setSection}/>
          <Scroll>
            <Experience section={section} />
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu onSectionChange={setSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </MotionConfig>
    </>
  );
}

export default App;
