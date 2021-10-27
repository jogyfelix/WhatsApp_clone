import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {ThemeContext} from 'styled-components';

const StatusListItem = ({firstName, lastName, picture, tapToAdd}) => {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity style={styles.parent}>
      <View style={styles.subParent1}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: picture,
          }}>
          {tapToAdd ? (
            <Avatar.Accessory
              size={20}
              style={{backgroundColor: theme.colors.app_primary}}
              i
            />
          ) : (
            <View />
          )}
        </Avatar>

        <View style={styles.detailsText}>
          <Text style={{color: theme.colors.primary_text}}>
            {firstName} {lastName}
          </Text>
          <Text style={{color: theme.colors.secondary_text}}>
            {tapToAdd || 'Yesterday, 9:11 pm'}
          </Text>
        </View>
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
});

export default StatusListItem;
