import React from 'react';
import logo from './logo.svg';
import './App.css';

//Pages
import Homepage from './pages/homepage';
import AboutMe from './pages/about_me';
import Tools from './pages/tools';

//Components
import Menu from './components/menu/menu.js';

function App() {
  return (
    <div className="App">
      <Menu/>

      <Homepage/>
      <AboutMe/>
      <Tools/>
      
    </div>
  );
}

export default App;
