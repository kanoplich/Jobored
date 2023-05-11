import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './navigate.css';

const Navigate = () => {
  const location = useLocation();

  return (
    <nav className="header__nav">
      <Link to="/" className={location.pathname === '/' ? 'nav_active' : 'nav'}>
        Поиск Вакансий
      </Link>
      <Link to="/favorites" className={location.pathname === '/favorites' ? 'nav_active' : 'nav'}>
        Избранное
      </Link>
    </nav>
  );
};

export default Navigate;
