import React from 'react';
import logo from './assets/flow-logo-white-500px.png';
import './App.scss';

import YouTube from './assets/youtube.webp';
import Instagram from './assets/insta.webp';

function App() {
  return (
    <div className="App">
      <div>
        <img className="logo" src={logo} alt="flow club logo" />
        <h1>FLOW CLUB</h1>
        <p>BECOME THE FLOW</p>
        <a target="_blank" rel="noopener noreferrer" href="#">Join Now</a>
        <div className="social-media">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/becometheflow_thrive/">
            <img src={Instagram} alt="instagram" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCzWtfS7CkGIZHPJwACoMvmg">
            <img target="_blank" src={YouTube} alt="youtube" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
