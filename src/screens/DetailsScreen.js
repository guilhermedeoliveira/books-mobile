import React, { Component } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';

import { ViewContainer, StyledMaterialIcon } from '../components/shared';
import Header from '../components/Header';
import BookDetails from '../modules/details/BookDetails';
import Book from '../components/Book';
import Text from '../components/Text';

import styles, { em, isIOS } from '../styles';
import {
  listScreendividerStyle,
  detailsScreenBookStyle
} from '../styles/general';

class DetailsScreen extends Component {
  state = {};

  render() {
    return (
      <ViewContainer
        flex={0.6}
        paddingVertical={isIOS ? em(3.5) : em(1.5)}
        paddingHorizontal={em(0.3)}
        backgroundColor={styles.colors.mainColor}
      >
        <Header
          left={<StyledMaterialIcon name="keyboard-backspace" />}
          title="Design Books"
          right={<StyledMaterialIcon name="search" />}
        />

        <Divider style={listScreendividerStyle} />

        <BookDetails />
      </ViewContainer>
    );
  }
}

export default DetailsScreen;
