import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopTabNavigator from './TopTabNavigator';
import {screenNames} from '../constants/screenNames';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenNames.TOP_NAV} component={TopTabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
