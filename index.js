//bring in express server and create application
let express = require('express');
let app = express();
//create server port
let PORT = 5000;

//use the express Router object to create our route
let router = express.Router();

//configure router so all routes are prefixed with /api
app.use('/api/', router);

router.get('/', (req, res, next) => {
  res.send('apple');
});

//create server to listen on port 5000
let server = app.listen(PORT, function () {
  console.log(`Node server is running on port ${PORT}`);
});
