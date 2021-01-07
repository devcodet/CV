import React from "react";

import Title from "../../components/labels/title/titles";
import LongText from "../../components/labels/long-text/long-text";
import getListFeatureItem from "../../components/cards/feature-item/feature-item";
import CircleImageDescription from "../../components/cards/images/circle-image-description";

import { useTranslation } from "react-i18next";

//ImageSource
//import ola from "../../assets/images/ola.jpg";
import profile_image from "../../assets/images/profile/profile_image.png";
import suggestion_image from "../../assets/images/profile/suggestion_image.jpg";

import mobile_dev from "../../assets/images/profile/mobile_dev.jpg";
import api_dev from "../../assets/images/profile/api_dev.jpg";
import desktop_dev from "../../assets/images/profile/desktop_dev.png";

import cv from "../../assets/CV.pdf";
import cvEN from "../../assets/CV-EN.pdf";

import "./about_me.css";
import "../global.css";

function AboutMe() {
  const { t, i18n } = useTranslation();

  var title = { name: t("AboutMeTitle"), description: t("AboutMeSubTitle") };

  var description1 = t("ImBrunoFullName");
  var description2 = t("YearsOld");
  var description3 = t("Experience");
  var description4 = t("Propose");
  var description5 = t("ManyAreas");
  var description6 = t("OpenMinded");
  var description7 = t("CommitedHelp");
  var description8 = t("Passion");
  var description9 = t("Networking");
  var description10 = t("ReadyNewThings");

  var featuresItems = getListFeatureItem([
    {
      title: t("MobileDevelopmentTitle"),
      description: t("MobileDevelopmentSubTitle"),
      src: mobile_dev,
    },
    {
      title: t("ServerDevelopmentTitle"),
      description: t("ServerDevelopmentSubTitle"),
      src: api_dev,
    },
    {
      title: t("DesktopDevelopmentTitle"),
      description: t("DesktopDevelopmentSubTitle"),
      src: desktop_dev,
    },
  ]);

  var profileImage = (
    <CircleImageDescription
      IsImageProfile="true"
      source={profile_image}
      title="Bruno Brás"
    />
  );

  var suggestionImage = <img src={suggestion_image} class="suggestion-image" alt="suggestion"/>;

  // var video = (
  //   <div class="video-container">
  //     <img src={ola} class="video" />
  //   </div>
  // );

  var cvLink = cvEN;

  if(i18n.language == "pt")
    cvLink = cv;

  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description} />
      <div style={{ margin: "auto" }}>{profileImage}</div>
      <p />
      <div class="about-me-container">
        <div class="long-text-container">
          <LongText text={description1} />
          <p />
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
      {featuresItems}
      {/* {video} */}
      <a href={cvLink} download rel="noopener noreferrer" class="button">
        #download_cv
      </a>
    </div>
  );
}

export default AboutMe;
