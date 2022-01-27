import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import contactsReducer from './contacts/contacts-reducer';
import themeReducer from './theme/theme-reducer';

const logger = createLogger({
  timestamp: false,
  collapsed: (getState, action, logEntry) => !logEntry.error,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'production',
  // preloadedState,
  // enhancers: [reduxBatch],
});

export default store;
