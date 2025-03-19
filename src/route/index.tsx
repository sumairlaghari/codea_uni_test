import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthRoutes} from './routeList';
import GlobalLoader from '../components/globalLoader';
import {GlobalImports} from '../config/globalImports';
import {navigationRef} from './rootNavigation';
import {log} from '../config/util';
import BootSplash from 'react-native-bootsplash';

const Stack = createStackNavigator();

const AuthScreensRoute = React.memo(() => {
  return (
    <Stack.Navigator initialRouteName="home">
      {AuthRoutes.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{headerShown: false}}
          />
        );
      })}
    </Stack.Navigator>
  );
});

const AppNavigatior: React.FC = () => {
  const {getState} = GlobalImports.useReduxStore();
  const {loaderState} = getState('loader'); // Fetching from Redux
  const {statusBar} = getState('themeMode'); // Fetching from Redux

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        log('nav mounted');
        BootSplash.hide();
      }}>
      <StatusBar
        barStyle={statusBar}
        translucent
        backgroundColor="transparent"
      />
      <AuthScreensRoute />
      <GlobalLoader visible={loaderState} />
    </NavigationContainer>
  );
};

export default AppNavigatior;
