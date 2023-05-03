import { Select } from '@mantine/core';

const Industry = () => {
  return (
    <Select
      placeholder="Выберете отрасль"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      radius="md"
      size="md"
    />
  );
};

export default Industry;
