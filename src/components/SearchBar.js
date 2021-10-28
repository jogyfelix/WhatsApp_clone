import React, {useContext} from 'react';
import {TouchableOpacity, TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-remix-icon';
import {ThemeContext} from 'styled-components';

const SearchBar = ({width, onPress}) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={{flexDirection: 'row', width: width}}>
      <TouchableOpacity onPress={onPress} style={styles.touch}>
        <Icon
          name={theme.iconNames.back}
          size="28"
          color={theme.colors.white}
        />
      </TouchableOpacity>

      <TextInput
        placeholder={theme.strings.SEARCH}
        placeholderTextColor={theme.colors.secondary_text}
        style={{width: width, color: theme.colors.white}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  touch: {justifyContent: 'center', marginHorizontal: 16},
});

export default SearchBar;
