import React from "react";
import Title from "../../components/labels/title/titles";

import ola from "../../assets/images/ola.jpg";
import CircleImageDescription from '../../components/cards/images/circle-image-description';

import "./inspiring_people.css"
import "../global.css";

function GetGrid(values) {
  var grid = [];

  for (const [key, value] of Object.entries(values)) {
    var row = [];
    
    for (const item of Object.entries(value)) {
      row.push(
        <CircleImageDescription source={value[1].src} title={value[1].title} description={value[1].description} />
        );
      }

      grid.push(<p/>);

      grid.push(
        <div class="circle-image-row">
          {row}
        </div>);
    }
  return <div>{grid}</div>;
}

function InspiringPeople() {
  var grid = GetGrid(
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
      <Title name="#inspiring_people 🤩" />
        {/* <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            position: "relative",
            paddingBottom: "5%",
          }}
        >
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            position: "relative",
            paddingBottom: "120px",
          }}
        > 
        </div>*/}
        {grid}
    </div>
  );
}

export default InspiringPeople;
