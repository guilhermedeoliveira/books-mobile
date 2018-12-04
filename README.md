# Books Mobile

A mobile app developed with [react-native](https://facebook.github.io/react-native/) consuming [Google book Api](https://developers.google.com/books/)

## Organization

* **api** - api endpoints
* **components** - UI components
* **config** - configuration, should use `.env` files to isolate environments
* **helpers** - helpers function, beacouse components should be as clean as possible
* **modules** - app modules
* **screens** - root level components, represents screens rendered in different routes. Screens should be functional components
* **store** - state management configured with [redux](https://github.com/reduxjs/redux) following [duck pattern](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be), using [redux-saga](https://github.com/redux-saga/redux-saga) for async calls
* **styles** - styling, uses [styled-components](https://github.com/styled-components/styled-components)

## Project Structure

```bash
├── public
├── public
├── src
│   ├── components
|   │   ├── shared.js
│   ├── config
|   |   ├── api.js
|   |   ├── constants.js
│   ├── modules
│   ├── router
|   |   ├── index.js
│   ├── screens
|   |   ├── auth
|   |   |   ├── LoginScreen.js
|   |   |   ├── SignupScreen.js
│   ├── store
|   |   ├── auth.js
|   |   ├── index.js
|   |   ├── user.js
│   ├── styles
|   |   ├── animations.js
|   |   ├── global.js
|   |   ├── index.js
│   ├── utils
|   |   ├── helpers
|   |   |   ├── login.js
|   ├── App.js
|   ├── App.test.js
|   ├── index.js
|   ├── registerServiceWorker.js
├── .env.development
├── .env.production
├── .eslintignore
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── package.json
└── yarn.lock
```