import React, {useContext} from 'react';
import {TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import {ThemeContext} from 'styled-components';
import Icon from 'react-native-remix-icon';
import {FAB} from 'react-native-elements';

const ComposeMessage = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.parent}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: theme.colors.tab_color,
          borderRadius: 20,
          flex: 1,
          justifyContent: 'space-between',
          marginRight: 16,
          alignItems: 'center',
        }}>
        <View style={styles.secondGroup}>
          <TouchableOpacity>
            <Icon
              name={theme.iconNames.smiley}
              size="24"
              color={theme.colors.secondary_text}
            />
          </TouchableOpacity>

          <TextInput
            placeholder={theme.strings.TYPE_MSG}
            placeholderTextColor={theme.colors.secondary_text}
            style={{color: theme.colors.white}}
          />
        </View>

        <View style={styles.parent}>
          <TouchableOpacity style={styles.touch}>
            <Icon
              name={theme.iconNames.clip}
              size="24"
              color={theme.colors.secondary_text}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name={theme.iconNames.camera}
              size="24"
              color={theme.colors.secondary_text}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FAB
        size="small"
        color={theme.colors.app_primary}
        icon={
          <Icon
            name={theme.iconNames.mic}
            size="18"
            color={theme.colors.white}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    margin: 16,
  },
  secondGroup: {flexDirection: 'row', alignItems: 'center', marginLeft: 16},
  touch: {marginRight: 8},
});

export default ComposeMessage;
