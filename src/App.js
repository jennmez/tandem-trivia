import React, { useState, useEffect } from 'react';
import axios from 'axios';

//components and helpers
import Trivia from './Trivia.js';
import shuffle, { addKey } from './utils';

//material UI styling
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [score, setScore] = useState(0);
  // const [answers, setAnswers] = useState([]);
  const [triviaRound, setTriviaRound] = useState([]);

  //grabs all Questions from the server
  useEffect(() => {
    async function fetchTrivia() {
      try {
        const response = await axios.get('/api');
        const { data } = await response;
        shuffle(data);
        addKey(data);
        setAllQuestions(data);
        console.log('trivia', allQuestions);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTrivia();
  }, []);

  //change the state when the player decides to play the game
  const playGame = () => {
    let triviaRoundQuestions = allQuestions.slice(0, 10);
    setTriviaRound(triviaRoundQuestions);
    setIsPlaying(true);
  };

  //uses the custom styling created
  const classes = useStyles();

  //

  return (
    <>
      {!isPlaying ? (
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={12}>
              <Typography variant="h2" color="primary" className={classes.type}>
                TANDEM TRIVIA
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" className={classes.type}>
                Are you ready to shine at your next trivia night in?! Test your
                knowledge, 10 allQuestions at a time, & get ready to impress
                your friends!
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.type}>
              <Button variant="outlined" color="primary" onClick={playGame}>
                PLAY
              </Button>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={12}>
              <Typography variant="h2" color="primary" className={classes.type}>
                TANDEM TRIVIA
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.type}>
              <Trivia triviaQs={triviaRound} />
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default App;

//custom styling for page
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    minHeight: '100vh',
  },
  type: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));
