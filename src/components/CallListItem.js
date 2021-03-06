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
          <View style={styles.subParent1}>
            <Icon
              name={theme.iconNames.arrow_down}
              size="16"
              color={theme.colors.app_primary}
            />
            <Text style={{color: theme.colors.secondary_text}}>
              {theme.strings.YESTERDAY}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.Icon}>
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
    margin: 12,
    justifyContent: 'space-between',
  },
  subParent1: {flexDirection: 'row', alignItems: 'center'},
  detailsText: {marginLeft: 16},
  subParent2: {alignItems: 'flex-end'},
  Icon: {justifyContent: 'center'},
});

export default CallListItem;
