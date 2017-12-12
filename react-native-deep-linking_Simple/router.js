import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './home';
import People from './people';

const AppNavigator = StackNavigator({
  Home: { screen: Home },
  People: { screen: People, path: 'people/0'},
});

class Router extends React.Component {
  render() {
    return (
      <AppNavigator uriPrefix={'peopleapp://'} />
    );
  }
}


export default Router;
