import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { getContacts, getIsLoading } from 'redux/contacts/contactsSelector';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const stateFilter = useSelector(state => state.filter);
  const isLoading = useSelector(getIsLoading);
  const getFilteredPerson = () => {
    const normalisedFilter = stateFilter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {contacts && !isLoading && (
        <ul className={css.list}>
          {getFilteredPerson().map(({ id, name, phone }) => {
            return (
              <li key={id} id={id} className={css.item}>
                {name}: {phone}
                <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
