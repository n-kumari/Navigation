'use strict'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import TabOneNavigation from '../tabOne/views/TabOneNavigation'
import TabTwoNavigation from '../tabTwo/views/TabTwoNavigation'
import TabThreeNavigation from '../tabThree/views/TabThreeNavigation'
const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
  TabThreeNavigation: { screen: TabThreeNavigation },
}
const tabBarConfiguration = {
tabBarOptions:{
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
}
export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)
export const tabBarReducer = (state, action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, ...action.payload }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}