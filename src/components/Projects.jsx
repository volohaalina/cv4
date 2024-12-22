import React from "react";

import lamoda from "/content/asserts/lamoda.png";

import API from "/content/asserts/API.png";

import filterList from "/content/asserts/filterList.png";

import notion from "/content/asserts/notion.png";
const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="space-y-8">
        <div>
          <h4 className="text-lg font-bold">Lamoda</h4>
          <p>
            Online store with the ability to filter and sort products. Built
            with React, Vite, CSS modules.
          </p>
          <a
            href="https://github.com/volohaalina/Lamoda"
            className="text-primary hover:underline"
          >
            Link on GitHub
          </a>
          <div className="flex justify-center mt-4">
            <img
              src={lamoda}
              alt="lamoda project"
              className="shadow-md w-90 h-52"
            />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold">Notion</h4>
          <p>
            A multi-user note-taking application. Each user can create, delete,
            and edit their own notes. Built with JS React, Vite, tailwindCSS,
            Json server.
          </p>
          <a
            href="https://github.com/volohaalina/Notion"
            className="text-primary hover:underline"
          >
            Link on GitHub
          </a>
          <div className="flex justify-center mt-4">
            <img src={notion} alt="notion" className="shadow-md w-90 h-52" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold">Filterable list</h4>
          <p>
            Todoist app with sophisticated task filtering. Built with JS React,
            Vite, CSS modules.
          </p>
          <a
            href="https://github.com/volohaalina/Filterable-list"
            className="text-primary hover:underline"
          >
            Link on GitHub
          </a>
          <div className="flex justify-center mt-4">
            <img
              src={filterList}
              alt="Filterable list"
              className="shadow-md w-90 h-52"
            />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold">API/SPA</h4>
          <p>
            Multi-page application implemented using external API and
            react-router-dom library. Built with JS React, React DOM, Vite, CSS
            modules.
          </p>
          <a
            href="https://github.com/volohaalina/API-SPA"
            className="text-primary hover:underline"
          >
            Link on GitHub
          </a>
          <div className="flex justify-center mt-4">
            <img src={API} alt="API/SPA" className="shadow-md w-90 h-52" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
