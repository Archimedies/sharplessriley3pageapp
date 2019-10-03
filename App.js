import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './views/Home';
import AboutScreen from './views/About';
import SettingsScreen from './views/Settings';
import LoginScreen from './views/Login';

const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  About: AboutScreen,
  Settings: SettingsScreen
})

export default createAppContainer(tabNavigator)


class App extends Component {
  render() {
      return (
          <View style={styles.container}>
              <Text>Open up App.js to start working on your app!</Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
