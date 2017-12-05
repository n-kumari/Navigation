'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { BackHandler } from "react-native";
import { NavigatorTabOne } from '../navigationConfiguration'
// Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
const mapStateToProps = (state) => {
 return {
  navigationState: state.tabOne
  }
}
class TabOneNavigation extends React.Component {

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }

  backAction = () => {
    // get the tabBar state.index to see what tab is focused
    // get the individual tab's index to see if it's at 0 or if there  is a screen to 'pop'
    const { navigation } = this.navigator.props
  if (true) {
      // get the navigation from the ref
      // pass the key of the focused route into the goBack action
       navigation.goBack(navigation.state.routes[navigation.state.index].key)
      return true
    } else {
      return false
    }
  }

render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabOne
      ref={ (ref) => this.navigator = ref }
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(TabOneNavigation)