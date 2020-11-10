import React, { useState } from "react";

import Title, { SubTitle } from "../../components/labels/title/titles";
import AdvImage from "../../components/cards/images/adv-image";
import LongText from "../../components/labels/long-text/long-text";
import GetListFeatureItem from "../../components/cards/feature-item/feature-item";
import CircleImageDescription from "../../components/cards/images/circle-image-description";

//ImageSource
import ola from "../../assets/images/ola.jpg";
import profile_image from '../../assets/images/profile/profile_image.png'
import suggestion_image from '../../assets/images/profile/suggestion_image.jpg'

import mobile_dev from '../../assets/images/profile/mobile_dev.jpg'
import api_dev from '../../assets/images/profile/api_dev.jpg'
import desktop_dev from '../../assets/images/profile/desktop_dev.png'

import "./about_me.css";
import "../global.css";

function AboutMe() {
  var title = { name: "#about_me 😎", description: "Find out a little more about me" };

  var description1 = "I'm Bruno Duarte Felício Brás 😶";
  var description2 = "22 years old 🧑";
  var description3 = "Mid-level Programmer with 4 years of experience 💻⌨️";
  var description4 = "I'm looking not for a regular job, but a life porpose, a pathway and a future 🛣️🙏";
  var description5 = "I like many different themes and areas 👨‍🏫";
  var description6 = "Open-minded 🧠";
  var description7 = "Committed to help 💪😍";
  var description8 = "Passion ❤";
  var description9 = "Networking 🌐";
  var description10 = "Ready to Learn new things 📖"
  

  var featuresItems = GetListFeatureItem([
    { title: "Mobile Development", description: "iOS and Android apps", src: mobile_dev },
    { title: "Server Development", description: "APIs", src: api_dev },
    { title: "Desktop Development", description: "Apps for PC", src: desktop_dev },
  ]);

  var profileImage = <CircleImageDescription source={profile_image} title="Bruno Brás" description="That's me :)"/>;

  var images =  <div class="small-images-container">
                  <CircleImageDescription source={ola} title="djdjfd" description="fsdfdsfsdkf"/>;
                  <CircleImageDescription source={ola} title="djdjfd" description="fsdfdsfsdkf"/>;
                  <CircleImageDescription source={ola} title="djdjfd" description="fsdfdsfsdkf"/>;
                </div>

  var suggestionImage = <img src={suggestion_image} class="suggestion-image" />;

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
        <div class="long-text-container">
          <LongText text={description1} />
          <p/>
          <LongText text={description2} />
          <p></p>
          <LongText text={description3} />
          <p></p>
          <LongText text={description4} />
          <p></p>
          <LongText text={description5} />
          <p></p>
          <LongText text={description6} />
          <p></p>
          <LongText text={description7} />
          <p></p>
          <LongText text={description8} />
          <p></p>
          <LongText text={description9} />
          <p></p>
          <LongText text={description10} />
          <p></p>
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
