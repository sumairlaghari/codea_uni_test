import React from 'react';
import {View, TextInput, StyleProp, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  textContainer: StyleProp<ViewStyle>;
  input: StyleProp<TextStyle>;
}

interface Colors {
  placeholderCommonWhite: string;
}

interface SearchCompProps {
  styles: Styles;
  colors: Colors;
  searchText: string;
  setSearchText: (val: string) => void;
}

const SearchComp: React.FC<SearchCompProps> = ({
  styles,
  colors,
  searchText,
  setSearchText,
}) => {
  return (
    <View style={styles.textContainer}>
      <TextInput
        value={searchText}
        placeholder={'Search'}
        placeholderTextColor={colors.placeholderCommonWhite}
        style={styles.input}
        onChangeText={val => setSearchText(val)}
      />
    </View>
  );
};

export default React.memo(SearchComp);
