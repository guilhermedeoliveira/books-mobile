import styled from 'styled-components/native';

import { em } from '../../styles';

export const BookDetailsWrapper = styled.View`
  flex: 1;
  paddingHorizontal: ${em(0.3)};
`;

export const BookDetailsContainer = styled.View`
  flex: 3;
  flex-direction: row;
`;

export const BookDetailsLeftSection = styled.View`
  flex: 2;
  justify-content: space-between;
  align-items: center;

  padding-bottom: ${em(3)};
`;

export const BookDetailsRightSection = styled.View`
  flex: 3;
`;

export const BookDetailsRightTopSection = styled.View`
  flex: 3;
`;

export const BookDetailsRightPricingSection = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${em(1.2)};
`;

export const BookDetailsRightBottomSection = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
