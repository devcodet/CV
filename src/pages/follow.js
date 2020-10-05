import React from "react";
import Title from "../components/labels/title/titles";
//ImageSource
import ola from '../assets/images/ola.jpg'
import LongText from '../components/labels/long-text/long-text'
function Follow() {
    return (
        <div className="App-header page">
            <Title name="#chat_with_me 📞"/>

            <div style={{display: "flex", width: "40%", height: "70%"}}>
                <img src={ola} style={{width: "100%", height: "100%"}}/>
            </div>
        </div>
        );
    }

export default Follow;
