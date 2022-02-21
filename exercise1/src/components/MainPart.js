import React from 'react';
import sosiaaliminis from '../sosiaaliminis.jpg'
import valtteri from '../valtteri.jpg'

export default function MainPart() {
  return <div className="mainView">

          <h1>Koronavirus</h1>
          <img className="Korona-kuva"src={sosiaaliminis} />
          <ul>
          <li>HS seuraa</li>
          </ul>
          <h2><span className="spanBlue">Päivittyvä seuranta |</span> STM: Parasetamolilla tai deksametasonia sisältävien 
            lääkkeiden myyntiä rajoitetaan</h2>
          <h1>Valtteri-lumimyrsky</h1>
          <img className="Valtteri-kuva"src={valtteri} />
          <h2><span className="spanBlue">Sää |</span> "Nyt se on alkanut" -Lunta on alkanut tulla pääkaupunkiseudulla, 
          voimistuu myräkäksi iltaan mennessä</h2>
          <h2><span className="spanBlue">Koronapassi |</span> Elinkeinoelämän järjestöt erimielisiä koronapassista
          - "Voi olla iha hyvä ottaa pois käytöstä kansallisena eheytymistoimenpiteenä</h2>
            
          

  </div>;
}
