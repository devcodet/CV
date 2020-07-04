import React, { useState } from 'react';

import './adv-image.css'

function AdvImage(props) {
    return (
        <img src={props.source}/>
    );
}

export default AdvImage;