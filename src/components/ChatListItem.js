import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {ThemeContext} from 'styled-components';

const ChatListItem = ({userDetails}) => {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity style={styles.parent}>
      <View style={styles.subParent1}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: userDetails.picture,
          }}
        />
        <View style={styles.detailsText}>
          <Text style={{color: theme.colors.primary_text}}>
            {userDetails.firstName} {userDetails.lastName}
          </Text>
          <Text style={{color: theme.colors.secondary_text}}>last message</Text>
        </View>
      </View>

      <View style={styles.subParent2}>
        <Text style={{color: theme.colors.secondary_text}}>7:41 pm</Text>
        <Avatar
          rounded
          size={20}
          title="4"
          titleStyle={{color: theme.colors.dark_text, fontWeight: 'bold'}}
          activeOpacity={0.7}
          containerStyle={{
            backgroundColor: theme.colors.app_primary,
            marginTop: 8,
          }}
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

export default ChatListItem;
