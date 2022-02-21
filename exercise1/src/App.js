import './App.css';
import Title from './components/Title';
import PaivanTimantit from './components/PaivanTimantit';
import MainPart from './components/MainPart';
import LuetuimmatContainer from './components/LuetuimmatContainer';
import {useState} from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
/*import {faCaretDown} from */



function App() {

  //Yksin kertanen laskuri nappeilla:  
  //alla oleva rivi jää tähän
  //const [ counterValue, setCounterValue] = useState(0);

  //alla olevat rivit pitää olla returnin sisällä:
  //<div>Laskuri: {counterValue}</div>
  //<button onClick={ () => setCounterValue(counterValue + 1)}>Increase counter</button>
  //<button onClick={ () => setCounterValue(counterValue - 1)}>Decrease counter</button>
  //laskuri loppu

  //Haetaan palvelimelta ostoslistan sisältö
  /*const shoppingListItems = [
    'Maito',
    'Leipä',
    'Juustoa'
  ];*/

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
