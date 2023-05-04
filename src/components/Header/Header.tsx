import Logo from '../Logo/Logo';
import Navigate from '../Navigate/Navigate';
import './header.css';

const Header = () => {
  return (
    <header className="header__container container">
      <div className="header__wrapper">
        <Logo />
        <Navigate />
      </div>
    </header>
  );
};

export default Header;
