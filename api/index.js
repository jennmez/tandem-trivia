const { render } = require('react-dom');

const router = require('express').Router();
const triviaData = require('./trivia');
module.exports = router;

//create a GET request to gather all the questions
router.get('/', (req, res, next) => {
  //use the get method from the routes/trivia.js
  console.log('entered route');
  triviaData.get(
    function (data) {
      console.log('getting data');
      res.status(200).json(data);
    },
    function (err) {
      next(err);
    }
  );
});
