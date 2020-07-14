import React from 'react';

import './big-card.css';

function BigCard(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.source}/>
            <div className="card-title">
                I'm a card
            </div>
            <div className="card-description">
                I'm a card
                I'm a cardI'm a cardI'm a cardI'm a cardI'm a cardI'm a cardI'm a cardI'm a cardI'm a cardI'm a cardI'm a cardI'm a cardI'm a cardI'm a cardI'm a cardI'm a card
            </div>
        </div>
    );
}

export default BigCard;

