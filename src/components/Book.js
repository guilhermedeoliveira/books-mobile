import React from 'react';
import styled from 'styled-components/native';

import Text from './Text';
import styles, { em } from '../styles';

const Book = ({ item, containerStyle }) => (
  <GridItemContainer style={containerStyle}>
    <Text>{item.name}</Text>
  </GridItemContainer>
);

const GridItemContainer = styled.View`
  height: ${em(9)};
  width: ${em(7)};

  border-color: ${styles.colors.red};
  border-width: ${styles.border.default};
`;

export default Book;
