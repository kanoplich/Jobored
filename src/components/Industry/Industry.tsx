import { Select } from '@mantine/core';

const Industry = () => {
  return (
    <Select
      placeholder="Выберете отрасль"
      data={['React', 'Angular', 'Svelte', 'Vue', 'React', 'Angular']}
      dropdownPosition="bottom"
      radius="md"
      size="md"
    />
  );
};

export default Industry;
