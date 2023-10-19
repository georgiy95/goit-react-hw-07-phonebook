import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts} from './contactsOperations';

export const items = createReducer([], {
    [ fetchContacts.fulfilled]: (_, action) => action.payload,
  });