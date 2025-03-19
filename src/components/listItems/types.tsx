import {ViewStyle} from 'react-native';

export interface ListProps {
  item: Record<string, any>;
  styles: {
    boxContainer: ViewStyle;
    boxItemWrap: ViewStyle;
    boxItemKey: ViewStyle;
    boxItemValue: ViewStyle;
  };
  navigation: any;
}
