import React from 'react';
import './App.css';

//Pages
import Homepage from './pages/homepage';
import AboutMe from './pages/about_me/about_me';
import Tools from './pages/tools/tools';
import Portfolio from './pages/portfolio/portfolio';
import Expirences from './pages/experiences/experiences';
import Hobbies from './pages/hobbies/hobbies';
import InspiringPeople from './pages/inspiring_people/inspiring_people';
import Follow from './pages/follow/follow';

//Components
import Menu from './components/menu/menu.js';

String.isNullOrEmpty = function(value) {
  return !(typeof value === "string" && value.length > 0);
}

function App() {
  return (
    <div className="App">
      <Menu/>

      <Homepage/>
      <AboutMe/>
      <Tools/>
      <Portfolio/>
      <Expirences/>
      <Hobbies/>
      <InspiringPeople/>
      <Follow/>
    </div>
  );
}

export default App;
