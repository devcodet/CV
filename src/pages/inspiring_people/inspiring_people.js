import React from "react";
import Title from "../../components/labels/title/titles";

import ola from "../../assets/images/ola.jpg";

import fernandoPessoa from "../../assets/images/persons/fernandoPessoa.jpg";
import jorgeCoutinho from "../../assets/images/persons/jorgeCoutinho.jpg";
import joeBiden from "../../assets/images/persons/joeBiden.jpg";
import kamalaHarris from "../../assets/images/persons/kamalaHarris.jpg";
import papaFrancisco from "../../assets/images/persons/papaFrancisco.jpg";
import danielGuerreiro from "../../assets/images/persons/danielGuerreiro.jpg";
import neilDeGrasseTyson from "../../assets/images/persons/neilDeGrasseTyson.jpg";
import shephenHalwing from "../../assets/images/persons/shephenHalwing.jpg";
import obama from "../../assets/images/persons/obama.jpg";
import billGates from "../../assets/images/persons/billGates.jpg";

import { getGridCircleImages } from "../../components/cards/images/circle-image-description";

import "./inspiring_people.css";
import "../global.css";

function InspiringPeople() {
  var title = {
    name: "#inspiring_people 🤩",
    description: "These people has inspired me to go futher",
  };

  var grid = getGridCircleImages([
    [
      {
        src: fernandoPessoa,
        title: "Fernando Pessoa",
        description: "Poet, Writer and Philosopher",
      },
      {
        src: jorgeCoutinho,
        title: "Jorge Coutinho",
        description: "Coach and Human Development",
      },
      { src: joeBiden, title: "Joe Biden", description: "USA President" },
      { src: kamalaHarris, title: "Kamala Harris", description: "USA Vice-President" },
    ],
    [
      { src: papaFrancisco, title: "Papa Francisco", description: "Head of the Catholic Church" },
      { src: danielGuerreiro, title: "Daniel Guerreiro", description: "Behavioral Coach" },
      { src: neilDeGrasseTyson, title: "Neil deGrasse Tyson", description: "Astrophysicist" },
      { src: shephenHalwing, title: "Shephen Halwing", description: "Physicist and Cosmologist" },
    ],
    [
      { src: obama, title: "Obama", description: "44th USA President" },
      { src: billGates, title: "Bill Gates", description: "Business Magnate" },
    ],
  ]);

  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description} />
      <div style={{ margin: "auto" }}>{grid}</div>
      <p></p>
      <div style={{ margin: "auto" }}>
        <div style={{ color: "black" }}>
          "The people I most admire are those who never end."
        </div>
        <div style={{ color: "black", fontSize: "15px" }}>Almada Negreiros</div>
      </div>
    </div>
  );
}

export default InspiringPeople;
