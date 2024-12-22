import React from "react";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import myPhoto from "/content/image.jpg";
const MainContent = () => {
  return (
    <main className="w-full p-8">
      <div className="flex flex-col sm:flex-row items-start mb-16">
        <aside className="w-full sm:w-1/3 flex justify-center mb-8 sm:mb-0">
          <img
            className="w-52 h-52 rounded-full shadow-md"
            src={myPhoto}
            alt="Alina Volokha"
          />
        </aside>

        <section className="w-full sm:w-2/3">
          <div id="about" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p>
              I'm a Frontend Developer with experience in web programming and
              design. Interested in UX/UI & Graphic design.
            </p>
            <p className="mt-4">
              Age: 19 | Marital Status: Single | Location: Minsk, Belarus
            </p>
            <p className="mt-4">Languages: English (C1), Russian</p>
          </div>

          <div id="education" className="mb-8">
            <Education />
          </div>

          <div id="skills" className="mb-0">
            <Skills />
          </div>
        </section>
      </div>

      <div id="projects" className="text-center">
        <Projects />
      </div>
    </main>
  );
};

export default MainContent;
