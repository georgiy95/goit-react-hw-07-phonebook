import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  'contacts/postContact',
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', arg);
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${arg}`);
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);
