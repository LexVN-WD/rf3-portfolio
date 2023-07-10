import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projectsArray } from "./Projects";

const Section = (props) => {
  const {children} = props;
  return (
    <motion.section 
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
        initial={{ 
          opacity: 0,
          y: 50 
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.5,
          },
        }}
    >
      {children}
    </motion.section>
  )
};

export default function Interface() {
  return (
    <>
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
    </>
  )
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug text-white">
        Hello, I'm
        <br />
        <span className="px-1 italic">Lex Van-Nugent</span>
      </h1>
      <motion.p className="text-lg text-gray-200 met-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 }}}
      >
        Passionate, driven, and always looking to learn!
        <br />
        As a Web Developer, my goal is to continually add to my knowledge base and harness it to create products that are not only modern, but have the user-experience the focal point.
My background in entertainment and social sciences provides me with a unique perspective on how to approach problems and find solutions.
      </motion.p>
      <motion.button 
      className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 }}} 
      >
        Contact Me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 80,
  },
  {
    title: "JavaScript",
    level: 90,
  },
  {
    title: "HTML",
    level: 90,
  },
  {
    title: "CSS",
    level: 90,
  },
  {
    title: "TypeScript",
    level: 60,
  },
];

const SkillsSection = () => {
  return (
    <Section>
        <motion.div
          whileInView={"visible"}
        >
          <h2 className="text-5xl font-bold text-white">Skills</h2>
          <div className="mt-8 space-y-4">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3 
                  className="text-xl font-bold text-gray-100"
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
      <div className="flex justify-center items-center w-full h-full gap-8">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};


const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
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
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};