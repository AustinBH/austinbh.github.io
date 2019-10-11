import React, {useState} from 'react';
import './App.css';
import InfoMenu from './components/InfoMenu';
import Bio from './components/Bio';
import Signature from './components/Signature';

const classes = ["App-header", "App-header dark-main"]
const signatureClasses = ["copyright light", "copyright dark"]

const App = props => {

  // This is where we keep track of the dark mode
  const [dark, setDark] = useState(true)
  // Using useState to keep track of the appropriate class names
  const [className, setClassName] = useState(classes[1])
  const [signatureClass, setSignatureClass] = useState(signatureClasses[1])

  // When we swap the mode, we need to first update 'dark' and then update our class names
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
