import {View, Switch, ViewStyle} from 'react-native';
import React from 'react';
import {GlobalImports} from '../../config/globalImports';
import TextComp from '../../components/textComp';

interface Styles {
  header: ViewStyle;
}

interface Colors {
  thumbColor: string;
  inActiveSwitch: string;
  activeSwitch: string;
}

interface TogglerProps {
  styles: Styles;
  colors: Colors;
  handleToggle: () => void;
  activeSwitch: boolean;
}

const Toggler: React.FC<TogglerProps> = ({
  styles,
  colors,
  handleToggle,
  activeSwitch,
}) => {
  return (
    <View style={styles.header}>
      <TextComp text={'LightMode'} size={GlobalImports.FONT_SIZE.large} />
      <Switch
        trackColor={{false: colors.inActiveSwitch, true: colors.activeSwitch}}
        thumbColor={colors.thumbColor}
        ios_backgroundColor={colors.inActiveSwitch}
        value={activeSwitch}
        onValueChange={handleToggle}
      />
    </View>
  );
};

export default React.memo(Toggler);
