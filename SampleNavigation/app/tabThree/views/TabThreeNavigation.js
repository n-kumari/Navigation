'use strict'
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabThree } from '../navigationConfiguration'
// Redux
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
 return {
  navigationState: state.tabThree
  }
}
class TabThreeNavigation extends React.Component {
render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabThree
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
export default connect(mapStateToProps)(TabThreeNavigation)