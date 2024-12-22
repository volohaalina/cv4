import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-30 backdrop-blur-lg shadow-md z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-4 px-8">
        <h1 className="text-3xl font-bold text-gray-800">CV Alina Voloha</h1>
        <nav className="flex gap-6">
          <a href="#projects" className="hover:underline text-gray-700">
            Projects
          </a>
          <a href="#about" className="hover:underline text-gray-700">
            About Me
          </a>
          <a href="#contact" className="hover:underline text-gray-700">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
