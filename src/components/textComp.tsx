import React from 'react';
import {Text, TextStyle, TextProps} from 'react-native';
import {GlobalImports} from '../config/globalImports';

interface TextCompProps extends TextProps {
  text: string;
  color?: string;
  size?: number;
  textAlign?: TextStyle['textAlign'];
  fontFamily?: string;
}

const TextComp: React.FC<TextCompProps> = ({
  text,
  color,
  size = GlobalImports.FONT_SIZE.medium,
  onPress,
  textAlign = 'left',
  style,
  fontFamily = GlobalImports.fonts.medium,
  ...rest
}) => {
  const {colors} = GlobalImports.useTheme();

  return (
    <Text
      onPress={onPress}
      style={[
        {
          color: color || colors.commonWhite,
          fontSize: size,
          fontFamily: fontFamily,
          textAlign,
        },
        style,
      ]}
      {...rest}>
      {text}
    </Text>
  );
};

export default React.memo(TextComp);
