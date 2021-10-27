import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {ThemeContext} from 'styled-components';
import Icon from 'react-native-remix-icon';

const CallListItem = ({firstName, lastName, picture}) => {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity style={styles.parent}>
      <View style={styles.subParent1}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: picture,
          }}></Avatar>

        <View style={styles.detailsText}>
          <Text style={{color: theme.colors.primary_text}}>
            {firstName} {lastName}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name={theme.iconNames.arrow_down}
              size="16"
              color={theme.colors.app_primary}
            />
            <Text style={{color: theme.colors.secondary_text}}>
              Yesterday, 9:11 pm
            </Text>
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Icon
          name={theme.iconNames.phone}
          size="24"
          color={theme.colors.app_primary}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'space-between',
  },
  subParent1: {flexDirection: 'row', alignItems: 'center'},
  detailsText: {marginLeft: 16},
  subParent2: {alignItems: 'flex-end'},
});

export default CallListItem;
