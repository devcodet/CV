import React from "react";
import "./feature-item.css";

function FeatureItem(props) {
  return (
    <div>
      <img src={props.src} style={{ height: "350px", width: "500px" }} />
      <div class="text">{props.title}</div>
      <div class="small text">{props.text}</div>
    </div>
  );
}

function GetListFeatureItem(values) {
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
    
export default GetListFeatureItem;