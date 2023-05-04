import { Link } from 'react-router-dom';
import './navigate.css';

const Navigate = () => {
  return (
    <nav className="header__nav">
      <Link to="/">Поиск Вакансий</Link>
      <Link to="/favorites">Избранное</Link>
    </nav>
  );
};

export default Navigate;
