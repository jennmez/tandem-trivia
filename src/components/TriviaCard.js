import React, { useState, useEffect } from 'react';
import shuffle from '../utils';

//materialUI styling
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

export default function TriviaCard(props) {
  let trivia = props.triviaQ;
  let { addToScore, nextQuestion } = props;

  const classes = useStyles();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [disabledNextButton, setDisableNextButton] = useState(true);
  const [disabledSubmitButton, setDisableSubmitButton] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [helperText, setHelperText] = useState('Choose wisely');

  //function will take both the incorrect and correct answers, combine into a single array, and shuffle the answers so the correct one isn't always the last value.
  const listPossibleAnswers = (trivia) => {
    let answersArray = [...trivia.incorrect];
    answersArray.push(trivia.correct);
    shuffle(answersArray);
    return answersArray;
  };

  // on the page load, useEffect calls the LPA function on the single question and sets the possible answers once.
  useEffect(() => {
    const answers = listPossibleAnswers(trivia);
    setAnswers(answers);
  }, [trivia]);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === trivia.correct) {
      setDisableSubmitButton(!disabledSubmitButton);
      setDisableNextButton(!disabledNextButton);
      setHelperText(`Oh, you're correct. Me-wow.`);
      setError(false);
      addToScore();
    } else if (trivia.incorrect.includes(value)) {
      setDisableSubmitButton(!disabledSubmitButton);
      setDisableNextButton(!disabledNextButton);
      setHelperText(`Wah-wah. The correct answer is ${trivia.correct}.`);
      setError(true);
    } else {
      setHelperText(`C'mon, I don't have all day. Choose an answer.`);
      setError(true);
    }
  };

  return (
    <>
      <Container className={classes.container}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" color="secondary" className={classes.header}>
            Question {trivia.id}
          </Typography>
          <FormControl
            component="fieldset"
            error={error}
            className={classes.formControl}
          >
            <FormLabel component="legend">{trivia.question}</FormLabel>
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              {answers.map((answer, idx) => (
                <FormControlLabel
                  key={idx}
                  value={answer}
                  control={<Radio />}
                  label={answer}
                />
              ))}
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            {!disabledSubmitButton ? (
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Submit Answer
              </Button>
            ) : (
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.button}
                disabled
              >
                Submit Answer
              </Button>
            )}
            {disabledNextButton ? (
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                disabled
              >
                Next Question
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={nextQuestion}
              >
                Next Question
              </Button>
            )}
          </FormControl>
        </form>
      </Container>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  container: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    textTransform: 'uppercase',
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    // textAlign: 'center',
  },
}));
