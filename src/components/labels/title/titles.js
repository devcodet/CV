import React from 'react';

import './titles.css'

function Title(props) {
    return (
        <div class="content-titles">
            <div class="page-titles">{props.name}</div>
            <div class="page-sub-titles">Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec</div>
        </div>
    );
}

function SubTitle(props){
    return (
        <div/>
    );
}

export default Title;
export {SubTitle};