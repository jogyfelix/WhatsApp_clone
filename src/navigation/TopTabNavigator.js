import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {screenNames} from '../constants/screenNames';
import Chats from '../screens/Chats';
import Status from '../screens/Status';
import Calls from '../screens/Calls';
import Camera from '../screens/Camera';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screenNames.CAMERA_SCREEN} component={Camera} />
      <Tab.Screen name={screenNames.CHATS_SCREEN} component={Chats} />
      <Tab.Screen name={screenNames.STATUS_SCREEN} component={Status} />
      <Tab.Screen name={screenNames.CALLS_SCREEN} component={Calls} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
