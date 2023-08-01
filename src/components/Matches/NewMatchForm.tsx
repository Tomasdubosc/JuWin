import React, { useState } from 'react';
import classes from '../../styles/Matches/NewMatchForm.module.css';
import { Form } from 'react-router-dom';

const NewMatchForm = () => {
  const [game, setGame] = useState('');
  const [isGameValid,setGameIsValid] =useState(true);
  const [winner, setWinner] = useState('');
  const [isWinnerValid, setWinnerIsValid] = useState(true);
  const [looser, setLooser] = useState('');
  const [isLooserValid, setLooserIsValid] = useState(true);
  const checkGameIsValid = () =>
  {
    setGameIsValid(true)
  }
  const checkPlayerIsValid = () =>
  {
    setWinnerIsValid(true);
    setLooserIsValid(true);
  }
 

  return (
    <Form method='POST' className={classes.form}>
      <label>
        Game:
        <select  name="game" value={game} onChange={(e) => setGame(e.target.value)} onBlur={checkGameIsValid}>
          <option value="0">Andor</option>
          <option value="1">Futbol 5</option>
          <option value="2">Monopoly</option>
         
        </select>
      </label>
      {!isGameValid && <p className={classes.error}>Please select a valid game or create a new one!</p>}

      <label>
        Winner:
        <input
        name="winner"
          type="text"
          value={winner}
          onChange={(e) => setWinner(e.target.value)}
          onBlur={checkPlayerIsValid}
        />
      </label>

      {!isWinnerValid && <p className={classes.error}>Please select a player!</p>}

      <label>
        Looser:
        <input
        name="looser"
          type="text"
          value={looser}
          onChange={(e) => setLooser(e.target.value)}
          onBlur={checkPlayerIsValid}
        />
      </label>

      {!isLooserValid && <p className={classes.error}>Please select a player!</p>}
      <div className={classes.buttonContainer}>
        <button type="submit">Match!</button>
      </div>
    </Form>
  );
};

export default NewMatchForm;