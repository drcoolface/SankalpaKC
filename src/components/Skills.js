import React from 'react';

const Skills = ({ isDarkMode }) => {
  const skills = ['ReactJS', 'TailwindCSS', 'Python', 'Tensorflow', 'SQL', 'ASP.NET Core'];

  const Mapskill = skills.map((skill, index) => (
    <li
      key={index}
      className={`text-3xl py-2 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}
     
    //  This animation was taken from the internet.
      style={{
        transition: 'transform 0.5s ease-in-out',
        transformOrigin: 'left',
        transform: 'translateX(-100%)',
        animation: `${index * 0.2 + 0.2}s slideInFromLeft`,
      }}
      onAnimationEnd={(e) => {
        e.target.style.transform = 'translateX(0)';
      }}
    >
      {skill}
    </li>
  ));

  return (
    <div className={`py-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className={`text-5xl mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <h5 className="text-center mb-5">Core skills</h5>
        <ul>{Mapskill}</ul>
      </div>
    </div>
  );
};

export default Skills;
