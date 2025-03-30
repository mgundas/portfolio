import React from "react";
import db from "../../database/database";
import Category from "./subComponents/Category";
import Skill from "./subComponents/Skill";

const Skills = () => {
  return (
    <div id="skills" className="p-10 lg:p-18 pr-15 relative z-2">
      <h1 className="text-4xl font-light text-gray mb-10 lg:mb-5 text-center">
        Skills
      </h1>
      {db.skills.categories.map((category, categoryIndex) => (
        <Category key={categoryIndex} name={category.name}>
          {category.skills.map((skill, skillIndex) => (
            <Skill name={skill.name} icon={skill.icon} key={skillIndex} />
          ))}
        </Category>
      ))}
      <div className="hero-circle bg-cyan-400! z-1"></div>
    </div>
  );
};

export default Skills;
