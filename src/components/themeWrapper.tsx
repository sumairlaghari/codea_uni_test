import React from 'react';
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {GlobalImports} from '../config/globalImports';

interface ThemeWrapperProps {
  children: React.ReactNode;
  statusBarBG?: string;
  viewBG?: string;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({
  children,
  statusBarBG,
  viewBG,
}) => {
  const {colors} = GlobalImports.useTheme();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: statusBarBG || colors.statusBar},
      ]}>
      <SafeAreaView />
      <View
        style={[
          styles.wrapper,
          {backgroundColor: viewBG || colors.themeColor},
        ]}>
        {children}
      </View>
    </View>
  );
};

export default ThemeWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform?.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  wrapper: {
    flex: 1,
  },
});
