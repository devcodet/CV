import React from "react";
import "./circle-image-description.css";

function CircleImageDescription(props) {
  return (
    <div
      style={{
        display: "block",
        padding: "20 auto",
        margin: "0 40px 0 0",
        lineHeight: "40px",
        alignItems: "center",
      }}
    >
      <img className="circleimage" src={props.source} />
      <div className="name">{props.title}</div>
      <div className="description">{props.description}</div>
    </div>
  );
}

function getGridCircleImages(values) {
  var grid = [];

  for (const [key, value] of Object.entries(values)) {
    var row = [];

    for (const item of Object.entries(value)) {
      row.push(
        <div style={{ margin: "auto" }}>
          <CircleImageDescription
            source={item[1].src}
            title={item[1].title}
            description={item[1].description}
          />
        </div>
      );
    }

    grid.push(<p />);

    grid.push(<div class="circle-image-row">{row}</div>);
  }
  return <div>{grid}</div>;
}

export default CircleImageDescription;
export { getGridCircleImages };
