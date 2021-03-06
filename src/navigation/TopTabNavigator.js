import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {screenNames} from '../constants/screenNames';
import Chats from '../screens/Chats';
import Status from '../screens/Status';
import Calls from '../screens/Calls';
import {ThemeContext} from 'styled-components';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const theme = useContext(ThemeContext);

  return (
    <Tab.Navigator
      initialRouteName={screenNames.CHATS_SCREEN}
      screenOptions={{
        tabBarStyle: {backgroundColor: theme.colors.tab_color},
        tabBarActiveTintColor: theme.colors.tab_active,
        tabBarInactiveTintColor: theme.colors.tab_inactive,
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.tab_active,
        },
      }}>
      <Tab.Screen
        name={screenNames.CHATS_SCREEN}
        component={Chats}
        options={{title: theme.strings.CHATS}}
      />
      <Tab.Screen
        name={screenNames.STATUS_SCREEN}
        component={Status}
        options={{title: theme.strings.STATUS}}
      />
      <Tab.Screen
        name={screenNames.CALLS_SCREEN}
        component={Calls}
        options={{title: theme.strings.CALLS}}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
