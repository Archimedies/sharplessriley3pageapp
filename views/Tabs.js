import { Component } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Sketches';
import AboutScreen from './Studio';

export default tabNavigator = createBottomTabNavigator({
  Sketches: HomeScreen,
  Studio: AboutScreen,
});