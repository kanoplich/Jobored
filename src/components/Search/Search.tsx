import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/searchSlice';

const Search = () => {
  const dispatch = useAppDispatch();
  const { searchKeyword } = searchSlice.actions;
  const [value, setValue] = useState('');

  const handleClick = () => {
    dispatch(searchKeyword(value));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <TextInput
      placeholder="Введите название вакансии"
      style={{ fontSize: 14, lineHeight: 21 }}
      ff="Inter, san-serif"
      radius="md"
      size="lg"
      icon={<IconSearch size="1.2rem" />}
      onChange={(event) => handleChange(event)}
      rightSection={
        <Button
          radius="md"
          size="sm"
          style={{ fontWeight: 500, fontSize: 14, lineHeight: 21 }}
          onClick={handleClick}
        >
          Поиск
        </Button>
      }
      rightSectionProps={{ style: { marginRight: '30px', color: '#5E96FC' } }}
    />
  );
};

export default Search;
