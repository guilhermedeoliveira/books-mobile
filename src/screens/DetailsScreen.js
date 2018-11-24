import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  shape,
  func
} from 'prop-types';
import { Divider } from 'react-native-elements';

import { ViewContainer, StyledMaterialIcon } from '../components/shared';
import Header from '../components/Header';
import BookDetails from '../modules/details/BookDetails';

import styles, { em, isIOS } from '../styles';
import { listScreendividerStyle } from '../styles/general';

class DetailsScreen extends Component {
  static propTypes = {
    navigation: shape({
      goBack: func.isRequired
    }).isRequired
  };

  state = {};

  render() {
    const {
      navigation: {
        goBack,
        state: { params }
      }
    } = this.props;

    return (
      <ViewContainer
        flex={0.6}
        paddingVertical={isIOS ? em(3.5) : em(1.5)}
        paddingHorizontal={em(0.3)}
        backgroundColor={styles.colors.mainColor}
      >
        <Header
          left={(
            <TouchableOpacity onPress={() => goBack()}>
              <StyledMaterialIcon name="keyboard-backspace" />
            </TouchableOpacity>
          )}
          title="Design Books"
          right={<StyledMaterialIcon name="search" />}
        />

        <Divider style={listScreendividerStyle} />

        <BookDetails item={params} />
      </ViewContainer>
    );
  }
}

export default DetailsScreen;
