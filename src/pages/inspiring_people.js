import React from "react";
import Title from "../components/labels/title/titles";

import ola from "../assets/images/ola.jpg";
import CircleImageDescription from '../components/cards/images/circle-image-description';

function InspiringPeople() {
  return (
    <div className="App-header page">
      <Title name="#inspiring_people 🤩" />
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            position: "relative",
            paddingBottom: "5%",
          }}
        >
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            position: "relative",
            paddingBottom: "120px",
          }}
        >
        </div>
        <div style={{ display: "flex", margin: "0 auto" }}>
          <CircleImageDescription source={ola} description="ola"/>
          <CircleImageDescription source={ola} description="ola"/>
          <CircleImageDescription source={ola} description="ola"/>
          <CircleImageDescription source={ola} description="ola"/>
        </div>
        <p/>
        <div style={{ display: "flex", margin: "0 auto" }}>
          <CircleImageDescription source={ola} description="ola"/>
          <CircleImageDescription source={ola} description="ola"/>
          <CircleImageDescription source={ola} description="ola"/>
        </div>
        <p/>
        <div style={{ display: "flex", margin: "0 auto" }}>
          <CircleImageDescription source={ola} description="ola"/>
          <CircleImageDescription source={ola} description="ola"/>
          <CircleImageDescription source={ola} description="ola"/>
        </div>
        
    </div>
  );
}

export default InspiringPeople;
