import { ContactForm } from './ContactForm/ContactForm';
import {Input } from './Input/Input';
import { ContactList } from './ContactList/ContactList';


export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Input />
      <ContactList />
    </div>
  );
};
