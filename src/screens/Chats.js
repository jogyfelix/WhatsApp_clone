import React, {useContext, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {ThemeContext} from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {getUserApi} from '../redux/actions';

const Chats = () => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.userDetails);

  useEffect(() => {
    dispatch(getUserApi());
  }, [dispatch]);

  useEffect(() => {
    console.log('userData : ', usersData);
  }, [usersData]);

  return (
    <View style={{backgroundColor: theme.colors.screen_bg, flex: 1}}></View>
  );
};

export default Chats;
