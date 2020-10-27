//bring in express server and create application
let express = require('express');
let app = express();
//create server port
let PORT = 5000;
//retrieve the data
let triviaData = require('./routes/trivia');

//use the express Router object to create our route
let router = express.Router();

//configure router so all routes are prefixed with /api
app.use('/api/', router);

//create a GET request to gather all the questions
router.get('/', (req, res, next) => {
  //use the get method from the routes/trivia.js
  triviaData.get(
    function (data) {
      res.status(200).json({
        message: 'All trivia questions received',
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});

//create server to listen on port 5000
let server = app.listen(PORT, function () {
  console.log(`Node server is running on port ${PORT}`);
});
