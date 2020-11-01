import React, { useState } from 'react';
import axios from 'axios';

//components and helpers
import Welcome from './Welcome.js';
import Trivia from './Trivia.js';
import ErrorPg from './ErrorPg.js';
import shuffle, { addKey } from '../utils';

//

function App() {
  const [questions, setQuestions] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrivia = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/api');
      const { data } = await response;
      shuffle(data);
      addKey(data);
      data.slice(0, 10);
      setQuestions(data);
      setIsLoading(false);
      setIsPlaying(true);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const resetGame = () => {
    setIsPlaying(false);
  };

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
