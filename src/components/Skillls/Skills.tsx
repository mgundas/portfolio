import React from "react";
import db from "../../database/database";

const Skills = () => {
  return (
    <div id="skills" className="p-10 lg:p-18 pr-15 relative z-2">
      <h1 className="text-4xl font-light text-gray mb-10 lg:mb-5 text-center">Skills</h1>
      <div className="">
        {db.skills.categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-5">
            <h3 className="text-3xl font-light text-gray">{category.name}</h3>
            <div className="flex items-center justify-start gap-4 flex-wrap py-5">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-style">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="hero-circle bg-cyan-400! z-1"></div>
    </div>
  );
};

export default Skills;
