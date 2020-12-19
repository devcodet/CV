import React from "react";
import SocialMedia from "../components/social-media/social-media";

import "./homepage.css";

function getFloatingWords(values) {
  var content = [];
  var history = [];

  for (const [key, value] of Object.entries(values)) {
    var numberSecondsX = getRandomNumber(15, 90);
    var numberSecondsY = getRandomNumber(15, 90);
    var delay = getRandomNumber(0,2);

    var objectGenerated = {
      numberSecondsX: numberSecondsX,
      numberSecondsY: numberSecondsY,
    };

    if(checkIfAlreadyExists(history, objectGenerated)){
      // numberSecondsX = getRandomNumber(5, 20);
      // numberSecondsY = getRandomNumber(5, 20);
   
      // objectGenerated = {
      //   numberSecondsX: numberSecondsX,
      //   numberSecondsY: numberSecondsY,
      // };

      continue;
    }

    history.push(objectGenerated);

    var animationValue = `moveX ${numberSecondsX}s linear ${delay}s infinite alternate, moveY ${numberSecondsY}s linear ${delay}s infinite alternate`;

    content.push(
      <div
        class="fc"
        style={{
          animation: animationValue,

        }}
      >
        {value}
      </div>
    );
  }
  return content;
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkIfAlreadyExists(array, object){
  return array.some(object1 => object1.numberSecondsX == object.numberSecondsX 
    && array.some(object => object.numberSecondsY == object.numberSecondsY));
}

function Homepage() {
  var words = [
    "#api",
    "#mobile",
    "#dev",
    "#community",
    "#javascript",
    "#react",
    "#dotNet",
    "#xamarin",
    "#inspirations",
    "#visual_studio",
    "#code",
    "#sdk",
    "#android",
    "#web",
    "#ios",
    "#sql",
    "#sql_server",
    "#git",
    "#java",
    "#cSharp",
    "#networking",
    "#learn",
    "#passion",
    "#soft_skills"
  ];

  var foaltingContent = getFloatingWords(words);

  return (
    <div class="App-header">
      <div>
        <div class="floating-container">{foaltingContent}</div>
        <div>
          <p style={{ color: "#000", fontSize: 20 + "px", margin: 0 + "px" }}>
            Hi there <span role="img ">👋👋</span>
          </p>
          <p></p>
          <p style={{ color: "#000", fontSize: 20 + "px", margin: 0 + "px" }}>
            Welcome to my page 😊
          </p>
          <p style={{ color: "#000", fontSize: 50 + "px", margin: 0 + "px" }}>
            I'm Bruno Brás
          </p>
          <p style={{ color: "#000", fontSize: 18 + "px", margin: 0 + "px" }}>
            "I have on me all the dreams of the world 🌍"
          </p>
          <p style={{ color: "#000", fontSize: 10 + "px", margin: 0 + "px" }}>
            in TABACARIA
          </p>
          <p style={{ color: "#000", fontSize: 10 + "px", margin: 0 + "px" }}>
            Alvaro de Campos
          </p>
          <p />
        </div>
      </div>
      <SocialMedia />
    </div>
  );
}

export default Homepage;
