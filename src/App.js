import React from 'react';
import './App.css';
import Game from "./components/game/Game"
import Antelopes from "./images/Antelope.jpg"
import Cheetahs from "./images/Cheetahs.jpg"
import Lemurs from "./images/Lemurs.jpg"
import Ravens from "./images/Ravens.jpg"


function App() {
      
  const cheetahs = {
    name: 'Cheetahs', 
    logoSrc: Cheetahs
  }  
  

   const lemurs = {
    name: 'Belleville Lemurs',
    logoSrc: Lemurs
  }

  const antelope = {
    name: 'Ann Arbor Antelopes',
    logoSrc: Antelopes
  }

  const ravens = {
    name: 'Romulus Ravens',
    logoSrc: Ravens
    } 

  return (
    <div className="App">
      <Game
        venue="The Big House"
        homeTeam={cheetahs}
        visitingTeam={lemurs}
      />
      <Game
        venue="Belleville Lake Arena"
        homeTeam={antelope}
        visitingTeam={ravens}
      />
    </div>
  )
}

export default App
