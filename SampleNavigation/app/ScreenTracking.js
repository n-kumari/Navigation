import { NavigationActions } from 'react-navigation';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';

const tracker = new GoogleAnalyticsTracker('UA-110938799-1');

// gets the current screen from navigation state
function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

const ScreenTracking = ({ getState }) => next => (action) => {
  if (
    action.type !== NavigationActions.NAVIGATE
    && action.type !== NavigationActions.BACK
  ) {
    return next(action);
  }

  const currentScreen = getCurrentRouteName(getState().tabOne);
  const result = next(action);
  const nextScreen = getCurrentRouteName(getState().tabOne);
  if (nextScreen !== currentScreen) {
    // the line below uses the Google Analytics tracker
    // Change tracker to use any other Mobile analytics SDK.
    tracker.trackScreenView(nextScreen);
  }
  return result;
};

export default ScreenTracking;
