import React, { useState } from "react";

import Title, { SubTitle } from "../components/labels/title/titles";

import ola from "../assets/images/ola.jpg";

function Projects() {
  return (
    <div className="App-header page">
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "50%" }}>
          <Title alignment="center" name="#projects 🚧" />
          <div style={{ height: "100%", position: "relative" }}>
              <SubTitle name="ola"/>
              <img style={{ width: "30%", marginTop:"5%", marginRight: "5%"}} src={ola}></img>
              <img style={{ width: "30%", marginRight: "5%"}} src={ola}></img>
              <img style={{ width: "30%"}} src={ola}></img>
              <p></p>

              <img style={{ width: "30%", marginRight: "5%"}} src={ola}></img>
              <img style={{ width: "30%"}} src={ola}></img>

              {/* <SubTitle name="ola"/>
              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img> */}
          </div>
        </div>
        <div style={{ width: "50px"}}>

        </div>
        <div style={{ width: "50%", left: "50%" }}>
          <Title alignment="center" name="#courses 🏫" />
          <div style={{ height: "100%", position: "relative" }}>
              <SubTitle name="ola"/>
              <img style={{ width: "30%", marginTop:"5%", marginRight: "5%"}} src={ola}></img>
              <img style={{ width: "30%"}} src={ola}></img>
              <p></p>

              {/* <SubTitle name="ola"/>
              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>

              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img>3
              
              <img style={{ width: "50%"}} src={ola}></img>
              <img style={{ width: "50%"}} src={ola}></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
