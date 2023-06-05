import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-sky-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I hold a BSc in Computer Science from University of Colombo School of
          Computing, Sri Lanka, With 7 years of experience in software
          development, and my professional experience has equipped me with a
          comprehensive skill set in software development and project
          management. I am proficient in JavaScript, Vue.js, Nuxt.js, React,
          HTML, CSS, ElementUI, ChakraUI, Tailwind, PHP/ Laravel and Java. I am
          comfortable working with various technologies and platforms.
        </p>

        <br />

        <p className="text-xl">
          I have gained a deep understanding of frontend development and have
          successfully developed UI applications with traceability between
          product requirements, functional specifications, and code. I am
          skilled in collaborating with stakeholders to define front-end
          software specifications and have experience working closely with
          various specialists and other service development departments.
        </p>

        <br />

        <p className="text-xl">
          I am driven by a strong desire to contribute to the development of
          sustainable energy systems and to make a positive impact on society. I
          am deeply committed to promoting clean and efficient energy
          consumption through innovative software solutions. I possess
          exceptional problem-solving skills, strong attention to detail, and a
          proactive mindset that allows me to tackle complex challenges with
          ease. I thrive in collaborative environments and have experience
          working closely with specialists from various fields and other service
          development departments.
        </p>
      </div>
    </div>
  );
};

export default About;
