'use strict'
// Code from https://codeburst.io/react-navigation-with-complete-redux-state-management-tab-bar-and-multiple-navigators-ed30a69d9a4d
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { TabBar } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
 return {
  navigationState: state.tabBar,
  }
}
class TabBarNavigation extends React.Component {
render(){
    const { dispatch, navigationState } = this.props
    return (
      <TabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(TabBarNavigation)