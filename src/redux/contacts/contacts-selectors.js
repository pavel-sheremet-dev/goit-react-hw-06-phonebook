import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.data.items;

const getLoading = state => state.contacts.data.loading;

const getError = state => state.contacts.data.error;

const getFilter = state => state.contacts.filter;

// const get = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter?.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

const getFilteredContacts = createSelector(
  getContacts,
  getFilter,
  (contacts, filter) => {
    const normalizedFilter = filter?.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getContacts, getLoading, getError, getFilter, getFilteredContacts };
