import React from 'react';

import './skill-item.css';

function SkillItem(props) {
    return (
        <div class="skill-item-content">
            <img class="skill-icon" src={props.source}/>
            <div style={{display:"inline", margin:"0 0 0 15px"}}>
                <div class="skill-title">
                Lorem ipsum dolor sit amet
                </div>
                <div class="skill-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporsed do eiusmod tempo<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporsed do eiusmod tempo<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporsed do eiusmod tempo<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporsed do eiusmod tempo<br/>
                </div>
            </div>
        </div>
    );
}

export default SkillItem;