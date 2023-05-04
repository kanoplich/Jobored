import { Text, Group } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import ButtonElem from '../Button/ButtonElem';
import Industry from '../Industry/Industry';
import Salary from '../Salary/Salary';
import './filter.css';

const Filter = () => {
  return (
    <section className="filter__container">
      <div className="filter__title_wrapper">
        <div className="filter__title">Фильтры</div>
        <Group>
          <Text>Сбросить все</Text>
          <IconX />
        </Group>
      </div>
      <div className="filter__industry_wrapper">
        <div className="filter__industry_title">Отрасль</div>
        <Industry />
      </div>
      <div className="filter__salary_wrapper">
        <div className="filter__salary_title">Оклад</div>
        <Salary />
        <Salary />
      </div>
      <div className="filter__button">
        <ButtonElem />
      </div>
    </section>
  );
};

export default Filter;
