import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { getFilteredContacts } from 'redux/selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  // const contacts = [];

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <p>Total contacts: {contacts.length}</p>
      <ul className={s['list']}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} id={id} className={s['item']}>
            <button
              onClick={() => handleDelete(id)}
              className={s['button']}
              type="Submit"
            >
              x
            </button>
            <div className={s['wrapper']}>
              <p className={s['text']}>{name}:</p>
              <p className={s['number']}>{number}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
