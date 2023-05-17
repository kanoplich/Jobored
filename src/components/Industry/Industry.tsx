import { useEffect, useState } from 'react';
import { Select } from '@mantine/core';
import { useGetCataloguesQuery } from '../../store/reducers/apiSlice';
import { useDispatch } from 'react-redux';
import { searchSlice } from '../../store/reducers/searchSlice';
import { useAppSelector } from '../../hooks/redux';

const Industry = () => {
  const dispatch = useDispatch();
  const industry = useAppSelector((state) => state.searchSlice.catalogues);
  const { searchPaymentCatalogues } = searchSlice.actions;
  const { data } = useGetCataloguesQuery();
  const industryData = data?.map((item) => item.title);
  const [cataloguesTitle, setCataloguesTitle] = useState('');

  useEffect(() => {
    const industryTitle = data?.find((item) => {
      if (item.key === industry) return item;
    });
    industryTitle ? setCataloguesTitle(industryTitle.title) : setCataloguesTitle('');
  }, [industry]);

  const handleChange = (elem: string | null) => {
    if (elem) {
      const industryKey = data?.find((item) => {
        if (item.title === elem) return item;
      });
      industryKey && dispatch(searchPaymentCatalogues(industryKey.key));
    }
  };

  return (
    <Select
      placeholder="Выберете отрасль"
      data={industryData || []}
      dropdownPosition="bottom"
      radius="md"
      size="md"
      value={cataloguesTitle}
      onChange={(elem) => handleChange(elem)}
    />
  );
};

export default Industry;
