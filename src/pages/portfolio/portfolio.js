import React, { useState } from "react";

import Title, { SubTitle } from "../../components/labels/title/titles";

import ola from "../../assets/images/ola.jpg";

import FeatureItem from '../../components/cards/feature-item/feature-item';

import './portfolio.css';
import '../global.css';

function GetGrid(values) {
  var grid = [];

  for (const [key, value] of Object.entries(values)) {
    var row = [];
    
    for (const item of Object.entries(value)) {
      row.push(
        <img class="item" src={item[1].src}/>
        );
      }

      grid.push(
        <div class="portfolio-item-container">
          {row}
        </div>);
    }
  return <div>{grid}</div>;
}

function GetList(values){
  var list = []

  for (const [key, item] of Object.entries(values)) {
    list.push(
      <div class="item">
        <FeatureItem src={item["src"]} title={item["title"]} text={item["description"]}/>
      </div>
    );
  }

  return <div class="features-items-container">{list}</div>;
}

function Portfolio() {

  var projects = 
  [
    [
      { "title": "project1", "description" : "project1", "src":ola},
      { "title": "project2", "description" : "project2", "src":ola},
    ],
    [
      { "title": "project3", "description" : "project3", "src":ola},
    ]
  ]

  var courses = 
  [
    [
      { "title": "project1", "description" : "project1", "src":ola},
      { "title": "project2", "description" : "project2", "src":ola},
    ],
    [
      { "title": "project3", "description" : "project3", "src":ola},
    ]
  ]

  var list = 
  [
    { "title": "project1", "description" : "project1", "src":ola},
    { "title": "project2", "description" : "project2", "src":ola},
    { "title": "project2", "description" : "project2", "src":ola},
  ]

  var projectGrid = GetGrid(projects);

  var courseGrid = GetGrid(courses);

  var items = GetList(list);

  return (
    <div className="App-header page">
      <div class="portfolio-container">
        <div style={{ width: "50%" }}>
          <Title alignment="center" name="#projects 🚧" />
              { projectGrid }
        </div>
        <div style={{ width: "50%", left: "50%" }}>
          <Title alignment="center" name="#courses 🏫" />
              { courseGrid }
        </div>
      </div>
      <div style={{margin: "auto"}}>
        { items }
      </div>
    </div>
  );
}

export default Portfolio;
