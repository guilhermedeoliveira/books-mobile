import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  shape,
  func
} from 'prop-types';
import { Divider } from 'react-native-elements';

import {
  ViewContainer,
  StyledMaterialIcon,
  ScrollViewContainer
} from '../components/shared';
import Header from '../components/Header';
import BookDetails from '../modules/details/BookDetails';
import Text from '../components/Text';

import styles, { em, isIOS } from '../styles';
import { listScreendividerStyle, detailsScreenScrollViewStyle } from '../styles/general';

class DetailsScreen extends PureComponent {
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
      <>
        <ViewContainer
          flex={1}
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

        <ScrollViewContainer
          style={{ flex: 1 }}
          contentContainerStyle={detailsScreenScrollViewStyle}
        >
          <Text style={{ lineHeight: em(2.15) }}>
            {params.volumeInfo.description}
          </Text>
        </ScrollViewContainer>
      </>
    );
  }
}

export default DetailsScreen;
