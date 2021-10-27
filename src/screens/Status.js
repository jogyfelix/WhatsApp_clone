import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ThemeContext} from 'styled-components';

const Status = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={{backgroundColor: theme.colors.screen_bg, flex: 1}}></View>
  );
};

export default Status;
