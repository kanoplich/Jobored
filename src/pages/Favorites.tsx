import CardJob from '../components/Card/CardJob';
import Empty from '../components/Empty/Empty';
import { useAppSelector } from '../hooks/redux';

const FavoritesPage = () => {
  const favorites = useAppSelector((state) => state.favoriteSlice.items);

  return (
    <div className="container">
      <div className="card__wrapper">
        {favorites.length > 0 ? favorites.map((item) => <CardJob props={item} key={item.id} />) : <Empty />}
      </div>
    </div>
  );
};

export default FavoritesPage;
