import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import globalLoaderReducer from './globalLoaderReducer';
import themeReducer from './themeReducer';
import filmsData from './filmsReducer';
import peoplesData from './peoplesReducer';
import planetsData from './planetsReducer';

import types from '../types';

// Persist Configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['themeMode'], // Persist these only
};

// Root Reducers
const rootReducers = {
  themeMode: themeReducer, // Persisted
  loader: globalLoaderReducer, // Non-persisted
  films: filmsData, // Non-persisted
  peoples: peoplesData, // Non-persisted
  planets: planetsData, // Non-persisted
};

// Persist Combined Reducers
const appReducer = persistCombineReducers(persistConfig, rootReducers);

// Configure Store
export const store = configureStore({
  reducer: appReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
