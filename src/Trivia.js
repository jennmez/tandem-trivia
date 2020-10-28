import React, { useState } from 'react';
import TriviaCard from './TriviaCard';

function Trivia(props) {
  let triviaQs = props.triviaQs;

  let [countCard, setCountCard] = useState(0),
    nextQuestion = () => {
      countCard += 1;
      setCountCard(countCard);
    };

  console.log(triviaQs);

  const listItems = triviaQs.map((question) => (
    <TriviaCard
      key={question.id}
      triviaQ={question}
      nextQuestion={nextQuestion}
    />
  ));

  return (
    <>
      <div>{listItems[countCard]}</div>
    </>
  );
}

export default Trivia;
