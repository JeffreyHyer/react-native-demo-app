import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREENS } from '../App';
import DashboardScreen from './DashboardScreen';
import PracticeLogScreen from './PracticeLogScreen';

const TabBar = createBottomTabNavigator();

/**
 * This component contains our bottom tab bar that the user
 * sees once they have logged in. Below we render two tabs
 * "Dashboard" and "Practice Log" and link them to two screens.
 * We also give them an <Icon> which gets displayed on the tab
 * above the tab title.
 *
 * These icons come from the Ionicons package, you can see
 * all the available icons and styles here: https://ionicons.com/
 */
const AuthenticatedRouter = () => {
  return (
    <TabBar.Navigator>
      <TabBar.Screen
        name={SCREENS.DASHBOARD}
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Icon name="pie-chart-outline" size={size} color={color} />
          ),
        }}
      />

      <TabBar.Screen
        name={SCREENS.PRACTICE_LOG}
        component={PracticeLogScreen}
        options={{
          title: 'Practice Log',
          tabBarIcon: ({ size, color }) => (
            <Icon name="musical-notes-outline" size={size} color={color} />
          ),
        }}
      />
    </TabBar.Navigator>
  );
};

export default AuthenticatedRouter;
