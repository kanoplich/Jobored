import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/">Поиск Вакансий</Link>
      <Link to="favorites">Избранное</Link>
    </>
  );
};

export default Header;
