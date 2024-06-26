import React from "react";
import {
  tailwindcss,
  react,
  typescript,
  nodejs,
  express,
  mongodb,
  mongoose,
  fastapi,
  postman,
  python,
  tensorflow,
  scikit,
  netlify,
  gcp,
  github,
  npm,
  nextjs,
  mui,
  antd,
  refine,
} from "./links";

const TechCategory = ({ category, techs }) => {
  return (
    <div className="flex  w-full mx-auto">
      <div className="my-4  px-2 container mx-auto shadow w-[32rem] rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">{category}</h2>
        <div className="flex flex-wrap lg:flex-row gap-8 justify-center py-5">
          {techs.map((tech) => (
            <a
              key={tech.name}
              href={tech.website}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-1 items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out gap-2 "
            >
              <img
                src={tech.url}
                alt={tech.name}
                className="h-[4rem] w-[4.5rem]"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = {
    "Frontend Development": [
      tailwindcss,
      react,
      typescript,
      nextjs,
      mui,
      antd,
      refine,
    ],
    "Backend Development": [
      nodejs,
      express,
      mongodb,
      mongoose,
      fastapi,
      postman,
    ],
    "Machine Learning": [python, tensorflow, scikit],
    Deployment: [netlify, gcp, github, npm],
  };

  return (
    <div>
      <div className="w-[60%] mx-auto p-6 flex flex-col ">
        {Object.entries(categories).map(([category, techs]) => (
          <TechCategory key={category} category={category} techs={techs} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
