import React, { useState } from 'react';

import './progress.css'
import '../big-card/big-card'
import BigCard from '../big-card/big-card';

function Progress(props) {
    return (
        <div style={{width: "20%", margin:"10px"}}>
            <div className="progress-bar-container">
                <BigCard source={props.source}/>
                {/* <img className="progress-bar-image" src={props.source}/> */}
                <div className="progress-bar">
                    <div className="progress-bar value" style={{width: props.value}}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Progress;