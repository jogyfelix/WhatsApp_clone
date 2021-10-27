import React, {useContext} from 'react';
import {TouchableOpacity, TextInput, View} from 'react-native';
import Icon from 'react-native-remix-icon';
import {ThemeContext} from 'styled-components';

const SearchBar = ({width, onPress}) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={{flexDirection: 'row', width: width}}>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', marginHorizontal: 16}}>
        <Icon
          name={theme.iconNames.back}
          size="28"
          color={theme.colors.white}
        />
      </TouchableOpacity>

      <TextInput
        placeholder="Search.."
        placeholderTextColor={theme.colors.secondary_text}
        style={{width: width, color: theme.colors.white}}
      />
    </View>
  );
};

export default SearchBar;
