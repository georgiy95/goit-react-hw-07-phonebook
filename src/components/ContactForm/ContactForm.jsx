import { useEffect } from 'react';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import style from './ContactForm.module.css';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelector';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const { name, phone } = event.target.elements;

    const person = {
      id: nanoid(),
      name: name.value,
      phone: phone.value,
    };
    checkForDuplicates(person)
      ? alert(`${person.name} is already in contacts`)
      : dispatch(addContact(person));
    event.target.reset();
  };

  const checkForDuplicates = person =>
    contacts.some(
      contact => contact.name.toLowerCase() === person.name.toLowerCase()
    );

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit} id="form" className={style.contact_form}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <span>Number</span>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={style.contact_form__submit} type="submit">
        Add contact
      </button>
    </form>
  );
};
