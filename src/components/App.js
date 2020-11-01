import React, { useState, useEffect } from 'react';
import axios from 'axios';

//components and helpers
import Welcome from './Welcome.js';
import Trivia from './Trivia.js';
import ErrorPg from './ErrorPg.js';
import shuffle, { addKey } from '../utils';

function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [triviaRound, setTriviaRound] = useState([]);
  const [error, setError] = useState(null);

  //grabs all Questions from the server
  useEffect(() => {
    async function fetchTrivia() {
      try {
        const response = await axios.get('/api');
        const { data } = await response;
        shuffle(data);
        addKey(data);
        setAllQuestions(data);
        console.log('trivia', allQuestions);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
    fetchTrivia();
  }, []);

  //change the state when the player decides to play the game
  const playGame = () => {
    let triviaRoundQuestions = allQuestions.slice(0, 10);
    setTriviaRound(triviaRoundQuestions);
    setIsPlaying(true);
  };

  return (
    <>
      {!isPlaying && !error ? (
        <Welcome playGame={playGame} />
      ) : (
        <Trivia triviaQs={triviaRound} playGame={playGame} />
      )}
      {error && <ErrorPg />}
    </>
  );
}

export default App;
