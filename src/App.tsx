import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import MainPage from './pages/Main';
import FavoritesPage from './pages/Favorites';
import Vacancy from './pages/Vacancy';
import NotFoundPage from './pages/404';
import { useAppSelector } from './hooks/redux';

function App() {
  const { id } = useAppSelector((state) => state.vacancyReducer);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="vacancy" element={<Vacancy id={id} />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="404" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
