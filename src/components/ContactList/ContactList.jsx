import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
import ContactItem from './ContactItem/ContactItem';
import Notification from 'components/Notification/Notification';
import Button from 'components/Button/Button';
import { StyledList } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const loading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contactsList = filter ? filteredContacts() : contacts;

  return (
    <>
      {loading && Loader}
      {contactsList.length ? (
        <StyledList>
          {contactsList.map(({ id, name, phone }) => (
            <li className="listItem" key={id}>
              <ContactItem name={name} number={phone} />
              <Button
                title="Delete"
                onClick={() => dispatch(deleteContact(id))}
              />
            </li>
          ))}
        </StyledList>
      ) : (
        <Notification
          text={filter ? 'Could not find this name' : 'Contact list is empty'}
        />
      )}
      ;
    </>
  );
};

export default ContactList;