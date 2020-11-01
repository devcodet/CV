import React from 'react';

import './progress.css'

function Progress(props){
    const radius = 60 - 6 * 2;
    const perimeter = radius * 2 * Math.PI;
    const strokeDashoffset =  perimeter - (props.percentage / 100) * perimeter;

    return (
        <div style={{width: "100%", display:"inline", margin: "0 20px 20px 50px"}}>
            <div className="progress-bar-container">
                <div class="circle-text">90%</div>
                <svg height={120} width={120}>
                    <circle
                        className='content'
                        strokeWidth={6}
                        strokeDasharray={perimeter + ' ' + perimeter}
                        style={{ strokeDashoffset }}
                        r={radius}
                        cx={60}
                        cy={60}
                    />
                </svg>
            </div>
        </div>
    );
}

function GetProgressGrid(values){
    var grid = [];

  for (const [key, value] of Object.entries(values)) {
    var row = [];
    
    for (const item of Object.entries(value)) {
      row.push(
        <Progress percentage={80}/>
        );
      }

      grid.push(
        <div class="progress-container">
          {row}
        </div>);
    }

  return <div style={{display: "inline"}}>{grid}</div>;
}

export default GetProgressGrid;