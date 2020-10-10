import React from 'react';
import './App.css';

//Pages
import Homepage from './pages/homepage';
import AboutMe from './pages/about_me/about_me';
import Tools from './pages/tools/tools';
import Portfolio from './pages/portfolio/portfolio';
import Events from './pages/events/events';
import Hobbies from './pages/hobbies/hobbies';
import InspiringPeople from './pages/inspiring_people/inspiring_people';
import Follow from './pages/follow/follow';

//Components
import Menu from './components/menu/menu.js';

function App() {
  return (
    <div className="App">
      <Menu/>

      <Homepage/>
      <AboutMe/>
      <Tools/>
      <Portfolio/>
      <Events/>
      <Hobbies/>
      <InspiringPeople/>
      <Follow/>
    </div>
  );
}

export default App;
