/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';

import Router from './Router';
import { SafeContainer } from './components/shared';

class App extends PureComponent {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    return (
      <SafeContainer>
        <Router />
      </SafeContainer>
    );
  }
}

export default App;
