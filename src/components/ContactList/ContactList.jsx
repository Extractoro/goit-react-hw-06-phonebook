import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getFilter, getItems } from 'redux/contactsSlice';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactsFilter = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  };

  const renderContacts = filter === '' ? contacts : contactsFilter();

  return (
    <>
      <p>Total contacts: {renderContacts.length}</p>
      <ul className={s['list']}>
        {renderContacts.map(({ id, name, number }) => (
          <li key={id} id={id} className={s['item']}>
            <button
              onClick={() => dispatch(deleteContacts(id))}
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

export default ContactList;
