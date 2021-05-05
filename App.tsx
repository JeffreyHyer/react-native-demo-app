import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import AuthenticatedRouter from './screens/AuthenticatedRouter';

const Stack = createStackNavigator();

/**
 * This is the list of all the screens/routers in our app, we
 * use this for convenience when navigating between the screens.
 */
export const SCREENS = {
  LOGIN: 'login',
  AUTHENTICATED: 'authenticated',
  DASHBOARD: 'dashboard',
  PRACTICE_LOG: 'practicelog',
};

/**
 * This is our top-level App component. It serves as the entrypoint
 * to our app. When the app launches on a device, this is the code
 * that will be run first to build our user interface.
 *
 * In this case, we just define our `NavigationContainer` and a
 * `StackNavigator` that holds our Login screen and all the other
 * screens that only a logged in user can see (AuthenticatedRouter).
 *
 * If we wanted to add other screens to our app that are visible to
 * users who are not logged in yet, this is where we would add those.
 * For example, a "Forgot Password" screen or an "About" screen with
 * some contact information and links to our website.
 */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.LOGIN}>
        <Stack.Screen
          name={SCREENS.LOGIN}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={SCREENS.AUTHENTICATED}
          component={AuthenticatedRouter}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
