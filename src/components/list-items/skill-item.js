import React from "react";

import "./skill-item.css";

function SkillItem(props) {
  return (
    <div class="skill-item-content">
      <img class="skill-icon" src={props.source} />
      <div style={{ display: "inline", margin: "0 0 0 15px" }}>
        <div class="skill-title">{props.title}</div>
        <p/>
        <div class="skill-description">{props.description}</div>
        <p/>
        <div class="skill-description">{props.description2}</div>
        <p/>
        <div class="skill-description">{props.description3}</div>
      </div>
    </div>
  );
}

function GetSkillsList(values) {
  var list = [];

  for (const [key, item] of Object.entries(values)) {
    list.push(
      <SkillItem
        source={item["src"]}
        title={item["title"]}
        description={item["description"]}
        description2={item["description2"]}
        description3={item["description3"]}
      />
    );
  }

  return list;
}

export default GetSkillsList;
