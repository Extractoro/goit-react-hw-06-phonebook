import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleFilterValue = e => dispatch(setFilter(e.target.value));

  return (
    <label className={s['label']}>
      <p className={s['text']}>Filter contacts by name</p>
      <input
        className={s['input']}
        type="text"
        value={value}
        onChange={handleFilterValue}
      />
    </label>
  );
};

export default Filter;
