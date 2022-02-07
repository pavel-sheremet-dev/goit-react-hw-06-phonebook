import {
  getContacts,
  addContact,
  deleteContact,
} from '../../services/apiServices';
import {
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

// getItem

export const getItems = () => async dispatch => {
  dispatch(getItemsRequest());
  try {
    const contacts = await getContacts();
    dispatch(getItemsSuccess(contacts));
  } catch (error) {
    dispatch(getItemsError(error));
  }
};

// addItem

export const addItem = contact => async dispatch => {
  dispatch(addItemRequest());
  try {
    const newContact = await addContact(contact);
    dispatch(addItemSuccess(newContact));
  } catch (error) {
    dispatch(addItemError(error));
  }
};

// removeItem

export const removeItem = id => async dispatch => {
  dispatch(removeItemRequest());
  try {
    const removedItem = await deleteContact(id);
    console.log('removedItem', removedItem.id);
    dispatch(removeItemSuccess(removedItem.id));
  } catch (error) {
    dispatch(removeItemError(error));
  }
};
