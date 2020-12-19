import React from "react";
import Title from "../../components/labels/title/titles";

import learning from "../../assets/images/interests/learning.jpg";
import technology from "../../assets/images/interests/technology.jpg";
import maths from "../../assets/images/interests/maths.jpg";
import economy from "../../assets/images/interests/economy.jpg";
import politics from "../../assets/images/interests/politics.jpg";
import fado from "../../assets/images/interests/fado.jpg";
import poetry from "../../assets/images/interests/poetry.jpg";
import selfDevelopment from "../../assets/images/interests/selfDevelopment.jpg";
import philosophy from "../../assets/images/interests/philosophy.jpg";
import history from "../../assets/images/interests/history.jpg";
import volunteering from "../../assets/images/interests/volunteering.jpg";
import science from "../../assets/images/interests/science.jpg";
import astronomy from "../../assets/images/interests/astronomy.jpg";
import publicSpeaking from "../../assets/images/interests/publicSpeaking.jpg";

import { getGridCircleImages } from "../../components/cards/images/circle-image-description";

import "./hobbies.css";
import "../global.css";

function Hobbies() {
  var title = { "name":"#hobbies_interests ⚽", "description":"What I am doing in my free time?" };

  var grid = getGridCircleImages([
    [
      { src: learning, title: "Learning"},
      { src: technology, title: "Technology"},
      { src: maths, title: "Maths"},
      { src: economy, title: "Economy"},
      { src: politics, title: "Politics"},
      { src: fado, title: "Fado"},
    ],
    [
      { src: poetry, title: "Poetry"},
      { src: selfDevelopment, title: "Self Development"},
      { src: philosophy, title: "Philosophy"},
      { src: history, title: "History"},
    ],
    [
      { src: volunteering, title: "Volunteering"},
      { src: science, title: "Science"},
      { src: astronomy, title: "Astronomy"},
      { src: publicSpeaking, title: "Public Speaking"},
    ]
  ]);

  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description} />
      <div style={{ margin: "auto" }}>
        {grid}
      </div>
      <p></p>
      <div style={{margin: "auto"}}>
        <div style={{color: "black"}}>
          "I entered a bookstore. I started to count the books that there are to read and the years that I will have of life."
        </div>
        <div style={{color: "black"}}>
          "Don't arrive! Not even half the bookstore!"
        </div>
        <div style={{color: "black", fontSize: "15px"}}>
          Almada Negreiros
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
