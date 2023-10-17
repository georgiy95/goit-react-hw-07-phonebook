import { filteringContacts } from 'redux/filterSlice';
import { getFilter } from 'redux/selectos';
import { useDispatch, useSelector } from 'react-redux';
import css from './Input.module.css';

export const Input  = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handlFilteringContacts = evt => {
    dispatch(filteringContacts(evt.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <input className={css.input} type="text" value={filter} onChange={handlFilteringContacts} />
    </label>
  );
};
