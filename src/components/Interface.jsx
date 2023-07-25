import Typed from "typed.js"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useForm, ValidationError } from '@formspree/react';
import { currentProjectAtom, projectsArray } from "./Projects";


// ICONS
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact,} from 'react-icons/fa'
import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiThreedotjs, SiTypescript, } from 'react-icons/si'


const isMobile = window.innerWidth < 768;

const Section = (props) => {
  const {children, mobileTop} = props;
  
  return (
    <motion.section 
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-end ${mobileTop ? "justify-start md:justify-end" : "justify-center"} `}
        initial={{ 
          opacity: 0,
          y: 50 
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.5,
            delay: 0.5,
          },
        }}
    >
      {children}
    </motion.section>
  )
};

export default function Interface(props) {
  const { setSection } = props;

  return (
    <>
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
     </div>
    </>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full-Stack Web Developer", "Professional Voice Actor"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      startDelay: 1000,
      backDelay: 1200,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
     <Section mobileTop >
      <div className="flex flex-col w-auto max-h-[60%] mb-[10%] md:mb-2 md:max-h-[60%] bg-gray-500 rounded-lg bg-opacity-10 md:bg-opacity-0 items-center scale-90 md:scale-100">
        <motion.h1 
          className=" text-3xl md:text-7xl font-extrabold leading-snug text-white mt-4 md:mt-6 md:pt-6 text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.75 }}}
        >
          Lex Van-Nugent
        </motion.h1>
        <motion.div
        className="w-full h-auto md:mt-2 text-center py-2"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.75 }}}
        >
          <span className="typer text-[#ff6699] text-xl md:text-6xl font-bold" ref={el}/>
        </motion.div>
        <motion.p className="text-m md:text-3xl md:mt-4 text-gray-200 flex flex-col justify-between text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 }}}
        >
         <span className="italic pt-1">My unique blend of technical and creative skills allows me to create user-friendly digital solutions.</span>
         <br/>
         <span className="font-bold">As a problem-solver with a knack for innovation, I'm well-equipped to contribute to impactful web development projects.</span>
        </motion.p>
        <motion.button
          onClick={() => setSection(3)}
          className={`bg-indigo-600 text-white py-1 md:py-2 px-4 rounded-lg font-bold text-, my-4 md:mt-16`}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.75 }}}
        >
          Contact Me
        </motion.button>
      </div>
    </Section>
  );
};

const skills = [
  {
    title: "React",
    level: 95,
    icon: <FaReact className="text-blue-600 w-full h-full"/>,
  },
  {
    title: "HTML5",
    level: 90,
    icon: <FaHtml5 className="text-red-600 w-full h-full"/>,
  },
  {
    title: "CSS3",
    level: 90,
    icon: <FaCss3Alt className="text-blue-500 w-full h-full"/>,
  },
  {
    title: "JavaScript",
    level: 90,
    icon: <FaJsSquare className="text-yellow-300 w-full h-full"/>,
  },
  {
    title: "Threejs / React Three Fiber",
    level: 85,
    icon: <SiThreedotjs className="text-black w-full h-full"/>,
  },
  {
    title: "POSTGRESQL",
    level: 85,
    icon: <SiPostgresql className="text-blue-700 w-full h-full"/>,
  },
  {
    title: "Nodejs",
    level: 80,
    icon: <FaNodeJs className="text-green-600 w-full h-full"/>,
  },
  {
    title: "TailwindCSS",
    level: 80,
    icon: <SiTailwindcss className="text-indigo-600 w-full h-full"/>,
  },
  {
    title: "NextJS",
    level: 75,
    icon: <SiNextdotjs className="text-black w-full h-full"/>,
  },
  {
    title: "TypeScript",
    level: 60,
    icon: <SiTypescript className="text-blue-600 w-full h-full"/>,
  },
];


const SkillsSection = () => {

  return (
    <Section>
        <motion.div
          className="w-full h-full scale-90 md:scale-100 flex flex-col justify-evenly py-4"
          whileInView={"visible"}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">Skills</h2>
          <div className="flex flex-col md:mt-8 space-y-2 md:space-y-4 w-full  justify-center">
            {skills.map((skill, index) => (
              <div className="flex flex-row gap-3 w-full md:w-96" key={index}>
                <div className="w-[15%]">
                    {skill.icon}
                </div>
                <div className="flex flex-col w-[80%]">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-gray-100"
                    initial={{ opacity: 0, }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: { duration: 1, delay: 1 + index * 0.2 },
                      },
                    }}
                    >
                      {skill.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${skill.level}% `}}
                      initial={{ scaleX: 0, originX: 0, }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                             duration: 1, delay: 1 + index * 0.2,
                            }
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {

  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projectsArray.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projectsArray.length) % projectsArray.length);
  };

  return (
    <Section>
      <motion.div 
        whileInView={"visible"}
        className="flex flex-col justify-end items-center w-full h-full gap-8 scale-90 md:scale-100"
      >
        <div className="flex flex-row gap-2 md:gap-8 items-center justify-between md:justify-between w-[95%] md:w-[60%] pb-10 md:pb-20">
          <button
            className="text-white hover:text-indigo-600 transition-colors text-lg md:text-4xl"
            onClick={previousProject}
          >
            ← Previous
          </button>
          <h2 className="text-xl md:text-7xl text-white font-bold">Projects</h2>
          <button
            className="text-white hover:text-indigo-600 transition-colors text-lg md:text-4xl"
            onClick={nextProject}
          >
            Next →
          </button>
        </div>
      </motion.div>
    </Section>
  );
};


const ContactSection = () => {

  const [state, handleSubmit] = useForm("mayzgjbd");

  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold text-white">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <p className=" text-xl md:text-2xl font-bold text-gray-900 text-center">Thank you for contacting me!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};