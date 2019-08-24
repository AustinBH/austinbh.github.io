import React from 'react';
import './App.css';
import InfoMenu from './components/InfoMenu';
import Bio from './components/Bio';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App-header">
      <Bio/>
      <InfoMenu />
      <SocialMedia/>
    </div>
  );
}

export default App;
