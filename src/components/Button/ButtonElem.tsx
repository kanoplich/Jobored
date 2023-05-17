import { Button } from '@mantine/core';
import { allVacanciesSlice } from '../../store/reducers/allVacanciesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useGetSearchQuery } from '../../store/reducers/apiSlice';
import { useEffect, useState } from 'react';
import { IVacancies } from '../../types';

const ButtonElem = () => {
  const { vacanciesData } = allVacanciesSlice.actions;
  const dispatch = useAppDispatch();
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

  const handleClick = () => {
    if (!isLoading) {
      setDataStore(data);
    }
  };

  useEffect(() => {
    dataStore && dispatch(vacanciesData(dataStore));
  }, [dataStore]);

  return (
    <Button
      style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21' }}
      radius="md"
      size="md"
      fullWidth
      color="#5E96FC"
      onClick={handleClick}
    >
      Применить
    </Button>
  );
};

export default ButtonElem;
