import React, { useState } from 'react';

import Title from '../components/labels/title/titles';
import Progress from '../components/cards/progress/progress';

//ImageSource
import ola from '../assets/images/ola.jpg'

function Tools() {
    return (
      <div className="App-header page">
        <Title name="#tools"/>
        <div style={{display: "flex", marginLeft: "50px"}}>
          <Progress source={ola} value="10%"/>
          <Progress source={ola} value="20%"/>
          <Progress source={ola} value="40%"/>
          <Progress source={ola} value="60%"/>
          <Progress source={ola} value="50%"/>
        </div>
        <Title name="#languages"/>
        <div style={{display: "flex", marginLeft: "50px"}}>
          <Progress source={ola} value="10%"/>
          <Progress source={ola} value="20%"/>
          <Progress source={ola} value="60%"/>
          <Progress source={ola} value="60%"/>
          <Progress source={ola} value="50%"/>
        </div>
        <Title name="#hello"/>
        <div style={{display: "flex", marginLeft: "50px"}}>
          <Progress source={ola} value="20%"/>
          <Progress source={ola} value="40%"/>
          <Progress source={ola} value="40%"/>
          <Progress source={ola} value="60%"/>
          <Progress source={ola} value="50%"/>
        </div>
      </div>
    );
  }

  export default Tools;