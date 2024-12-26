// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './productSlice';
// import { persistReducer, persistStore } from 'redux-persist';
// import persistConfig from './persist';
// import storage from 'redux-persist/lib/storage';

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// export default store;

// // const persistConfig = {
// //   key: 'root',
// //   storage,
// // };

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // export default () => {
// //   let store = configureStore(persistedReducer);
// //   let persistor = persistStore(store);
// //   return { store, persistor };
// // };

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import productSlice from './productSlice'; // Replace with your actual slice(s)

const persistConfig = {
  key: 'root', // Key for localStorage
  storage, // Define the storage engine
};

const rootReducer = combineReducers({
  productSlice,
  // Add other slices here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Redux Persist requires this to ignore non-serializable actions
    }),
});

export const persistor = persistStore(store);
