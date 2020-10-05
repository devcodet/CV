import React, { useState } from 'react';

import Title from '../components/labels/title/titles';
import Progress from '../components/cards/progress/progress';

//ImageSource
import ola from '../assets/images/ola.jpg'

function Tools() {
    return (
      <div className="App-header page">
          <p></p>
          <Title name="#tools 🔧"/>
          <div style={{display: "flex"}}>
            <img src={ola} style={{width:"500px", height:"500px"}}/>
            <div style={{display: "inline"}}>
              <div style={{display: "flex"}}>
                <Progress value="10%" source={ola}/>
                <Progress value="10%" source={ola}/>
                <Progress value="10%"/>
              </div>
              <div style={{display: "flex"}}>
                <Progress value="20%"/>
                <Progress value="10%"/>
                <Progress value="10%"/>
              </div>
              <div style={{display: "flex"}}>
                <Progress value="10%"/>
                <Progress value="20%"/>
                <Progress value="10%"/>
              </div>
            </div>
          </div>
          <p></p>
          <Title name="#languages 👨‍💻"/>
          <div style={{display: "flex"}}>
          <img src={ola} style={{width:"500px", height:"500px"}}/>
          <div style={{display: "inline"}}>
            <div style={{display: "flex"}}>
              <Progress value="10%"/>
              <Progress value="20%"/>
              <Progress value="10%"/>
            </div>
            <div style={{display: "flex"}}>
              <Progress value="20%"/>
              <Progress value="10%"/>
              <Progress value="10%"/>
            </div>
            <div style={{display: "flex"}}>
              <Progress value="10%"/>
              <Progress value="20%"/>
              <Progress value="10%"/>
            </div>
            </div>
            </div>
          {/* <Title name="#hello"/>
          <div style={{display: "flex"}}>
          <img src={ola} style={{width:"500px", height:"500px"}}/>
          <div style={{display: "inline"}}>
            <div style={{display: "flex"}}>
              <Progress value="10%"/>
              <Progress value="20%"/>
              <Progress value="10%"/>
            </div>
            <div style={{display: "flex"}}>
              <Progress value="20%"/>
              <Progress value="10%"/>
              <Progress value="10%"/>
            </div>
            <div style={{display: "flex"}}>
              <Progress value="10%"/>
              <Progress value="20%"/>
              <Progress value="10%"/>
            </div>
            </div>
        </div> */}
        <p></p>
      </div>
    );
  }

  export default Tools;