import React, { useState }from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import "./config/i18n";

//Pages
import Homepage from "./pages/homepage";
import AboutMe from "./pages/about_me/about_me";
import Tools from "./pages/tools/tools";
import Portfolio from "./pages/portfolio/portfolio";
import Expirences from "./pages/experiences/experiences";
import Hobbies from "./pages/hobbies/hobbies";
import InspiringPeople from "./pages/inspiring_people/inspiring_people";
import SocialMedia from "./components/social-media/social-media";
//Components
// import Menu from "./components/menu/menu.js";


String.isNullOrEmpty = function (value) {
  return !(typeof value === "string" && value.length > 0); 
}; 

function App() {
  const { i18n } = useTranslation();
  const [setStateEN] = useState("selected");

  function changeToEN() {
    i18n.changeLanguage('en');

    setStateEN("selected");
  }

  return (
    <div className="App">
      
      {/* <Menu /> */ /**/}

      <Homepage />
      <AboutMe />
      <Tools />
      <Portfolio />
      <Expirences />
      <Hobbies />
      <InspiringPeople />
      <SocialMedia />
    </div>
  );
}

export default App;
