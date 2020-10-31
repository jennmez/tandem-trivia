import React, { useState } from 'react';
import TriviaCard from './TriviaCard';

export default function Trivia(props) {
  let triviaQs = props.triviaQs;

  let [countCard, setCountCard] = useState(0);
  let [score, setScore] = useState(0);

  //function displays the next question in the deck when button is clicked on the child component
  const nextQuestion = () => {
    countCard += 1;
    setCountCard(countCard);
    console.log('after', countCard);
  };

  const addToScore = () => {
    score += 1;
    console.log('score b4', score);
    setScore(score);
    console.log('score after', score);
  };

  //makes a Trivia card child component for each question
  const listItems = triviaQs.map((question) => (
    <TriviaCard
      key={question.id}
      id={question.id}
      triviaQ={question}
      nextQuestion={nextQuestion}
      addToScore={addToScore}
    />
  ));

  return (
    <>
      {countCard === 10 ? (
        //show play again screen with score
        <div>Play Again!</div>
      ) : (
        <div>{listItems[countCard]}</div>
      )}
    </>
  );
}
