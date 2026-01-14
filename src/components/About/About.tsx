"use client";
import React from "react";

const About = () => {
  return (
    <div id="about" className="py-10 ">
      <h2 className="text-4xl font-light text-gray mb-10 lg:mb-5 text-center">
        About My
      </h2>
      <div className="flex items-center justify-evenly flex-wrap gap-4 p-4">
        <div className="w-9/10 lg:w-auto flex flex-col items-center justify-center max-w-xl">
          <h3 className="text-3xl text-gray mb-2 text-center text-cyan-400">
            Past
          </h3>
          <p className="text-2xl text-center font-light">
            When I was a kid, I loved playing video games and tinkering with
            computers. I used to create mods for the games I played, which
            sparked my interest in programming.
          </p>
        </div>
        <div className="w-9/10 lg:w-auto flex flex-col items-center justify-center max-w-xl">
          <h3 className="text-3xl text-gray mb-2 text-center text-indigo-400">
            Present
          </h3>
          <p className="text-2xl text-center font-light">
            I'm a GHL Platform Engineer working on building and maintaining
            CRM solutions and marketing automations for businesses.
          </p>
        </div>
        <div className="w-9/10 lg:w-auto flex flex-col items-center justify-center max-w-xl">
          <h3 className="text-3xl text-gray mb-2 text-center text-lime-400">
            Future
          </h3>
          <p className="text-2xl text-center font-light">
            I want to continue growing as a developer, learning new technologies,
            and contributing to open-source projects. My goal is to create
            impactful software that makes a difference in people's lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
