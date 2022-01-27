// combine slices

import { createSlice, combineReducers, nanoid } from '@reduxjs/toolkit';

const contactsInitialState =
  JSON.parse(localStorage.getItem('local-contacts')) ?? [];

const itemsSlice = createSlice({
  name: 'items',
  initialState: contactsInitialState,
  reducers: {
    addItem: {
      reducer: (state, { payload }) => [payload, ...state],
      prepare: contact => ({ payload: { ...contact, id: nanoid() } }),
    },
    removeItem: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, { payload }) => payload,
  },
});

const contactsReducer = combineReducers({
  [itemsSlice.name]: itemsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

export const { addItem, removeItem } = itemsSlice.actions;
export const { changeFilter } = filterSlice.actions;

export default contactsReducer;

// one slice, problem with ...states

/*

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, { payload }) => ({
        ...state,
        items: [payload, ...state.items],
      }),
      prepare: contact => ({ payload: { ...contact, id: nanoid() } }),
    },
    removeItem: (state, { payload }) => ({
      ...state,
      items: state.items.filter(({ id }) => id !== payload),
    }),
    changeFilter: (state, { payload }) => ({ ...state, filter: payload }),
  },
});

export const { addItem, removeItem, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

*/

// use Immer

/*

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, { payload }) => {
        state.items = [payload, ...state.items];
      },
      prepare: contact => ({ payload: { ...contact, id: nanoid() } }),
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addItem, removeItem, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

*/
