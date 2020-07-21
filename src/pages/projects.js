import React, { useState } from "react";

import Title from "../components/labels/title/titles";
import SubTitle from "../components/labels/title/subtitle";

import ola from "../assets/images/ola.jpg";

function Projects() {
  return (
    <div className="App-header page">
      <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "20px"}}>
      </div>
        <div style={{ width: "50%" }}>
          <Title alignment="center" name="#projects" />
          <div style={{ height: "100%", position: "relative" }}>
              <SubTitle name="ola"/>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <SubTitle name="ola"/>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
          </div>
        </div>
        <div style={{ width: "50px"}}>

        </div>
        <div style={{ width: "50%", left: "50%" }}>
          <Title alignment="center" name="#courses" />
          <div style={{ height: "100%", position: "relative" }}>
              <SubTitle name="ola"/>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <SubTitle name="ola"/>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>

              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
              <img style={{ width: "50%", borderRadius: 0 }} src={ola}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
