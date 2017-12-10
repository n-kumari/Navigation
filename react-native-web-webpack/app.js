/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'
// React
import React from 'react'
import { AppRegistry } from 'react-native'
// Redux
import { Provider } from 'react-redux'
import store from './app/store'
// Navigation
import TabBarNavigation from './app/tabBar/views/TabBarNavigation'

export default class ExampleApp extends Component {
  render() {
    console.log('yoooooooo');
    return(
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    );
  }
}
