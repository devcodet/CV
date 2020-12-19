import React from "react";
import Title from "../../components/labels/title/titles";

import ola from "../../assets/images/ola.jpg";

import toastMasters from "../../assets/images/expirences/Toasts.jpg";
import youthGroup from "../../assets/images/expirences/YouthGroup.jpg";
import geekSessions from "../../assets/images/expirences/GeekSessions.jpg";

import openSourceLisbon from "../../assets/images/expirences/codingPortugal.png";
import faroDevDay2019 from "../../assets/images/expirences/faroDevDay2019.jpg";
import freeCodeCampMeetings from "../../assets/images/expirences/freeCodeCampMeetings.jpg";
import gdgLisbonDevFest2019 from "../../assets/images/expirences/gdgLisbonDevFest2019.png";
import gdgPortugalDevFest2020 from "../../assets/images/expirences/gdgPortugalDevFest2020.png";
import ubuconEurope2019 from "../../assets/images/expirences/ubuconEurope2019.jpg";

import jdj2016 from "../../assets/images/expirences/jdj2016.jpg"
import jdj2017 from "../../assets/images/expirences/jdj2017.jpg"
import jdj2018 from "../../assets/images/expirences/jdj2018.jpg"
import jdj2019 from "../../assets/images/expirences/jdj2019.jpg"

import acanac from "../../assets/images/expirences/acanac.jpg"
import restart from "../../assets/images/expirences/restart.png"

import { getGridCircleImages } from "../../components/cards/images/circle-image-description";
import GetListFeatureItem from "../../components/cards/feature-item/feature-item";

import "./experiences.css";
import "../global.css";

function Expirences() {
  var title = { "name":"#expirences 🌄", "description":"Events and Groups" }

  var imagesGrid = getGridCircleImages([
    [
      { src: openSourceLisbon, title: "Coding Portugal 2019", description: "" },
      { src: faroDevDay2019, title: "Faro Dev Day 2019", description: "" },
      { src: freeCodeCampMeetings, title: "FreeCodeCamp Meetings", description: "" },
      { src: gdgLisbonDevFest2019, title: "GDG Lisbon Dev Fest 2019", description: "" },
      { src: gdgPortugalDevFest2020, title: "GDG Portugal Dev Fest 2020", description: "" },
    ],
    [
      { src: ubuconEurope2019, title: "Ubucon Europe 2019", description: "" },
      { src: jdj2016, title: "Jornada Juventude 2016", description: "" },
      { src: jdj2017, title: "Jornada Juventude 2017", description: "" },
      { src: jdj2018, title: "Jornada Juventude 2018", description: "" },
      { src: jdj2019, title: "Jornada Juventude 2019", description: "" },
    ],
    [
      { src: acanac, title: "CNE Acanac 2017", description: "" },
      { src: restart, title: "Desafio Restart by Jorge Coutinho", description: "" },
    ]
  ]);
 
  var featuresItems = GetListFeatureItem(
    [
      { title: "Toastmasters", description: "Toastmasters is a non-profit organization that teaches public speaking and leadership development.", src: toastMasters },
      { title: "Youth Group", description: "We carry out reflection and social intervention activities. Helping the Other and acting in Community!", src: youthGroup },
      { title: "Geek Sessions", description: "Geek Sessions is a networking event dedicated to sharing knowledge and experience of the technological community." , src: geekSessions },
    ]
  );

  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description} />
      <div style={{ margin: "auto" }}>
        {imagesGrid}
        {featuresItems}
      </div>
    </div>
  );
}

export default Expirences;
