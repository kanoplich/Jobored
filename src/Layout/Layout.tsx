import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import './layout.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main__container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
