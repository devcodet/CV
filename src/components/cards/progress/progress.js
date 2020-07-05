import React, { useState } from 'react';

import './progress.css'

function Progress(props) {
    return (
        <div style={{width: "20%", margin:"10px"}}>
            <div style={{width: "100%", display: 'block', overflow: "hidden"}}>
                <img style={{width: "100%", borderRadius: "0px"}} src={props.source}/>
            </div>
            <progress className="progress-bar" max="100" value={props.value}>
            </progress>
        </div>
    );
}

export default Progress;
