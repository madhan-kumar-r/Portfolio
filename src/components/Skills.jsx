import React from "react";
import { icons } from "./constants/icons";

const Skills = () => {
  return (
    <div id="skills" className="container my-10 px-2">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {icons.map((icon) => (
          <div className="text-center" key={icon.id}>
            <img src={icon.src} alt={icon.name} className="w-16 h-16 mx-auto" />
            <p className="text-white mt-2">{icon.name}</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Skills;
