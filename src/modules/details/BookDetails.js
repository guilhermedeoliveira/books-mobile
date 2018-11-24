import React from 'react';
import { Rating, Button } from 'react-native-elements';

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

import styles, { em } from '../../styles';
import { detailsScreenBuyButtonStyle } from '../../styles/general';

const BookDetails = () => (
  <BookDetailsWrapper>
    <BookDetailsContainer>
      <BookDetailsLeftSection>
        <Book item={{ name: 'det' }} />
        <Text light color={styles.colors.textLight}>216 pages</Text>
      </BookDetailsLeftSection>

      <BookDetailsRightSection>
        <BookDetailsRightTopSection>
          <Text large>aksdfssasdh lfkhsdaf lakhf</Text>
          <Text light color={styles.colors.textLight}>by David Airey</Text>

          <BookDetailsRightPricingSection>
            <Text large>R$ 9.99</Text>
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
          <Button title="BUY" buttonStyle={detailsScreenBuyButtonStyle} />
          <Text>das</Text>
        </BookDetailsRightBottomSection>
      </BookDetailsRightSection>
    </BookDetailsContainer>


  </BookDetailsWrapper>
);

export default BookDetails;
