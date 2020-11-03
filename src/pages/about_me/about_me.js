import React, { useState } from "react";

import Title, { SubTitle } from "../../components/labels/title/titles";
import AdvImage from "../../components/cards/images/adv-image";
import LongText from "../../components/labels/long-text/long-text";
import GetListFeatureItem from "../../components/cards/feature-item/feature-item";
import CircleImageDescription from "../../components/cards/images/circle-image-description";

//ImageSource
import ola from "../../assets/images/ola.jpg";

import "./about_me.css";
import "../global.css";

function AboutMe() {
  var title = { name: "#about_me 😎", description: "Find out a little more about me" };

  var description =
    "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec";

  var featuresItems = GetListFeatureItem([
    { title: "project1", description: "project1", src: ola },
    { title: "project2", description: "project2", src: ola },
    { title: "project2", description: "project2", src: ola },
  ]);

  var profileImage = <CircleImageDescription source={ola} title="djdjfd" description="fsdfdsfsdkf"/>;

  var images =  <div class="small-images-container">
                  <CircleImageDescription source={ola} title="djdjfd" description="fsdfdsfsdkf"/>;
                  <CircleImageDescription source={ola} title="djdjfd" description="fsdfdsfsdkf"/>;
                  <CircleImageDescription source={ola} title="djdjfd" description="fsdfdsfsdkf"/>;
                </div>

  var suggestionImage = <img src={ola} class="suggestion-image" />;

  var video = (
    <div class="video-container">
      <img src={ola} class="video" />
    </div>
  );

  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description} />
      <div style={{ margin: "auto" }}>
        {profileImage}
        <p/>
      </div>
      <div class="about-me-container">
        <div style={{ alignContent: "center" }}>
          <LongText text={description} />
          {images}
        </div>
        {suggestionImage}
      </div>
      <p></p>
      <div style={{ margin: "auto" }}>
        {featuresItems}
        {video}
      </div>
    </div>
  );
}

export default AboutMe;
