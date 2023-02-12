import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/slice';
import ContactItem from './ContactItem/ContactItem';
import Notification from 'components/Notification/Notification';
import Button from 'components/Button/Button';
import { StyledList } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contactsList = filter ? filteredContacts() : contacts;

  return contactsList.length ? (
    <StyledList>
      {contactsList.map(({ id, name, number }) => (
        <li className="listItem" key={id}>
          <ContactItem name={name} number={number} />
          <Button title="Delete" onClick={() => dispatch(remove(id))} />
        </li>
      ))}
    </StyledList>
  ) : (
    <Notification
      text={filter ? 'Could not find this name' : 'Contact list is empty'}
    />
  );
};

export default ContactList;