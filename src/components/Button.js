import styled, { css } from 'styled-components/native';

import styles, { em } from '../styles';

export default styled.TouchableOpacity.attrs({
  activeOpacity: ({ activeOpacity }) => activeOpacity || 0.9
})`
  flex: 1;
  justify-content: center;
  align-items: center;

  height: ${em(3.2)};
  background-color: ${({ disabled }) => disabled ? styles.colors.gray : styles.colors.blueLight};

  border-width: 1;
  border-color: ${styles.colors.white};
  border-radius: 10;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  ${({ error }) => error && css`
    border-color: ${styles.colors.red};
  `};
`;
