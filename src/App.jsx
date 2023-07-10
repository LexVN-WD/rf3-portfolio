import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls, Stars, Sky, } from "@react-three/drei";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";



import Experience  from "./components/Experience";
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import Cursor from "./components/Cursor";
import { framerMotionConfig } from "../lib/config";

function App() {

  const [section, setSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [section]);


  return (
    <>
    <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
      <Canvas shadows camera={{ position: [1, 1.8, 7], fov: 45  }}>
        {/* <Canvas shadows camera={{ position: [1, 2, 8], fov: 40 }}> */}
        <ScrollControls pages={4} damping={0.1} >
          <ScrollManager section={section} onSectionChange={setSection}/>
          <Scroll>
            <Experience section={section} menuOpen={menuOpen} />
          </Scroll>
          <Scroll html>
            <Interface setSection={setSection}/>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu onSectionChange={setSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Cursor />
    </MotionConfig>
    <Leva hidden />
    </>
  );
}

export default App;