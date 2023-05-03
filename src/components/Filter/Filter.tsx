import FilterButton from '../FilterButton/FilterButton';
import Industry from '../Industry/Industry';
import Salary from '../Salary/Salary';
import './filter.css';

const Filter = () => {
  return (
    <section className="filter__container">
      <div className="filter__title_wrapper">
        <div className="filter__title">Фильтры</div>
        <div className="filter__reset_wrapper">
          <div className="filter__reset">Сбросить все</div>
          <div className="filter__reset_icon"></div>
        </div>
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
        <FilterButton />
      </div>
    </section>
  );
};

export default Filter;
