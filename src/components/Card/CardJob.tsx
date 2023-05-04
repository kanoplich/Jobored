import { Card, Text, Group, Image } from '@mantine/core';
import { IconPointFilled, IconMapPin } from '@tabler/icons-react';
import Star from '../../assets/Star.svg';

const CardJob = () => {
  return (
    <Card padding="24px" radius="md" withBorder>
      <Group position="apart" mb="xs">
        <Text weight={600} fz={20} color="#5E96FC" lh="24px">
          Менеджер-дизайнер
        </Text>
        <Image src={Star} width="22px" height="22px" alt="star"></Image>
      </Group>

      <Group>
        <Text size="sm" color="dimmed">
          з/п от 70000 rub
        </Text>
        <IconPointFilled />
        <Text size="sm" color="dimmed">
          Полный рабочий день
        </Text>
      </Group>

      <Group>
        <IconMapPin />
        <Text size="sm" color="dimmed">
          Новый Уренгой
        </Text>
      </Group>
    </Card>
  );
};

export default CardJob;
