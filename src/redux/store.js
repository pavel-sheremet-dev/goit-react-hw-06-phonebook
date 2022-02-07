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
import { myMiddleware } from './middlewares/middlewares';

import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contacts-reducer';
import themeReducer from './theme/theme-reducer';

const persistContactsConfig = {
  key: 'local-contacts',
  storage,
  // whitelist: ['items'],
  whitelist: [],
};

const persistRootConfig = {
  key: 'local-theme',
  storage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  contacts: persistReducer(persistContactsConfig, contactsReducer),
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
    myMiddleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };
