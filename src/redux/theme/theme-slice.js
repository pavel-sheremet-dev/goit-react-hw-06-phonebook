import { createSlice } from '@reduxjs/toolkit';

const [dark, light] = ['dark', 'light'];

const initialState = localStorage.getItem('theme') ?? dark;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (_, { payload }) => (payload === light ? dark : light),
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
