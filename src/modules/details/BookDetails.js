import React from 'react';
import {
  func,
  shape,
  string,
  arrayOf,
  number
} from 'prop-types';
import { Rating } from 'react-native-elements';

import { TouchableCircle, StyledMaterialIcon } from '../../components/shared';
import {
  BookDetailsWrapper,
  BookDetailsContainer,
  BookDetailsLeftSection,
  BookDetailsRightSection,
  BookDetailsRightTopSection,
  BookDetailsRightPricingSection,
  BookDetailsRightBottomSection
} from './BookDetails.styles';
import Book from '../../components/Book';
import Text from '../../components/Text';
import Button from '../../components/Button';

import styles, { em } from '../../styles';
import { normalizeAuthorsArray } from '../../helpers/array';

const BookDetails = ({ item }) => {
  const {
    onPressBuyButton,
    volumeInfo: {
      title,
      pageCount,
      authors
    },
    saleInfo: {
      retailPrice: {
        amount
      }
    }
  } = item;

  return (
    <BookDetailsWrapper>
      <BookDetailsContainer>
        <BookDetailsLeftSection>
          <Book item={item} />

          {pageCount && (
            <Text
              light
              color={styles.colors.textLight}
              style={{ marginLeft: em(0.8) }}
            >
              {pageCount} pages
            </Text>
          )}
        </BookDetailsLeftSection>

        <BookDetailsRightSection>
          <BookDetailsRightTopSection>
            <Text large bold>{title || 'No title provided'}</Text>

            <Text light color={styles.colors.textLight}>
              by {normalizeAuthorsArray(authors)}
            </Text>

            <BookDetailsRightPricingSection>
              <Text large bold>R$ {amount}</Text>
              <Rating
                readonly
                imageSize={20}
                fractions={1}
                startingValue={0}
                ratingColor={styles.colors.black}
                ratingBackgroundColor="red"
                style={{ marginLeft: em(1) }}
              />
            </BookDetailsRightPricingSection>
          </BookDetailsRightTopSection>

          <BookDetailsRightBottomSection>
            <Button onPress={onPressBuyButton}>
              <Text bold color={styles.colors.white}>BUY</Text>
            </Button>

            <TouchableCircle
              radius={em(1.2)}
              style={{ marginLeft: em(0.5) }}
            >
              <StyledMaterialIcon
                name="favorite-border"
                color={styles.colors.white}
                size={em(1.5)}
              />
            </TouchableCircle>
          </BookDetailsRightBottomSection>
        </BookDetailsRightSection>
      </BookDetailsContainer>
    </BookDetailsWrapper>
  );
};

BookDetails.propTypes = {
  item: shape({
    onPressBuyButton: func.isRequired,
    volumeInfo: shape({
      title: string.isRequired,
      pageCount: number.isRequired,
      authors: arrayOf(string).isRequired
    }).isRequired,
    saleInfo: shape({
      retailPrice: shape({
        amount: number.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default BookDetails;
