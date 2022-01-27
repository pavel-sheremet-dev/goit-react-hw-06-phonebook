import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputName, Label, InputField } from '../input/Input.styled';
import { contactsActions } from '../../redux/contacts/';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = e =>
    dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <Label>
      <InputName>Find contacts by name</InputName>
      <InputField
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
        placeholder="Enter search name"
        autoComplete="off"
      />
    </Label>
  );
};

export default memo(Filter);
