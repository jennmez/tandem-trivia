import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Trivia from './Trivia.js';

//material UI styling
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const [questions, setQuestions] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const playGame = () => {
    setIsPlaying(true);
  };

  //uses the custom syling created
  const classes = useStyles();

  return (
    // <Container>
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
                knowledge, 10 questions at a time, & get ready to impress your
                friends!
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
              <Trivia questions={questions} />
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default App;

//custom styling
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
