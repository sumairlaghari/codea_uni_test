import {showMessage} from 'react-native-flash-message';
import {Platform, StatusBar} from 'react-native';
import {message} from '../redux/message';

const getTopOffset = () =>
  Platform.OS === 'android' ? StatusBar.currentHeight || 16 : 0;

export const errorMessage = (description = message.general.error) => {
  showMessage({
    type: 'danger',
    icon: 'auto',
    message: description,
    //description: description,
    floating: true,
    backgroundColor: 'red',
    style: {alignItems: 'center', top: getTopOffset()},
  });
};

export const successMessage = (description = message.general.success) => {
  showMessage({
    type: 'success',
    icon: 'auto',
    message: description,
    //description: description,
    floating: true,
    backgroundColor: '#039C8A',
    style: {alignItems: 'center', top: getTopOffset()},
  });
};
