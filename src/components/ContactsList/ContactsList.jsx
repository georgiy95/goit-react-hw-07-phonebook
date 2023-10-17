import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectos';
import { fetchContacts, deleteContact } from 'redux/operations';
import { useEffect } from 'react';

export const ContactsList = ({ children }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const normalizeFilter = filter.toLocaleLowerCase();
  const visibleContacts = getVisibleContacts(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function getVisibleContacts(contacts) {
    return contacts?.length > 0
      ? contacts.filter(contact => {
          return contact.name.toLocaleLowerCase().includes(normalizeFilter);
        })
      : [];
  }

  const handlDeleteContact = evt => {
    dispatch(deleteContact(evt.currentTarget.id));
  };

  return (
    <>
      {children}
      <ul className={css.list}>
        {visibleContacts.map(({ name, number, id }) => {
          return (
            <li
              className={css.item}
              key={id}
              id={id}
              onClick={handlDeleteContact}
            >
              {name}: {number}
              <button className={css.btn} type="button">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
