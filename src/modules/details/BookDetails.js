import React from 'react';
import {
  shape,
  string,
  arrayOf,
  number
} from 'prop-types';
import { Rating } from 'react-native-elements';

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
            <Text light color={styles.colors.textLight}>{pageCount} pages</Text>
          )}
        </BookDetailsLeftSection>

        <BookDetailsRightSection>
          <BookDetailsRightTopSection>
            <Text large>{title || 'No title provided'}</Text>
            <Text light color={styles.colors.textLight}>
              by {normalizeAuthorsArray(authors)}
            </Text>

            <BookDetailsRightPricingSection>
              <Text large>R$ {amount}</Text>
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
            <Button>
              <Text color={styles.colors.white}>BUY</Text>
            </Button>

            <Text>das</Text>
          </BookDetailsRightBottomSection>
        </BookDetailsRightSection>
      </BookDetailsContainer>
    </BookDetailsWrapper>
  );
};

BookDetails.propTypes = {
  item: shape({
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
