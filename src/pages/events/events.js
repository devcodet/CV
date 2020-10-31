import React from "react";
import Title from "../../components/labels/title/titles";

import ola from "../../assets/images/ola.jpg";
import CircleImageDescription from "../../components/cards/images/circle-image-description";
import FeatureItem from "../../components/cards/feature-item/feature-item";

import "./events.css";
import "../global.css";

function GetGrid(values) {
  var grid = [];

  for (const [key, value] of Object.entries(values)) {
    var row = [];

    for (const item of Object.entries(value)) {
      row.push(
        <div style={{ margin: "auto" }}>
          <CircleImageDescription
            source={value[1].src}
            title={value[1].title}
            description={value[1].description}
          />
        </div>
      );
    }

    grid.push(<p />);

    grid.push(<div class="circle-image-row">{row}</div>);
  }
  return <div>{grid}</div>;
}

function GetList(values) {
  var list = [];

  for (const [key, item] of Object.entries(values)) {
    list.push(
      <div class="item">
        <FeatureItem
          src={item["src"]}
          title={item["title"]}
          text={item["description"]}
        />
      </div>
    );
  }

  return <div class="features-items-container">{list}</div>;
}

function Events() {
  var grid = GetGrid([
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

  var list = [
    { title: "project1", description: "project1", src: ola },
    { title: "project2", description: "project2", src: ola },
    { title: "project2", description: "project2", src: ola },
  ];

  var items = GetList(list);

  return (
    <div className="App-header page">
      <Title name="#events 📅" />
      <div style={{ margin: "auto" }}>
        {grid}
        {items}
      </div>
    </div>
  );
}

export default Events;
