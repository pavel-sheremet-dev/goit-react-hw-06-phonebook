import { useMemo } from 'react';
import { ButtonStyled } from 'components/common/Button/Buttonstyled';
import {
  ContactInfo,
  ContactName,
  ContactPhone,
  ContactsItem,
  Contacts,
  PhoneLink,
} from './ContactsList.styled';
import { contactsHooks } from 'redux/contacts';

const { useDeleteContactMutation } = contactsHooks;

const ContactsList = ({ contacts, filter }) => {
  const [deleteContact] = useDeleteContactMutation();

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  }, [contacts, filter]);

  return (
    <Contacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactInfo>
            <ContactName>{name}</ContactName>
            <ContactPhone>
              <PhoneLink href={`tel:${name}`}>{number}</PhoneLink>
            </ContactPhone>
          </ContactInfo>
          <ButtonStyled type="button" onClick={() => deleteContact(id)}>
            Remove
          </ButtonStyled>
        </ContactsItem>
      ))}
    </Contacts>
  );
};

export default ContactsList;
