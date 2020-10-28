import React from 'react';

function TriviaCard(props) {
  console.log(props.triviaQ);
  let trivia = props.triviaQ;
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
    </>
  );
}

export default TriviaCard;
