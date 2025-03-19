import React from 'react';
import {View, ViewStyle} from 'react-native';
import {GlobalImports} from '../config/globalImports';

const ListLoader: React.FC = () => {
  const {colors} = GlobalImports.useTheme();

  return (
    <View style={styles.loaderContainer}>
      <GlobalImports.SkypeIndicator color={colors.loaderColor} />
    </View>
  );
};

const styles = {
  loaderContainer: {
    marginVertical: 10,
  } as ViewStyle,
};

export default ListLoader;
