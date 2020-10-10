import React from "react";
import Title from "../components/labels/title/titles";

import ola from "../assets/images/ola.jpg";
import CircleImageDescription from '../components/cards/images/circle-image-description';

function Events() {
  return (
    <div className="App-header page">
      <Title name="#events 📅" />
        {/* <div
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
        </div> */}
        <div style={{ display: "flex", margin: "0 auto" }}>
          <CircleImageDescription source={ola} description="ola"/>
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
          <CircleImageDescription source={ola} description="ola"/>
          <CircleImageDescription source={ola} description="ola"/>
        </div>
        <div style={{display:"flex"}}>
          <img style={{ width: "30%", marginTop:"5%", marginRight: "5%"}} src={ola}></img>
          <img style={{ width: "30%", marginTop:"5%", marginRight: "5%"}} src={ola}></img>
          <img style={{ width: "30%", marginTop:"5%", marginRight: "5%"}} src={ola}></img>
        </div>
    </div>
  );
}

export default Events;
