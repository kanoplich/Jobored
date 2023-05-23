import { useEffect, useState } from 'react';
import { Text, Group } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import ButtonElem from '../Button/ButtonElem';
import Industry from '../Industry/Industry';
import Salary from '../Salary/Salary';
import './filter.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/searchSlice';

const Filter = () => {
  const dispatch = useAppDispatch();
  const payment_from = useAppSelector((state) => state.searchSlice.payment_from);
  const payment_to = useAppSelector((state) => state.searchSlice.payment_to);
  const [salaryFrom, setSalaryFrom] = useState<number | ''>('');
  const [salaryTo, setSalaryTo] = useState<number | ''>('');
  const { searchPaymentCatalogues, searchPaymentFrom, searchPaymentTo } = searchSlice.actions;

  useEffect(() => {
    if (payment_from === 0) {
      setSalaryFrom('');
    } else {
      setSalaryFrom(payment_from);
    }

    if (payment_to === 0) {
      setSalaryTo('');
    } else {
      setSalaryTo(payment_to);
    }
  }, [payment_from, payment_to]);

  const handleClickReset = () => {
    dispatch(searchPaymentCatalogues(0));
    dispatch(searchPaymentFrom(0));
    dispatch(searchPaymentTo(0));
  };

  const handleChangePaymentFrom = (item: number | '') => {
    dispatch(searchPaymentFrom(item));
  };
  const handleChangePaymentTo = (item: number | '') => {
    dispatch(searchPaymentTo(item));
  };

  return (
    <section className="filter__container">
      <div className="filter__title_wrapper">
        <div className="filter__title">Фильтры</div>
        <Group className="filter__group" onClick={handleClickReset}>
          <Text className="filter__group_text">Сбросить все</Text>
          <IconX size={16} />
        </Group>
      </div>
      <div className="filter__industry_wrapper">
        <div className="filter__industry_title">Отрасль</div>
        <Industry />
      </div>
      <div className="filter__salary_wrapper">
        <div className="filter__salary_title">Оклад</div>
        <Salary
          str="От"
          handleChangePayment={handleChangePaymentFrom}
          value={salaryFrom}
          dataElem="salary-from-input"
        />
        <Salary
          str="До"
          handleChangePayment={handleChangePaymentTo}
          value={salaryTo}
          dataElem="salary-to-input"
        />
      </div>
      <div className="filter__button">
        <ButtonElem />
      </div>
    </section>
  );
};

export default Filter;
