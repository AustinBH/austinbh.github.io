import React from 'react';
import './App.css';
import InfoMenu from './components/InfoMenu';
import Bio from './components/Bio';
import Signature from './components/Signature';

const App = props => {
  return (
    <div className="App-header">
      <Bio/>
      <InfoMenu />
      <Signature />
    </div>
  );
}

export default App;
