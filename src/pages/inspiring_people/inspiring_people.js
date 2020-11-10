import React from "react";
import Title from "../../components/labels/title/titles";

import ola from "../../assets/images/ola.jpg";
import { GetGridCircleImages } from "../../components/cards/images/circle-image-description";

import "./inspiring_people.css"
import "../global.css";

function InspiringPeople() {
  var title = { "name":"#inspiring_people 🤩", "description":"know me more" }
  
  var grid = GetGridCircleImages(
    [
      [
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" }
      ],  
      [
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" }
      ],  
      [
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" },
        { "src" : ola, "title" : "fdffd", "description" : "dfifisdfiosd" }
      ]
    ]
  );
  
  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description}/>
      <div style={{ margin: "auto" }}>
        {grid}
      </div>
      <p></p>
      <div style={{ margin: "auto", color: "black"}}>
        "The people I most admire are those who never end."
      </div>
      <div style={{ margin: "auto", color: "black", fontSize: "15px"}}>
        Almada Negreiros
      </div>
    </div>
  );
}

export default InspiringPeople;
