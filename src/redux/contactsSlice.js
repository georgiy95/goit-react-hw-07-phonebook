import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOperations';

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(fetchContacts.fulfilled, (state, { payload }) => ({
        ...state,
        items: payload,
        isLoading: false,
      }))
      .addCase(fetchContacts.rejected, (state, { payload }) => ({
        ...state,
        error: payload,
        isLoading: false,
      }))
      .addCase(addContact.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(addContact.fulfilled, (state, { payload }) => ({
        ...state,
        items: [...state.items, payload],
        isLoading: false,
      }))
      .addCase(addContact.rejected, (state, { payload }) => ({
        ...state,
        error: payload,
        isLoading: false,
      }))
      .addCase(deleteContact.pending, (state, { payload }) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(deleteContact.fulfilled, (state, { payload }) => ({
        ...state,
        items: state.items.filter((contact) => contact.id !== payload.id),
        isLoading: false,
      }))
      .addCase(deleteContact.rejected, (state, { payload }) => ({
        ...state,
        error: payload,
        isLoading: false,
      }));
  },
});