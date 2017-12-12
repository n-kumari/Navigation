import React from 'react';

import { Platform, Text, Linking } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return <Text>Hello from Home!</Text>;
  }
}

export default Home;
