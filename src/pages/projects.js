import React, { useState } from 'react';

import Title from '../components/labels/title/titles';
function Projects() {
    return (
      <div className="App-header page">
          <div style={{display: "flex", width: "100%"}}>
            <div style={{width: "50%"}}>
              <Title alignment="center" name="#projects"/>
              <div style={{width: "100%", height:"100%", backgroundColor:"blue", position: "relative"}}>
              </div>
            </div>
            <div style={{width: "50%", left: "50%"}}>
              <Title alignment="center" name="#courses"/>
              <div style={{width: "100%", height:"100%", backgroundColor:"red", position: "relative"}}>
              </div>
            </div>
          </div>
      </div>
    );
  }

  export default Projects;
  