import {StyleSheet} from 'react-native';
import {GlobalImports} from '../../config/globalImports';

const getStyles = (colors: Record<string, string>) =>
  StyleSheet.create({
    header: {
      width: GlobalImports.wp('88%'),
      paddingVertical: GlobalImports.hp('0.88%'),
      overflow: 'hidden',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    backButton: {
      position: 'absolute',
      left: 0,
    },
    textContainer: {
      width: GlobalImports.wp('88%'),
      height: GlobalImports.hp('6%'),
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: colors.commonWhite,
      borderRadius: 10,
      marginVertical: 10,
      paddingHorizontal: 8,
    },
    input: {
      flex: 1,
      color: colors.commonWhite,
      fontFamily: GlobalImports.fonts.medium,
    },
    boxContainer: {
      backgroundColor: colors.cardBg,
      borderRadius: 10,
      marginVertical: 10,
      padding: GlobalImports.wp('2%'),
    },
    boxItemWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 2,
      borderBottomWidth: 1,
      borderBottomColor: 'white',
      paddingVertical: 2,
    },
    boxItemKey: {
      width: GlobalImports.wp('22%'),
      color: 'white',
    },
    boxItemValue: {
      width: GlobalImports.wp('62%'),
      fontFamily: GlobalImports.fonts.bold,
      color: 'white',
    },
  });
export default getStyles;
