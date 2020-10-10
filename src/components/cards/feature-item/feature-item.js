

import React from "react";
import './feature-item.css'

import ola from '../../../assets/images/ola.jpg'

function FeatureItem(props) {
    return (
        <div>
            <img src={ola} style={{height: "350px", width: "500px"}}/>
            <div style={{color:"black"}}>ola</div>
            <div style={{color:"black", fontSize:"15px"}}>ola, ola, ola Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec</div>
        </div>
        );
    }
    export default FeatureItem;        