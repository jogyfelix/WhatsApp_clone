import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {ThemeContext} from 'styled-components';
import {FAB} from 'react-native-elements';
import Icon from 'react-native-remix-icon';
import {useSelector} from 'react-redux';
import CallListItem from '../components/CallListItem';

const Calls = () => {
  const theme = useContext(ThemeContext);
  const usersData = useSelector(state => state.userDetails);
  return (
    <View style={{backgroundColor: theme.colors.screen_bg, flex: 1}}>
      <FlatList
        data={usersData.data}
        keyExtractor={item => item.id}
        renderItem={item => {
          return (
            <CallListItem
              firstName={item.item.firstName}
              lastName={item.item.lastName}
              picture={item.item.picture}
            />
          );
        }}
        ListFooterComponent={() => <View style={styles.footer} />}
      />
      <FAB
        placement="right"
        color={theme.colors.app_primary}
        icon={
          <Icon
            name={theme.iconNames.phone}
            size="24"
            color={theme.colors.white}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {marginVertical: 40},
});

export default Calls;
