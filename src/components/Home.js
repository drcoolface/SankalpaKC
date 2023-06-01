import React from 'react';
import Skills from './Skills';
import profileImage from '../assets/profile.png';

const Home = ({ isDarkMode }) => {
  return (
    <>
      <div className={`py-10 ${isDarkMode ? 'bg-gray-500' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-7xl font-bold text-right mb-4 py-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Hi, I'm Sankalpa
          </h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 -mt-10">
              <img className="w-full h-auto rounded" src={profileImage} alt="profile" />
            </div>
            <div className="w-full  md:w-1/2 lg:w-2/3 px-4 text-right animate-slide-in">
              <p className={`text-5xl mb-[10rem] py-20 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                A computer science student, transcriptionist, aspiring web developer and AI researcher.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Skills isDarkMode={isDarkMode} />
    </>
  );
};

export default Home;
