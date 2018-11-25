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
import Modal from '../components/Modal';
import Header from '../components/Header';
import BookDetails from '../modules/details/BookDetails';
import Text from '../components/Text';

import styles, { em } from '../styles';
import { listScreendividerStyle, detailsScreenScrollViewStyle } from '../styles/general';

class DetailsScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: shape({
      goBack: func.isRequired
    }).isRequired
  };

  state = { isShowingModal: false, rating: 3 };

  onPressStarRating = rating => this.setState({ rating });

  _showModal = () => this.setState({ isShowingModal: true });

  render() {
    const {
      navigation: {
        goBack,
        state: { params }
      }
    } = this.props;

    const { rating } = this.state;

    return (
      <>
        <ViewContainer
          flex={1}
          paddingTop={em(1)}
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

          <BookDetails
            item={params}
            onPressBuyButton={this._showModal}
            starRating={rating}
            onPressStarRating={this.onPressStarRating}
          />
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
