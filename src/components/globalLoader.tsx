import React from 'react';
import {View, ViewStyle} from 'react-native';
import {GlobalImports} from '../config/globalImports';

interface GlobalLoaderProps {
  visible?: boolean;
  color?: string;
  size?: 'small' | 'large';
  overlayColor?: string;
}

const GlobalLoader: React.FC<GlobalLoaderProps> = ({
  visible = false,
  color,
  size = 'large',
  overlayColor,
}) => {
  const {colors} = GlobalImports.useTheme(); // Theme support

  if (!visible) return null; // Don't render if not visible

  return (
    <View
      style={[
        styles.loaderContainer,
        {
          backgroundColor:
            overlayColor || colors.gLoaderBg || 'rgba(0,0,0,0.5)',
        },
      ]}>
      <GlobalImports.SkypeIndicator
        color={color || colors.gLoaderColor || '#fff'}
      />
    </View>
  );
};

const styles = {
  loaderContainer: {
    width: '100%',
    height: '100%',
    zIndex: 1000,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
};

export default GlobalLoader;
