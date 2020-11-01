import React from "react";
import Title from "../../components/labels/title/titles";

import ola from "../../assets/images/ola.jpg";
import { GetGridCircleImages } from "../../components/cards/images/circle-image-description";
import GetListFeatureItem from "../../components/cards/feature-item/feature-item";

import "./experiences.css";
import "../global.css";

function Expirences() {
  var title = { "name":"#expirences 🌄", "description":"know me more" }

  var imagesGrid = GetGridCircleImages([
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
 
  var featuresItems = GetListFeatureItem(
    [
      { title: "project1", description: "project1", src: ola },
      { title: "project2", description: "project2", src: ola },
      { title: "project2", description: "project2", src: ola },
    ]
  );

  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description} />
      <div style={{ margin: "auto" }}>
        {imagesGrid}
        {featuresItems}
      </div>
    </div>
  );
}

export default Expirences;
