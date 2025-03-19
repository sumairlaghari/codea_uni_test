import {View, ViewStyle} from 'react-native';
import React from 'react';
import PressableWrapper from '../../components/pressableWrapper';
import TextComp from '../../components/textComp';

interface TabsProps {
  colors: Record<string, string>;
  selected: string;
  setSelected: (val: string) => void;
  styles: {
    tabsWrap: ViewStyle;
    tab: ViewStyle;
  };
}

const Tabs: React.FC<TabsProps> = ({styles, setSelected, selected, colors}) => {
  return (
    <View style={styles.tabsWrap}>
      <PressableWrapper
        onPress={() => setSelected('films')}
        style={[
          styles.tab,
          selected == 'films' && {backgroundColor: colors.selectedTabBg},
        ]}>
        <TextComp
          text={'Films'}
          color={selected == 'films' ? colors.selectedTabText : colors.tabText}
        />
      </PressableWrapper>
      <PressableWrapper
        onPress={() => setSelected('planets')}
        style={[
          styles.tab,
          selected == 'planets' && {backgroundColor: colors.selectedTabBg},
        ]}>
        <TextComp
          text={'Planets'}
          color={
            selected == 'planets' ? colors.selectedTabText : colors.tabText
          }
        />
      </PressableWrapper>
      <PressableWrapper
        onPress={() => setSelected('peoples')}
        style={[
          styles.tab,
          selected == 'peoples' && {backgroundColor: colors.selectedTabBg},
        ]}>
        <TextComp
          text={'Peoples'}
          color={
            selected == 'peoples' ? colors.selectedTabText : colors.tabText
          }
        />
      </PressableWrapper>
    </View>
  );
};

export default React.memo(Tabs);
