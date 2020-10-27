import React from 'react';

function Trivia(props) {
  return (
    <>
      <div>
        <ul>
          {props.questions.map((question, idx) => (
            <li key={idx}>{question.question}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Trivia;
