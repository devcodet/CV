import Circle from '../images/circle-image-description';
import React from 'react';
import './circle-label.css'


function CircleLabel(props) {
    return (
        <div className="content">{props.name}</div>
    )
};

export default CircleLabel;