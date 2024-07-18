import React from 'react';
import './Dice.css';

const Dice = ({ number }) => {
  return (
    <div className="dice">
      <span>{number}</span>
    </div>
  );
};

export default Dice;
