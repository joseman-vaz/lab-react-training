import React, { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

export const Dice = () => {
  const [diceImage, setDiceImage] = useState(emptyDice);

  const rollDice = () => {
    setDiceImage(emptyDice);
    setTimeout(() => {
      const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
      const randomIndex = Math.floor(Math.random() * 6);
      setDiceImage(diceImages[randomIndex]);
    }, 300);
  };

  return (
    <img
      src={diceImage}
      alt="Dice"
      onClick={rollDice}
      style={{ cursor: 'pointer', width: 200 }}
    />
  );
};
