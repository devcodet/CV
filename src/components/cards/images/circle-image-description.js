import React from "react";
import './circle-image-description.css'

function CircleImageDescription(props) {
    return (
        <div style={{ display: "block", padding: "20 auto", margin: "0 40px 0 0", lineHeight:"40px", alignItems: "center"}}>
            <img className="circleimage" src={props.source}/>
            <div className="name">props.name</div>
            <div className="description">props.description</div>
        </div>
        );
    }
    export default CircleImageDescription;        