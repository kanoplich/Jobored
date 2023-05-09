import { Card, Text, Group, Image } from '@mantine/core';
import { IconPointFilled, IconMapPin } from '@tabler/icons-react';
import Star from '../../assets/Star.svg';

type CardJobProps = {
  profession: string;
  type_of_work: string;
  town: string;
  payment_from: number;
  payment_to: number;
  currency: string;
};

const CardJob = (props: CardJobProps) => {
  const { profession, town, type_of_work, payment_from, payment_to, currency } = props;

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
      <Group position="apart" mb="xs">
        <Text weight={600} fz={20} color="#5E96FC" lh="24px">
          {profession}
        </Text>
        <Image src={Star} width="22px" height="22px" alt="star"></Image>
      </Group>

      <Group>
        <Text size="sm" color="dimmed">
          {salary}
        </Text>
        <IconPointFilled />
        <Text size="sm" color="dimmed">
          {type_of_work}
        </Text>
      </Group>

      <Group>
        <IconMapPin />
        <Text size="sm" color="dimmed">
          {town}
        </Text>
      </Group>
    </Card>
  );
};

export default CardJob;
