import React from 'react';
import './App.css';

//Pages
import Homepage from './pages/homepage';
import AboutMe from './pages/about_me';
import Tools from './pages/tools';
import Projects from './pages/projects';
import Events from './pages/events';
import Hobbies from './pages/hobbies';
import InspiringPeople from './pages/inspiring_people';
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
      <Projects/>
      <Events/>
      <Hobbies/>
      <InspiringPeople/>
      <Follow/>
    </div>
  );
}

export default App;
