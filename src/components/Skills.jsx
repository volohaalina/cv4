import React from "react";

const Skills = () => {
  const skills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Figma",
    "HTML",
    "CSS",
    "Vite",
    "Redux",
    "Git",
    "C++",
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold">Skills</h3>
      <p className="mt-2">{skills.join(", ")}</p>
    </div>
  );
};

export default Skills;
