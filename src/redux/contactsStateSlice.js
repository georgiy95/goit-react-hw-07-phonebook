import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './contactsOperations';

const initialContacts = { items: [], isLoading: false, error: null };

const rejectFunc = (state, action) => {
  return {
    items: state.items,
    isLoading: false,
    error: action.payload,
  };
};
const pendingFunc = state => {
  return {
    items: state.items,
    isLoading: true,
    error: null,
  };
};

const contactsStateSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  extraReducers: builder => {
    // fetch

    builder.addCase(fetchContacts.pending, pendingFunc);
    builder.addCase(fetchContacts.fulfilled, (_, action) => {
      return {
        items: [...action.payload],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(fetchContacts.rejected, rejectFunc);

    // create

    builder.addCase(addContact.pending, pendingFunc);
    builder.addCase(addContact.fulfilled, (state, action) => {
      return {
        items: [...state.items, action.payload],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(addContact.rejected, rejectFunc);

    // delete

    builder.addCase(deleteContact.pending, pendingFunc);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      return {
        items: [...state.items.filter(el => el.id !== action.payload)],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(deleteContact.rejected, rejectFunc);
  },
});

export const contactsStateReducer = contactsStateSlice.reducer;
export const { filteringContacts } = contactsStateSlice.actions;