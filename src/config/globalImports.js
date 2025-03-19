import {
  COLORS,
  ICONS,
  IMAGES,
  fonts,
  SIZES,
  isIOS,
  isAndroid,
  FONT_SIZE,
  hexToRgba,
} from '../theme';
import {useDispatch, useSelector} from 'react-redux';
import types from '../redux/types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {errorMessage, successMessage} from '../config/notificationMessage';
import {errorHandler} from '../config/helperFunction';
import {SkypeIndicator} from 'react-native-indicators';
import useReduxStore from '../hooks/useReduxStore';
import {SvgXml} from 'react-native-svg';
import useTheme from '../hooks/useTheme';
import {message} from '../redux/message';

export const GlobalImports = {
  COLORS,
  ICONS,
  IMAGES,
  fonts,
  useDispatch,
  useSelector,
  types,
  wp,
  hp,
  errorMessage,
  successMessage,
  SkypeIndicator,
  errorHandler,
  useReduxStore,
  SvgXml,
  useTheme,
  message,
  SIZES,
  isIOS,
  isAndroid,
  FONT_SIZE,
  hexToRgba,
};
