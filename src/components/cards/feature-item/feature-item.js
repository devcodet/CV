import React from "react";
import "./feature-item.css";

function FeatureItem(props) {
  return (
    <div class="feature-item">
      <img src={props.src} />
      <div class="text">{props.title}</div>
      <div class="small text">{props.text}</div>
    </div>
  );
}

function getListFeatureItem(values) {
  var list = [];

  for (const [key, item] of Object.entries(values)) {
    list.push(
      <FeatureItem
        src={item["src"]}
        title={item["title"]}
        text={item["description"]}
      />
    );
  }

  return <div class="features-items-container">{list}</div>;
}

export default getListFeatureItem;
