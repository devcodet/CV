import React from "react";
import './small-card.css';

import CircleImageDescription from '../images/circle-image-description';

function SmallCard(props) {
    return (
        <div className="card">
            <CircleImageDescription source={props.source} description="ola"/>
            <div className="card-description">
               
            </div>
        </div>
    )
};

export default SmallCard;