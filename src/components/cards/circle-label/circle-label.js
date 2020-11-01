import React from 'react';
import './circle-label.css'


function CircleLabel (props) {
    
    const radius = 60 - 5;
    const perimeter = radius * 2 * Math.PI;
    const diff = perimeter - (15/ 100) * perimeter;

debugger

    return (
        <svg height={120} width={120}>
            <circle
                className="content"
                strokeWidth={6}
                strokeDasharray={perimeter + ' ' + perimeter}
                style={{ diff }}
                r={radius}
                cx={60}
                cy={60}
            />
        </svg>
    );
};

export default CircleLabel;