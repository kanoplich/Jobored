import { Box } from '@mantine/core';
import Filter from '../components/Filter/Filter';
import Search from '../components/Search/Search';
import CardJob from '../components/Card/CardJob';
import Paginate from '../components/Paginate/Paginate';
import { useGetVacanciesQuery } from '../store/reducers/apiSlice';
import Spinner from '../components/Spinner/Spinner';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { favoriteSlice } from '../store/reducers/favoriteSlice';
import { IVacancy } from '../types';

const MainPage = () => {
  const { data, isSuccess, isLoading } = useGetVacanciesQuery();

  const dispatch = useAppDispatch();
  const { addVacancy } = favoriteSlice.actions;
  // const dataStore = useAppSelector((state) => state.allVacanciesSlice.objects);

  useEffect(() => {
    const arr: Array<IVacancy> = JSON.parse(localStorage.getItem('favorites') || '[]');
    arr.map((item) => dispatch(addVacancy(item)));
  }, []);

  return (
    <div className="container">
      <div className="main__wrapper">
        <Filter />
        <Box
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px 0',
            position: 'relative',
          }}
        >
          <Search />
          {isLoading ? (
            <div className="spinner__wrapper">
              <Spinner />
            </div>
          ) : (
            isSuccess &&
            data.objects.map((data) => {
              return <CardJob key={data?.id.toString()} props={data} />;
            })
          )}
          {isSuccess && (
            <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
              <Paginate />
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
};

export default MainPage;
