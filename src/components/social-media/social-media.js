import React from 'react';

import './social-media.css'
import { useTranslation } from "react-i18next";
import linkedin from '../../assets/images/social/linkedin.svg'
import github from '../../assets/images/social/github.svg'
import stackoverflow from '../../assets/images/social/stack-overflow.svg'
import facebook from '../../assets/images/social/facebook.svg'
import instagram from '../../assets/images/social/instagram.svg'
import twitter from '../../assets/images/social/twitter.svg'
import email from "../../assets/images/social/mail.svg";
import phone from "../../assets/images/social/phone.svg";
import cvEN from "../../assets/CV-EN.pdf";

function SocialMedia() {

    var linkedin_link = "https://www.linkedin.com/in/bruno-br%C3%A1s-7b6b121a3/";
    var mail_link = "mailto:b.bras7@gmail.com";
    var phone_link = "tel:+35196603675";
    var github_link = "https://github.com/devcodet";
    var stackoverflow_link = "https://stackoverflow.com/users/8673077/dev-bbras";
    var facebook_link = "https://www.facebook.com/bbras7/";
    var instagram_link = "https://www.instagram.com/bbras7/";
    var twitter_link = "https://twitter.com/BrunoBrs9";

    return (
      <div style={{ padding: "50px" }}>
        <div style={{ color: "#000", fontSize: "18px", margin:"0px"}}>
          <p>Let's Grab a Coffee ☕</p>
        </div>
        <div class="social-menu">
          <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
            <div class="social-item linkedin">
              <img class="icon" src={linkedin} alt="linkedin-icon"/>
            </div>
          </a>
          <a href={mail_link} target="_blank" rel="noopener noreferrer">
            <div class="social-item mail">
              <img class="icon" src={email} alt="mail-icon"/>
            </div>
          </a>
          <a href={phone_link} target="_blank" rel="noopener noreferrer">
            <div class="social-item phone">
              <img class="icon" src={phone} alt="phome-icon"/>
            </div>
          </a>
          <a href={github_link} target="_blank" rel="noopener noreferrer">
            <div class="social-item github" >
              <img class="icon" src={github} alt="github-icon"/>
            </div>
          </a>
          <a href={stackoverflow_link} target="_blank" rel="noopener noreferrer">
            <div class="social-item stackoverflow" >
              <img class="icon" src={stackoverflow} alt="github-icon"/>
            </div>
          </a>
          <a href={facebook_link} target="_blank" rel="noopener noreferrer">
            <div class="social-item facebook">
            <img class="icon" src={facebook} alt="facebook-icon"/>
            </div>
          </a>
          <a href={instagram_link} target="_blank" rel="noopener noreferrer">
            <div class="social-item instagram">
              <img class="icon" src={instagram} alt="instragram-icon"/>
            </div>
          </a>
          <a href={twitter_link} target="_blank" rel="noopener noreferrer">
            <div class="social-item twitter">
              <img class="icon" src={twitter} alt="twitter-icon"/>
            </div>
          </a>
        </div>
        <div>
        <p></p>
        <a href={cvEN} download rel="noopener noreferrer" class="button">
          📥 #download_cv
        </a>
        </div>
      </div>
    );
}

export default SocialMedia;