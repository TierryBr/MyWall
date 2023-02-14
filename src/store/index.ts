import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducerTheme } from '../reducers/themes';
import { reducerPhotos } from '../reducers/photos';

import { persistReducer, createTransform } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: [],
};

const reducer = combineReducers({
  reducerTheme,
  reducerPhotos
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store, null);
