import React from 'react';
import './App.css';

//Pages
import Homepage from './pages/homepage';
import AboutMe from './pages/about_me';
import Tools from './pages/tools';
import Projects from './pages/projects';

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
    </div>
  );
}

export default App;
