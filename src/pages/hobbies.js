import React from "react";
import Title from "../components/labels/title/titles";
import ola from "../assets/images/ola.jpg";
import CircleImageDescription from '../components/cards/images/circle-image-description';

function Hobbies() {
    return (
        <div className="App-header page">
        <Title name="#hobbies_interests ⚽"/>
         <div style={{ display: "flex", margin: "0 auto" }}>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
        </div>
        <p></p>
        <div style={{ display: "flex", margin: "0 auto" }}>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
        </div>
        <p></p>
        <div style={{ display: "flex", margin: "0 auto" }}>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
        </div>
        <p></p>
        <div style={{ display: "flex", margin: "0 auto" }}>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
            <CircleImageDescription source={ola} description="ola"/>
        </div>
        </div>
        );
    }

export default Hobbies;
