//seperating logic from the controller (app routes) and the data itself

//this is a built-in node module that knows how to read/write files (no npm package required)
let fs = require('fs');

//brings in the trivia json file provided
const FILE_NAME = './assets/trivia.json';

let trivia = {
  //function that follows a Promise design pattern
  get: function (resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        //calls the reject callback
        reject(err);
      } else {
        //parses json into a JS object
        resolve(JSON.parse(data));
      }
    });
  },
};

module.exports = trivia;
