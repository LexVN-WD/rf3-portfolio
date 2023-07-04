const Section = (props) => {
  const {children} = props;
  return (
    <section className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
    >
      {children}
    </section>
  )
};

export default function Interface() {
  return (
    <>
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection />
    </div>
    </>
  )
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hello, I'm
        <br />
        <span className="bg-white px-1 italic">Lex Van-Nugent</span>
      </h1>
      <p className="text-lg text-gray-600 met-4">
        Passionate, driven, and always looking to learn!
        <br />
        As a Web Developer, my goal is to continually add to my knowledge base and harness it to create products that are not only modern, but have the user-experience the focal point.
My background in entertainment and social sciences provides me with a unique perspective on how to approach problems and find solutions.
      </p>
      <button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>
        Contact Me
      </button>
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
        <div>
          <h2 className="text-5xl font-bold">Skills</h2>
          <div className="mt-8 space-y-4">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${skill.level}%`}}
                    />
                </div>
              </div>
            ))}
          </div>
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
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
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
            for="email"
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