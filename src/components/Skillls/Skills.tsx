"use client";
import React from "react";
import db from "../../database/database";
import Category from "./subComponents/Category";
import Skill from "./subComponents/Skill";

const Skills = () => {
  return (
    <div id="skills" className="relative z-2">
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
      <div className="bgr-circle bgr-circle-tr bg-lime-400/60"></div>
      <div className="bgr-circle bgr-circle-bl bg-cyan-400/60"></div>
      </div>
  );
};

export default Skills;
