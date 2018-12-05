# Books Mobile

A mobile app developed with [React Native](https://facebook.github.io/react-native/) consuming [Google Books Api](https://developers.google.com/books/)

## Organization

* **api** - api endpoints
* **components** - UI components
* **config** - configuration, should use `.env` files to isolate environments
* **helpers** - helpers function, because components should be as clean as possible
* **modules** - app modules
* **screens** - root level components, represents screens rendered in different routes. Screens should be functional components
* **store** - state management configured with [redux](https://github.com/reduxjs/redux) following [duck pattern](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be), using [redux-saga](https://github.com/redux-saga/redux-saga) for async calls
* **styles** - styling, uses [styled-components](https://github.com/styled-components/styled-components)

## App Features

#### Home
Welcome screen. Navigates user to `ListScreen`.

#### List
User views a list of books and can perform:
2. `Pull to refresh` the list.
3. `Pagination` by scrolling down and reaching the end of the list.
4. `Search for books` by typing in a `TextInput` component.
5. Select one of the items and navigate to the `DetailScreen`.

#### Detail
User views more information about the selected book and can perform off-line actions(like, star rating and launch modal by pressing `buy` button).

_Based on [challenge](https://github.com/FotonTech/Challenge-RN-ReduxSaga/blob/master/README.md)_