import { createReducer } from '@reduxjs/toolkit';
import {
  changeFilter,
  getItemsRequest,
  getItemsSuccess,
  getItemsError,
  addItemRequest,
  addItemSuccess,
  addItemError,
  removeItemRequest,
  removeItemSuccess,
  removeItemError,
} from './contacts-actions';

import { combineReducers } from 'redux';

const itemsReducer = createReducer([], ({ addCase }) => {
  addCase(getItemsSuccess, (_, { payload }) => payload);
  addCase(addItemSuccess, (state, { payload }) => [payload, ...state]);
  addCase(removeItemSuccess, (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  );
});

const loadingReducer = createReducer(false, builder => {
  builder
    .addCase(getItemsRequest, () => true)
    .addCase(getItemsSuccess, () => false)
    .addCase(getItemsError, () => false)
    .addCase(addItemRequest, () => true)
    .addCase(addItemSuccess, () => false)
    .addCase(addItemError, () => false)
    .addCase(removeItemRequest, () => true)
    .addCase(removeItemSuccess, () => false)
    .addCase(removeItemError, () => false);
});

const errorReducer = createReducer(null, builder => {
  builder
    .addCase(getItemsRequest, () => null)
    .addCase(getItemsError, (_, { payload }) => payload)
    .addCase(addItemRequest, () => null)
    .addCase(addItemError, (_, { payload }) => payload)
    .addCase(removeItemRequest, () => null)
    .addCase(removeItemError, (_, { payload }) => payload);
});

const filterReducer = createReducer('', ({ addCase }) => {
  addCase(changeFilter, (_, { payload }) => payload);
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
});

export default contactsReducer;
