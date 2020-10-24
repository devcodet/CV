import React from "react";
import Title from "../../components/labels/title/titles";
import ola from "../../assets/images/ola.jpg";
import CircleImageDescription from '../../components/cards/images/circle-image-description';

import "./hobbies.css"
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

function Hobbies() {

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
        ]
      );

    return (
        <div className="App-header page">
        <Title name="#hobbies_interests ⚽"/>
         {grid}
        </div>
        );
    }

export default Hobbies;
