import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ThemeContext} from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {getUserApi} from '../redux/actions';
import ChatListItem from '../components/ChatListItem';
import {FAB} from 'react-native-elements';
import Icon from 'react-native-remix-icon';

const Chats = () => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.userDetails);

  useEffect(() => {
    dispatch(getUserApi());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log('userData : ', usersData);
  // }, [usersData]);

  return (
    <View style={{backgroundColor: theme.colors.screen_bg, flex: 1}}>
      <FlatList
        data={usersData.data}
        keyExtractor={item => item.id}
        renderItem={item => {
          return <ChatListItem userDetails={item.item} />;
        }}
        ListFooterComponent={() => <View style={styles.footer} />}
      />
      <FAB
        placement="right"
        color={theme.colors.app_primary}
        icon={
          <Icon
            name={theme.iconNames.message}
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

export default Chats;
