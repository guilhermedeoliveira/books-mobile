import React, { Component } from 'react';
import { Divider } from 'react-native-elements';

import { ViewContainer, StyledMaterialIcon } from '../components/shared';
import Header from '../components/Header';
import Grid from '../components/Grid';

import styles, { em, isIOS } from '../styles';
import { listScreendividerStyle } from '../styles/general';

class ListScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'List'
  };

  state = {
    books: [
      { id: 'dasd', name: 'opa' },
      { id: 'dasdd', name: 'opa' },
      { id: 'dad', name: 'opa' },
      { id: 'dsd', name: 'opa' },
      { id: 'dsdasd', name: 'opa' },
      { id: 'dadasd', name: 'opa' },
      { id: 'daadd', name: 'opa' },
      { id: 'dafgsd', name: 'opa' },
      { id: 'dashgd', name: 'opa' },
      { id: 'aaadashgd', name: 'opa' }
    ]
  };

  render() {
    return (
      <ViewContainer
        paddingVertical={isIOS ? em(3.5) : em(1.5)}
        paddingHorizontal={em(0.3)}
        backgroundColor={styles.colors.mainColor}
      >
        <Header
          left={<StyledMaterialIcon name="menu" />}
          title="Design Books"
          right={<StyledMaterialIcon name="search" />}
        />

        <Divider style={listScreendividerStyle} />

        <Grid
          data={this.state.books}
          grid={3}
        />
      </ViewContainer>
    );
  }
}

export default ListScreen;
