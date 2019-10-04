import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './views/Login';
import Tabs from './views/Tabs';

const stackNavigator = createStackNavigator({
  Login: LoginScreen,
  tabs: Tabs
},
{
  headerMode: 'none', // remove top bar and make full screen
  navigationOptions: {
    headerVisible: false, // remove top bar and make full screen
  },
  defaultNavigationOptions: { // remove swipe back gesture
    gesturesEnabled: false
  }}
)

export default createAppContainer(stackNavigator);
