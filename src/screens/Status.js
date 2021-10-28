import React, {useContext, useState, useEffect} from 'react';
import {Text, View, StyleSheet, SectionList} from 'react-native';
import {ThemeContext} from 'styled-components';
import {FAB} from 'react-native-elements';
import Icon from 'react-native-remix-icon';
import {useSelector} from 'react-redux';
import StatusListItem from '../components/StatusListItem';
import {arrangeData} from '../utils/arrangeData';

const Status = () => {
  const theme = useContext(ThemeContext);
  const [sectionData, setSectionData] = useState([]);
  const usersData = useSelector(state => state.userDetails);

  useEffect(() => {
    if (usersData !== undefined) {
      sortedData();
    }
  }, [usersData]);

  //getting data arranged for section list
  const sortedData = async () => {
    try {
      const result = await arrangeData(usersData);
      setSectionData(result);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={{backgroundColor: theme.colors.screen_bg, flex: 1}}>
      {/* showing 1st item as status update */}
      <StatusListItem
        firstName={theme.strings.MY}
        lastName={theme.strings.STATUS}
        picture={usersData.data[0].picture}
        tapToAdd={theme.strings.STATUS_UPDATE}
      />

      <SectionList
        sections={sectionData}
        keyExtractor={item => item.id}
        renderItem={item => {
          return (
            <StatusListItem
              firstName={item.item.firstName}
              lastName={item.item.lastName}
              picture={item.item.picture}
            />
          );
        }}
        renderSectionHeader={item => {
          return (
            <Text
              style={{
                color: theme.colors.secondary_text,
                margin: 16,
                fontWeight: 'bold',
              }}>
              {item.section.title}
            </Text>
          );
        }}
        ListFooterComponent={() => <View style={styles.footer} />}
      />
      <View style={styles.fabGroup}>
        <View style={styles.fabParent}>
          <FAB
            size="small"
            color={theme.colors.dark_btn_bg}
            icon={
              <Icon
                name={theme.iconNames.pencil}
                size="24"
                color={theme.colors.white}
              />
            }
          />
          <FAB
            color={theme.colors.app_primary}
            style={styles.fab}
            icon={
              <Icon
                name={theme.iconNames.camera}
                size="24"
                color={theme.colors.white}
              />
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {marginVertical: 60},
  fab: {marginTop: 16},
  fabParent: {alignItems: 'center'},
  fabGroup: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'transparent',
  },
});

export default Status;
