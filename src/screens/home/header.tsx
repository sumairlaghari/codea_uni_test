import {View, ViewStyle} from 'react-native';
import React from 'react';
import {GlobalImports} from '../../config/globalImports';
import TextComp from '../../components/textComp';
import Search from '../../assets/svg/search';

interface HeaderProps {
  handleNav: () => void;
  styles: {
    header: ViewStyle;
  };
  colors: {
    commonWhite: string;
  };
}

const Header: React.FC<HeaderProps> = ({handleNav, styles, colors}) => {
  return (
    <View style={styles.header}>
      <TextComp text={'List'} size={GlobalImports.FONT_SIZE.xLarge} />
      <Search fillColor={colors.commonWhite} onPress={handleNav} />
    </View>
  );
};

export default React.memo(Header);
