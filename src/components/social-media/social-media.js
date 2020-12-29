import React from 'react';

import './social-media.css'

import linkedin from '../../assets/images/social/linkedin.svg'
import github from '../../assets/images/social/github.svg'
import facebook from '../../assets/images/social/facebook.svg'
import instagram from '../../assets/images/social/instagram.svg'
import twitter from '../../assets/images/social/twitter.svg'

function SocialMedia() {

    var linkedin_link = "https://www.linkedin.com/in/bruno-br%C3%A1s-7b6b121a3/";
    var github_link = "https://github.com/devcodet";
    var facebook_link = "https://www.facebook.com/bbras7/";
    var instagram_link = "https://www.instagram.com/bbras7/";
    var twitter_link = "https://twitter.com/BrunoBrs9";

    return (
    <div class="social-menu">
      <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
        <div class="social-item linkedin">
          <img class="icon" src={linkedin} alt="linkedin-icon"/>
        </div>
      </a>
      <a href={github_link} target="_blank" rel="noopener noreferrer">
        <div class="social-item github" >
          <img class="icon" src={github} alt="github-icon"/>
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
    );
}

export default SocialMedia;