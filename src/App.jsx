import React from "react";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="font-arial">
      <Header />
      <div className="mt-24">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
