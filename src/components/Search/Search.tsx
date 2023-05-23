import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/searchSlice';
import { allVacanciesSlice } from '../../store/reducers/allVacanciesSlice';
import { useGetSearchQuery } from '../../store/reducers/apiSlice';
import { IVacancies } from '../../types';

const Search = () => {
  const dispatch = useAppDispatch();
  const { searchKeyword } = searchSlice.actions;
  const [value, setValue] = useState('');

  const { vacanciesData } = allVacanciesSlice.actions;
  const [dataStore, setDataStore] = useState<IVacancies>();
  const keyword = useAppSelector((state) => state.searchSlice.keyword);
  const catalogues = useAppSelector((state) => state.searchSlice.catalogues);
  const payment_from = useAppSelector((state) => state.searchSlice.payment_from);
  const payment_to = useAppSelector((state) => state.searchSlice.payment_to);
  const { data, isLoading } = useGetSearchQuery({
    search: keyword,
    catalog: catalogues,
    from: payment_from,
    to: payment_to,
  });

  useEffect(() => {
    dataStore && dispatch(vacanciesData(dataStore));
  }, [dataStore]);

  const handleClick = () => {
    dispatch(searchKeyword(value));
    if (!isLoading) {
      setDataStore(data);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <TextInput
      data-elem="search-input"
      placeholder="Введите название вакансии"
      style={{ fontSize: 14, lineHeight: 21 }}
      ff="Inter, san-serif"
      radius="md"
      size="lg"
      icon={<IconSearch size="1.2rem" />}
      onChange={(event) => handleChange(event)}
      rightSection={
        <Button
          data-elem="search-button"
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
