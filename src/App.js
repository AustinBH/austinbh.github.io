import React from 'react';
import './App.css';
import InfoMenu from './components/InfoMenu';
import Bio from './components/Bio';

function App() {
  return (
    <div className="App-header">
      <Bio/>
      <InfoMenu />
    </div>
  );
}

export default App;
