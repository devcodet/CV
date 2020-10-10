import React from 'react';

import SocialMedia from '../components/social-media/social-media'

function Homepage() {
    return (
      <div className="App-header">
        <p style={{color: "#000", fontSize: 20 + "px", margin: 0+ "px"}}>Hi there <span role="img ">👋👋</span></p>
        <p style={{color: "#000", fontSize: 50 + "px", margin: 0+ "px"}}>I'm Bruno Brás</p>
        <p style={{color: "#000", fontSize: 15 + "px", margin: 0+ "px"}}>Lorem ipsum dolor sit amet, consec</p>
        <p/>
        <SocialMedia/>
      </div>
    );
  }

  export default Homepage;