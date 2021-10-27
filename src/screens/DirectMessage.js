import React, {useLayoutEffect, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-remix-icon';
import {ThemeContext} from 'styled-components';
import {Avatar} from 'react-native-elements';
import {ImageBackground} from 'react-native';
import ComposeMessage from '../components/ComposeMessage';

const DirectMessage = ({navigation, route}) => {
  const theme = useContext(ThemeContext);
  const details = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginHorizontal: 8}}>
            <Icon
              name={theme.iconNames.video}
              size="24"
              color={theme.colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 8}}>
            <Icon
              name={theme.iconNames.phone}
              size="24"
              color={theme.colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 8}}>
            <Icon
              name={theme.iconNames.menu}
              size="24"
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        backgroundColor: theme.colors.tab_color,
        elevation: 0,
      },
      headerLeft: () => (
        <TouchableOpacity
          style={{marginHorizontal: 8, flexDirection: 'row'}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name={theme.iconNames.back}
            size="24"
            color={theme.colors.tab_inactive}
          />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={{flexDirection: 'row'}}>
          <Avatar
            rounded
            size="small"
            source={{
              uri: details.data.picture,
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginHorizontal: 16,
              fontSize: 22,
              color: theme.colors.primary_text,
            }}>
            {details.data.firstName}
          </Text>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'flex-end'}}
      source={require('../assets/images/direct_message.png')}>
      <ComposeMessage />
    </ImageBackground>
  );
};

export default DirectMessage;
