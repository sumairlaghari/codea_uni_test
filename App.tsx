import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/reducer';
import FlashMessage from 'react-native-flash-message';
import AppNavigatior from './src/route';
import {ErrorBoundary} from './src/errorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigatior />
        </PersistGate>
        <FlashMessage position="top" />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
