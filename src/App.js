import React from "react";
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
import Follow from "./pages/follow/follow";

//Components
import Menu from "./components/menu/menu.js";

String.isNullOrEmpty = function (value) {
  return !(typeof value === "string" && value.length > 0);
};

function App() {
  const { t, i18n } = useTranslation();

  var enLanguage = true;
  var ptLanguage = false;

  function changeToEN() {
    i18n.changeLanguage('en');

    enLanguage = true;
    ptLanguage = false;
  }

  function changeToPT() {
    i18n.changeLanguage('pt');

    enLanguage = false;
    ptLanguage = true;
  }

  return (
    <div className="App">
      <div class="languages-container">
        <div class="switch-button">
          <a onClick={changeToEN}>
            <div class={`${enLanguage ? "selected" : ""}`} >en</div>
          </a>
          <a onClick={changeToPT}>
            <div class={`${ptLanguage ? "selected" : ""}`} >pt</div>
          </a>
        </div>
      </div>

      {/* <Menu /> */}

      <Homepage />
      <AboutMe />
      <Tools />
      <Portfolio />
      <Expirences />
      <Hobbies />
      <InspiringPeople />
      <Follow />
    </div>
  );
}

export default App;
