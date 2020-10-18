

import React from "react";
import './feature-item.css'

function FeatureItem(props) {
    return (
        <div>
            <img src={props.image} style={{height: "350px", width: "500px"}}/>
            <div class="text">{props.title}</div>
            <div class="small text">{props.text}</div>
        </div>
        );
    }
    export default FeatureItem;        