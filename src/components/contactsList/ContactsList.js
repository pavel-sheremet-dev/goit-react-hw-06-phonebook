// import PropTypes from "prop-types";
import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../redux/contacts/contacts-operations';
import { ButtonStyled } from '../Button/Buttonstyled';
import {
  ContactInfo,
  ContactName,
  ContactPhone,
  ContactsItem,
  Contacts,
  PhoneLink,
  BluredBackground,
} from './ContactsList.styled';

const ContactsList = () => {
  const [clickedId, setClickedId] = useState(null);
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const loading = useSelector(state => state.contacts.loading);
  const dispatch = useDispatch();

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  }, [contacts, filter]);

  const handleClick = id => {
    setClickedId(id);
    dispatch(removeItem(id));
  };

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
          {loading && clickedId === id && <BluredBackground />}
          <ButtonStyled type="button" onClick={() => handleClick(id)}>
            Remove
          </ButtonStyled>
        </ContactsItem>
      ))}
    </Contacts>
  );
};

export default ContactsList;
