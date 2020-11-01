import React, { useState } from 'react';
import TriviaCard from './TriviaCard';
import Score from './Score';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function Trivia({ triviaQs, resetGame }) {
  let [countCard, setCountCard] = useState(0);
  let [score, setScore] = useState(0);

  //function displays the next question in the deck when button is clicked on the child component
  const nextQuestion = () => {
    countCard += 1;
    setCountCard(countCard);
  };

  const addToScore = () => {
    score += 1;
    setScore(score);
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

  const classes = useStyles();
  return (
    <>
      {countCard === 10 ? (
        //show play again screen with score
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={12}>
              <Typography
                variant="h3"
                color="primary"
                className={classes.header}
              >
                Impress Me, Human
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Score score={score} />
            </Grid>
            <Grid item xs={12} className={classes.type}>
              <Button variant="outlined" color="primary" onClick={resetGame}>
                PLAY AGAIN
              </Button>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={12}>
              <Typography
                variant="h3"
                color="primary"
                className={classes.header}
              >
                Impress Me, Human
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {listItems[countCard]}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

//custom styling for page
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    minHeight: '50vh',
  },
  header: {
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  type: {
    textAlign: 'center',
  },
}));
