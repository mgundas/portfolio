import React from "react";

const About = () => {
  return (
    <div id="about" className="py-10">
      <h2 className="text-4xl font-light text-gray mb-10 lg:mb-5 text-center">
        About My
      </h2>
      <div className="flex items-center justify-evenly flex-wrap gap-4 p-4">
        <div className="w-9/10 lg:w-auto flex flex-col items-center justify-center">
          <h3 className="text-3xl text-gray mb-2 text-center text-cyan-400">
            Past
          </h3>
          <p className="text-2xl text-center font-light">
            I'm a software engineer with a passion for coding.
          </p>
        </div>
        <div className="w-9/10 lg:w-auto flex flex-col items-center justify-center">
          <h3 className="text-3xl text-gray mb-2 text-center text-indigo-400">
            Present
          </h3>
          <p className="text-2xl text-center font-light">
            I'm a software engineer with a passion for coding.
          </p>
        </div>
        <div className="w-9/10 lg:w-auto flex flex-col items-center justify-center">
          <h3 className="text-3xl text-gray mb-2 text-center text-lime-400">
            Future
          </h3>
          <p className="text-2xl text-center font-light">
            I'm a software engineer with a passion for coding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
