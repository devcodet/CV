import React from "react";
import Title from "../../components/labels/title/titles";

import ola from "../../assets/images/ola.jpg";
import CircleImageDescription from "../../components/cards/images/circle-image-description";
import FeatureItem from '../../components/cards/feature-item/feature-item';

import "./events.css"
import "../global.css";

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
        <div class="circle-image-row">
          <CircleImageDescription source={ola} description="ola" />
          <CircleImageDescription source={ola} description="ola" />
          <CircleImageDescription source={ola} description="ola" />
          <CircleImageDescription source={ola} description="ola" />
          <CircleImageDescription source={ola} description="ola" />
        </div>
        <p/>
        <div class="circle-image-row">
          <CircleImageDescription source={ola} description="ola" />
          <CircleImageDescription source={ola} description="ola" />
          <CircleImageDescription source={ola} description="ola" />
          <CircleImageDescription source={ola} description="ola" />
          <CircleImageDescription source={ola} description="ola" />
        </div>
        <div class="features-items-container">
             <div class="item">
               <FeatureItem/>
             </div>
             <div class="item">
              <FeatureItem/>
             </div>
             <div class="item">
              <FeatureItem/>
             </div>
          </div>
    </div>
  );
}

export default Events;
