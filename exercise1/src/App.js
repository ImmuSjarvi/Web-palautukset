import './App.css';
import Title from './components/Title';
import PaivanTimantit from './components/PaivanTimantit';
import MainPart from './components/MainPart';
import LuetuimmatContainer from './components/LuetuimmatContainer';
import {useState} from 'react';




function App() {


  return (
    <div className="App">
      
      <Title />
    <div className="timanttiBox">
      <PaivanTimantit />
    </div>  
    <div className="mainBox">
      <MainPart />
      <LuetuimmatContainer />
     
    </div>    
        
    </div>
  );
}

export default App;
