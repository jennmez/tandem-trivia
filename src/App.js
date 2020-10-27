// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Trivia from './Trivia.js';

function App() {
  const [questions, setQuestions] = useState([]);

  //on the page load, it grab
  useEffect(() => {
    async function fetchTrivia() {
      try {
        const response = await axios.get('/api');
        const { data } = await response;
        setQuestions(data);
        console.log('trivia', questions);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTrivia();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Let's Play Trivia
          <button>Play</button>
        </div>
      </header>
      <Trivia questions={questions} />
    </div>
  );
}

export default App;
