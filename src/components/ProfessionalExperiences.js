import React from "react";

const ProfessionalExperiences = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 shadow-lg rounded-lg ">
      <h3 className="text-4xl  text-center font-semibold mb-4 text-gray-700">
        Work Projects
      </h3>
      <div className="space-y-4">
        {[
          "An admin panel for large scale transaction processing, backup management, user management, etc.",
          "Web application for Employee Management.",
          "An upcoming ecommerce web application.",
        ].map((project, index) => (
          <div
            key={index}
            className="flex items-center text-lg text-gray-600 bg-gray-100 p-4 rounded-lg"
          >
            <i className="fas fa-check-circle text-green-500 mr-2 text-xl"></i>
            <span>{project}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperiences;
