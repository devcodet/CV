import React from "react";
import Title from "../../components/labels/title/titles";
import ola from "../../assets/images/ola.jpg";
import { GetGridCircleImages } from "../../components/cards/images/circle-image-description";

import "./hobbies.css";
import "../global.css";

function Hobbies() {
  var title = { "name":"#hobbies_interests ⚽", "description":"know me more" };

  var grid = GetGridCircleImages([
    [
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
    ],
    [
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
    ],
  ]);

  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description} />
      <div style={{ margin: "auto" }}>
        {grid}
      </div>
    </div>
  );
}

export default Hobbies;
