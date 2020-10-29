import React, { useState } from 'react';
import TriviaCard from './TriviaCard';

function Trivia(props) {
  let triviaQs = props.triviaQs;

  let [countCard, setCountCard] = useState(0),
    nextQuestion = () => {
      countCard += 1;
      setCountCard(countCard);
    };

  const listItems = triviaQs.map((question) => (
    <TriviaCard
      key={question.id}
      id={question.id}
      triviaQ={question}
      nextQuestion={nextQuestion}
    />
  ));

  if (countCard === 10) {
    return (
      <>
        <div>Play Again!</div>
      </>
    );
  } else {
    return (
      <>
        <div>{listItems[countCard]}</div>
      </>
    );
  }
}

export default Trivia;
