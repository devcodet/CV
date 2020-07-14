import React, { useState } from 'react';

import Title from '../components/labels/title/titles';
import AdvImage from '../components/cards/images/adv-image';
import LongText from '../components/labels/long-text/long-text'

//ImageSource
import ola from '../assets/images/ola.jpg'

function AboutMe() {
    return (
      <div className="App-header page">
        <Title name="#about_me"/>
        <div style={{display: "flex"}}>
          <div style={{marginLeft: "50px",}}>
            <img src={ola} style={{height: "400px", width: "400px", marginBottom: "30px"}}/>
            <p></p>
            <img src={ola} style={{height: "400px", width: "400px", marginBottom: "30px"}}/>
            <p></p>
            <img src={ola} style={{height: "400px", width: "400px", marginBottom: "30px"}}/>
          </div>
          <LongText text="Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                        Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec 
                        Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                        Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec 
                        orem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                        Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec 
                        Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                        Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec"/>

        </div>
      </div>
    );
  }

  export default AboutMe;