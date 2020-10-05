import React from 'react';

import './titles.css'

function Title(props) {
    return (
            <div class="page-titles">{props.name}</div>
    );
}

function SubTitle(props){
    return (
        <div class="page-sub-titles">{props.name}</div>
    );
}

export default Title;
export {SubTitle};