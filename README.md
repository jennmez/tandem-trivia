# Getting Started with Impress Me Human.

Never thought you'd have to go this far for the love and attention of a cat, but here you are. Use your mighty brain to answer tough trivia questions and impress perpetual grump, Tardar Sauce, who took the world by storm as Grumpy Cat. RIP.

[DEMO](https://impressgrump.herokuapp.com/)

## Local Development

- To create your own copy, fork and clone this repo to your machine.
- CD into the project directory in your terminal.
- Open your editor of choice and run the following `npm install` to install project dependencies.
- `npm run start` will run the app and server concurrently in the development mode.
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm run test` launches the test runner in the interactive watch mode.
- `npm run build` will build a minified production-ready bundle for deployment.

### Proxy Server

The package.json is set up with a proxy server to so webpack's dev server can connect the express server. Please note, if the port is changed in server.js, the port must also be changed in package.json "proxy".

## Deployment

This app was deployed to Heroku for hosting and is recommended. If you deploy with Heroku, you will need to [sign up](https://devcenter.heroku.com/start) for an account if you do not have one. Follow their guid

## Built With

- Node.js
- React
- Express

## Dependencies Added With NPM

- This project was bootstrapped with [Create React App](https://github.com/-facebook/create-react-app).
- [concurrently](https://www.npmjs.com/package/concurrently) - to run the express server and react client simultaneously
- [express](https://expressjs.com/) - set up express server & REST API routes
- [nodemon](https://nodemon.io/) - utility to monitor for changes in source & restart server automatically
- [axios](https://www.npmjs.com/package/axios)
- [Material UI](https://material-ui.com/) for styling purposes
- [react-testing-library](https://testing-library.com/docs/intro) included with create-react-app for testing
- Grumpy Cat Illustrations were licensed by me for personal use through Adobe Stock subscription.
