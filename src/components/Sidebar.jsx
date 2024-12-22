import React from "react";
import myPhoto from "/image.jpg";
const Sidebar = () => {
  return (
    <aside className="w-full sm:w-1/3 bg-primary text-white flex items-center justify-center h-auto sm:h-screen">
      <div className="flex flex-col items-center justify-center">
        <img
          src={myPhoto}
          className="w-52 h-52 rounded-full shadow-md"
          alt="Alina Voloha"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
