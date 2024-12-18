import React from "react";
import Skills from "./Skills";
import profileImage from "../assets/profile.png";
import ProfessionalExperiences from "./ProfessionalExperiences";
import PersonalProjects from "./PersonalProjects";

import Timeline from "./Timeline";

const Home = () => {
  return (
    <div className="flex flex-col justify-center mb-2 gap-4 w-full mx-auto p-2">
      <div
        className={`pt-10  texture bg-white text-black min-h-[92vh] container mx-auto  `}
      >
        <div className="container mx-auto px-4 my-auto">
          <div className="flex flex-wrap sm:justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 my-auto ">
              <img
                className="w-full h-auto rounded"
                src={profileImage}
                alt="profile"
              />
            </div>
            <div className=" flex flex-col  justify-center w-full md:w-1/2 lg:w-2/3 px-4 text-right  animate-slide-in">
              <h2 className={`text-7xl font-bold  mb-4 `}>Hi, I'm Sankalpa</h2>
              <p className={`text-5xl`}>
                A software engineer and AI enthusiast.
              </p>
              <h3 className={`text-3xl font-bold  my-4 `}>
                Currently working as a{" "}
                <strong className="text-cyan-600 animate-pulse">
                  Frontend Engineer.{" "}
                </strong>
              </h3>
            </div>
          </div>
        </div>
       
      </div>

      <div className="flex flex-col md:justify-center">
        <Timeline />
        <ProfessionalExperiences />
      </div>
      <PersonalProjects />
      <Skills />
    </div>
  );
};

export default Home;
