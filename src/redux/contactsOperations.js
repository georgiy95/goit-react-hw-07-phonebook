import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as contactsApi from './contacts-api';

axios.defaults.baseURL = 'https://64fc97af605a026163aea6df.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const addContact = createAsyncThunk(
  '/contacts/addContact',
  async (contact, { rejectWithValue }) => {
      try {
          const addedContact = await contactsApi.addContacts(contact);
          return addedContact;
      } catch (error) {
          return rejectWithValue(error);
      }
  }
);

