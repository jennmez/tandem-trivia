//bring in express server and create application
let express = require('express');
let app = express();
//create server port
let PORT = 3030;
//retrieve the data from my created route
let triviaData = require('./routes/trivia');

//if there is trouble with CORS once I configure the (cross origin resource sharing)
//npm install cors
//let cors = require('cors')

//use the express Router object to create our route
let router = express.Router();

//configure middleware to support JSON data parsing from client requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configure CORS
//app.use(cors())

//configure router so all routes are prefixed with /api
app.use('/api', router);

//create a GET request to gather all the questions
router.get('/', (req, res, next) => {
  //use the get method from the routes/trivia.js
  triviaData.get(
    function (data) {
      res.status(200).json(data);
    },
    function (err) {
      next(err);
    }
  );
});

//configure error handling middleware last
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send(err.message || 'Internal server error.');
});

//create server to listen on port 5000
let server = app.listen(PORT, function () {
  console.log(`Node server is running on port ${PORT}`);
});

//if time allows, try to write a log file for errors
