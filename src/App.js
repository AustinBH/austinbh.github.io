import React, {useState} from 'react';
import './App.css';
import InfoMenu from './components/InfoMenu';
import Bio from './components/Bio';
import Signature from './components/Signature';

const classes = ["App-header", "App-header two"]
const signatureClasses = ["copyright light", "copyright dark"]

const App = props => {

  const [dark, setDark] = useState(true)
  const [className, setClassName] = useState(classes[1])
  const [signatureClass, setSignatureClass] = useState(signatureClasses[1])

  const swapMode = () => {
    setDark(!dark)
    if (dark) {
      setClassName(classes[0])
      setSignatureClass(signatureClasses[0])
    } else {
      setClassName(classes[1])
      setSignatureClass(signatureClasses[1])
    }
  }

  return (
      <div className={className}>
        <div/>
        <Bio/>
        <InfoMenu setDark={swapMode} dark={dark}/>
        <Signature class={signatureClass} />
      </div>
  );
}

export default App;
