import React, { PureComponent } from 'react';
import { shape, func } from 'prop-types';

import { ViewContainer } from '../components/shared';
import Text from '../components/Text';
import Button from '../components/Button';

import styles, { em } from '../styles';
import { getUsername } from '../helpers/login';

class HomeScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: shape({
      navigate: func.isRequired
    }).isRequired
  };

  state = { username: '' };

  async componentDidMount() {
    const username = await getUsername();
    this.setState({ username });
  }


  render() {
    const { navigation: { navigate } } = this.props;
    const { username } = this.state;

    return (
      <ViewContainer
        backgroundColor={styles.colors.mainColor}
        paddingTop={em(3)}
      >
        <Text huge centered>Books Mobile</Text>

        <ViewContainer centralized paddingBottom={em(3)}>
          <ViewContainer centralized flex={0.5}>
            <ViewContainer>
              <Text huge centered>Welcome {username || 'User'}</Text>
            </ViewContainer>

            <ViewContainer>
              <Text extraLarge>Do you love books?</Text>
            </ViewContainer>

            <ViewContainer>
              <Button
                height={em(3)}
                width={em(12)}
                borderRadius={50}
                onPress={() => navigate('List')}
              >
                <Text large>I LOVE BOOKS!</Text>
              </Button>
            </ViewContainer>
          </ViewContainer>
        </ViewContainer>
      </ViewContainer>
    );
  }
}

export default HomeScreen;
