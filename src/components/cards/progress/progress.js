import React from 'react';

import './progress.css'

function Progress(props){
    var level = "";

    const radius = 60 - 6 * 2;
    const perimeter = radius * 2 * Math.PI;
    const strokeDashoffset =  perimeter - (props.percentage / 100) * perimeter;

    switch(true){
      case (props.percentage < 30):
        level = "low";
        break;
      case (props.percentage < 61):
        level = "middle";
        break;
      case (props.percentage < 100):
        level = "high";
        break;
    }

    var circleTextClass = `circle-text ${level}`;
    var contentClass = `content ${level}`;
    var textClass = `name-text ${level}`;

    return (
        <div class="progress-item">
            <div class="progress-circle-container">
              <div class={circleTextClass}>{props.percentage}%</div>
                <svg height={120} width={120}>
                    <circle
                        className={contentClass}
                        strokeWidth={6}
                        strokeDasharray={perimeter + ' ' + perimeter}
                        style={{ strokeDashoffset }}
                        r={radius}
                        cx={60}
                        cy={60}
                    />
                </svg>
            </div>
            <div class={textClass}>{props.name}</div>
        </div>
    );
}

function getProgressGrid(values){
    var grid = [];

  for (const [key, value] of Object.entries(values)) {
    var row = [];
    
    for (const item of Object.entries(value)) {
      row.push(
        <Progress percentage={item[1]["value"]} name={item[1]["name"]}/>
        );
      }

      grid.push(
        <div class="progress-container">
          {row}
        </div>);
    }

  return <div style={{display: "inline", margin: "auto"}}>{grid}</div>;
}

export default getProgressGrid;