import { createAction } from '@reduxjs/toolkit';

// getItem

export const getItemsRequest = createAction('items/getItemsRequest');
export const getItemsSuccess = createAction('items/getItemsSuccess');
export const getItemsError = createAction('items/getItemsError');

// addItem

export const addItemRequest = createAction('items/addItemRequest');
export const addItemSuccess = createAction('items/addItemSuccess');
export const addItemError = createAction('items/addItemError');

// removeItem

export const removeItemRequest = createAction('items/removeItemRequest');
export const removeItemSuccess = createAction('items/removeItemSuccess');
export const removeItemError = createAction('items/removeItemError');

// changeFilter

export const changeFilter = createAction('filter/change');
