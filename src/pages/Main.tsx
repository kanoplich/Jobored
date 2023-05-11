import { Box } from '@mantine/core';
import Filter from '../components/Filter/Filter';
import Search from '../components/Search/Search';
import CardJob from '../components/Card/CardJob';
import Paginate from '../components/Paginate/Paginate';
import { useGetVacanciesQuery } from '../store/reducers/apiSlice';
import Spinner from '../components/Spinner/Spinner';

const MainPage = () => {
  const { data, isSuccess, isLoading } = useGetVacanciesQuery();

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
              return (
                <CardJob
                  key={data.id.toString()}
                  id={data.id}
                  profession={data.profession}
                  town={data.town.title}
                  type_of_work={data.type_of_work.title}
                  payment_from={data.payment_from}
                  payment_to={data.payment_to}
                  currency={data.currency}
                />
              );
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
