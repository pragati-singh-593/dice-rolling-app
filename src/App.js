import React, { useState } from 'react';
import Dice from './Dice';
import './App.css';

function App() {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  };

  return (
    <div className="App">
      <h1>Dice Rolling App</h1>
      <Dice number={diceNumber} />
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default App;
