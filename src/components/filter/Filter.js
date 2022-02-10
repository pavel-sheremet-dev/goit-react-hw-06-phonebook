import { memo, useState, useEffect } from 'react';
import {
  InputName,
  Label,
  InputField,
} from 'components/common/input/Input.styled';

const Filter = ({ getFilterValue }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getFilterValue(filter);
  }, [filter, getFilterValue]);

  return (
    <Label>
      <InputName>Find contacts by name</InputName>
      <InputField
        type="text"
        name="filter"
        onChange={e => setFilter(e.target.value)}
        value={filter}
        placeholder="Enter search name"
        autoComplete="off"
      />
    </Label>
  );
};

export default memo(Filter);
