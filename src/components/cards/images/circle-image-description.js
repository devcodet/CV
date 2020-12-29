import React from "react";
import "./circle-image-description.css";

function CircleImageDescription(props) {
  var marginRight = "40px";

  if(props.IsImageProfile)
    marginRight = "0";

    return (
    <div class="circle-item">
      <img className="circle-image" src={props.source} />
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
