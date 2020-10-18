import React from 'react';

import './skill-item.css';

function SkillItem(props) {
    return (
        <div class="skill-item-content">
            <img class="skill-icon" src={props.source}/>
            <div style={{display:"inline", margin:"0 0 0 15px"}}>
                <div class="skill-title">{props.title}</div>
                <div class="skill-description">{props.description}</div>
            </div>
        </div>
    );
}

export default SkillItem;