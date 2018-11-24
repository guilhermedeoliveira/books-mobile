import React, { Component } from 'react';
import { Text } from 'react-native';

import { ViewContainer } from '../components/shared';

class ListScreen extends Component {
  state = {};

  render() {
    return (
      <ViewContainer centralized>
        <Text>List</Text>
      </ViewContainer>
    );
  }
}

export default ListScreen;
