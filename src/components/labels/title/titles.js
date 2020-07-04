import React, { useState } from 'react';

import './titles.css'

function Title(props) {
    return (
        <div class="page-titles">{props.name}</div>
    );
}

export default Title;