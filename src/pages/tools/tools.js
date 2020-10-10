import React, { useState } from 'react';

import Title from '../../components/labels/title/titles';
import Progress from '../../components/cards/progress/progress';
import SkillItem from '../../components/list-items/skill-item';

import './tools.css';
import '../global.css';

//ImageSource
import ola from '../../assets/images/ola.jpg'

function Tools() {
    return (
      <div className="App-header page">
          <p></p>
          <Title name="#tools 🔧"/>
          <div class="tools-container">
            <img src={ola} class="suggestion-image"/>
            <div style={{display: "inline"}}>
            <div class="progress-container">
                <Progress value="10%" source={ola}/>
                <Progress value="10%" source={ola}/>
                <Progress value="10%"/>
              </div>
              <div class="progress-container">
                <Progress value="20%"/>
                <Progress value="10%"/>
                <Progress value="10%"/>
              </div>
              <div class="progress-container">
                <Progress value="10%"/>
                <Progress value="20%"/>
                <Progress value="10%"/>
              </div>
              <div class="progress-container">
                <Progress value="10%"/>
                <Progress value="20%"/>
                <Progress value="10%"/>
              </div>
            </div>
            <div class="skills-container">
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
            </div>
          </div>
          <p></p>
          <Title name="#languages 👨‍💻"/>
          <div class="tools-container">
          <img src={ola} class="suggestion-image"/>
          <div style={{display: "inline"}}>
            <div class="progress-container">
              <Progress value="10%"/>
              <Progress value="20%"/>
              <Progress value="10%"/>
            </div>
            <div class="progress-container">
              <Progress value="20%"/>
              <Progress value="10%"/>
              <Progress value="10%"/>
            </div>
            <div class="progress-container">
              <Progress value="10%"/>
              <Progress value="20%"/>
              <Progress value="10%"/>
            </div>
            <div class="progress-container">
                <Progress value="10%"/>
                <Progress value="20%"/>
                <Progress value="10%"/>
            </div>
          </div>
            <div class="skills-container">
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
            </div>
            </div>
          <Title name="#skills 🤹"/>
          <div class="tools-container">
            <img src={ola} class="suggestion-image"/>
            <div style={{margin: "0 0 0 50px", display: "flex"}}>
              <div class="progress-container">
                <div>
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
                </div>
                <div class="skills-container">
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/>
                  <SkillItem source={ola}/> 
                </div>
              </div>
            </div>
          </div>
        <p></p>
      </div>
    );
  }

  export default Tools;