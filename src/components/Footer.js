import React from "react";

const Footer = ({ isDarkMode }) => {
  const isLightBackground = true;

  return (
    <footer className={`py-4  `}>
      <div className="container mx-auto px-4 flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/sankalpa-kc-4321b714b"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${
            isLightBackground ? "gray-700" : "gray-100"
          } hover:underline hover:scale-110 transition-transform duration-300 mx-2`}
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://github.com/drcoolface"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${
            isLightBackground ? "gray-700" : "gray-100"
          } hover:underline hover:scale-110 transition-transform duration-300 mx-2`}
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/dr.coolface/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${
            isLightBackground ? "gray-700" : "gray-300"
          } hover:underline hover:scale-110 transition-transform duration-300 mx-2`}
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
