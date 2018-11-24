import styled, { css } from 'styled-components/native';
import materialIcon from 'react-native-vector-icons/MaterialIcons';

import styles, { em } from '../styles';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

export const ScrollViewContainer = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: ({ paddingTop = 0, paddingBottom = 0 }) => ({
    paddingTop,
    paddingBottom
  })
})`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

export const ViewContainer = styled.View`
  flex: 1;

  padding-vertical: ${({ paddingVertical }) => paddingVertical || 0};
  padding-horizontal: ${({ paddingHorizontal }) => paddingHorizontal || 0};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};

  ${({ centralized }) => centralized && css`
    justify-content: center;
    align-items: center;
  `};
`;

export const TouchableCircle = styled.TouchableOpacity.attrs({
  activeOpacity: ({ activeOpacity }) => activeOpacity || 0.9
})`
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || styles.colors.white};
  width: ${({ radius }) => radius * 2 || em(6)};
  height: ${({ radius }) => radius * 2 || em(6)};
  border-radius: ${({ radius }) => radius * 2 || em(3)};
`;

export const StyledmaterialIcon = styled(materialIcon).attrs({
  name: ({ name }) => name || 'favorite',
  size: ({ size }) => size || em(2),
  color: ({ color }) => color || styles.colors.black
})``;
