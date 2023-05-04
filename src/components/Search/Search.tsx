import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const Search = () => {
  return (
    <TextInput
      placeholder="Введите название вакансии"
      style={{ fontSize: 14, lineHeight: 21 }}
      radius="md"
      size="lg"
      icon={<IconSearch size="1.2rem" />}
      rightSection={
        <Button radius="md" size="sm" style={{ fontWeight: 500, fontSize: 14, lineHeight: 21 }}>
          Поиск
        </Button>
      }
      rightSectionProps={{ style: { marginRight: '30px', color: '#5E96FC' } }}
    />
  );
};

export default Search;
