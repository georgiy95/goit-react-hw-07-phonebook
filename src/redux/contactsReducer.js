// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './contactsOperations';

// const items = createReducer([], {
//     [fetchContacts.fulfilled]: (_, action) => action.payload,
//     [addContact.fulfilled]: (state, action) => [...state, action.payload],
//     [deleteContact.fulfilled]: (state, action) => {
//         const contacts = [...state];
//         return contacts.filter(contact => {
//             return contact.id !== action.payload.id;
//         });
//     },
// });

