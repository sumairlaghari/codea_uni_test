import {View, ViewStyle} from 'react-native';
import React from 'react';
import {GlobalImports} from '../../config/globalImports';
import TextComp from '../../components/textComp';
import Back from '../../assets/svg/back';

interface HeaderProps {
  handleNav: () => void;
  styles: {
    header: ViewStyle;
    backButton: ViewStyle;
  };
  // colors: {
  //   commonWhite: string;
  // };
  colors: Record<string, string>;
}

const Header: React.FC<HeaderProps> = ({handleNav, styles, colors}) => {
  return (
    <View style={styles.header}>
      <Back
        fillColor={colors.commonWhite}
        onPress={handleNav}
        styles={styles.backButton}
      />
      <TextComp text={'Search'} size={GlobalImports.FONT_SIZE.xLarge} />
    </View>
  );
};

export default React.memo(Header);
