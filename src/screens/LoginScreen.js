import React, { Component } from 'react';
import { Text } from 'react-native';

import { ViewContainer } from '../components/shared';

class LoginScreen extends Component {
  state = {};

  render() {
    return (
      <ViewContainer centralized>
        <Text>Login</Text>
      </ViewContainer>
    );
  }
}

export default LoginScreen;
