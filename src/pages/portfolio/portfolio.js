import React from "react";

import Title from "../../components/labels/title/titles";

//import ola from "../../assets/images/ola.jpg";
import { useTranslation } from "react-i18next";

import zoomarine from "../../assets/images/portfolio/zoomarine.jpg";
import airdesk from "../../assets/images/portfolio/airdesk.jpg";
import curve from "../../assets/images/portfolio/curve.jpg";
import loyalty from "../../assets/images/portfolio/loyalty.jpg";
import bolinhas from "../../assets/images/portfolio/bolinhas.jpg";
import sigre from "../../assets/images/portfolio/sigre.png";

import googlePlay from "../../assets/images/portfolio/googlePlay.png";
import appStore from "../../assets/images/portfolio/appStore.png";

import diploma from "../../assets/images/portfolio/diploma.jpg";
import bitcoin from "../../assets/images/portfolio/bitcoin.png";

//import GetListFeatureItem from "../../components/cards/feature-item/feature-item";

import "./portfolio.css";
import "../global.css";

function getPartipationBadge(values) {
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

      default:
        break;
    }

    row.push(<div class={badgeDivClass}>{text}</div>);
  }

  return <div>{row}</div>;
}

function getGrid(values) {
  var grid = [];

  for (const [key, value] of Object.entries(values)) {
    var row = [];

    for (const item of Object.entries(value)) {
      var storeLinks = [];
      var mainURL = "";
      var mainURLDiv = [];
      var badges = "";

      if (item[1].badges != null) badges = getPartipationBadge(item[1].badges);

      if (!String.isNullOrEmpty(item[1].mainURL)) {
        mainURL = item[1].mainURL;
        mainURLDiv.push(
          <a
            href={"https://" + mainURL}
            target="_blank"
            rel="noopener noreferrer"
            // class="main-url button"
          >
            {mainURL}
          </a>
        );
      }

      if (!String.isNullOrEmpty(item[1].googlePlayURL)) {
        storeLinks.push(
          <a
            href={item[1].googlePlayURL}
            target="_blank"
            class="google-play"
            rel="noopener noreferrer"
          >
            <img class="google-play" src={googlePlay} alt="google play icon" />
          </a>
        );
      }

      if (!String.isNullOrEmpty(item[1].appStoreURL)) {
        storeLinks.push(
          <a
            href={item[1].appStoreURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="app-store" src={appStore} alt="app store icon" />
          </a>
        );
      }

      row.push(
        <div class="item">
          <img class="image" src={item[1].src} alt="portfolio item icon" />
          {badges}
          <div class="title">{item[1].title}</div>
          <p></p>
          <p></p>
          <div class="description">{item[1].description}</div>
          <p></p>
          {mainURLDiv}
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
  const { t } = useTranslation();

  var titles = [
    {
      name: t("ProjectsTitle"),
      description: t("ProjectsSubTitle"),
    },
    {
      name: t("CoursesTitle"),
      description: t("CoursesSubTitle"),
    },
  ];

  var projects = [
    [
      {
        title: "Zoomarine",
        description: t("ZoomarineDescription"),
        src: zoomarine,
        mainURL: "zoomarine.pt",
        googlePlayURL:
          "https://play.google.com/store/apps/details?id=com.zoomarine.discover",
        appStoreURL:
          "https://apps.apple.com/pt/app/zoomarine-algarve/id1483954662",
        badges: [2, 3, 5],
      },
      {
        title: "Airdesk",
        description: t("AirdeskDescription"),
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
        description: t("CurveDescription"),
        src: curve,
        mainURL: "curve.pt",
        badges: [1, 3, 5],
      },
      {
        title: "SIGRE",
        description: t("SigreDescription"),
        src: sigre,
        mainURL: "algardata.com/civi/",
        badges: [4, 5],
      },
    ],
    [
      {
        title: "Bolinhas",
        description: t("BolinhasDescription"),
        src: bolinhas,
        mainURL: t("BolinhasURL"),
        badges: [5],
      },
      {
        title: "Loyalty",
        description: t("LoyaltyDescription"),
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
      {
        title: t("ManagementInformaticsTitle"),
        description: t("ManagementInformaticsDescription"),
        src: diploma,
      },
      {
        title: t("BitcoinCourseTitle"),
        description: t("BitcoinCourseDescription"),
        src: bitcoin,
      },
    ],
  ];

  // var list = [
  //   { title: "project1", description: "project1", src: ola },
  //   { title: "project2", description: "project2", src: ola },
  //   { title: "project2", description: "project2", src: ola },
  // ];

  var projectGrid = getGrid(projects);

  var courseGrid = getGrid(courses);

  //var items = GetListFeatureItem(list);

  return (
    <div className="App-header page">
      <div class="portfolio-container">
        <div class="projects-container">
          <Title
            alignment="center"
            name={titles[0].name}
            description={titles[0].description}
          />
          {projectGrid}
        </div>
        <div class="courses-container">
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
