import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import AuthLoadingScreen from './screens/auth/AuthLoadingScreen';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';

import styles from './styles';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Favorite: FavoriteScreen,
    Search: SearchScreen
  },
  {
    tabBarOptions: {
      activeTintColor: styles.colors.white,
      inactiveTintColor: styles.colors.gray,
      style: {
        backgroundColor: styles.colors.blueBackgroundTabBar
      }
    }
  }
);

DrawerNavigator.navigationOptions = {
  header: null
};

const StackNavigator = createStackNavigator(
  {
    BottomTabNavigator,
    Player: PlayerScreen,
    TitleDetails: TitleDetailsScreen,
    Playlist: PlaylistScreen
  },
  {
    initialRouteName: 'BottomTabNavigator'
  }
);

const AuthNavigator = createStackNavigator(
  {
    LogIn: LoginScreen
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: StackNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default SwitchNavigator;
