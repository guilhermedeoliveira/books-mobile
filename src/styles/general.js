import styles, { em } from './index';

export const listScreendividerStyle = {
  height: 2,
  width: em(8.5),
  alignSelf: 'center',
  marginVertical: em(1.2),
  backgroundColor: styles.colors.yellowBorder
};

export const listScreenBookStyle = {
  marginVertical: em(1),
  marginHorizontal: em(0.6),
  paddingHorizontal: em(0.3)
};

export const detailsScreenBuyButtonStyle = {
  height: em(3),
  width: em(6),
  borderRadius: 15
};

export const detailsScreenScrollViewStyle = {
  paddingVertical: em(2),
  paddingHorizontal: em(1.5)
};

export const searchInputContainerStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  width: styles.width,
  paddingHorizontal: em(1)
};

export const borderedStyle = {
  borderWidth: styles.border.default,
  bordercolor: styles.colors.tint
};
