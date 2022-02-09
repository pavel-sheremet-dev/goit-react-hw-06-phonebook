import { useState } from 'react';
import { useGetContactsQuery } from '../../redux/contacts/contacts-api';

// components
import ContactsForm from '../contactsForm/ContactsForm';
import ContactsList from '../contactsList/ContactsList';
import Filter from '../filter/Filter';
import EmptyContactsNotify from '../notify/EmptyContactsNotify';
import Section from '../section/Section';

const Contacts = () => {
  const { data: contacts, isSuccess } = useGetContactsQuery();
  const [filter, setFilter] = useState('');

  const getFilterValue = value => {
    setFilter(value);
  };

  return (
    <>
      <Section titleLevel="h1" title="Simple phonebook">
        <ContactsForm />
      </Section>
      <Section titleLevel="h2" title="Your Contacts">
        {isSuccess && contacts.length ? (
          <>
            <Filter getFilterValue={getFilterValue} />
            <ContactsList contacts={contacts} filter={filter} />
          </>
        ) : (
          <EmptyContactsNotify />
        )}
      </Section>
    </>
  );
};

export default Contacts;
