import { Card, Text, Group } from '@mantine/core';
import { IconPointFilled, IconMapPin } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { vacancySlice } from '../../store/reducers/vacancySlice';
import { favoriteSlice } from '../../store/reducers/favoriteSlice';
import { useEffect, useState } from 'react';
import './cardJob.css';
import { IVacancy } from '../../types';

type CardJobProps = {
  props: IVacancy;
};

const CardJob = (props: CardJobProps) => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useAppDispatch();
  const { cardId } = vacancySlice.actions;
  const { addVacancy } = favoriteSlice.actions;
  const { removeVacancy } = favoriteSlice.actions;
  const { profession, town, type_of_work, payment_from, payment_to, currency, id } = props.props;
  const favorites = useAppSelector((state) => state.favoriteSlice.items);

  const handleClickLink = () => {
    dispatch(cardId(id));
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleClickFavorites = () => {
    if (isActive) {
      setIsActive(false);
      dispatch(removeVacancy(props.props));
    } else {
      setIsActive(true);
      dispatch(addVacancy(props.props));
    }
  };

  useEffect(() => {
    const isFavorite = favorites.some((item) => item.id === id);
    setIsActive(isFavorite);
  }, [favorites, id]);

  let salary = '';

  if (payment_from > 0 && payment_to > 0 && payment_from !== payment_to) {
    salary = `з/п от ${payment_from} до ${payment_to} ${currency}`;
  } else if (payment_from > 0 && payment_to === 0) {
    salary = `з/п от ${payment_from} ${currency}`;
  } else if (payment_from === 0 && payment_to > 0) {
    salary = `з/п до ${payment_to} ${currency}`;
  } else if (payment_from === 0 && payment_to === 0) {
    salary = 'з/п не указана';
  } else if (payment_from !== 0 && payment_to !== 0 && payment_from === payment_to) {
    salary = `з/п ${payment_from} ${currency}`;
  }

  return (
    <Card padding="24px" radius="md" withBorder data-elem={`vacancy-${props.props.id}`}>
      <Group position="apart" mb={12}>
        <Link to="/vacancy">
          <Text
            style={{ width: 600, cursor: 'pointer' }}
            weight={600}
            ff="Inter, san-serif"
            fz={20}
            color="#5E96FC"
            lh="24px"
            onClick={handleClickLink}
          >
            {profession}
          </Text>
        </Link>
        <div
          data-elem={`vacancy-${props.props.id}-shortlist-button`}
          className={isActive ? 'card__image_active' : 'card__image'}
          onClick={handleClickFavorites}
        ></div>
      </Group>

      <Group mb={12}>
        <Text ff="Inter, san-serif" size="sm" fz={16} color="#232134" weight={600}>
          {salary}
        </Text>
        <IconPointFilled style={{ color: '#7B7C88' }} height={21} width={9} />
        <Text ff="Inter, san-serif" size="sm" fz={16} color="#232134">
          {type_of_work.title}
        </Text>
      </Group>

      <Group>
        <IconMapPin style={{ color: '#ACADB9' }} size={20} />
        <Text size="sm" ff="Inter, san-serif" fz={16} color="#232134" weight={400} lh="19px">
          {town.title}
        </Text>
      </Group>
    </Card>
  );
};

export default CardJob;
