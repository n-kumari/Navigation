'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { BackHandler } from "react-native";
import { NavigatorTabOne } from '../navigationConfiguration'
// Redux
import { connect } from 'react-redux'

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
    const { navigation } = this.navigator.props
  if (navigation.index === 0) {
    return false;
  }
  // get the navigation from the ref
  //  Close the active screen and move back
    navigation.goBack(navigation.state.routes[navigation.state.index].key)
  return true;
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