import React, { useState, useEffect } from 'react';

import grumpy_love from '../SVG/gc_love.svg';
import grumpy_dinner from '../SVG/gc_dinner.svg';
import grumpy_nap from '../SVG/gc_nap.svg';
import grumpy_belly from '../SVG/gc_belly.svg';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function Score({ score }) {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [test, setTest] = useState('');

  //loads correct message and image depending on the final score
  useEffect(() => {
    if (score <= 1) {
      setMessage(`You interrupted my meal for this...`);
      setImage(grumpy_dinner);
      setTest('worst');
    } else if (score > 1 && score <= 5) {
      setMessage(`Sigh. How dare you disturb my slumber.`);
      setImage(grumpy_nap);
      setTest('bad');
    } else if (score > 5 && score <= 9) {
      setMessage(`This belly is still off-limits to the likes of you.`);
      setImage(grumpy_belly);
      setTest('good');
    } else {
      setMessage(`You'll do.`);
      setImage(grumpy_love);
      setTest('best');
    }
  }, [image, message, score]);

  return (
    <div className={classes.root}>
      <Typography variant="h4" color="secondary" className={classes.header}>
        {score} questions correct
      </Typography>
      <img
        src={image}
        alt="grumpy_cat"
        title="grumpy_cat"
        data-testid={test}
        className={classes.img}
      />
      <Typography component="p" className={classes.type}>
        {message}
      </Typography>
    </div>
  );
}

//custom styling for page
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    maxWidth: '300px',
    maxHeight: '400px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));
