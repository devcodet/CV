import React, { useState } from 'react';

import './progress.css'
import '../big-card/big-card'
import CircleLabel from '../circle-label/circle-label';

function Progress(props) {
    return (
        <div style={{width: "100%", display:"inline", margin: "0 20px 20px 50px"}}>
            <div className="progress-bar-container">
                <CircleLabel source={props.source}/>
                {/* <div className="progress-bar">
                    <div className="progress-bar value" style={{width: props.value}}>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Progress;