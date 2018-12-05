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

![HomeScreen](https://user-images.githubusercontent.com/20259146/49482287-49ba2780-f80d-11e8-86d7-3e22fd06d8c8.png)

#### List
User views a list of books and can perform:
1. `Pull to refresh` the list of books.
2. `Pagination` by scrolling down and reaching the end of the list.
3. `Search for books` by typing in a `TextInput` component.
4. Select one of the books and navigate to `DetailScreen`.

![ListScreen](https://user-images.githubusercontent.com/20259146/49482343-8423c480-f80d-11e8-93c2-22a5d80c2459.png)

#### Detail
User views more information about the selected book and can perform off-line actions:
1. `Like`.
2. `Star rating`.
3. `Buy` button that launches a modal.

![DetailsScreen](https://user-images.githubusercontent.com/20259146/49482775-4c1d8100-f80f-11e8-9dfd-2421ee3f7206.png)

_Based on [challenge](https://github.com/FotonTech/Challenge-RN-ReduxSaga/blob/master/README.md)_