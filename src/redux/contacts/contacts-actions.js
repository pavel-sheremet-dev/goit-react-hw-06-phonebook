import { createAction, nanoid } from '@reduxjs/toolkit';

// Prepare Callbacks to Customize Action Contents
// https://redux-toolkit.js.org/api/createAction#using-prepare-callbacks-to-customize-action-contents

const formContact = contact => ({
  payload: { ...contact, id: nanoid() },
});

export const addItem = createAction('items/add', formContact);
export const removeItem = createAction('items/remove');
export const changeFilter = createAction('filter/change');
