import React from 'react';
import {Pressable, PressableProps, StyleProp, ViewStyle} from 'react-native';

interface PressableWrapperProps extends PressableProps {
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const PressableWrapper: React.FC<PressableWrapperProps> = ({
  onPress = () => console.log('Button Pressed'),
  disabled = false,
  style = {},
  children,
  ...rest
}) => {
  return (
    <Pressable disabled={disabled} onPress={onPress} style={style} {...rest}>
      {children}
    </Pressable>
  );
};

export default React.memo(PressableWrapper);
