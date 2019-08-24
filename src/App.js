import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Bio from './components/Bio';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App-header">
      <Bio />
      <Projects />
      <SocialMedia />
    </div>
  );
}

export default App;
