import { createReducer } from '@reduxjs/toolkit';
import { addItem, removeItem, changeFilter } from './contacts-actions';

import { combineReducers } from 'redux';

const contactsInitialState =
  JSON.parse(localStorage.getItem('local-contacts')) ?? [];

// const itemsReducer = createReducer(contactsInitialState, {
//   [addItem]: (state, { payload }) => [payload, ...state],
//   [removeItem]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

const itemsReducer = createReducer(contactsInitialState, ({ addCase }) => {
  addCase(addItem, (state, { payload }) => [payload, ...state]);
  addCase(removeItem, (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  );
});

// const filterReducer = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

const filterReducer = createReducer('', ({ addCase }) => {
  addCase(changeFilter, (_, { payload }) => payload);
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
