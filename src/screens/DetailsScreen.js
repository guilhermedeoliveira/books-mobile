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
import Modal from '../components/Modal';
import DetailsModalContent from '../components/Modal/DetailsModalContent';

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

  state = {
    isBookFavorite: false,
    isShowingModal: false,
    rating: 3
  };

  onPressStarRating = rating => this.setState({ rating });

  onToggleFavoriteButton = () => this.setState(prevState => ({ isBookFavorite: !prevState.isBookFavorite }));

  onShowModal = () => this.setState({ isShowingModal: true });

  onCloseModal = () => this.setState({ isShowingModal: false });

  render() {
    const {
      navigation: {
        goBack,
        state: { params }
      }
    } = this.props;

    const { rating, isBookFavorite, isShowingModal } = this.state;

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
            onPressBuyButton={this.onShowModal}
            starRating={rating}
            onPressStarRating={this.onPressStarRating}
            isBookFavorite={isBookFavorite}
            onPressFavoriteButton={this.onToggleFavoriteButton}
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

        <Modal isVisible={isShowingModal} onBackdropPress={this.onCloseModal}>
          <DetailsModalContent onPressCloseButton={this.onCloseModal} />
        </Modal>
      </>
    );
  }
}

export default DetailsScreen;
