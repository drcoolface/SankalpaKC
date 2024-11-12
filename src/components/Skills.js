import React from "react";
import {
  react,
  typescript,
  nodejs,
  postman,
  python,
  tensorflow,
  github,
  nextjs,
} from "./links";

const techs = [
  react,
  typescript,
  nodejs,
  postman,
  python,
  tensorflow,
  github,
  nextjs,
];
const Skills = () => {
  return (
    <div className=" flex justify-center gap-4 flex-wrap ">
      {techs.map((tech) => (
        <a
          key={tech.name}
          href={tech.website}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-ping-custom"
        >
          <img src={tech.url} alt={tech.name} className="h-[4rem] w-[4.5rem]" />
        </a>
      ))}
    </div>
  );
};
export default Skills;
