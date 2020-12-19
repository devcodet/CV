import React, { useState } from "react";

import Title, { SubTitle } from "../../components/labels/title/titles";

import ola from "../../assets/images/ola.jpg";

import zoomarine from "../../assets/images/portfolio/zoomarine.jpg";
import airdesk from "../../assets/images/portfolio/airdesk.jpg";
import curve from "../../assets/images/portfolio/curve.jpg";
import loyalty from "../../assets/images/portfolio/loyalty.jpg";
import bolinhas from "../../assets/images/portfolio/bolinhas.jpg";
import sigre from "../../assets/images/portfolio/sigre.png";

import googlePlay from "../../assets/images/portfolio/googlePlay.png";
import appStore from "../../assets/images/portfolio/appStore.png";

import code from "../../assets/images/portfolio/code.png";
import bitcoin from "../../assets/images/portfolio/bitcoin.png";

import GetListFeatureItem from "../../components/cards/feature-item/feature-item";

import "./portfolio.css";
import "../global.css";

function GetPartipationBadge(values) {
  var row = [];
  for (const item of Object.entries(values)) {
    var badgeDivClass = "badge ";
    var text = "";

    switch (item[1]) {
      case 1:
        badgeDivClass += "api";
        text = "API";
        break;
      case 2:
        badgeDivClass += "frontend-api";
        text = "FRONTEND API";
        break;

      case 3:
        badgeDivClass += "db";
        text = "DATABASE";
        break;
      
      case 4:
        badgeDivClass += "app-mobile";
        text = "APP MOBILE";
        break;

      case 5:
        badgeDivClass += "support-app-mobile";
        text = "SUPPORT APP MOBILE";
        break;
    }

    row.push(<div class={badgeDivClass}>{text}</div>);
  }

  return <div>{row}</div>;
}

function GetGrid(values) {
  var grid = [];

  for (const [key, value] of Object.entries(values)) {
    var row = [];

    for (const item of Object.entries(value)) {
      var storeLinks = [];
      var mainURL = "";
      var badges = "";

      if (item[1].badges != null)
        badges = GetPartipationBadge(item[1].badges);

      if(!String.isNullOrEmpty(item[1].mainURL))
        mainURL = item[1].mainURL;

      if (!String.isNullOrEmpty(item[1].googlePlayURL)) {
        storeLinks.push(
          <a href={item[1].googlePlayURL} target="_blank" class="google-play">
            <img class="google-play" src={googlePlay} />
          </a>
        );
      }

      if (!String.isNullOrEmpty(item[1].appStoreURL)) {
        storeLinks.push(
          <a href={item[1].appStoreURL} target="_blank">
            <img class="app-store" src={appStore} />
          </a>
        );
      }

      row.push(
        <div class="item">
          <img class="image" src={item[1].src} />
          {badges}
          <div class="title">{item[1].title}</div>
          <p></p>
          <p></p>
          <div class="description">{item[1].description}</div>
          <p></p>
          <div class="main-url">
            <a href={"https://" + mainURL} target="_blank">
              {mainURL}
            </a>
            </div>
          <p></p>
          <div class="store-links">{storeLinks}</div>
        </div>
      );
    }

    grid.push(<div class="portfolio-item-container">{row}</div>);
  }
  return <div>{grid}</div>;
}

function Portfolio() {
  var titles = [
    {
      name: "#projects 🚧",
      description: "Find out the projects that I participated",
    },
    {
      name: "#courses 🏫",
      description: "Find out the courses that I enrolled",
    },
  ];

  var projects = [
    [
      {
        title: "Zoomarine",
        description: "With this application you can get to know the schedules of presentations and attractions for a specific day, browse interactive maps and much more",
        src: zoomarine,
        mainURL: "zoomarine.pt",
        googlePlayURL:
          "https://play.google.com/store/apps/details?id=com.zoomarine.discover",
        appStoreURL:
          "https://apps.apple.com/pt/app/zoomarine-algarve/id1483954662",
          badges: [2,3,5],
      },
      {
        title: "Airdesk",
        description: "Airdesk is a collaboration and management platform with a 360º view, which optimizes productivity and cost costs.",
        src: airdesk,
        mainURL: "airdesk.ai",
        googlePlayURL:
          "https://play.google.com/store/apps/details?id=com.algardata.airdesk",
        appStoreURL: "https://apps.apple.com/pt/app/airdesk/id1519983408",
        badges: [5],
      },
    ],
    [
      {
        title: "Curve",
        description: "Curve is the new way to stroll around the city! Improve the quality of your journey with real-time alerts on hazardous areas, closed business, long queues, and more. Join this community and contribute information as you walk to your destination. Curve will help you get the perfect experience by adapting to your needs, creating the best route based on the alerts shared by the Curve community!",
        src: curve,
        mainURL: "curve.pt",
        badges: [1,3,5],
      },
      {
        title: "SIGRE",
        description: "Improve water resources management, responding to the need to update water infrastructure and cut costs.",
        src: sigre,
        mainURL: "algardata.com/civi/",
        badges: [4,5],
      },
    ],
    [
      {
        title: "Bolinhas",
        description: "Bolinhas is an app that allows you to sell/buy doughnuts and other products in real time using georeferencing",
        src: bolinhas,
        mainURL: "www.unykvis.com/en/projects/bolinhas",
        badges: [5],
      },
      {
        title: "Loyalty",
        description: "Application to read customer cards, and redeem vouchers.",
        src: loyalty,
        mainURL: "",
        googlePlayURL:
          "https://play.google.com/store/apps/details?id=com.unykvis.loyalty",
          badges: [4],
      },
    ],
  ];

  var courses = [
    [
      { title: "Management Informatics 12º", description: "The management computer technician is the qualified professional who has competencies in the scope of the management of organizations, namely in the construction of business / project management models, creating matrices using computer applications for micro, small and medium companies, with a view to the effectiveness of results.", src: code },
      { title: "Bitcoin Course", description: "The bitcoin course allow me to understand the world of bitcoin, how it works and technology of blockchain", src: bitcoin },
    ],
  ];

  var list = [
    { title: "project1", description: "project1", src: ola },
    { title: "project2", description: "project2", src: ola },
    { title: "project2", description: "project2", src: ola },
  ];

  var projectGrid = GetGrid(projects);

  var courseGrid = GetGrid(courses);

  var items = GetListFeatureItem(list);

  return (
    <div className="App-header page">
      <div class="portfolio-container">
        <div style={{ width: "50%" }}>
          <Title
            alignment="center"
            name={titles[0].name}
            description={titles[0].description}
          />
          {projectGrid}
        </div>
        <div style={{ width: "50%", left: "50%" }}>
          <Title
            alignment="center"
            name={titles[1].name}
            description={titles[1].description}
          />
          {courseGrid}
        </div>
      </div>
      {/* <div style={{margin: "auto"}}>
        { items }
      </div> */}
    </div>
  );
}

export default Portfolio;
