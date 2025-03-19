import {useEffect, useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {GlobalImports} from '../config/globalImports';
import {setSystemMode} from '../redux/reducer/themeReducer';

const useTheme = () => {
  const {dispatch, getState} = GlobalImports.useReduxStore();
  const themeMode = getState('themeMode'); // Fetching from Redux
  const systemTheme = useColorScheme(); // 'light' or 'dark' based on device settings

  // Determine the final theme
  const finalTheme = useMemo(() => {
    if (themeMode.state === 'system') {
      return systemTheme; // Use system theme
    }
    return themeMode.state; // Use user-selected theme
  }, [themeMode.state, systemTheme]);

  // Prevent infinite loops: Only dispatch if the Redux state needs updating
  useEffect(() => {
    if (themeMode.state === 'system' && themeMode.systemTheme !== systemTheme) {
      dispatch(setSystemMode(systemTheme)); // Update Redux only when needed
    }
  }, [themeMode.state, systemTheme, dispatch]);

  // Generate colors based on the final theme
  const colors = useMemo(() => GlobalImports.COLORS(finalTheme), [finalTheme]);

  return {themeMode: finalTheme, colors};
};

export default useTheme;
