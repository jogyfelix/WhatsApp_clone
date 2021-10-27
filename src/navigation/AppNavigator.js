import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopTabNavigator from './TopTabNavigator';
import {screenNames} from '../constants/screenNames';
import {ThemeContext} from 'styled-components';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-remix-icon';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.TOP_NAV}
        component={TopTabNavigator}
        options={{
          title: theme.strings.APP_NAME,
          headerStyle: {
            backgroundColor: theme.colors.tab_color,
            elevation: 0,
          },
          headerTitleStyle: {color: theme.colors.tab_inactive},
          headerRight: () => {
            return (
              <View style={styles.headerRight}>
                <TouchableOpacity style={styles.iconStyle}>
                  <Icon
                    name={theme.iconNames.search}
                    size="24"
                    color={theme.colors.white}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle}>
                  <Icon
                    name={theme.iconNames.menu}
                    size="24"
                    color={theme.colors.white}
                  />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginRight: 16,
  },
});

export default AppNavigator;
