import React, { useState } from 'react';

import Title from '../components/labels/title/titles';
function Projects() {
    return (
      <div className="App-header page">
          <div style={{display: "flex"}}>
            <Title name="#projects"/>
            <Title name="#courses"/>
          </div>
      </div>
    );
  }

  export default Projects;
  