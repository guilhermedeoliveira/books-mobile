import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';

import styles from './styles';

/*
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
*/

const DrawerNavigator = createDrawerNavigator(
  {
    List: ListScreen,
  },
  {
    initialRouteName: 'List'
  }
);

const MainStackNavigator = createStackNavigator(
  {
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Details'
  }
);

const AuthNavigator = createStackNavigator(
  {
    Login: LoginScreen
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    Details: DetailsScreen,
    // App: StackNavigator,
    // App: ListScreen,
    App: MainStackNavigator,
    Auth: AuthNavigator
  },
  {
    // initialRouteName: 'AuthLoading'
    initialRouteName: 'Details'
  }
);

export default SwitchNavigator;
