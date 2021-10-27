import React, {useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopTabNavigator from './TopTabNavigator';
import {screenNames} from '../constants/screenNames';
import {ThemeContext} from 'styled-components';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-remix-icon';
import {Menu, MenuItem} from 'react-native-material-menu';
import SearchBar from '../components/SearchBar';
import DirectMessage from '../screens/DirectMessage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const theme = useContext(ThemeContext);
  const {height, width} = useWindowDimensions();
  const [visible, setVisible] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  return (
    <Stack.Navigator initialRouteName={screenNames.TOP_NAV}>
      <Stack.Screen
        name={screenNames.DIRECT_MESSAGE_SCREEN}
        component={DirectMessage}
      />
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
          headerLeft: () => {
            return showSearchBar ? (
              <SearchBar
                width={width}
                onPress={() => setShowSearchBar(!showSearchBar)}
              />
            ) : null;
          },
          headerRight: () => {
            return (
              <View style={styles.headerRight}>
                <TouchableOpacity
                  style={styles.iconStyle}
                  onPress={() => setShowSearchBar(!showSearchBar)}>
                  <Icon
                    name={theme.iconNames.search}
                    size="24"
                    color={theme.colors.white}
                  />
                </TouchableOpacity>

                <Menu
                  visible={visible}
                  style={{backgroundColor: theme.colors.tab_color, width: 140}}
                  anchor={
                    <TouchableOpacity
                      style={styles.iconStyle}
                      onPress={showMenu}>
                      <Icon
                        name={theme.iconNames.menu}
                        size="24"
                        color={theme.colors.white}
                      />
                    </TouchableOpacity>
                  }
                  onRequestClose={hideMenu}>
                  <MenuItem
                    onPress={hideMenu}
                    textStyle={{color: theme.colors.white}}>
                    WhatsApp Web
                  </MenuItem>
                  <MenuItem
                    onPress={hideMenu}
                    textStyle={{color: theme.colors.white}}>
                    Settings
                  </MenuItem>
                </Menu>
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
