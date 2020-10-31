import React from 'react';
//import image
import grumpy from '../SVG/gc_branch.svg';

//material UI styling
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function ErrorPg() {
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
                Oh no!
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
                Grumpy cat went looking for that page & now he's stuck in a
                tree... Let's get you back to where you came from.
              </Typography>
            </Grid>
            <Button variant="outlined" color="primary" href="/">
              BACK TO SAFETY
            </Button>
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
