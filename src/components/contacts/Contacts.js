import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getItems } from '../../redux/contacts/contacts-operations';

// components
import ContactsForm from '../contactsForm/ContactsForm';
import ContactsList from '../contactsList/ContactsList';
import Filter from '../filter/Filter';
import EmptyContactsNotify from '../notify/EmptyContactsNotify';
import Section from '../section/Section';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <>
      <Section titleLevel="h1" title="Simple phonebook">
        <ContactsForm />
      </Section>
      <Section titleLevel="h2" title="Your Contacts">
        {error && <div>Somesing went wrong</div>}
        {contacts.length ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <EmptyContactsNotify />
        )}
      </Section>
    </>
  );
};

export default Contacts;
