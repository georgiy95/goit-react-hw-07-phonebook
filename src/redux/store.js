import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contacts/contactsSlice';
// import contactsReducer from './contactsReducer';
import { filterSlice } from './filterSlice';

export const store = configureStore({
    reducer: {
        // contacts: contactsReducer,
        filter: filterSlice.reducer,
    },
});
