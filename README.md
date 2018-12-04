# Books Mobile

A mobile app developed with [React Native](https://facebook.github.io/react-native/) consuming [Google Books Api](https://developers.google.com/books/)

## Organization

* **api** - api endpoints
* **components** - UI components
* **config** - configuration, should use `.env` files to isolate environments
* **helpers** - helpers function, beacouse components should be as clean as possible
* **modules** - app modules
* **screens** - root level components, represents screens rendered in different routes. Screens should be functional components
* **store** - state management configured with [redux](https://github.com/reduxjs/redux) following [duck pattern](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be), using [redux-saga](https://github.com/redux-saga/redux-saga) for async calls
* **styles** - styling, uses [styled-components](https://github.com/styled-components/styled-components)

## App Features

#### Home
Welcome screen. Navigates user to `ListScreen`.

#### List
User views a list of books and can perform:
1. See a list of items.
2. Pull to refresh the list (refetch).
3. Scroll down and load more books (pagination).
4. Search the books in the list (filter).
5. Press one of the items and navigate the user to the Detail screen.

#### Detail
User views more information about the selected book and can perform off-line actions(like, star rating and Buy the book).

Based on [challenge](https://github.com/FotonTech/Challenge-RN-ReduxSaga/blob/master/README.md)