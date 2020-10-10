import React, { useState } from 'react';

import Title, { SubTitle } from '../../components/labels/title/titles';
import AdvImage from '../../components/cards/images/adv-image';
import LongText from '../../components/labels/long-text/long-text';
import FeatureItem from '../../components/cards/feature-item/feature-item';
//ImageSource
import ola from '../../assets/images/ola.jpg';

import './about_me.css';
import '../global.css';

function AboutMe() {
  return (
    <div className="App-header page">
        <Title name="#about_me 😎"/>
        <SubTitle name="know me more"/>
          <div class="about-me-container">
            <div style={{ alignContent:"center"}}>
              <LongText text="Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                            Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec
                            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec"/>
            <div class="small-images-container">
                <img src={ola} class="small-image"/>
                <img src={ola} class="small-image"/>
                <img src={ola} class="small-image"/>
            </div>

            </div>
            <img src={ola} class="suggestion-image"/>
          </div>
          <p></p>
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

            <div class="video-container">
                <img src={ola} class="video"/>
             </div>
      </div>
    );
  }

  export default AboutMe;