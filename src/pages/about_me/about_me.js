import React, { useState } from 'react';

import Title, { SubTitle } from '../../components/labels/title/titles';
import AdvImage from '../../components/cards/images/adv-image';
import LongText from '../../components/labels/long-text/long-text';
import FeatureItem from '../../components/cards/feature-item/feature-item';
//ImageSource
import ola from '../../assets/images/ola.jpg';

import './about_me.css';
import '../global.css';

function GetFeaturesItems()
{
  var features = { 
    1:[ola, "alegfggdfgx","harry"], 
    2:[ola, "liza","alex"], 
    3:[ola, "fred", "harry"]
  };

  var featuresItems = [];

  for (const [key, value] of Object.entries(features)) {
    featuresItems.push(
      <div class="item">
        <FeatureItem image={value[0]} title={value[1]} text={value[2]}/>
      </div>
    )
  }

  return <div class="features-items-container">{featuresItems}</div>
}

function GetSmallImages(){
  var imagesSources = { 
    1:[ola], 
    2:[ola], 
    3:[ola]
  };

  var images = [];

  for (const [key, value] of Object.entries(imagesSources)) {
    images.push(
        <img src={value[0]} class="small-image"/>
      )
  }

  return <div class="small-images-container">{images}</div>
}

function AboutMe() {

  var title = "#about_me 😎";
  var subTitle = "know me more";

  var description = "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec";

  var features = GetFeaturesItems();

  var images = GetSmallImages();

  var suggestionImage = <img src={ola} class="suggestion-image"/>;

  var video = <div class="video-container">
                <img src={ola} class="video"/>
              </div>

  return (
    <div className="App-header page">
        <Title name={title} description={subTitle}/>
          <div class="about-me-container">
            <div style={{ alignContent:"center"}}>
              <LongText text={description}/>
              {images}
            </div>
            {suggestionImage}
          </div>
          <p></p>
          {features}
          {video}
      </div>
    );
  }

  export default AboutMe;