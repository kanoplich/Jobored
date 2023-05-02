import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Main from '../../pages/Main';
import Favorites from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="404" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
