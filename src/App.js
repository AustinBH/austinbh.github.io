import React, {useState} from 'react';
import './App.css';
import InfoMenu from './components/InfoMenu';
import Bio from './components/Bio';
import Signature from './components/Signature';

const App = props => {

  const [dark, setDark] = useState(false)

  return (
    dark ?
      <div className="App-header" style={{ backgroundColor: '#2F4858' }}>
        <Bio/>
        <InfoMenu setDark={setDark} dark={dark}/>
        <Signature />
      </div>
    :
      <div className="App-header" >
        <Bio />
        <InfoMenu setDark={setDark} dark={dark} />
        <Signature dark={dark}/>
      </div>
  );
}

export default App;
