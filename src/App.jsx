import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls, Stars, Sky, } from "@react-three/drei";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";



import Experience  from "./components/Experience";
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import Cursor from "./components/Cursor";
import LoadingScreen from "./components/LoadingScreen";
import { framerMotionConfig } from "../lib/config";

function App() {

  const [section, setSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [started, setStarted] = useState(false);

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    setMenuOpen(false);
  }, [section]);


  return (
    <>
    <LoadingScreen started={started} setStarted={setStarted}/>
      <MotionConfig
          transition={{
            ...framerMotionConfig,
          }}
        >
        <Canvas shadows camera={{ position: [1, 1.5, 7], fov: 40 }}>
          {/* <Canvas shadows camera={{ position: [1, 2, 8], fov: 40 }}> */}
          <ScrollControls pages={4} damping={0.1} >
            <ScrollManager section={section} onSectionChange={setSection}/>
            <Scroll>
              <Suspense>
                {started && (
                  <Experience section={section} menuOpen={menuOpen} />
                )}
              </Suspense>
            </Scroll>
            <Scroll html>
              <Suspense>
                {started && (
                  <Interface setSection={setSection}/>
                )}
              </Suspense>
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