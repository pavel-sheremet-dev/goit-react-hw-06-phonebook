import { createReducer } from '@reduxjs/toolkit';
import { toggleTheme } from './theme-actions';

const [dark, light] = ['dark', 'light'];

// const themeReducer = createReducer(initialState, {
//   [toggleTheme]: (_, { payload }) => (payload === light ? dark : light),
// });

const themeReducer = createReducer(dark, ({ addCase }) => {
  addCase(toggleTheme, (_, { payload }) => (payload === light ? dark : light));
});

export default themeReducer;
