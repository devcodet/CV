import React, { useState } from 'react';

import Title, { SubTitle } from '../components/labels/title/titles';
import AdvImage from '../components/cards/images/adv-image';
import LongText from '../components/labels/long-text/long-text'

//ImageSource
import ola from '../assets/images/ola.jpg'

function AboutMe() {
  return (
    <div className="App-header page">
        <Title name="#about_me 😎"/>
        <SubTitle name="know me more"/>
        <div style={{}}>
          <div style={{display: "flex", position:"relative"}}>
            <div style={{ alignContent:"center"}}>
              <LongText text="Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                            Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec
                            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec
                            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec"/>
            <div style={{position:"absolute", bottom:"0px"}}>
                <img src={ola} style={{height: "250px", width: "250px", marginRight: "30px"}}/>
                <img src={ola} style={{height: "250px", width: "250px", marginRight: "30px"}}/>
                <img src={ola} style={{height: "250px", width: "250px", marginRight: "30px"}}/>
            </div>

            </div>
            <img src={ola} style={{width: "700px", height: "850px"}}/>
          </div>
          <p></p>
           <div style={{position:"relative", display:"flex", marginTop:"175px", alignItems:"center", justifyContent:"center"}}>
             <div style={{marginRight: "5%"}}>
                <img src={ola} style={{height: "350px", width: "500px"}}/>
                <div style={{color:"black"}}>ola</div>
                <div style={{color:"black", fontSize:"15px"}}>ola, ola, ola Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec</div>
             </div>
             <div style={{marginRight: "5%"}}>
                <img src={ola} style={{height: "350px", width: "500px"}}/>
                <div style={{color:"black"}}>ola</div>
                <div style={{color:"black", fontSize:"15px"}}>ola, ola, ola Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec</div>
             </div>
             <div style={{marginRight: "5%"}}>
                <img src={ola} style={{height: "350px", width: "500px"}}/>
                <div style={{color:"black"}}>ola</div>
                <div style={{color:"black", fontSize:"15px"}}>ola, ola, ola Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consec</div>
             </div>
            </div>

            <div style={{marginRight: "5%", marginTop:"100px", alignItems:"center", justifyContent:"center"}}>
                <img src={ola} style={{height: "1000px", width: "1500px"}}/>
             </div>
        </div>
      </div>
    );
  }

  export default AboutMe;