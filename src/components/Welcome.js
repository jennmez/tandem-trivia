import React from 'react';
//import image
import grumpy from '../SVG/gc_sit.svg';

//material UI styling
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function Welcome({ playGame }) {
  //uses the custom styling created
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
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
                variant="h2"
                color="primary"
                className={classes.header}
              >
                Impress Me, Human
              </Typography>
              <Typography
                variant="h6"
                color="secondary"
                className={classes.header}
              >
                A Trivia "Game", oh joy
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img
                src={grumpy}
                alt="grumpy_cat"
                title="grumpy_cat"
                className={classes.img}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="p" className={classes.type}>
                Grumpy cat is a tough critic. You're gonna have work really hard
                to earn his respect. You're only 10 questions away from proving
                you can maybe rub his belly...but don't count on it.
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.type}>
              <Button variant="outlined" color="primary" onClick={playGame}>
                PLAY
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

//custom styling for page
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    minHeight: '100vh',
  },
  type: {
    fontSize: '1.15em',
    padding: theme.spacing(5),
    textAlign: 'center',
  },
  header: {
    textTransform: 'uppercase',
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  img: {
    maxWidth: '400px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));
