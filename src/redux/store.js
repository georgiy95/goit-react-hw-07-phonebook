import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
import contactsReducer from './contactsReducer';
import { filterSlice } from './filter/filterSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterSlice.reducer,
    },
});
