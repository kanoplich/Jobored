import { Card, Text, Group, Image } from '@mantine/core';
import { IconPointFilled, IconMapPin } from '@tabler/icons-react';
import star from '../../assets/star.svg';
import './vacancyView.css';

type VacancyViewProps = {
  id: number;
  profession: string;
  type_of_work: string;
  town: string;
  payment_from: number;
  payment_to: number;
  currency: string;
  vacancyRichText: string;
};

const VacancyView = (props: VacancyViewProps) => {
  const { profession, town, type_of_work, payment_from, payment_to, currency, vacancyRichText } =
    props;

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
    <div className="vacancy-view__wrapper">
      <Card padding="24px" radius="md" withBorder>
        <Group position="apart" mb={16}>
          <Text
            style={{ width: 680 }}
            weight={700}
            ff="Inter, san-serif"
            fz={28}
            color="#232134"
            lh="34px"
          >
            {profession}
          </Text>
          <Image
            src={star}
            width="24px"
            height="24px"
            alt="star"
            style={{ cursor: 'pointer' }}
          ></Image>
        </Group>

        <Group mb={16}>
          <Text ff="Inter, san-serif" size="sm" fz={20} color="#232134" weight={700}>
            {salary}
          </Text>
          <IconPointFilled style={{ color: '#7B7C88' }} height={21} width={9} />
          <Text ff="Inter, san-serif" size="sm" fz={16} color="#232134">
            {type_of_work}
          </Text>
        </Group>

        <Group>
          <IconMapPin style={{ color: '#ACADB9' }} size={20} />
          <Text size="sm" ff="Inter, san-serif" fz={16} color="#232134" weight={400} lh="140%">
            {town}
          </Text>
        </Group>
      </Card>
      <Card padding="24px" radius="md" mb={51} withBorder>
        <div dangerouslySetInnerHTML={{ __html: vacancyRichText }}></div>
      </Card>
    </div>
  );
};

export default VacancyView;
