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
      <Section>
        <AboutSection />
      </Section>
      <Section>
        <SkillsSection />
      </Section>
      <Section>
        <h1>Projects</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed aliquid amet eaque deserunt porro temporibus unde
        <br />
        consequuntur, velit laborum saepe, vel vitae odit excepturi? Ad, consequatur in. Fugit, maxime!
      </p>
      <button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>
        Contact Me
      </button>
    </Section>
  );
};

const SkillsSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hello, I'm
        <br />
        <span className="bg-white px-1 italic">Lex Van-Nugent</span>
      </h1>
      <p className="text-lg text-gray-600 met-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed aliquid amet eaque deserunt porro temporibus unde
        <br />
        consequuntur, velit laborum saepe, vel vitae odit excepturi? Ad, consequatur in. Fugit, maxime!
      </p>
      <button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>
        Contact Me
      </button>
    </Section>
  );
};