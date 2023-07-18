import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedXXXReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const store = configureStore({
  reducer: {
    // clicks: persistedXXXReducer,
    contacts: contactsReducer, //!
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
