import React from 'react';

import SocialMedia from '../components/social-media/social-media'

function Homepage() {
    return (
      <div className="App-header">
        <div>
          <p style={{color: "#000", fontSize: 20 + "px", margin: 0+ "px"}}>Hi there <span role="img ">👋👋</span></p>
          <p></p>
          <p style={{color: "#000", fontSize: 20 + "px", margin: 0+ "px"}}>Welcome to my page 😊</p>
          <p style={{color: "#000", fontSize: 50 + "px", margin: 0+ "px"}}>I'm Bruno Brás</p>
          <p style={{color: "#000", fontSize: 18 + "px", margin: 0+ "px"}}>"I have on me all the dreams of the world 🌍"</p>
          <p style={{color: "#000", fontSize: 10 + "px", margin: 0+ "px"}}>in TABACARIA</p>
          <p style={{color: "#000", fontSize: 10 + "px", margin: 0+ "px"}}>Alvaro de Campos</p>
          <p/>
        </div>
          <SocialMedia/>
      </div>
    );
  }

  export default Homepage;