import styled from 'styled-components/native';

import styles, { em } from '../../styles';

export const BookDetailsWrapper = styled.View`
  flex: 1;
  paddingHorizontal: ${em(0.3)};

  border-color: red;
  border-width: 2;
`;

export const BookDetailsContainer = styled.View`
  flex: 3;
  flex-direction: row;

  border-color: green;
  border-width: 2;
`;

export const BookDetailsLeftSection = styled.View`
  flex: 2;
  justify-content: space-between;
  align-items: center;

  padding-bottom: ${em(3)};

  border-color: violet;
  border-width: 2;
`;

export const BookDetailsRightSection = styled.View`
  flex: 3;

  border-color: black;
  border-width: 2;
`;

export const BookDetailsRightTopSection = styled.View`
  flex: 3;

  border-color: tomato;
  border-width: 2;
`;

export const BookDetailsRightPricingSection = styled.View`
  flex-direction: row;
  align-items: center;

  border-color: red;
  border-width: 2;
`;

export const BookDetailsRightBottomSection = styled.View`
  flex: 2;
  flex-direction: row;

  border-color: black;
  border-width: 2;
`;
