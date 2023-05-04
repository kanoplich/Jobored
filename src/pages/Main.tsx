import { Box } from '@mantine/core';
import Filter from '../components/Filter/Filter';
import Search from '../components/Search/Search';
import CardJob from '../components/Card/CardJob';
import Paginate from '../components/Paginate/Paginate';

const MainPage = () => {
  return (
    <div className="container">
      <div className="main__wrapper">
        <Filter />
        <Box style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px 0' }}>
          <Search />
          <CardJob />
          <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
            <Paginate />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default MainPage;
