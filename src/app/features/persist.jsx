import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { combineReducers } from '@reduxjs/toolkit';

// const reducers = combineReducers({});

const persistConfig = {
  key: 'root',
  storage,
};

export default persistConfig;
