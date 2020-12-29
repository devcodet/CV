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
import Follow from "./pages/follow/follow";

//Components
// import Menu from "./components/menu/menu.js";


String.isNullOrEmpty = function (value) {
  return !(typeof value === "string" && value.length > 0);
};

function App() {
  const { i18n } = useTranslation();
  const [stateEN, setStateEN] = useState("selected");
  const [statePT, setStatePT] = useState("");

  function changeToEN() {
    i18n.changeLanguage('en');

    setStateEN("selected");
    setStatePT("");
  }

  function changeToPT() {
    i18n.changeLanguage('pt');

    setStateEN("");
    setStatePT("selected");
  }

  return (
    <div className="App">
      <div class="languages-container">
        <div class="switch-button">
          <a onClick={changeToEN}>
            <div class={stateEN}>en</div>
          </a>
          <a onClick={changeToPT}>
            <div class={statePT}>pt</div>
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
