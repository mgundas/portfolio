import React from "react";

type SkillProps = {
  name: string;
  icon: string;
};

const Skill = ({ name, icon }: SkillProps) => {
  return (
    <div className="skill-style">
      <i className={icon}></i>
      <span>{name}</span>
    </div>
  );
};

export default Skill;
