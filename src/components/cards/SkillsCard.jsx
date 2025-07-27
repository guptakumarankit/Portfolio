import React from "react";
import Tilt from "react-parallax-tilt";

const SkillsCard = ({ title, skills }) => {
  return (
    <div className="border rounded-2xl flex flex-col items-center gap-6 p-4 text-gray-300">
      <div className="font-bold text-4xl text-white">{title}</div>
      <Tilt
        glareEnable={false}
        glareMaxOpacity={0.45}
        scale={1.05}
        transitionSpeed={250}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg shadow-lg"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="border border-grey-300 flex justify-center items-center gap-6 md:gap-2 rounded-2xl p-2 font-bold"
          >
            <img className="h-10 w-10" src={skill.logo} alt="" />
            <div>{skill.name}</div>
          </div>
        ))}
      </Tilt>
    </div>
  );
};

export default SkillsCard;
