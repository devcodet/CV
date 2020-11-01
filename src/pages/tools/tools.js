import React, { useState } from "react";

import Title from "../../components/labels/title/titles";
import GetProgressGrid from "../../components/cards/progress/progress";
// import Progress from "../../components/cards/progress-circle/react-progress-circle";
import GetSkillsList from "../../components/list-items/skill-item";

import "./tools.css";
import "../global.css";

//ImageSource
import ola from "../../assets/images/ola.jpg";

function Tools() {

  var titles = 
  [
    { "title": "#tools 🔧", "description" : "tools"},
    { "title": "#languages 👨‍💻", "description" : "languages"},
    { "title": "#skills 🤹", "description" : "skills"},
  ]

  var toolsGrid = GetProgressGrid(
    [
      [
        { "value" : 10, "name" : "fdffd" },
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" }
      ],  
      [
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" }
      ],  
      [
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" }
      ],
      [
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" }
      ]
    ]
  );
  
  var languagesGrid = GetProgressGrid(
    [
      [
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" }
      ],  
      [
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" }
      ],  
      [
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" }
      ],
      [
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" },
        { "value" : 10, "name" : "fd" }
      ]
    ]
  );

  var skills = GetSkillsList(
    [
      { "src" : ola, "title" : "title", "description":"desc"},
      { "src" : ola, "title" : "title", "description":"desc"},
      { "src" : ola, "title" : "title", "description":"desc"},
      { "src" : ola, "title" : "title", "description":"desc"},
    ]
  )

  return (
    <div className="App-header page">
      <p></p>
      <Title name={titles[0].title} description={titles[0].description} />
      <div class="tools-container">
        <img src={ola} class="suggestion-image" />
        {toolsGrid}
        <div class="skills-container">
          {skills}
        </div>
      </div>
      <p></p>
      <Title name={titles[1].title} description={titles[1].description} />
      <div class="tools-container">
        <img src={ola} class="suggestion-image" />
        {languagesGrid}
        <div class="skills-container">
          {skills}
        </div>
      </div>
      <Title name={titles[2].title} description={titles[2].description} />
      <div class="tools-container">
        <img src={ola} class="suggestion-image" />
        <div style={{ margin: "0 0 0 50px", display: "flex" }}>
          <div class="progress-container">
            <div>{skills}</div>
            <div class="skills-container">
              {skills}
            </div>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
}

export default Tools;
