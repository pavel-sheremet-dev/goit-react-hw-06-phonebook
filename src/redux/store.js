import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsApi } from './contacts/contacts-api';

import storage from 'redux-persist/lib/storage';

import themeReducer from './theme/theme-slice';

const persistRootConfig = {
  key: 'local-theme',
  storage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  theme: themeReducer,
});

const logger = createLogger({
  timestamp: false,
  collapsed: (getState, action, logEntry) => !logEntry.error,
  predicate: () => process.env.NODE_ENV !== 'production',
});

const store = configureStore({
  reducer: persistReducer(persistRootConfig, rootReducer),
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };
