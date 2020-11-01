import React, { useState, useEffect } from 'react';
import axios from 'axios';

//components and helpers
import Welcome from './Welcome.js';
import Trivia from './Trivia.js';
import ErrorPg from './ErrorPg.js';
import shuffle, { addKey } from '../utils';

function App() {
  const [questions, setQuestions] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [triviaRound, setTriviaRound] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchTrivia() {
    try {
      setIsLoading(true);
      const response = await axios.get('/api');
      const { data } = await response;
      shuffle(data);
      addKey(data);
      data.slice(0, 10);
      setQuestions(data);
      console.log(questions);
      setIsLoading(false);
      setIsPlaying(true);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  //grabs all Questions from the server
  // useEffect(() => {
  //   fetchTrivia();
  // }, []);

  //change the state when the player decides to play the game
  // const playGame = () => {
  //   let triviaRoundQuestions = allQuestions.slice(0, 10);
  //   setTriviaRound(triviaRoundQuestions);
  //   setIsPlaying(true);
  // };

  const resetGame = () => {
    setIsPlaying(false);
  };
  console.log(questions);

  return (
    <>
      {isLoading && <div>loading</div>}
      {!isPlaying && !error ? (
        <Welcome playGame={fetchTrivia} />
      ) : (
        <Trivia triviaQs={questions} resetGame={resetGame} />
      )}
      {error && <ErrorPg />}
    </>
  );
}

export default App;
