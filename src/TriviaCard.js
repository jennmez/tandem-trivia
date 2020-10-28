import React from 'react';

function TriviaCard(props) {
  let trivia = props.triviaQ;

  //make a copy of the answers to display and hold the the correct answer in it
  let answersArray = [...trivia.incorrect];
  answersArray.push(trivia.correct);

  return (
    <>
      <div>{trivia.question}</div>
      <div>
        {answersArray.map((answer) => (
          <div>{answer}</div>
        ))}
      </div>
      <button onClick={props.nextQuestion}>next</button>
    </>
  );
}

export default TriviaCard;
