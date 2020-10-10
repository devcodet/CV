import React, { useState } from "react";

import Title, { SubTitle } from "../../components/labels/title/titles";

import ola from "../../assets/images/ola.jpg";

import FeatureItem from '../../components/cards/feature-item/feature-item';

import './portfolio.css';
import '../global.css';

function Portfolio() {
  return (
    <div className="App-header page">
      <div class="portfolio-container">
        <div style={{ width: "50%" }}>
          <Title alignment="center" name="#projects 🚧" />
          <div class="portfolio-item-container">
              <SubTitle name="ola"/>
              <img class="item" src={ola}></img>
              <img class="item" src={ola}></img>
              <p/>
              <img class="item" src={ola}></img>

              {/* <SubTitle name="ola"/>
              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img> */}
          </div>
        </div>
        <div style={{ width: "50%", left: "50%" }}>
          <Title alignment="center" name="#courses 🏫" />
          <div class="portfolio-item-container">
              <SubTitle name="ola"/>
              <img class="item" src={ola}></img>
              <img class="item" src={ola}></img>
              <p></p>

              {/* <SubTitle name="ola"/>
              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>3
              
              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img> */}
          </div>
        </div>
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

export default Portfolio;
