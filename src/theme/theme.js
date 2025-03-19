import {Dimensions, PixelRatio, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const COLORS = themeMode => {
  return themeMode == 'light'
    ? {
        // Light Mode
        // App Main Colors
        commonWhite: '#000000',
        commonBlack: '#FFFFFF',
        placeholderCommonWhite: '#00000050',
        themeColor: '#FFFFFF',
        statusBar: '#FFFFFF',
        tabBg: 'red',
        tabText: 'white',
        selectedTabBg: 'green',
        selectedTabText: 'yellow',
        searchBg: 'black',
        button: '#21A01E',
        buttonText: '#FFFFFF',
        loaderColor: '#000000',
        gLoaderBg: 'rgba(0, 0, 0, 0.5)',
        gLoaderColor: 'white',
        cardBg: 'red',
        activeSwitch: 'red',
        inActiveSwitch: 'yellow',
        thumbColor: '#000000',
      }
    : {
        // Dark Mode
        // App Main Colors
        commonWhite: '#FFFFFF',
        commonBlack: '#000000',
        placeholderCommonWhite: '#FFFFFF50',
        themeColor: '#000000',
        statusBar: '#000000',
        tabBg: 'red',
        tabText: 'white',
        selectedTabBg: 'green',
        selectedTabText: 'yellow',
        searchBg: 'white',
        button: '#21A01E',
        buttonText: '#FFFFFF',
        loaderColor: '#FFFFFF',
        gLoaderBg: 'rgba(0, 0, 0, 0.5)',
        gLoaderColor: 'white',
        cardBg: 'red',
        activeSwitch: '#21A01E',
        inActiveSwitch: '#5E5F5C70',
        thumbColor: '#FFFFFF',
      };
};

export const SIZES = {
  s8: 8,
  s9: 9,
  s10: 10,
  s11: 11,
  s12: 12,
  s14: 14,
  s16: 16,
  s18: 18,
  s20: 20,
  s22: 22,
  s24: 24,
  s26: 26,
  s28: 28,
  s30: 30,
  s32: 32,
};

/**
 * 📌 DEVICE INFO
 */
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

/**
 * 📌 RESPONSIVE SIZING
 */
const scale = SCREEN_WIDTH / 375; // Base width for scaling (iPhone 11)
export const normalize = size =>
  Math.round(PixelRatio.roundToNearestPixel(size * scale));

/**
 * 📌 FONT SIZES (Adaptive)
 */
export const FONT_SIZE = {
  xSmall: hp('1%'),
  small: hp('1.6%'),
  medium: hp('2%'),
  large: hp('2.66%'),
  xLarge: hp('4%'),
};

/**
 * 📌 COMMON STYLES (Global UI Consistency)
 */
export const GLOBAL_STYLES = {
  container: {
    flex: 1,
    backgroundColor: 'fff',
    paddingHorizontal: wp('2%'),
  },
  text: {
    fontSize: FONT_SIZE.medium,
    color: 'fff',
  },
  button: {
    height: hp('4.8%'),
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: FONT_SIZE.medium,
    color: '#FFFFFF',
  },
};

// ✅ Convert Hex to RGBA
export const hexToRgba = (hex, alpha = 1) => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
