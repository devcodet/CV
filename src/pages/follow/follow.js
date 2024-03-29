import React from "react";
import { useTranslation } from "react-i18next";

import Title from "../../components/labels/title/titles";
//ImageSource
import SocialMedia from "../../components/social-media/social-media";

import followMe from "../../assets/images/followMe.jpg";
import home from "../../assets/images/home.svg";

import "./follow.css";
import "../global.css";

function Follow() {
  const { t } = useTranslation();

  var title = {
    name: t("ChatWithMeTitle"),
    description: t("ChatWithMeSubTitle"),
  };

  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description} />

      <div class="follow-container">
        <div class="suggestion-image-container">
          <img src={followMe} alt="suggestion" class="suggestion-image" />
        </div>
        {/* <div class="form-content">
          <form id="contact-form">
            <div className="form-group" class="control-form">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group" class="control-form">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group" class="control-form">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <p></p>
            <div className="form-group" class="control-form">
              <textarea className="form-control" placeholder="Message" />
            </div>
            <div class="control-form">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div> */}
        <div class="contacts-container">
          <div>
            <div>
              <img class="icons-image" alt="home-icon" src={home} />
              <div class="icons-text">
                <a href="http://maps.google.com/?q=Loule" rel="noopener noreferrer" target="_blank" class="button">
                  Loulé, Algarve, Portugal
                </a>
              </div>
            </div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="social-container">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Follow;
