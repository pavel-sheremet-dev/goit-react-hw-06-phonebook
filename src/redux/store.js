import { combineReducers, createStore } from "redux";
import contactsReducer from "./contacts/contacts-reducer";
import themeReducer from "./theme/theme-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  theme: themeReducer,
  zaglushka: () => [],
});

const store = createStore(rootReducer);

console.log("store", store);

export default store;
