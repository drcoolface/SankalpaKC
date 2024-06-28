import React from "react";
import { NavLink } from "react-router-dom";

const PersonalProjects = () => {
  return (
    <div className="max-w-6xl mx-auto my-5 p-6 shadow-lg rounded-lg w-[60%] flex flex-col justify-center ">
      <h2 className="text-4xl  mx-auto font-semibold text-center mb-8 text-gray-800">
        Personal and Academic Projects
      </h2>
      <ul className="list-none space-y-4 ">
        <li className="flex items-start text-lg text-gray-600 bg-gray-100 p-4 rounded-lg">
          <i className="fas fa-solid fa-book text-black mr-3 text-xl"></i>
          <span>
            <NavLink to="/Research" className={`hover:font-bold pt-2`}>
              Research on weather forecasting using Machine Learning.
            </NavLink>
          </span>
        </li>
        <li className="flex items-start text-lg text-gray-600 bg-gray-100 p-4 rounded-lg">
          <i className="fas fa-solid fa-language text-blue-500 mr-3 text-xl"></i>
          <span>
            <a
              href="https://nepalisemanticsearch.netlify.app"
              className="hover:font-bold transition duration-300 "
              target="_blank"
              rel="noopener noreferrer"
            >
              Web application for Multilingual Semantic Search.
            </a>
          </span>
        </li>
        <li className="flex items-start text-lg text-gray-600 bg-gray-100 p-4 rounded-lg">
          <i className="fas fa-calendar-alt text-purple-500 mr-3  text-xl"></i>
          <span>
            {" "}
            <a
              href="https://github.com/drcoolface/Nodejs"
              className="hover:font-bold transition duration-300 "
              target="_blank"
              rel="noopener noreferrer"
            >
              Event management API.
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PersonalProjects;
