import React from "react";
import { useTranslation } from "react-i18next";

import Title from "../../components/labels/title/titles";
//ImageSource
import SocialMedia from "../../components/social-media/social-media";

import followMe from "../../assets/images/followMe.jpg";
import phone from "../../assets/images/phone.svg";
import email from "../../assets/images/mail.svg";
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
        <img src={followMe} class="suggestion-image" />
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
        <div style={{ width: "600px", margin: "auto" }}>
          <div>
            <div>
              <img class="icons-image" src={home} />
              <div class="icons-text">
                <a href="http://maps.google.com/?q=Loule" target="_blank" class="button">
                  Loulé, Algarve, Portugal
                </a>
              </div>
            </div>
            <p></p>
            <div>
              <img class="icons-image" src={phone} />
              <div class="icons-text">
                <a href="tel:+351966036754" class="button">
                  966036754
                </a>
              </div>
            </div>
            <p></p>
            <div>
              <img class="icons-image" src={email} />
              <address class="icons-text">
                <a href="mailto:b.bras7@gmail.com" class="button">b.bras7@gmail.com</a>
              </address>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div style={{ position: "absolute", left: "50%" }}>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Follow;
