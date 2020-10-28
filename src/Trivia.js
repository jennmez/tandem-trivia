import React from 'react';
import TriviaCard from './TriviaCard';

function Trivia(props) {
  let triviaQs = props.triviaQs;
  return (
    <>
      <div>
        <ul>
          {triviaQs.map((question, idx) => (
            <li key={idx}>
              <TriviaCard triviaQ={question} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Trivia;
