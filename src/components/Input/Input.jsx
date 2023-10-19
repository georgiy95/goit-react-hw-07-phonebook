import { useDispatch } from 'react-redux';
import { change } from 'redux/filterSlice';
import css from './Input.module.css';

export const Input = () => {
    const dispatch = useDispatch();
    const changeValue = event => {
        dispatch(change(event.target.value));
    };
    return (
        <label>
            <span>Find contacts by name</span>
            <input className={css.input} type="text" name="filter" onChange={changeValue} />
        </label>
    );
};

// 
