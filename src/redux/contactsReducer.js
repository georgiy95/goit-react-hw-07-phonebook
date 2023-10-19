
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

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
