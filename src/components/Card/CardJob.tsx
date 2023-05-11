import { Card, Text, Group, Image } from '@mantine/core';
import { IconPointFilled, IconMapPin } from '@tabler/icons-react';
import Star from '../../assets/Star.svg';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { vacancySlice } from '../../store/reducers/vacancySlice';

type CardJobProps = {
  id: number;
  profession: string;
  type_of_work: string;
  town: string;
  payment_from: number;
  payment_to: number;
  currency: string;
};

const favorites: number[] = [];

const CardJob = (props: CardJobProps) => {
  const dispatch = useAppDispatch();
  const { CardId } = vacancySlice.actions;
  const { profession, town, type_of_work, payment_from, payment_to, currency, id } = props;

  const handleClickLink = () => {
    dispatch(CardId(id));
  };

  const handleClickFavorites = () => {
    favorites.push(id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  let salary = '';

  if (payment_from > 0 && payment_to > 0 && payment_from !== payment_to) {
    salary = `з/п от ${payment_from} до ${payment_to} ${currency}`;
  } else if (payment_from > 0 && payment_to === 0) {
    salary = `з/п от ${payment_from} ${currency}`;
  } else if (payment_from === 0 && payment_to > 0) {
    salary = `з/п до ${payment_from} ${currency}`;
  } else if (payment_from === 0 && payment_to === 0) {
    salary = 'з/п не указана';
  } else if (payment_from !== 0 && payment_to !== 0 && payment_from === payment_to) {
    salary = `з/п ${payment_from} ${currency}`;
  }

  return (
    <Card padding="24px" radius="md" withBorder>
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
        <Image
          src={Star}
          width="22px"
          height="22px"
          alt="star"
          style={{ cursor: 'pointer' }}
          onClick={handleClickFavorites}
        ></Image>
      </Group>

      <Group mb={12}>
        <Text ff="Inter, san-serif" size="sm" fz={16} color="#232134" weight={600}>
          {salary}
        </Text>
        <IconPointFilled style={{ color: '#7B7C88' }} height={21} width={9} />
        <Text ff="Inter, san-serif" size="sm" fz={16} color="#232134">
          {type_of_work}
        </Text>
      </Group>

      <Group>
        <IconMapPin style={{ color: '#ACADB9' }} size={20} />
        <Text size="sm" ff="Inter, san-serif" fz={16} color="#232134" weight={400} lh="19px">
          {town}
        </Text>
      </Group>
    </Card>
  );
};

export default CardJob;
