# Getting Started with Impress Me Human.

Never thought you'd have to go this far for the love and attention of a cat, but here you are. Use your mighty brain to answer tough trivia questions and impress perpetual grump, Tardar Sauce, who took the world by storm as Grumpy Cat. RIP. For a demo of the app, you can visit DEPLOYED SITE.

## Local Development

- To create your own copy, fork and clone this repo to your machine.
- CD into the project directory in your terminal.
- Open your editor of choice and run the following `npm install` to install project dependencies.
- `npm start` will run the app and server concurrently in the development mode.
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm test` launches the test runner in the interactive watch mode.
- `npm run deploy` will launch the predeploy script first and builds the app for production to the `build` folder. Before running the scripte, you will have to set your domain in the "homepage" field in the package.json file. For example: "homepage": "https://myusername.github.io/my-app". If you decide publish to GitHub pages like me, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch.

If more information regarding the test & build scripts is needed, it can be found on [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Proxy Server

The package.json is set up with a proxy server to so webpack's dev server can connect the express server. Please note, if the port is changed in server.js, the port must also be changed in package.json "proxy".

##Built With

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
