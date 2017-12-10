'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { TabBar } from '../navigationConfiguration'
import { Text } from 'react-native'
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
    console.log("Testing if reaching herereraewreawr");
    return (
      <Text>Testing 123456</Text>
    );
    // return (
    //   <TabBar
    //     navigation={
    //       addNavigationHelpers({
    //         dispatch: dispatch,
    //         state: navigationState,
    //       })
    //     }
    //   />
    // )
  }
}
export default TabBarNavigation;// connect(mapStateToProps)(TabBarNavigation)